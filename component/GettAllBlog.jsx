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

        <AccordionItem value="hdsb" className='bg-[#003D73]  !px-4 !py-4 rounded-xl  w-full h-auto'>
          <AccordionTrigger className="!font-[Orbitron] text-white font-bold md:text-xl text-lg ">Average Trucking Rate Per Mile</AccordionTrigger>
          <AccordionContent className="text-lg !h-auto text-white">
            Knowing the average trucking rate per mile for your equipment type helps you evaluate whether any load is worth taking and gives you the data to negotiate confidently
            <Link href={'/resources/average-trucking-rate-per-mile'}>  Read More </Link>
          </AccordionContent>
        </AccordionItem>


        <AccordionItem value="dfdfj" className='bg-[#003D73]  !px-4 !py-4 rounded-xl  w-full h-auto'>
          <AccordionTrigger className="!font-[Orbitron] text-white font-bold md:text-xl text-lg ">Owner Operator Startup Cost Guide </AccordionTrigger>
          <AccordionContent className="text-lg !h-auto text-white">
          Becoming an owner operator requires careful financial planning. Understanding your true startup costs upfront prevents the cash flow problems that cause most new trucking businesses to fail in their first year.
            <Link href={'/resources/owner-operator-startup-cost-guide'}>  Read More </Link>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  )
}



