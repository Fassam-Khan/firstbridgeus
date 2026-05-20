"use client"
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/component/Header'
import Footer from '@/component/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Contact from '@/component/Contact'
const page = () => {
  const parmas = useParams()
  const [blog, setdata] = useState({})
  const [Loading, setLoading] = useState(true)



  const getBlog = async () => {

    try {

      const res = await fetch("/api/blog")
      const data = await res.json()
      const singleBlog = await data.find(t => t.slug === parmas.slug)
      await setdata(singleBlog)
      setLoading(false)


    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getBlog()
  }, [])
// 👇 ADD THIS HERE (inside component file, before return)
const decodeHTML = (html) => {
  const txt = document.createElement("textarea")
  txt.innerHTML = html
  return txt.value
}

  return (
    <div>
      <Header />

      <main className='bg-[#f7f9fb]'>
        {Loading && (
          <p>Loading...</p>
        )}
        <div className="wrapper  md:w-[850px] w-full !m-auto">
          <Link href={'/resources'} className='text-[var(--primary-color)] font-semibold flex gap-2'>
            <ArrowLeft className="w-5 h-5" />
            Back To Resources Page</Link>

          <div className='!mt-6'>
            <h2 className='font-[Orbitron] md:text-4xl text-lg font-bold'>{blog?.title}</h2>
          </div>

          <div className='!mt-6 ' >
            <div className='blog'
              dangerouslySetInnerHTML={{ __html: blog?.content }}
            />
          </div>
          <Link href={'/resources'} className='text-[var(--primary-color)] !mt-6 font-semibold flex gap-2'>
            <ArrowLeft className="w-5 h-5" />
            Back To Resources Page</Link>
        </div>


        <Contact />
      </main>
      <Footer />

    </div>
  )
}

export default page
