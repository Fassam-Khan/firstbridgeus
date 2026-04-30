"use client"
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/component/Header'
import Footer from '@/component/Footer'
import Link from 'next/link'

const page = () => {
  const parmas = useParams()

  const [blog, setdata] = useState({})

  const getBlog = async () => {
    try {
      const res = await fetch("/api/blog")
      const data = await res.json()
      const singleBlog = data.find(t => t.slug === parmas.slug)
      console.log(singleBlog)
      await setdata(singleBlog)


    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getBlog()
  }, [])


  return (
    <div>
      <Header />
      <main className='bg-[#f7f9fb]'>
        <div className="wrapper md:w-[800px] w-full !m-auto">
          <Link href={'/'} className='text-[var(--primary-color)] font-semibold'>Back to blog</Link>

      
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
        </div>
      </main>
      <Footer />

    </div>
  )
}

export default page
