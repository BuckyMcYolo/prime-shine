"use client"

import { Squash as Hamburger } from "hamburger-react"
import { useEffect, useState } from "react"

const Burger = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  //   const [mounted, setMounted] = useState(false)

  //   // Ensure the component is only rendered on the client side
  //   useEffect(() => {
  //     setMounted(true)
  //   }, [])

  //   if (!mounted) return null

  return (
    <div className="md:hidden mr-4">
      <Hamburger
        color={"#000"}
        toggled={open}
        toggle={setOpen}
        size={20}
        easing="ease-in-out"
        rounded
        label="Show menu"
      />
    </div>
  )
}

export default Burger
