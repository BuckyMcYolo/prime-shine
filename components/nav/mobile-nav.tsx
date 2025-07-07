"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "motion/react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const MobileNav = () => {
  const pathname = usePathname()

  const baseStyles =
    "font-bold text-base lg:text-lg active:text-blue-500 hover:bg-neutral-100 p-2 rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 mx-1"
  const activeStyles =
    "font-bold text-base lg:text-lg active:text-blue-500 hover:bg-neutral-100 p-2 rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:font-normal active:ring-2 mx-1"

  return (
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
            className={pathname === "/" ? activeStyles : baseStyles}
          >
            Home
          </Link>

          <Link
            href="/pricing"
            className={pathname === "/pricing" ? activeStyles : baseStyles}
          >
            Pricing
          </Link>

          <Link
            href="/blog"
            className={pathname.includes("/blog") ? activeStyles : baseStyles}
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
            <button className=" text-sm shadow-[0_0px_11px_3px_rgb(0,0,0,0.1)] dark:shadow-blue-900 shadow-blue-400 bg-blue-500 hover:bg-white hover:ring-1 ring-blue-500 text-white hover:text-blue-500 font-semibold py-2.5 px-4 rounded font-sans flex items-center justify-center active:bg-white active:text-blue-500 active:ring-1 active:ring-blue-500">
              Try for Free
            </button>
          </Link>
        </motion.section>
      </Card>
    </motion.div>
  )
}

export default MobileNav
