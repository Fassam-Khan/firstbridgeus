import React from 'react'
import Header from '@/component/Header'
import Link from 'next/link'
import Footer from '@/component/Footer'
import { tools } from '@/lib/tools'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const page = () => {

  console.log(tools)
  return (
    <div>
      <Header />
      <div className="wrapper">
        {/* BreadCrumb  */}
        <div className="breadcam">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/freetools">Free Calculators</BreadcrumbLink>
              </BreadcrumbItem>

            </BreadcrumbList>
          </Breadcrumb>

        </div>

      </div>

      {/* Hero Section  */}
      <div className='text-center bg-[#00437b] '>
        <div className="wrapper flex-col gap-4 flex justify-center h-[330px] items-center text-white  ">
          <h4 className='font-bold md:text-6xl text-xl'>
            Free Trucking Tools & Calculators
          </h4>
          <div className='md:w-[550px]'>
            <p className='md:text-lg'>Professional tools built for owner operators. Calculate profits, fuel costs, load rates, and operating expenses instantly — no sign-up required. Make smarter decisions about every load you haul.</p>
          </div>
        </div>
      </div>

      {/* Heading Section  */}
      {/* Heading  */}
      <div className='text-center !py-8 bg-[#f7f9fb]' >
        <div className="wrapper">
          <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='md:text-5xl text-3xl  font-extrabold '>14 Free Calculators</h1>
            <div className="line h-1.5 w-16 bg-[var(--primary-color)]"></div>

          </div>
          <div className='!mt-2 text-lg'>
            <p>Click any tool below to open the full calculator on its own page</p>
          </div>
        </div>
      </div>

      {/* tools Container  */}
      <div className='bg-[#f7f9fb]'>
        <div className="wrapper grid md:grid-cols-4 grid-cols-2 gap-4">
          {
            tools.map((e) => {
              return  <Link href={`/freetools/${e.slug}`}>
                  <div className='flex flex-col md:w-[300px] rounded shadow-xl !p-4 bg-white gap-4 border-t-2 border-[var(--primary-color)]'>
                  <p className='text-2xl'>{e.icon}</p>
                  <h4 className='text-[#004e89] font-[Orbitron] font-bold'>{e.name}</h4>
                  <p>{e.description} </p>
                  <button className='cursor-pointer bg-[var(--primary-color)] font-bold  text-white w-full !py-2'>USE CALCULATOR</button>
                </div>
              </Link>
              
              


            })
          }
          {/* Card  */}
          {/* <Link href={`/freetools/${[slug]}`}>
            <div className='flex flex-col md:w-[300px] !p-4 bg-white'>
              <p>💵</p>
              <h4 className='text-[#004e89] font-[Orbitron] font-bold'>Rate Per Mile Calculator</h4>
              <p>Calculate how much you're earning per mile on any load based on pay and total mines. </p>
              <button className='bg-[var(--primary-color)] font-bold  text-white w-full !py-2'>USE CALCULATOR</button>
            </div>
          </Link> */}
        </div>
      </div>


      <Footer />

    </div>
  )
}

export default page
