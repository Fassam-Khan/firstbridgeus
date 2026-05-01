"use client"
import dynamic from "next/dynamic"
import { useCallback } from "react"

import { useEffect, useState } from "react"
export default function CreateBlog() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [blogs, setBlogs] = useState([])
  const [editId, setEditId] = useState(null)

  const fetchBlogs = async () => {
    const res = await fetch("/api/blog")
    const data = await res.json()
    setBlogs(data)
  }
  // ✅ Fix: load SimpleEditor only on client, skip SSR entirely
const SimpleEditor = dynamic(
  () => import("@/components/tiptap-templates/simple/simple-editor"),
  { ssr: false }
)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const handleSave = async () => {
    if (editId) {
      await fetch("/api/blog", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },   // ✅ fix: was missing
        body: JSON.stringify({ id: editId, title, content }),
      })
      alert("Blog updated")
    } else {
      await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },   // ✅ fix: was missing
        body: JSON.stringify({ title, content }),
      })
      alert("Blog created")
    }

    setTitle("")
    setContent("")
    setEditId(null)
    fetchBlogs()
  }
  const handleContentChange = useCallback((html) => {
    setContent(html)
  }, [])

  const handleDelete = async (id) => {
    await fetch("/api/blog", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },     // ✅ fix: was missing
      body: JSON.stringify({ id }),
    })
    fetchBlogs()
  }

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

      <input
        className="border p-2 w-full mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog title"
      />

      {/* ✅ fix 1: onChange={setContent} not handleChange (was undefined)  */}
      {/* ✅ fix 2: key={editId} forces editor to remount with new content  */}
      <SimpleEditor
        key={editId ?? "new"}
        content={content}
        onChange={setContent}
        placeholder="Start writing..."
      />

      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 mt-4"
      >
        {editId ? "Update Blog" : "Create Blog"}
      </button>

      {/* Cancel edit button */}
      {editId && (
        <button
          onClick={() => { setTitle(""); setContent(""); setEditId(null) }}
          className="ml-3 px-4 py-2 mt-4 border"
        >
          Cancel
        </button>
      )}

      <div className="mt-10">
        <h2 className="text-lg font-bold mb-4">All Blogs</h2>
        {blogs.map((blog) => (
          <div key={blog.id} className="border p-4 mb-3">
            <h3 className="font-semibold">{blog.title}</h3>
            <button onClick={() => handleEdit(blog)} className="text-blue-500 mr-3">
              Edit
            </button>
            <button onClick={() => handleDelete(blog.id)} className="text-red-500">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}