import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const MainNav = () => {
  const pathname = usePathname()

  const baseStyles =
    "font-semibold text-base lg:text-lg active:text-blue-500 hover:bg-neutral-100 p-2 rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2"
  const activeStyles =
    "font-semibold text-base lg:text-lg active:text-blue-500 hover:bg-neutral-100 p-2 rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:font-normal active:ring-2"

  return (
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
  )
}

export default MainNav
