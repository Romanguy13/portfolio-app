import { client } from './client'

async function getPosts() {
  return await client.fetch('*[_type == "post"]{slug, title}')
}

async function getRecentPosts() {
  return await client.fetch('*[_type == "post"]{slug, title, publishedAt} | order(publishedAt desc) [0...3]')
}

async function getPost(slug: string) {
  const res = await client.fetch('*[_type == "post" && slug.current == $slug] {title, body, mainImage, publishedAt, "categories": categories[]->title}', { slug })
  return res?.[0]
}

export { getPosts, getPost, getRecentPosts }