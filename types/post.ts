import { PortableTextBlock } from "next-sanity"

export type Post = {
  _id: string
  _createdAt: string
  title: string
  slug: string
  image: string
  url: string
  content: PortableTextBlock[]
}