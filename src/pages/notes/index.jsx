import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import {getAllNotes} from '@/lib/getAllArticles'

function Note({ note }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${note.slug}`}>
          {note.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={note.date}
          className="md:hidden"
          decorate
        >
          {formatDate(note.date)}
        </Card.Eyebrow>
        <Card.Description>{note.description}</Card.Description>
        <Card.Cta>Read note</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={note.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(note.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ notes: notes }) {
  return (
    <>
      <Head>
        <title>Notes - Deepak Puthraya</title>
        <meta
          name="description"
          content="All of important notes that I have gathered around various subjects & consolidated overtime."
        />
      </Head>
      <SimpleLayout
        title="Notes that I have collected overrtime"
        intro="All of important notes that I have gathered around various subjects & consolidated overtime."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {notes.map((note) => (
              <Note key={note.slug} note={note} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      notes: (await getAllNotes()).map(({ component, ...meta }) => meta),
    },
  }
}
