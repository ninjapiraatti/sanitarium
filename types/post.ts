import { PortableTextBlock } from "next-sanity"

export type Author = {
  _ref: string
  _id: string
  name: string
}
export type Post = {
  _id: string
  _createdAt: string
  title: string
  slug: string
  image: string
  url: string
  author?: Author
  content: PortableTextBlock[]
}