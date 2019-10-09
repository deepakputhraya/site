---
layout: post
title:  "Setting up Pop!_OS"
subtitle: "Setting up Pop!_OS on Lenovo X1 Xtreme Gen 2"
date: 2019-10-10 22:13:21
categories: [linux, Pop!_OS]
---

I have been using Macbook ever since I started work(> 4 years). I used to be a Ubuntu/Windows user back in college. After starting work, I have been given a Macbook to work on and have not owned a personal computer/laptop since. I really love Macbook's hardware - the touchpad and keyboard are excellent. But due to recent developments at work, wanting to game a bit and the current Macbooks being just horrible got me wanting to switch to a Linux/Windows dual boot. Hence I decided to buy a Laptop for myself that was performant and tweakable in terms of hardware. I did a bit of research and landed on the Thinkpad X1 Extreme Gen 2.

<figure>
    <img src="/assets/images/thinkpad.jpg" alt="" />
    <figcaption>Thinkpad X1 Extreme Gen 2</figcaption>
</figure>

### System configuration:
```
CPU: Intel i7-9750H (12) @ 4.500GHz
GPU: Intel UHD Graphics 630
GPU: NVIDIA NVIDIA Corporation Device 1f91
Memory: 16GiB
Disk: 1TB SSD
```

The system can be upgraded to 64GB of RAM & I can add a secondary hard disk. 

<figure>
    <img src="/assets/images/thinkpad-popos-neofetch.png" alt="" />
    <figcaption>Pop!_OS with gnome terminal</figcaption>
</figure>

## Why Pop!_OS?
I have previously used Ubuntu and Ubuntu-based distros in college, and we used Ubuntu servers predominantly at work as well. I have had a fair share of mishaps with messing with Linux OS back in college. I have accidentally deleted/formatted partitions, messed around with Grub resulting in failures to boot up and having to use Grub rescue or Ubuntu recovery quite a few times. And it would take me quite a lot of time to fix firmware and driver related issues as they were not well supported. So, when hunting for a new distro for the Thinkpad, I wanted to make sure that I chose one that had - 
- Good support in the community
- Most things worked out of the box
- Positive posts by people on Reddit and other forums using the OS on the laptop.

When I was deciding on the distro to go for I was looking for a stable Linux Distro. The ones that I narrowed down were - 
- Manjaro
- Pop!_OS

