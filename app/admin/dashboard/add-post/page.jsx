"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const Editor = dynamic(() => import("@/component/Editor"), {
  ssr: false,
})

export default function CreateBlog() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [blogs, setBlogs] = useState([])
  const [editId, setEditId] = useState(null)

  // ✅ fetch blogs
  const fetchBlogs = async () => {
    const res = await fetch("/api/blog")
    const data = await res.json()
    setBlogs(data)
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  // ✅ CREATE or UPDATE
  const handleSave = async () => {
    if (editId) {
      // UPDATE
      await fetch("/api/blog", {
        method: "PUT",
        body: JSON.stringify({ id: editId, title, content }),
      })
      alert("Blog updated")
    } else {
      // CREATE
      await fetch("/api/blog", {
        method: "POST",
        body: JSON.stringify({ title, content }),
      })
      alert("Blog created")
    }

    setTitle("")
    setContent("")
    setEditId(null)
    fetchBlogs()
  }

  // ✅ DELETE
  const handleDelete = async (id) => {
    await fetch("/api/blog", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    })

    fetchBlogs()
  }

  // ✅ EDIT (load into form)
  const handleEdit = (blog) => {
    setTitle(blog.title)
    setContent(blog.content)
    setEditId(blog.id)
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        {editId ? "Edit Blog" : "Create Blog"}
      </h1>

      {/* Title */}
      <input
        className="border p-2 w-full mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog title"
      />

      {/* Editor */}
      <Editor onChange={setContent} />

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 mt-4"
      >
        {editId ? "Update Blog" : "Create Blog"}
      </button>

      {/* Blog List */}
      <div className="mt-10">
        <h2 className="text-lg font-bold mb-4">All Blogs</h2>

        {blogs.map((blog) => (
          <div key={blog.id} className="border p-4 mb-3">
            <h3 className="font-semibold">{blog.title}</h3>

            <button
              onClick={() => handleEdit(blog)}
              className="text-blue-500 mr-3"
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(blog.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}