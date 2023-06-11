import glob from 'fast-glob'
import * as path from 'path'

async function importProject(fileName) {
  let { meta, default: component } = await import(
    `../pages/projects/${fileName}`
  )
  return {
    slug: fileName.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllProjects() {
  let projectFileNames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/projects'),
  })
  console.log(projectFileNames)

  let projects = await Promise.all(projectFileNames.map(importProject))

  return projects.sort((a, z) => new Date(z.date) - new Date(a.date))
}
