"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import Logo from "@/component/Logo"

const Editor = dynamic(() => import("@/component/Editor"), {
    ssr: false,
})

export default function CreateBlog() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleSave = async () => {
        const res = await fetch("/api/blog", {
            method: "POST",
            body: JSON.stringify({
                title,
                content,
            }),
        })

        const data = await res.json()
        console.log(data)
    }

    return (
        <div>
            {/* Header  */}
            <div className="bg-[var(--secondary-color)] h-[80px] ">
                <div className="wrapper">
                    <Logo />
                </div>
            </div>

            {/* Blog Contant  */}
            <div>
                <div className="wrapper">
                    <h4 className="text-3xl font-smibold !mb-2"> Add New Blog</h4>

                    <input
                        type="text"
                        placeholder="Enter Blog title here .."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border !p-2 w-full"
                    />

                    <p className="!mt-1">Permalink: <span>http://www.yourdomain.com/117/</span></p>
                    <Editor onChange={setContent} className='' />
                    <button onClick={handleSave} className="bg-blue-500 text-white p-2 mt-4">
                Save Blog
            </button>
                </div>
            </div>



        

          
        </div>
    )
}