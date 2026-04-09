import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='w-[100%]  overflow-hidden p-3  border-b-3 border-[var(--primary-color)]'>
      <Carousel className="w-full relative ">
     
        <CarouselContent>
         
          
          <CarouselItem className=" w-full bg-[url('/hero1.jpeg')] p-3  bg-cover bg-center   h-[400px]  "  >
            <div className='border flex flex-col gap-4 h-full justify-center  !p-8 bg-[#00000067]'>
              <h1 className='md:text-5xl text-3xl  font-[Orbitron] text-white font-bold'>YOUR ROUTE TO SUCCESS</h1>
              <p className='text-white md:text-2xl text-lg font-semibold'>Premium Truck Dispatch Services</p>
              <button className="bg-[var(--primary-color)] text-white px-8 !py-2 skew-x-[20deg] md:w-[250px] w-[180px]">
                <span className="block skew-x-[-20deg] font-bold">
                  <a href="">GET STARTED TODAY</a>
                </span>
              </button>

            </div>
         


          </CarouselItem>
           
          <CarouselItem className=" w-full bg-[url('/hero1.jpeg')] p-3  bg-cover bg-center   h-[400px]  "  >
            <div className='border flex flex-col gap-4 h-full justify-center  !p-8 bg-[#00000067]'>
              <h1 className='md:text-5xl text-3xl  font-[Orbitron] text-white font-bold'>YOUR ROUTE TO SUCCESS</h1>
              <p className='text-white md:text-2xl text-lg font-semibold'>Premium Truck Dispatch Services</p>
              <button className="bg-[var(--primary-color)] text-white px-8 !py-2 skew-x-[20deg] md:w-[250px] w-[180px]">
                <span className="block skew-x-[-20deg] font-bold">
                  <a href="">GET STARTED TODAY</a>
                </span>
              </button>

            </div>
         


          </CarouselItem>
      
      
            

        </CarouselContent>
  {/* Left Arrow */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white " />

{/* Right Arrow */}
<CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white " />
      </Carousel>
    </div>
  )
}

export default Hero
