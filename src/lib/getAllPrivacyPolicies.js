import glob from 'fast-glob'
import * as path from 'path'

async function importPolicy(fileName) {
  let { meta, default: component } = await import(
    `../pages/privacy/${fileName}`
  )
  return {
    slug: fileName.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllPolicies() {
  let projectFileNames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/privacy'),
  })
  console.log(projectFileNames)

  let policies = await Promise.all(projectFileNames.map(importPolicy))

  return policies.sort((a, z) => new Date(z.date) - new Date(a.date))
}
