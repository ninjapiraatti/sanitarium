"use client"
import { Post } from "@/types/post"
import { getPostAuthor } from "@/sanity/sanity-utils"
import { useState } from "react"

type Props = {
  aninmal: Post
}

export const Aninmal = async (props: Props) => {
  const [sound, setSound] = useState("meow");
  const authorId = props.aninmal.author?._ref
  const author = await getPostAuthor(authorId)

  function makeSound() {
    setSound("woof");
  }

  return (
    <>
      <h1>{props.aninmal.title}</h1>
      <p>{author?.name}</p>
      <button onClick={makeSound}>
        {props.aninmal.title} says {props.aninmal._id}!
      </button>
    </>
  )
}