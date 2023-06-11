import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

async function importNote(articleFilename) {
  let { meta, default: component } = await import(
      `../pages/notes/${articleFilename}`
      )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}

export async function getAllNotes() {
  let fileNames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/notes'),
  })

  let articles = await Promise.all(fileNames.map(importNote))

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}
