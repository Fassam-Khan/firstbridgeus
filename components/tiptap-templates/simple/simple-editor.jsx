import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import TextAlign from "@tiptap/extension-text-align"
import Link from "@tiptap/extension-link"
import Color from "@tiptap/extension-color" // ✅ memo import karo
import { TextStyle } from "@tiptap/extension-text-style"
import { useEffect } from "react"
import { memo } from "react"
import { TableKit } from "@tiptap/extension-table"





function MenuBar({ editor }) {
  if (!editor) return null

  const btn = (action, label, isActive = false) =>
    `cursor-pointer px-2 py-1 rounded text-sm border ${
      isActive ? "bg-black text-white" : "bg-white hover:bg-gray-100"
    }`

  return (
    <div className="flex flex-wrap gap-1 border-b !p-2 bg-gray-50">
      <button onClick={() => editor.chain().focus().toggleBold().run()}
        className={btn(null, "B", editor.isActive("bold"))}><b>B</b></button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()}
        className={btn(null, "I", editor.isActive("italic"))}><i>I</i></button>
      <button onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={btn(null, "U", editor.isActive("underline"))}><u>U</u></button>
      <button onClick={() => editor.chain().focus().toggleStrike().run()}
        className={btn(null, "S", editor.isActive("strike"))}><s>S</s></button>
      <button onClick={() => editor.chain().focus().toggleCode().run()}
        className={btn(null, "Code", editor.isActive("code"))}>{"</>"}</button>

      <div className="w-px bg-gray-300 mx-1" />

      {[1, 2, 3].map((level) => (
        <button key={level}
          onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
          className={btn(null, `H${level}`, editor.isActive("heading", { level }))}>
          H{level}
        </button>
      ))}

      <div className="w-px bg-gray-300 !mx-1" />

      <button onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={btn(null, "Left", editor.isActive({ textAlign: "left" }))}>≡←</button>
      <button onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={btn(null, "Center", editor.isActive({ textAlign: "center" }))}>≡</button>
      <button onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={btn(null, "Right", editor.isActive({ textAlign: "right" }))}>≡→</button>
      <button onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={btn(null, "Justify", editor.isActive({ textAlign: "justify" }))}>☰</button>

      <div className="w-px bg-gray-300 !mx-1" />

      <button onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={btn(null, "UL", editor.isActive("bulletList"))}>• List</button>
      <button onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={btn(null, "OL", editor.isActive("orderedList"))}>1. List</button>
      <button onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={btn(null, "Quote", editor.isActive("blockquote"))}>❝</button>
      <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={btn(null, "Code Block", editor.isActive("codeBlock"))}>{"{ }"}</button>

      <div className="w-px bg-gray-300 !mx-1" />

      <button onClick={() => {
        const url = window.prompt("Enter URL")
        if (url) editor.chain().focus().setLink({ href: url }).run()
      }} className={btn(null, "Link", editor.isActive("link"))}>🔗</button>
      <button onClick={() => editor.chain().focus().unsetLink().run()}
        className="cursor-pointer !px-2 !py-1 rounded text-sm border bg-white hover:bg-gray-100">Unlink</button>

      <div className="w-px bg-gray-300 !mx-1" />

      <button onClick={() => editor.chain().focus().undo().run()}
        className="cursor-pointer !px-2 !py-1 rounded text-sm border bg-white hover:bg-gray-100">↩ Undo</button>
      <button onClick={() => editor.chain().focus().redo().run()}
        className="cursor-pointer px-2 py-1 rounded text-sm border bg-white hover:bg-gray-100">↪ Redo</button>

      <div className="w-px bg-gray-300 mx-1" />

      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="cursor-pointer px-2 py-1 rounded text-sm border bg-white hover:bg-gray-100">— HR</button>
      <button onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
        className="cursor-pointer px-2 py-1 rounded text-sm border bg-white hover:bg-gray-100">✕ Clear</button>
       <div className="flex flex-wrap gap-1 p-2 mt-1 border rounded-lg bg-white">
  <span className="self-center text-[10px] font-medium text-gray-400 uppercase tracking-wide px-1">
    <i className="ti ti-table mr-1" />Table
  </span>
  <div className="w-px bg-gray-200 mx-1 self-stretch" />

  {[
    { icon: "ti-table-plus",          label: "Insert table",    action: () => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run() },
    { icon: "ti-column-insert-left",  label: "Col before",      action: () => editor.chain().focus().addColumnBefore().run() },
    { icon: "ti-column-insert-right", label: "Col after",       action: () => editor.chain().focus().addColumnAfter().run() },
    { icon: "ti-column-remove",       label: "Del col",         action: () => editor.chain().focus().deleteColumn().run(),   danger: true },
    { icon: "ti-row-insert-top",      label: "Row before",      action: () => editor.chain().focus().addRowBefore().run() },
    { icon: "ti-row-insert-bottom",   label: "Row after",       action: () => editor.chain().focus().addRowAfter().run() },
    { icon: "ti-row-remove",          label: "Del row",         action: () => editor.chain().focus().deleteRow().run(),      danger: true },
    { icon: "ti-trash",               label: "Del table",       action: () => editor.chain().focus().deleteTable().run(),    danger: true },
    { icon: "ti-arrows-join",         label: "Merge",           action: () => editor.chain().focus().mergeCells().run() },
    { icon: "ti-arrows-split",        label: "Split",           action: () => editor.chain().focus().splitCell().run() },
    { icon: "ti-layout-columns",      label: "Header col",      action: () => editor.chain().focus().toggleHeaderColumn().run() },
    { icon: "ti-layout-rows",         label: "Header row",      action: () => editor.chain().focus().toggleHeaderRow().run() },
    { icon: "ti-cell",                label: "Header cell",     action: () => editor.chain().focus().toggleHeaderCell().run() },
    { icon: "ti-arrows-join-2",       label: "Merge/split",     action: () => editor.chain().focus().mergeOrSplit().run() },
    { icon: "ti-tool",                label: "Fix tables",      action: () => editor.chain().focus().fixTables().run() },
    { icon: "ti-arrow-right",         label: "Next cell",       action: () => editor.chain().focus().goToNextCell().run() },
    { icon: "ti-arrow-left",          label: "Prev cell",       action: () => editor.chain().focus().goToPreviousCell().run() },
  ].map(({ icon, label, action, danger }) => (
    <button
      key={label}
      onClick={action}
      className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-md whitespace-nowrap transition-colors
        ${danger
          ? "border-gray-200 bg-gray-50 text-gray-600 hover:bg-red-50 hover:border-red-300 hover:text-red-600"
          : "border-gray-200 bg-gray-50 text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600"
        }`}
    >
      <i className={`ti ${icon} text-[13px]`} />
      {label}
    </button>
  ))}
</div>
    </div>
  )
}

// ✅ KEY FIX: memo prevents re-mount on parent re-render
const SimpleEditor = memo(function SimpleEditor({ content, onChange, placeholder }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      TableKit.configure({
        table: { resizable: true },
      }),
      Link.configure({ openOnClick: false }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: content || "",
    immediatelyRender: false,
    onUpdate({ editor }) {
      onChange?.(editor.getHTML())
    },
  })

  // ✅ Sirf jab bahar se content aaye (edit mode), tab sync karo
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content || "")
    }
  }, [editor, content])

  return (
    <div className="border rounded-lg overflow-hidden">
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="min-h-[300px] p-4 prose max-w-none focus:outline-none"
      />
    </div>
  )
})

export default SimpleEditor