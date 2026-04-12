"use client"
import { Button } from "@/components/ui/button"
import { X} from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { MenuSquare } from "lucide-react"
import { Menu } from "lucide-react"
import Link from "next/link"

export function MobileMenue() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild className="">
        <Button variant=""><Menu className="text-white text-4xl"/></Button>
      </DrawerTrigger>
      <DrawerTitle></DrawerTitle>
      <DrawerContent className='  mt-[10px] border-l-4 border-[var(--primary-color)] bg-[var(--secondary-color)]'>
     
          <DrawerClose className="!mt-6 flex justify-end !px-8" >
            <X className="text-white "/>

          </DrawerClose>
       
        <ul className="text-2xl !p-16  text-white focus:text-[var(--primary-color)] flex flex-col gap-10">
          <Link href={'/'}><li className="border-b border-gray-500">HOME</li></Link>
          <Link href={'/#services'}><li className="border-b border-gray-500">SERVICES</li></Link>
          <Link href={'/#whyus'}><li className="border-b border-gray-500">WHY US </li></Link>
          <Link href={'/'}><li className="border-b border-gray-500">FREE TOOLS</li></Link>
          <Link href={'/'}><li className="border-b border-gray-500">RESOURCES</li></Link>
          <Link href={'/'}><li className="border-b border-gray-500">CONTACT</li></Link>
        </ul>
        
    
      
       
         
        
      </DrawerContent>
    </Drawer>
  )
}
