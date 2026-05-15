"use client"

import dynamic from "next/dynamic"
import { useCallback, useEffect, useState } from "react"

const SimpleEditor = dynamic(
  () => import("@/components/tiptap-templates/simple/simple-editor"),
  { ssr: false }
)

export default function CreateBlog() {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [blogs, setBlogs] = useState([])
  const [editId, setEditId] = useState(null)

  // ---------------- FETCH BLOGS ----------------
  const fetchBlogs = async () => {
    const res = await fetch("/api/blog")
    const data = await res.json()
    setBlogs(data)
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  // ---------------- SAVE (CREATE / UPDATE) ----------------
  const handleSave = async () => {

    if (!title || !content) {
      alert("Title and content required")
      return
    }

    if (editId) {
      // UPDATE BLOG
      await fetch("/api/blog", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editId,
          title,
          content
        }),
      })

      alert("Blog updated")
    } else {
      // CREATE BLOG
      await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content
        }),
      })

      alert("Blog created")
    }

    setTitle("")
    setContent("")
    setEditId(null)
    fetchBlogs()
  }

  // ---------------- EDIT ----------------
  const handleEdit = (blog) => {
    setTitle(blog.title)
    setContent(blog.content)
    setEditId(blog.id)
  }

  // ---------------- DELETE ----------------
  const handleDelete = async (id) => {
    await fetch("/api/blog", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })

    fetchBlogs()
  }

  // ---------------- TIPTAP CHANGE ----------------
  const handleContentChange = useCallback((html) => {
    setContent(html)
  }, [])

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <h1 className="text-2xl font-bold mb-4">
        {editId ? "Edit Blog" : "Create Blog"}
      </h1>

      {/* TITLE */}
      <input
        className="border p-2 w-full mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog title"
      />

      {/* CONTENT EDITOR */}
      <SimpleEditor
        key={editId ?? "new"}
        content={content}
        onChange={handleContentChange}
        placeholder="Start writing..."
      />

      {/* SAVE BUTTON */}
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 mt-4"
      >
        {editId ? "Update Blog" : "Create Blog"}
      </button>

      {/* CANCEL EDIT */}
      {editId && (
        <button
          onClick={() => {
            setTitle("")
            setContent("")
            setEditId(null)
          }}
          className="ml-3 px-4 py-2 mt-4 border"
        >
          Cancel
        </button>
      )}

      {/* BLOG LIST */}
      <div className="mt-10">

        <h2 className="text-lg font-bold mb-4">All Blogs</h2>

        {blogs.length === 0 && (
          <p>No blogs found</p>
        )}

        {blogs.map((blog) => (
          <div key={blog.id} className="border p-4 mb-3">

            <h3 className="font-semibold text-lg">
              {blog.title}
            </h3>

            <div className="flex gap-3 mt-2">

              <button
                onClick={() => handleEdit(blog)}
                className="text-blue-500"
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

          </div>
        ))}

      </div>

    </div>
  )
}