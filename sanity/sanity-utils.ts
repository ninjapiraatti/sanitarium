import { Post } from '@/types/post'
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
      content
    }`
  )
}

