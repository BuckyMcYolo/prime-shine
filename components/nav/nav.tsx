"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Squash as Hamburger } from "hamburger-react"
import { cn } from "../../lib/utils"

const Nav = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (open) {
      setOpen(false)
    }
  }, [pathname])

  const baseStyles =
    "font-semibold text-base lg:text-lg active:text-blue-500 hover:bg-neutral-100 p-2 rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2"

  const activeStyles =
    "font-semibold text-base lg:text-lg active:text-blue-500 hover:bg-neutral-100 p-2 rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:font-normal active:ring-2"

  const Links = () => {
    return (
      <>
        {/* <Link href="/">
          <Button variant={"ghost"} className={"text-xl"} size={"lg"}>
            Services
          </Button>
        </Link> */}
        <Link href="/#process">
          <Button variant={"ghost"} className={"text-xl"} size={"lg"}>
            Process
          </Button>
        </Link>
        <Link href="/#pricing">
          <Button variant={"ghost"} className={"text-xl"} size={"lg"}>
            Pricing
          </Button>
        </Link>
      </>
    )
  }

  return (
    <>
      <nav className="top-0 sticky w-full h-14 md:h-16 lg:h-20 flex justify-between items-center bg-white dark:bg-neutral-950 z-50 border-b">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="font-semibold text-base md:text-lg lg:text-2xl ml-3 lg:ml-4 hover:text-blue-500 tracking-wide dark:font-normal"
          >
            <div className="w-32 md:w-40 lg:w-48">
              <Image
                src={"/logo.png"}
                alt="PrimeShine Logo"
                width={70}
                height={50}
                className="translate-y-1 sm:scale-110"
              />
            </div>
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden mr-4">
          <Hamburger
            color={"#000"}
            toggled={open}
            onToggle={(set) => {
              setOpen(set)
              console.log("Menu open:", open)
            }}
            size={20}
            easing="ease-in-out"
            rounded
            label="Show menu"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center mr-5 gap-0">
          <div className="mr-4">
            <Links />
          </div>
          <Link href="/#contact">
            <Button size={"lg"} className="text-lg">
              Get a Quote
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="sticky top-14 md:hidden w-full h-fit z-50"
          >
            <Card className="bg-white dark:bg-neutral-950 rounded-none">
              <motion.section key="section" className="flex flex-col">
                <Links />
                <Button className="text-sm">Get a Quote</Button>
              </motion.section>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Nav
