"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Squash as Hamburger } from "hamburger-react"
import { Menu } from "lucide-react"

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

  const mobileBaseStyles =
    "font-bold text-base lg:text-lg active:text-blue-500 hover:bg-neutral-100 p-2 rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 mx-1"

  const mobileActiveStyles =
    "font-bold text-base lg:text-lg active:text-blue-500 hover:bg-neutral-100 p-2 rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:font-normal active:ring-2 mx-1"

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
                src={"/2.svg"}
                alt="Axon Logo"
                width={150}
                height={150}
                className="w-full h-auto stroke-blue-500 fill-blue-500 dark:invert -translate-y-1"
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
        <div className="hidden md:flex md:items-center mr-5 gap-0 md:gap-3">
          <Link
            href="https://app.getaxon.ai/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Login</Button>
          </Link>
          <a
            href="https://app.getaxon.ai/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-sm shadow-[0_0px_11px_3px_rgb(0,0,0,0.1)] dark:shadow-blue-900 shadow-blue-400 bg-blue-500 hover:bg-white hover:ring-1 ring-blue-500 text-white hover:text-blue-500 font-semibold py-2.5 px-4 rounded font-sans flex items-center active:bg-white active:text-blue-500 active:ring-1 active:ring-blue-500">
              Try for Free
            </button>
          </a>
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
            className="absolute top-14 md:hidden w-full h-fit z-50"
          >
            <Card className="bg-white dark:bg-neutral-950 rounded-none">
              <motion.section key="section" className="flex flex-col">
                <Link
                  href="/"
                  className={
                    pathname === "/" ? mobileActiveStyles : mobileBaseStyles
                  }
                >
                  Home
                </Link>
                <Link
                  href="/pricing"
                  className={
                    pathname === "/pricing"
                      ? mobileActiveStyles
                      : mobileBaseStyles
                  }
                >
                  Pricing
                </Link>
                <Link
                  href="/blog"
                  className={
                    pathname.includes("/blog")
                      ? mobileActiveStyles
                      : mobileBaseStyles
                  }
                >
                  Blog
                </Link>
                <Link
                  href="https://app.getaxon.ai/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 mb-3"
                >
                  <Button className="text-sm">Login</Button>
                </Link>
                <Link
                  href="https://app.getaxon.ai/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 mb-3"
                >
                  <button className="text-sm shadow-[0_0px_11px_3px_rgb(0,0,0,0.1)] dark:shadow-blue-900 shadow-blue-400 bg-blue-500 hover:bg-white hover:ring-1 ring-blue-500 text-white hover:text-blue-500 font-semibold py-2.5 px-4 rounded font-sans flex items-center justify-center active:bg-white active:text-blue-500 active:ring-1 active:ring-blue-500">
                    Try for Free
                  </button>
                </Link>
              </motion.section>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Nav
