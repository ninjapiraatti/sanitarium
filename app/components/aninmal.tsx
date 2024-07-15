"use client"
import { Post } from "@/types/post"
import { getPostAuthor } from "@/sanity/sanity-utils"
import { useState } from "react"

type Props = {
  aninmal: Post
}

export const Aninmal = (props: Props) => {
  const [sound, setSound] = useState("meow");
  const authorId = props.aninmal.author?._ref
  const author = async () => await getPostAuthor(authorId)

  function makeSound() {
    setSound("woof");
  }

  return (
    <>
      <h1>{props.aninmal.title}</h1>
      <p>{author?.name}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={makeSound}>
        Make sound!
      </button>
      <p>{props.aninmal.title} says {sound}!</p>
    </>
  )
}