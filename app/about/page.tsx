import { getPosts } from '../../sanity/sanity-utils'
import { Aninmal } from '../components/aninmal'
export default async function About() {
  const posts = await getPosts()

  console.log(posts)
  return <div className="bg-red-100 p-4">
    <h1>Aninmals</h1>
    {
      posts && posts.map((post) => (
        <Aninmal key={post._id} aninmal={post} />
      ))
    }
  </div>
}