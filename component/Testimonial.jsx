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
                                    <p>"Professional, reliable, and always available. They find me consistent high-paying loads and handle all the paperwork. I just focus on driving safely."</p>
                                </div>
                                <div className='flex flex-col '>
                                    <p className='text-[var(--primary-color)] font-semibold text-lg'>Sarah Martinez</p>
                                    <p className='text-sm'>Owner Operator, California</p>
                                </div>
                            </div></CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                            <div className='md:w-[350px] mx-auto  hover:bg-[#8a9aa7] transition-all active:scale-105 hover:scale-105
                    border border-gray-300 text-white rounded-xl !p-4 flex flex-col gap-4 bg-[#275d8a]'>
                                <div className='text-lg md:text-xl'>
                                    <p>⭐⭐⭐⭐⭐</p>
                                </div>
                                <div className='text-lg italic'>
                                    <p>"Switched from self-dispatching to First Bridge six months ago. My stress level is down, my revenue is up, and I actually have time off now. Highly recommend!"</p>
                                </div>
                                <div className='flex flex-col '>
                                    <p className='text-[var(--primary-color)] font-semibold text-lg'>Robert Chen</p>
                                    <p className='text-sm'>Owner Operator, Florida</p>
                                </div>
                            </div></CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                            <div className='md:w-[350px] mx-auto  hover:bg-[#8a9aa7] transition-all active:scale-105 hover:scale-105
                    border border-gray-300 text-white rounded-xl !p-4 flex flex-col gap-4 bg-[#275d8a]'>
                                <div className='text-lg md:text-xl'>
                                    <p>⭐⭐⭐⭐⭐</p>
                                </div>
                                <div className='text-lg italic'>
                                    <p>"I was skeptical about using a dispatch service but First Bridge proved me wrong from week one. They negotiated rates I never could have gotten on my own and kept my flatbed loaded 6 days a week."</p>
                                </div>
                                <div className='flex flex-col '>
                                    <p className='text-[var(--primary-color)] font-semibold text-lg'>Darnell Washington</p>
                                    <p className='text-sm'>Flatbed Owner Operator, Georgia</p>
                                </div>
                            </div></CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                            <div className='md:w-[350px] mx-auto  hover:bg-[#8a9aa7] transition-all active:scale-105 hover:scale-105
                    border border-gray-300 text-white rounded-xl !p-4 flex flex-col gap-4 bg-[#275d8a]'>
                                <div className='text-lg md:text-xl'>
                                    <p>⭐⭐⭐⭐⭐</p>
                                </div>
                                <div className='text-lg italic'>
                                    <p>"As a new carrier with fresh MC authority, I had no idea where to start. First Bridge walked me through the entire setup, found my first load within 48 hours, and have been keeping me moving ever since."</p>
                                </div>
                                <div className='flex flex-col '>
                                    <p className='text-[var(--primary-color)] font-semibold text-lg'>Maria Delgado</p>
                                    <p className='text-sm'>Reefer Owner Operator, Illinois</p>
                                </div>
                            </div></CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                            <div className='md:w-[350px] mx-auto  hover:bg-[#8a9aa7] transition-all active:scale-105 hover:scale-105
                    border border-gray-300 text-white rounded-xl !p-4 flex flex-col gap-4 bg-[#275d8a]'>
                                <div className='text-lg md:text-xl'>
                                    <p>⭐⭐⭐⭐⭐</p>
                                </div>
                                <div className='text-lg italic'>
                                    <p>"Been trucking for 12 years and tried three different dispatch services. First Bridge is on a different level. My dedicated dispatcher knows my preferred lanes, pushes for top rates every single time, and responds day or night."</p>
                                </div>
                                <div className='flex flex-col '>
                                    <p className='text-[var(--primary-color)] font-semibold text-lg'>Travis Beaumont</p>
                                    <p className='text-sm'>Dry Van Owner Operator, Tennessee</p>
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
