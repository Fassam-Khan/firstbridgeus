"use client"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function MobileMenue() {
  const [open, setOpen] = useState(false)

  const handleHashNavigation = (e, hash) => {
    e.preventDefault()
    setOpen(false)

    // Wait for drawer close animation to finish, then scroll
    setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }, 300) // matches typical drawer close animation duration
  }

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant=""><Menu className="text-white text-4xl" /></Button>
      </DrawerTrigger>
      <DrawerTitle></DrawerTitle>
      <DrawerContent
          onCloseAutoFocus={(e) => {
            e.preventDefault()
            document.body.focus()  // 👈 redirect focus to body instead of trigger
          }}
        className="mt-[10px] border-l-4 border-[var(--primary-color)] bg-[var(--secondary-color)]"
      >
        <DrawerClose className="!mt-6 flex justify-end !px-8">
          <X className="text-white" />
        </DrawerClose>

        <ul className="text-2xl !p-16 text-white flex flex-col gap-10">
          <Link href="/" onClick={() => setOpen(false)}>
            <li className="border-b border-gray-500">HOME</li>
          </Link>

          {/* Hash links now use handleHashNavigation */}
          <a href="/#services" onClick={(e) => handleHashNavigation(e, "#services")}>
            <li className="border-b border-gray-500">SERVICES</li>
          </a>
          <a href="/#whyus" onClick={(e) => handleHashNavigation(e, "#whyus")}>
            <li className="border-b border-gray-500">WHY US</li>
          </a>

          <Link href="/freetools" onClick={() => setOpen(false)}>
            <li className="border-b border-gray-500">FREE TOOLS</li>
          </Link>
          <Link href="/resources" onClick={() => setOpen(false)}>
            <li className="border-b border-gray-500">RESOURCES</li>
          </Link>

          <a href="/#contact" onClick={(e) => handleHashNavigation(e, "#contact")}>
            <li className="border-b border-gray-500">CONTACT</li>
          </a>
        </ul>
      </DrawerContent>
    </Drawer>
  )
}