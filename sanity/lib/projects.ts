import { client } from './client'

async function getProjects() {
  return await client.fetch('*[_type == "project"]{title, slug} | order(title asc)')
}

async function getProject(slug: string) {
  const res = await client.fetch('*[_type == "project" && slug.current == $slug]', { slug })
  return res?.[0]
}

export { getProjects, getProject }
