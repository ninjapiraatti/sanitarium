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
    const sound = uuidToSyllables(props.aninmal._id)
    setSound(sound);
  }

  function uuidToSyllables(uuid: string): string {
    // Remove any non-alphanumeric characters from the UUID
    const cleanUuid = uuid.replace(/[^a-zA-Z0-9]/g, '');
  
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    const vowels = 'aeiou';
  
    function findLetter(startIndex: number, isConsonant: boolean): string {
      const targetAlphabet = isConsonant ? consonants : vowels;
      let index = startIndex;
      while (index < cleanUuid.length - 1) {
        const num = parseInt(cleanUuid.slice(index, index + 2), 10);
        if (num >= 1 && num <= 26) {
          const letter = String.fromCharCode(96 + num);
          if (targetAlphabet.includes(letter)) {
            return letter;
          }
        }
        index++;
      }
      return isConsonant ? 'b' : 'a'; // Default if no suitable letter found
    }
  
    let result = '';
    let index = 0;
  
    while (index < cleanUuid.length - 3) {
      const consonant = findLetter(index, true);
      const vowel = findLetter(index + 2, false);
      result += consonant + vowel + consonant + vowel;
      index += 4;
    }
  
    return result;
  }
  
  // Example usage
  const uuid = '877d6a46-f2c7-47d9-aa5e-1dbbffcdff1e';
  console.log(uuidToSyllables(uuid));

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