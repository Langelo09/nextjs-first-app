import Link from "next/link"

import { HomeIcon } from "@primer/octicons-react"
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [
  { text: "About", path: "/about" },
  { text: "Contact", path: "/contact" },
  { text: "Pricing", path: "/pricing" },
]

export const Navbar = () => {
  return (
    <nav
      className="flex rounded-lg m-2"
      style={{ backgroundColor: "rgba(30, 64, 175, 0.3)", padding: "1rem" }}
    >
      <Link href={"/"} className="flex items-center">
        <div style={{ margin: "0 0.5rem" }}>
          <HomeIcon />
        </div>
        <span>Home</span>
      </Link>

        <div className="flex flex-1"></div>

        {
          navItems.map( navItem => (
            <ActiveLink key={navItem.path} path={navItem.path} text={navItem.text} />
          ))
        }

        {/* <Link style={{ margin: "0 0.5rem" }} href="/about">About</Link>
        <Link style={{ margin: "0 0.5rem" }} href="/contact">Contact</Link>
        <Link style={{ margin: "0 0.5rem" }} href="/pricing">Pricing</Link> */}
    </nav>
  )
}
