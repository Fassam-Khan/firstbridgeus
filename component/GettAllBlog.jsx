import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getBlogs } from "@/lib/getBlogs"
import Link from "next/link"

export default async function BlogsPage() {

  const blogs = await getBlogs();

  return (
    <div>
      <Accordion
        type="single"
        collapsible
        defaultValue="shipping"
        className=" flex   gap-6 justify-center items-center md:w-[900px] !m-auto"
      >
        {blogs?.map((blog) => {
          const text = blog.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

          return (
            <AccordionItem
              key={blog.id}
              value={`blog-${blog.id}`}
              className="bg-[#003d73] !px-4 !py-4 rounded-xl text-white w-full h-auto"
            >
              <AccordionTrigger className="flex gap-2">
                <h4 className="font-[Orbitron] font-bold md:text-xl text-lg">
                  {blog.title}
                </h4>
              </AccordionTrigger>
              <AccordionContent className="text-lg !h-auto">
                {text.length > 150 ? (
                  <>
                    {text.slice(0, 200)}...{' '}
                    <Link href={`/resources/${blog.slug}`} className="text-blue-400 underline hover:text-blue-300">
                      Read More
                    </Link>
                  </>
                ) : (
                  text
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })}

      </Accordion>
    </div>
  )
}



