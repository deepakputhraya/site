import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import {getAllPolicies} from "@/lib/getAllPrivacyPolicies";
import {Prose} from "@/components/Prose";

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function PrivacyPolicies({ policies }) {
    console.log(policies)
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Privacy Policy"
        />
      </Head>
      <SimpleLayout
        title="Privacy Policy"
        intro="Privacy Policy"
      >
          <Prose>
              <p>
                  We value your privacy and question everything that stores or processes your personal information.
                  With that in mind, we still needed a few external services to publish this website.
                  Here is everything you need to know. Don’t hesitate to ask if there is something not explained: <a href={'mailto:deepak@puthraya.com'}>deepak@puthraya.com</a>
              </p>
              <p>
                  To get critical information about the behavior of our visitors, we use Google Analytics.
                  This analytics software gives us insight about our visitors only in general.
                  It does not track visitors and does not store any personal identifiable information.
              </p>
          </Prose>
          <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {policies.map((policy) => (
              <a href={`/privacy/${policy.slug}`} key={policy.slug}>
            <Card as="li" key={policy.title}>
                <div className="p-4 flex relative z-10 flex items-center justify-center rounded-xl bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  src={policy.logo}
                  alt=""
                  className="h-24 w-24"
                  unoptimized
                />
                  <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    {policy.title}
                  </h2>
                </div>
            </Card>
              </a>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
    return {
        props: {
            policies: (await getAllPolicies()).map(({ component, ...meta }) => meta),
        },
    }
}
