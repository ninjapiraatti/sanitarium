import { Post, Author } from '@/types/post'
import { client } from './lib/client'
import { groq } from "next-sanity"

export async function getPosts(): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      author,
      content
    }`
  )
}

export async function getPostAuthor(authorRef?: string): Promise<Author|null> {
  if (!authorRef) { return null}
  return client.fetch(
    groq`*[_type == "author" && _id == $authorRef][0]{
      _id,
      name
    }`,
    { authorRef }
  )
}

