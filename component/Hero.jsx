"use client"
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
const Hero = () => {
  const plugin = React.useRef(Autoplay({ delay: 3000 }))
  return (
    <div className='w-[100%]  overflow-hidden p-3  border-b-3 border-[var(--primary-color)] '>
      <Carousel className="w-full relative  " plugins={[plugin.current]} opts={{ loop: true }} >


        <CarouselContent>


          <CarouselItem className="pl-4  w-full bg-[url('/hero1.jpeg')] p-3 bg-no-repeat bg-cover bg-center   h-[400px]  "  >
            <div className='border flex flex-col gap-4 h-full justify-center md:items-start   bg-[#00000067] md:!pl-16 items-center '>
              <h1 className='md:text-5xl text-[20px]  font-[Orbitron] text-white font-bold'>YOUR ROUTE TO SUCCESS</h1>
              <p className='text-white md:text-2xl text-lg font-semibold'>Premium Truck Dispatch Services</p>
              <button className="bg-[var(--primary-color)] text-white px-8 !py-2 skew-x-[20deg] md:w-[250px] w-[180px]">
                <span className="block skew-x-[-20deg] font-bold">
                  <a href="/#contact">GET STARTED TODAY</a>
                </span>
              </button>

            </div>



          </CarouselItem>
          <CarouselItem className="pl-4  w-full bg-[url('/hero2.jpeg')] p-3 bg-no-repeat bg-cover bg-center   h-[400px]  "  >
            <div className='border flex flex-col gap-4 h-full justify-center md:items-start   bg-[#00000067] md:!pl-16 items-center '>
              <h1 className='md:text-5xl text-[18px]  font-[Orbitron] text-white font-bold'>FIND HIGH-PAYING LOADS 24/7</h1>
              <p className='text-white md:text-2xl text-lg font-semibold'>Expert dispatcher working arround the clock</p>
              <button className="bg-[var(--primary-color)] text-white px-8 !py-2 skew-x-[20deg] md:w-[250px] w-[180px]">
                <span className="block skew-x-[-20deg] font-bold">
                  <a href="/#services">VIEW SERVICES</a>
                </span>
              </button>

            </div>



          </CarouselItem>
          <CarouselItem className="pl-4  w-full bg-[url('/hero3.jpeg')] p-3 bg-no-repeat bg-cover bg-center   h-[400px]  "  >
            <div className='border flex flex-col gap-4 h-full justify-center md:items-start   bg-[#00000067] md:!pl-16 items-center '>
              <h1 className='md:text-5xl text-[20px]  font-[Orbitron] text-white font-bold'>MAXIMIZE YOUR REVENUE</h1>
              <p className='text-white md:text-2xl text-lg font-semibold'>Keep your truck loaded and profitable</p>
              <button className="bg-[var(--primary-color)] text-white px-8 !py-2 skew-x-[20deg] md:w-[250px] w-[180px]">
                <span className="block skew-x-[-20deg] font-bold">
                  <a href="/#whyus">WHY CHOOSE US</a>
                </span>
              </button>

            </div>



          </CarouselItem> 
          <CarouselItem className="pl-4  w-full bg-[url('/hero5.jpeg')] p-3 bg-no-repeat bg-cover bg-center   h-[400px]  "  >
            <div className='border flex flex-col gap-4 h-full justify-center md:items-start   bg-[#00000067] md:!pl-16 items-center '>
              <h1 className='md:text-5xl text-[16px]  font-[Orbitron] text-white font-bold'>GROW YOUR TRUCKING BUSSINESS</h1>
              <p className='text-white md:text-2xl text-lg font-semibold'>From one truck to a fleet</p>
              <button className="bg-[var(--primary-color)] text-white px-8 !py-2 skew-x-[20deg] md:w-[250px] w-[180px]">
                <span className="block skew-x-[-20deg] font-bold">
                  <a href="/#contact">CONTACT US</a>
                </span>
              </button>

            </div>



          </CarouselItem>





        </CarouselContent>
        {/* Left Arrow */}
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-white font-extrabold " />

        {/* Right Arrow */}
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-white " />
      </Carousel>
    </div>
  )
}

export default Hero
