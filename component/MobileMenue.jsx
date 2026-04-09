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

export function MobileMenue() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild className="">
        <Button variant="" className='flex justify-end text-2xl'><Menu/></Button>
      </DrawerTrigger>
      <DrawerContent className='bg-[var(--secondary-color)]'>
        <DrawerHeader>
            <DrawerTitle>
        <DrawerClose asChild>
            <Button variant=""><X className="text-white"/></Button>
          </DrawerClose>
          </DrawerTitle>
          
        </DrawerHeader>
        <div className="no-scrollbar overflow-y-auto px-4">
      
        </div>
        <DrawerFooter>
       
         
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
