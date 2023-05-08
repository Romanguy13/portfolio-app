import { client } from './client'

async function getProjects() {
  return await client.fetch('*[_type == "project"]{title, slug} | order(title asc)')
}

async function getProject(slug: string) {
  const res = await client.fetch('*[_type == "project" && slug.current == $slug]', { slug })
  return res?.[0]
}

async function getPosts() {
  return await client.fetch('*[_type == "post"]{slug, title}')
}

async function getPost(slug: string) {
  const res = await client.fetch('*[_type == "post" && slug.current == $slug]', { slug })
  return res?.[0]
}

export { getProjects, getProject, getPosts, getPost }
