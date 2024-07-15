import { getPosts } from '../../sanity/sanity-utils'
export default async function About() {
  const posts = await getPosts()

  console.log(posts)
  return <div>
    <h1>About</h1>
    {
      posts && posts.map((post) => (
        <div key={post.slug}>
          <h1>{post.title}</h1>
          <p>{post.url}</p>
        </div>
      ))
    }
  </div>
}