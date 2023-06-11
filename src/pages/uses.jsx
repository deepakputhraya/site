import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-8">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

const websites = [{
  name: 'Brandur Leach',
  link: 'https://brandur.org/'
}, {
  name: 'Julia Evans',
  link: 'https://jvns.ca/'
},{
  name: 'Gergely Orosz',
  link: 'https://blog.pragmaticengineer.com/'
},{
  name: 'Benedict Evans',
  link: 'https://ben-evans.com/'
},]

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Deepak Puthraya</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Pro, 32GB RAM (2021)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Tool>
            <Tool title="Logitech MX Keys">
              I love Logitech MX Keys for its sleek design, responsive keys,
              wireless functionality, and seamless multi-device connectivity.
            </Tool>
            <Tool title="Logitech MX">
              I love the Logitech MX Master 3S for its exceptional comfort,
              programmable buttons for every app, and the convenience of a Type-C charger.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Jetbrains Products">
              The reason I'm fond of JetBrains products is their rich set of features
              that are readily available without the need for extensive customization.
            </Tool>
            <Tool title="iTerm2">
              I’m honestly not even sure what features I get with this that
              aren’t just part of the macOS Terminal but it’s what I use.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Raycast">
              Raycast's intuitive interface, customizable workflows, and vast plugin ecosystem
              provides quick access to essential tasks and commands. It's the ultimate productivity companion
              that helps me stay organized and accomplish more in less time.
            </Tool>
            <Tool title="Magnet">
              Magnet has become an indispensable part of my dual-screen experience, especially with one monitor set up vertically.
              It simplifies window organization with its user-friendly keyboard shortcuts,
              allowing me to effortlessly arrange and resize windows
            </Tool>
            <Tool title="Vizion">
              I use this regularly to capture text from images. I built this product.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Blogs">
            {websites.map(website => {
              return (
                  <Tool title={website.name}>
                    <a target={'_blank'} href={website.link}>{website.link}</a>
                  </Tool>
              )
            })}
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
