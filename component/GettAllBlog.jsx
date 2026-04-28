async function getBlogs() {
    const res = await fetch("http://localhost:3000/api/blog", {
      cache: "no-store",
    })
    return res.json()
  }
  
  export default async function BlogPage() {
    const blogs = await getBlogs()
  
    return (
      <div>
        {blogs.map((blog) => (
          <h2 key={blog.id}>{blog.title}</h2>
        ))}
      </div>
    )
  }