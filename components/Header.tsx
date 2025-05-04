"use client"

import { Poppins } from 'next/font/google'
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { useState } from "react"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','600'],
  variable: '--font-poppins'
})

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    ['About', '/about'],
    ['Practice Info', '/practice-info'],
    ['Schedule', '/schedule'],
    ['Roster', '/roster'],
    ['Contact', '/contact'],
  ]

  return (
    <header className={`${poppins.variable} font-sans bg-[#13294B] text-white py-4`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/blocki.png"
            alt="Illinois Logo"
            width={40}
            height={40}
            className="object-contain mr-2"
          />
          <span className="font-bold text-lg">MEN'S WATER POLO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="
                relative px-2 py-1
                font-semibold uppercase tracking-wide
                text-white
                before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px]
                before:bg-[#E84A27]
                before:transition-all before:duration-300
                hover:before:w-full
                transform transition-transform duration-200
                hover:scale-110
              "
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#13294B] py-4 px-4 space-y-2">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="
                block px-4 py-2
                font-medium uppercase tracking-wide
                text-white
                transform transition-transform duration-200
                hover:scale-105
                before:absolute before:bottom-2 before:left-4 before:w-0 before:h-[2px]
                before:bg-[#E84A27]
                before:transition-all before:duration-300
                hover:before:w-full
              "
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
