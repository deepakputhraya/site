---
layout: post
title:  "PostgreSQL Backup and Recovery"
subtitle: "Recover your database to any point in time using Barman"
date:   2017-04-29 02:06:35
image: assets/images/postgres-barman.png
categories: [database]
---

Taking backups is an important administrative task that can have some disastrous consequences if it is not done right. The use of RAID configurations in your storage system, replication between nodes, clustering and trusting 100% that your SAN(storage are network) will be up ARE NOT backup strategies. These measures are necessary for HA(High availability) but do not replace the necessity of taking backups of our databases.

There are two different types of backup that can be used with PostgreSQL to implement a good backup and restore strategy.

### Logical backups

They take a snapshot of a database at a given moment.

- Backup individual databases or all databases
- Backup just the schemas, just the data, individual tables, or the whole database (schemas and data)
- Create the backup file in proprietary binary format or plain SQL script
- Can be restored using the pg_restore utility which also ships with PostgreSQL
- Does not offer point-in-time recovery (PITR)

### Physical backups

This type of backup takes copies of the files where the PostgreSQL saves the databases.

- Offer point-in-time recovery
- Backup the contents of the PostgreSQL data directory and the WAL (Write Ahead Log) files
- Take larger amounts of disk space
- Use the PostgreSQL pg_start_backup and pg_stop_backup commands. However, these commands need to be scripted, which makes physical backups a more complex process
- Do not back up individual databases, schemas only, etc. It’s an all-or-nothing approach

PITR is a good strategy when High availability is not the major reason behind your database backup. If you cannot afford to loose almost zero data and can afford to have some downtime, then PITR is the approach for you. We will be looking at how we can setup a PITR recovery backup for a Postgresql instance using Barman.

We will be testing this on a Ubuntu machine with PostgreSQL 9.6 and Barman 2.1. We will need using three Virtual machines one that would be the database that needs to be backed up, the other machine is where Barman will be installed, and backed-up data would be sitting and the last machine we will be using to restore the database to. I will assume that you already have the database up to get started, if you do not you can create a Postgresql 9.6 database and continue forward.

## Initial Setup
Create a new machine to install, run and manage backups. Let’s call this *barman-01*

On the barman machine install Barman

```
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
sudo apt-get update
sudo apt-get install barman
```

Switch to the Barman user on the machine.

```
sudo su - barman
```

Authorise the barman user to connect to the database machine(postgres@database-machine-ip) that needs to be backed up. To do this copy the public keys from barman to authorization file in the Postgres users of the database machine.

On Barman as barman user:

```
ssh-keygen
```
Press enter for all the subsequent entries. Copy the contents on ~/.ssh/id_rsa.pub

On the Database machine, switch to the Postgres user and copy the ssh key of the barman into ~/.ssh/authorized_keys

```
sudo su - postgres
echo “copied-ssh-key-string” >> ~/.ssh/authorized_keys
```

The above commands also need to be run between Postgresql machine and the Barman machine as well. To make sure that the machines can be connected.

Test the connections with the below commands: To connect to the barman machine from the database machine as postgres user:

```
ssh barman@barman-server-ip
```

To connect to database machine from Barman

```
ssh postgres@main-db-server-ip
```

If the above two commands are working, that means the two machines can connect each other without any issue.

## Configuring Barman for backups
Edit /etc/barman.conf to be set the properties as below:

```
[barman]
barman_home = /var/lib/barman
barman_user = barman
log_file = /var/log/barman/barman.log
compression = gzip
bandwidth_limit = 0
immediate_checkpoint = true
last_backup_maximum_age = 3 DAYS
retention_policy = RECOVERY WINDOW OF 7 days
minimum_redundancy = 3
```
What we are specifying here:

- *barman_home* : Keeping the default backup location determining where the backup will be saved.

- *compression* : WAL(write ahead logs) logs will be compressed, and base backups will use incremental data copying

- *last_backup_maximum_age* : The age of the last full backup for a PostgreSQL server should not be older than 3 days

- *retention_policy* : We want to be able to recover our database to any time of the last seven days

- *minimum_redundancy* : This ensures that we have at least 3 base backups and will make sure that we accidentally do not delete backups.

What we did above was set the global configurations for all our Postgresql backups. We can override these settings for individual backups in their specific settings.

Add the below lines to the end of the file `/etc/barman.d/pg.conf` so as to specify which Postgresql instances need to be backed up:

```
[pg]
description = “PG Backup”
conninfo = host=10.0.2.2 user=postgres
ssh_command = ssh postgres@10.0.2.2
backup_method = rsync
streaming_archiver = on
streaming_conninfo = host=10.0.2.2 user=postgres dbname=db
archiver = on
slot_name = barman
reuse_backup = link
# For base backup retention
retention_policy = RECOVERY WINDOW OF 7 DAYS
# For archive logs retention
wal_retention_policy = main
# Retention policies are automatically enforced by cron
retention_policy_mode = auto
minimum_redundancy=2
```
Note that in the above setting **host=10.0.2.2** is the host address of the Postgresql database.

