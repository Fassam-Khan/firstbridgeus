"use client";

export default function SimpleEditor({ content, setContent }) {
  return (
    <div className="w-full">
      <textarea
        className="w-full h-[400px] border border-gray-300 rounded p-3 outline-none focus:border-red-400"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start writing your blog..."
      />
    </div>
  );
}