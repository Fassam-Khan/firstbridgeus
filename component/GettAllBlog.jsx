"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function BlogPage() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/blog")
      const data = await res.json()
      setBlogs(data)
    }

    fetchBlogs()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Blogs</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{blog.title}</h2>

            {/* preview content */}
            <div
              className="text-sm mt-2 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <Link
              href={`/blog/${blog.slug}`}
              className="text-blue-500 mt-3 inline-block"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}