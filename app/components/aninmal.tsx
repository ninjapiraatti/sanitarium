"use client"
import { Post } from "@/types/post"
import { getPostAuthor } from "@/sanity/sanity-utils"
import { useEffect, useState } from "react"

type Props = {
  aninmal: Post
}

export const Aninmal = (props: Props) => {
  const [sound, setSound] = useState("meow");
  const [author, setAuthor] = useState("authorrrrr");
  const authorId = props.aninmal.author?._ref
  const fetchAuthor = async () => {
    const author = await getPostAuthor(authorId)
    author ? setAuthor(author.name) : setAuthor("autototo")
  }
  useEffect(() => { fetchAuthor() })

  function makeSound() {
    setSound("woof");
  }

  return (
    <>
      <h1>{props.aninmal.title}</h1>
      <p>{author}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={makeSound}>
        Make sound!
      </button>
      <p className="mb-4">{props.aninmal.title} says {sound}!</p>
    </>
  )
}