I decided on Pop!_OS because it is based out of Ubuntu which I am more familiar with compared to Arch Linux. And since I would be using Linux now and not Mac I did not want to have too many obstacles to deal with daily, at least till I got comfortable with my new setup. I would definitely love to explore Manjaro in the future as it seems to be quite popular in the community. 
I went with Gnome for Desktop environment because of its popularity. I will be trying out Xfce sometime in the future. Check out [this Youtube channel](https://www.youtube.com/user/linuxscoop/videos) to get a good sneak peeks at various Distros.

<figure>
    <img src="/assets/images/thinkpad-popos-desktop.png" alt="" />
    <figcaption>Pop!_OS with pop-slim-dark theme & Sierra Negra window manager theme</figcaption>
</figure>

### Note
Things are not all perfect with Pop!_OS. There are a lot of things that do not work and some need to be fixed post installation. Note worthy ones are -  
- Wifi does not work after installation on Pop!_OS. Updating the kernel and installing the latest firmware fixes the issue.
- Switching to Intel Graphics increases battery life, but external displays are not detected.
- Fingerprint reader does not work.
 
## Setting Up Pop!_OS
I will not go into much detail about setting up Pop!_OS from scratch there are great [Youtube videos](https://www.youtube.com/watch?v=vGrCFmWg3oY), and Pop!_OS has excellent [documentation](https://pop.system76.com/docs/dual-booting-windows/) on [how to do that](https://pop.system76.com/docs/install-pop-os/). I will cover things that took me a while to figure out post-installation.

After you choose to reboot there is a chance that it is booting into Windows instead of Pop!_OS. If that is the case, you most likely not [disabled secure boot](https://tothepoles.wordpress.com/2017/11/16/lenovo-t470p-ubuntu-16-04-install-notes/).

At this point, you should have booted into Pop!_OS. You will have to connect a phone for USB tethering to get access to the internet as Wifi is most likely not working. Let us update and upgrade the system before we begin to fix the WIFI issue.

```
sudo apt-get update;  sudo apt-get upgrade
```
### Fixing the Wifi
To fix the Wifi problem, we need to update the kernel from 5.0.X to a higher version(I installed 5.3.2) and install a newer version of the firmware.

To get current Kernel version
```
uname -r
```

To upgrade to a newer version of the kernel we need to download the kernel files. You will find the [list of kernels here](https://kernel.ubuntu.com/~kernel-ppa/mainline/)(I installed [5.3.2](https://kernel.ubuntu.com/~kernel-ppa/mainline/v5.3.2/)). We need four files from section amd64. Download the files that do not have low-latency in their name.

Then from the terminal run -
```
sudo dpkg -i linux-*.deb
sudo reboot
```

Once the reboot completes, ensure that you are running the kernel that you installed.
```
uname -r
```

We need to download and install the firmware. Get the firmware from [here](http://mirrors.edge.kernel.org/ubuntu/pool/main/l/linux-firmware/). I got [linux-firmware_1.182_all.deb](http://mirrors.edge.kernel.org/ubuntu/pool/main/l/linux-firmware/linux-firmware_1.182_all.deb) 
```
sudo dpkg -i linux-firmware_1.182_all.deb
sudo modprobe -r iwlwifi
sudo modprobe iwlwifi
```
This should have the Wifi running.

### Fixing Dual boot
Depending on how you installed Pop!_OS you may have the boot menu working correctly. Post my installation the boot menu from which you could choose the OS to choose to did not appear. After investigating, I found that Pop!_OS uses systemd-boot as boot loader instead of Grub. For the menu to show up, we need to change the [config file](https://www.reddit.com/r/pop_os/comments/8l203q/dual_boot/).

edit `/boot/efi/loader/loader.conf file` and add a line
```
timeout  5
```

When we restart, we should see the Pop!_OS boot menu.
Windows not showing up in the boot menu
I was seeing the boot menu, but I was not seeing an option to boot into Windows. After a bit of tinkering, I found the cause to be that I had multiple EFI partitions.
```
fdisk -l
```
I had two EFI paritions one for windows and one for Linux. 
```
Device              Start        End    Sectors   Size Type
/dev/nvme0n1p1       2048     534527     532480   260M EFI System
/dev/nvme0n1p2     534528     567295      32768    16M Microsoft reserved
/dev/nvme0n1p3     567296  783702015  783134720 373.4G Microsoft basic data
/dev/nvme0n1p4 1998360576 2000408575    2048000  1000M Windows recovery environment
/dev/nvme0n1p5  783702016 1979265020 1195563005 570.1G Linux filesystem
/dev/nvme0n1p6 1979265024 1996240892   16975869   8.1G Linux swap
/dev/nvme0n1p7 1996240896 1998360572    2119677     1G EFI System
```
The safe solution here is to copy the contents from Window's EFI partition into Linux EFI. Guides - [Link1](https://pop-planet.info/forums/threads/copy-the-microsoft-bootloader-into-pops-efi-beginners-guide.357/) [Link2](https://www.reddit.com/r/pop_os/comments/c63t38/dual_booting_two_esps/)

**The basic gist is -**
```
#create a mount point
sudo mkdir /windows
sudo mount /dev/nvme0n1p1 /windows
#copy the content from windows boot menu
sudo cp -r /windows/EFI/Microsoft/ /boot/efi/EFI/
```

If you restart, you should be able to see Windows as an option in the boot menu.

<figure>
    <img src="/assets/images/thinkpad-popos-apps.png" alt="" />
    <figcaption>Pop!_OS with Tela Icons</figcaption>
</figure>

## References and Important Links
It took me a long time to get my setup working and I made a lot of mistakes. Checkout the below links for more information if you are stuck with your setup or to explore more Pop!_OS

### Installing Linux
1. Ask Ubuntu Thread - [Installing Linux on Thinkpad](https://askubuntu.com/questions/1162725/install-19-04-on-thinkpad-x1-extreme-gen-2)
2. Arch Linux Wiki - [Lenovo_ThinkPad_X1_Extreme_(Gen_2)](https://wiki.archlinux.org/index.php/Lenovo_ThinkPad_X1_Extreme_(Gen_2))
3. Reddit Post - [Installing Pop OS](https://www.reddit.com/r/thinkpad/comments/criq20/x1_extreme_gen_2_pop_os_i3_install/)

### Links to help with Wifi installation 
- Ask Ubuntu - [Missing Firmware](https://askubuntu.com/questions/832524/possible-missing-frmware-lib-firmware-i915/832528])
- Ask Ubuntu - [Missing Firmware](https://askubuntu.com/questions/811453/w-possible-missing-firmware-for-module-i915-bpo-when-updating-initramfs)
- [List of bin files](https://git.kernel.org/pub/scm/linux/kernel/git/firmware/linux-firmware.git/tree/i915) to download from in case of missing message
- Ask Ubuntu - [Handling installation of Firmware](https://askubuntu.com/questions/735981/unclaimed-network-install-error-127-2-and-execvp-blacklist-sh-permission-deni)
- Instructions to fix Wifi as mentioned on a [Reddit Post](https://wireless.wiki.kernel.org/en/users/drivers/iwlwifi/core_release)

### Upgrading Linux Kernel
- [Upgrading Kernel on Ubuntu](https://www.itsmearunchandel.co.in/linux/ubuntu/upgrade-kernel-version-in-ubuntu.html)
- [Upgrading Kernel on Ubuntu/Linux Mint](http://ubuntuhandbook.org/index.php/2019/07/install-linux-kernel-5-2-ubuntu-linux-mint/)

### Other
1. [Youtube channel](https://www.youtube.com/user/linuxscoop/videos) with awesome videos of various distros.
2. [Warning Message](https://www.reddit.com/r/pop_os/comments/botzga/psa_do_not_remove_cryptsetupinitramfs/)
3. [Reddit /unixporn](https://www.reddit.com/r/unixporn/)
4. [Reddit /pop_os](https://www.reddit.com/r/pop_os/)
5. [Reddit /gnome](https://www.reddit.com/r/gnome/)
6. [Reddit /thinkpad](https://www.reddit.com/r/thinkpad/)
