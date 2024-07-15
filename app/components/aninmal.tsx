import { Post } from "@/types/post"
import { getPostAuthor } from "@/sanity/sanity-utils"

type Props = {
  aninmal: Post
}



export const Aninmal = async (props: Props) => {
  const authorId = props.aninmal.author?._ref
  const author = await getPostAuthor(authorId) 
  return (
    <>
      <h1>{props.aninmal.title}</h1>
      <p>{author?.name}</p>
    </>
  )
}