reuse_backup: We specify if the database should take a complete backup of the database or just copy on the changed files. If we link then we can save a lot of disk space locally(about 50%)

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/pgbarman?src=hash&amp;ref_src=twsrc%5Etfw">#pgbarman</a> <a href="https://twitter.com/hashtag/postgresql?src=hash&amp;ref_src=twsrc%5Etfw">#postgresql</a> <a href="https://twitter.com/hashtag/IncrementalBackup?src=hash&amp;ref_src=twsrc%5Etfw">#IncrementalBackup</a> <a href="https://twitter.com/hashtag/database?src=hash&amp;ref_src=twsrc%5Etfw">#database</a> size: 13.2 TB. Actual size on disk: 5.0 TB (-62.01% <a href="https://twitter.com/hashtag/deduplication?src=hash&amp;ref_src=twsrc%5Etfw">#deduplication</a> ratio). Saved 8.2TB!</p>&mdash; Gabriele Bartolini (@_GBartolini_) <a href="https://twitter.com/_GBartolini_/status/557287789575028736?ref_src=twsrc%5Etfw">January 19, 2015</a></blockquote>

We will need to configure the database: We will need the *INCOMING_WALS_DIRECTORY* on the barman machine for the server, to get this run:
```
barman show-server pg |grep incoming_wals_directory
```
In the pg_hba.conf of the database make an entry to allow Barman access the database:

```
host         all          all         <barman ip>/32           trust
```

Make an entry for ‘replication’ or ‘all’ in pg_hba.conf file. We will also need to make changes in the postgres.conf file:

```
listen_addresses = '*'
archive_mode = on
wal_level = ‘replica’
archive_command = ‘rsync -a %p barman@backup:INCOMING_WALS_DIRECTORY/%f’
max_wal_senders = 2
max_replication_slots = 2
```

Restart the Postgresql instance.

***NOTE: max_wal_senders and max_replication_slots are just examples.***

On barman once all the configurations are done:

```
barman switch-xlog --force --archive pg
barman check pg
```

To create a slot run:

```
barman receive-wal --create-slot pg
```
The check command may show FAILED in minimum redundancy requirements and backup maximum age

Create a base backup of the PostgreSQL instance

```
barman backup pg
```
Cron
We need to setup cron to start backup every day at a particular time:

```
crontab -e
```
Add the following entries:

```
30 23 * * * /usr/bin/barman backup pg
* * * * * /usr/bin/barman cron
```
The above has created a cron that takes a base backup of the database every day at 11:30 PM

## Recovery
Creating a Standby Server
Installing Postgres on Ubuntu 14.04:

```
sudo add-apt-repository “deb http://apt.postgresql.org/pub/repos/apt/ trusty-pgdg main”
wget -quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get install postgresql-9.6
```
From the barman machine run: To get the list of backup done so far:

```
barman list-backup pg
```
To get the latest backup information we can use a shortcut:

```
barman show-backup pg latest
```
To recover first stop the standby Postgresql instance:

```
service postgresql stop
```
Now run the command below:

barman recover -target-time <timestamp> -remote-ssh-command “ssh postgres@<standby-ip>” pg <backup-id> /var/lib/postgresql/9.6/main
We can recover to a particular time stamp by providing the — target-time “2017–03–06 15:36:23+05:30”.

## Debugging:
In case you get stuck

### List of slots in Postgresql

```
select * from pg_replication_slots;
```
To know what each slot means you can read the Postgresql documentation.

### To delete slots in Postgresql

```
select pg_drop_replication_slot('pg');
```
In the above command pg is the slot name.

### Creating scripts to send a mail

In case you want to receive a mail whenever a base backup gets completed you can write a small script that would send you the mail and this can be triggered via the hook scripts configuration. In the pg.conf of barman add this line:

```
post_backup_script = /var/lib/barman/report.sh
```
In the home directory of the barman user create a shell script called `report.sh`

```shell
#!/bin/bash
# Delete the oldest backup
# It will only be deleted if minimum redundancy criteria is met
barman delete pg oldest
# Get the information of the latest backup
barman show-backup pg latest > /tmp/temp.txt
str=$(cat /tmp/temp.txt | while read x; do echo "$x<br>";done)
# Get disk related information
echo '<pre>' > /tmp/temp.txt
df -H >> /tmp/temp.txt
echo '</pre>' >> /tmp/temp.txt
data=$(cat /tmp/temp.txt | while read x; do echo "$x<br>";done)
backup_date=`date '+%Y-%m-%d'`
str1='<html><p>Date: '$backup_date'</p><p>Backup Status : '$BARMAN_STATUS'</p><p>Backup ID : '$BARMAN_BACKUP_ID'</p><p>Error Message : '$BARMAN_ERROR'</p><p>Stats : <br>'$str'</p><p>Drive Information : '$data'</p></html>'

echo '{
  "personalizations": [
    {
      "to": [
        {
          "email": "someone@company.com",
        }
      ],
      "subject": "DB Backup | '$backup_date'"
    }
  ],
  "from": {
    "email": "barman@company.com"
  },
  "reply_to": {
    "email": "barman@company.com"
  },
  "subject": "DB Backup | '$backup_date'",
  "content": [
    {
      "type": "text/html",
      "value": "'$str1'"
   }
  ]
}' > "/tmp/temp.txt"
curl -X POST -H "Content-Type: application/json" -H "Authorization: <Token>" -H "Cache-Control: no-cache" -d  @/tmp/temp.txt "https://api.sendgrid.com/v3/mail/send"
rm /tmp/temp.txt
```
The script gives the details of the latest backup taken along with the disk space left in the Barman machine. Make sure to make the script executable and can be executed by barman user. The script uses Sendgrid to send the email.
