import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function Whoami() {
  return (
    <>
      <Head>
        <title>About - Deepak Puthraya</title>
        <meta
          name="description"
          content="I’m Deepak Puthraya. I live in Bengaluru, where I design the future."
        />
      </Head>
      <Container className="text-data mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <img
                src="https://www.gravatar.com/avatar/981680c6e4b9c65417243022d2a97729?s=1024"
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Deepak Puthraya. I live in Bengaluru.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I am an engineer at <a className={'underline'} href={'https://harness.io'}>Harness</a> where I work on our CD platform.
                I have helped integrate third party builds systems with Harness and
                I am currently working on building a tool to help migrate customers from our
                first generation CD to our next generation CD.
                I'm a strong believer that developers shouldn't be spending too much time thinking about infrastructure,
                that is one of the reasons I joined Harness.
                Prior to Harness I worked at <a className={'underline'} href={'https://playment.io'}>Playment</a> where I helped design & build their computer vision tools.
                I love to tinker with new technologies and I am currently trying to learn Rust.
              </p>
              <p>
                Having written software professionally on nodeJS, Python and Java, I have little doubt that powerfully type-safe languages which expose more problems at compile time are the future.
                These days I'm especially interested in ways to improve the robustness and longevity of software, and reduce toil in operating it.
              </p>
              <p>
                If you are building software for developers, I would love to talk to you.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/deepakputhraya" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://github.com/deepakputhraya" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/deepakputhraya" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:deepak@puthraya.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                deepak@puthraya.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
