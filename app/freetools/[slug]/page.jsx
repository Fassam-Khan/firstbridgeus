"use client"
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import { tools } from '@/lib/tools'
import { notFound } from 'next/navigation'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const Page = () => {

  const parmas = useParams()
  const tool = tools.find(t => t.slug === parmas.slug)
  console.log(tool)

  const ToolComponent = tool.component

  const related = tools.filter(tool => tool.slug !== tool)
  .slice(0, 4);




  return (
    <div className='bg-[#f7f9fb]'>
      <Header />
      {/* BreadCrumb  */}
      <div className="breadcam bg-white   ">
        <div className="wrapper h-[50px] flex items-center border-b border-gray-200">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/freetools">Free Calculators</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/${tool.slug}`}>{tool.name} </BreadcrumbLink>
              </BreadcrumbItem>

            </BreadcrumbList>
          </Breadcrumb>
        </div>

      </div>

      <div className="wrapper">



        {/* Render Component Properly */}
        <div className='md:w-[800px] !m-auto w-full '>
        {<ToolComponent />}

        </div>
        {/* Related tools  */}
        <div>

        <div className='border-b border-gray-300  md:!mt-20'>
            <h4 className='md:text-2xl  font-bold '>Related Tools</h4>
        </div>
        {/* tools  */}
        <div className='grid md:grid-cols-4 grid-cols-2 !mt-6'>
          {related.map((e,index)=>{
            return  <Link href={`/freetools/${e.slug}` } key={index}>
            <div className='flex flex-col md:w-[300px] rounded shadow-xl !p-4 bg-white gap-4 border-t-2 border-[var(--primary-color)]'>
            <p className='text-2xl'>{e.icon}</p>
            <h4 className='text-[#004e89] font-[Orbitron] font-bold'>{e.name}</h4>
            <p>{e.description} </p>
            <button className='cursor-pointer bg-[var(--primary-color)] font-bold  text-white w-full !py-2'>USE CALCULATOR</button>
          </div>
        </Link>
          })}
        </div>
        </div>


      </div>
      <Footer />
    </div>
  )
}

export default Page