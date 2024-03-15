import Link from "next/link"
import { buttonVariants } from "../../ui/button"
import { ArrowRight } from "lucide-react"
import { NAV_LINKS } from "@/data/links"
import { NavMenu } from "./NavMenu"

const Navbar = ({}) => {
  return (
    <header className="bg-background h-20 flex items-center fixed inset-0 z-50">
      <nav className="container flex items-center justify-between">
        <Link href="/" className="text-3xl lg:text-5xl font-bold">
          Busel
        </Link>
        <ul className="hidden lg:block space-x-4 ">
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={buttonVariants({ variant: "ghost" })}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <Link
          href="/sign-up"
          className={buttonVariants({
            size: "lg",
            className: "hidden lg:flex",
          })}
        >
          Get Started
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
        <div className="lg:hidden">
          <NavMenu />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
