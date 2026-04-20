"use client"
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import { tools } from '@/lib/tools'
import { notFound } from 'next/navigation'
import { useParams } from 'next/navigation'
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

      </div>
      <Footer />
    </div>
  )
}

export default Page