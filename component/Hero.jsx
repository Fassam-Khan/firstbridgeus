import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
const Hero = () => {
  return (
    <div className='w-[96%] p-6 '>
    <Carousel className="w- ">
    <CarouselContent>
      <CarouselItem>
        Slide 1
      </CarouselItem>
      <CarouselItem>...</CarouselItem>
      <CarouselItem>...</CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  </div>
  )
}

export default Hero
