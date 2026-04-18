import React from 'react'

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Testimonial = () => {
    return (
        <div className='bg-[#004983] !py-6'>
            <div className="wrapper">
                {/* Heading  */}
                <div className='text-center text-white' id=''>
                    <div className='flex flex-col justify-center  items-center gap-4'>
                        <h1 className='md:md:text-5xl text-3xl   font-extrabold '>What Our Drivers Say</h1>
                        <div className="line h-1.5 w-16 bg-[var(--primary-color)]"></div>

                    </div>
                    <div className='!mt-2 text-lg'>
                        <p>Real feedback from owner-operators across America</p>
                    </div>

                </div>

                {/* Review Container  */}
                {/* <div className='grid md:grid-cols-3 gap-4 grid-cols-2 justify-items-center !mt-10'> */}


                {/* // 50% on small screens and 33% on larger screens. */}
                <Carousel className="w-full  !mt-6"  opts={{ align: "center" }}>                    
                    <CarouselContent className=' md:!ml-10 relative '>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                            <div className='md:w-[350px] mx-auto  hover:bg-[#8a9aa7] transition-all active:scale-105 hover:scale-105
                    border border-gray-300 text-white rounded-xl !p-4 flex flex-col gap-4 bg-[#275d8a]'>
                                <div className='text-lg md:text-xl'>
                                    <p>⭐⭐⭐⭐⭐</p>
                                </div>
                                <div className='text-lg italic'>
                                    <p>"First Bridge Dispatch helped me increase my weekly revenue by 20% and reduced my empty miles significantly. Best decision I made for my business."</p>
                                </div>
                                <div className='flex flex-col '>
                                    <p className='text-[var(--primary-color)] font-semibold text-lg'>Mike Johnson</p>
                                    <p className='text-sm'>Owner Operator, Texas</p>
                                </div>
                            </div></CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                            <div className='md:w-[350px] mx-auto  hover:bg-[#8a9aa7] transition-all active:scale-105 hover:scale-105
                    border border-gray-300 text-white rounded-xl !p-4 flex flex-col gap-4 bg-[#275d8a]'>
                                <div className='text-lg md:text-xl'>
                                    <p>⭐⭐⭐⭐⭐</p>
                                </div>
                                <div className='text-lg italic'>
                                    <p>"First Bridge Dispatch helped me increase my weekly revenue by 20% and reduced my empty miles significantly. Best decision I made for my business."</p>
                                </div>
                                <div className='flex flex-col '>
                                    <p className='text-[var(--primary-color)] font-semibold text-lg'>Mike Johnson</p>
                                    <p className='text-sm'>Owner Operator, Texas</p>
                                </div>
                            </div></CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                            <div className='md:w-[350px] mx-auto  hover:bg-[#8a9aa7] transition-all active:scale-105 hover:scale-105
                    border border-gray-300 text-white rounded-xl !p-4 flex flex-col gap-4 bg-[#275d8a]'>
                                <div className='text-lg md:text-xl'>
                                    <p>⭐⭐⭐⭐⭐</p>
                                </div>
                                <div className='text-lg italic'>
                                    <p>"First Bridge Dispatch helped me increase my weekly revenue by 20% and reduced my empty miles significantly. Best decision I made for my business."</p>
                                </div>
                                <div className='flex flex-col '>
                                    <p className='text-[var(--primary-color)] font-semibold text-lg'>Mike Johnson</p>
                                    <p className='text-sm'>Owner Operator, Texas</p>
                                </div>
                            </div></CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                            <div className='md:w-[350px] mx-auto  hover:bg-[#8a9aa7] transition-all active:scale-105 hover:scale-105
                    border border-gray-300 text-white rounded-xl !p-4 flex flex-col gap-4 bg-[#275d8a]'>
                                <div className='text-lg md:text-xl'>
                                    <p>⭐⭐⭐⭐⭐</p>
                                </div>
                                <div className='text-lg italic'>
                                    <p>"First Bridge Dispatch helped me increase my weekly revenue by 20% and reduced my empty miles significantly. Best decision I made for my business."</p>
                                </div>
                                <div className='flex flex-col '>
                                    <p className='text-[var(--primary-color)] font-semibold text-lg'>Mike Johnson</p>
                                    <p className='text-sm'>Owner Operator, Texas</p>
                                </div>
                            </div></CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                            <div className='md:w-[350px] mx-auto  hover:bg-[#8a9aa7] transition-all active:scale-105 hover:scale-105
                    border border-gray-300 text-white rounded-xl !p-4 flex flex-col gap-4 bg-[#275d8a]'>
                                <div className='text-lg md:text-xl'>
                                    <p>⭐⭐⭐⭐⭐</p>
                                </div>
                                <div className='text-lg italic'>
                                    <p>"First Bridge Dispatch helped me increase my weekly revenue by 20% and reduced my empty miles significantly. Best decision I made for my business."</p>
                                </div>
                                <div className='flex flex-col '>
                                    <p className='text-[var(--primary-color)] font-semibold text-lg'>Mike Johnson</p>
                                    <p className='text-sm'>Owner Operator, Texas</p>
                                </div>
                            </div></CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                            <div className='md:w-[350px] mx-auto  hover:bg-[#8a9aa7] transition-all active:scale-105 hover:scale-105
                    border border-gray-300 text-white rounded-xl !p-4 flex flex-col gap-4 bg-[#275d8a]'>
                                <div className='text-lg md:text-xl'>
                                    <p>⭐⭐⭐⭐⭐</p>
                                </div>
                                <div className='text-lg italic'>
                                    <p>"First Bridge Dispatch helped me increase my weekly revenue by 20% and reduced my empty miles significantly. Best decision I made for my business."</p>
                                </div>
                                <div className='flex flex-col '>
                                    <p className='text-[var(--primary-color)] font-semibold text-lg'>Mike Johnson</p>
                                    <p className='text-sm'>Owner Operator, Texas</p>
                                </div>
                            </div></CarouselItem>

                    </CarouselContent>
                      {/* 👇 Arrows BELOW */}
  <div className="flex justify-center items-center gap-4 !mt-6 text-white font-bold">
    <CarouselPrevious className="static  translate-y-0 " />
    <CarouselNext className="static translate-y-0" />
  </div>
      
                </Carousel>

            </div>
        </div>


    )
}

export default Testimonial
