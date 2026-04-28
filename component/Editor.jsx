"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export default function Editor({ onChange }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start writing...</p>",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      onChange(html)
    },
    immediatelyRender: false,

  })

  return <EditorContent editor={editor} />
}