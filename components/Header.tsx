"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#13294B] text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="w-12 h-12 relative mr-2">
            <Image
              src="/images/blocki.png"
              alt="Illinois Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="font-bold">
            <div className="text-sm">MEN'S WATER POLO</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-[#E84A27]">
            About
          </Link>
          <Link href="/practice-info" className="hover:text-[#E84A27]">
            Practice Info
          </Link>
          <Link href="/schedule" className="hover:text-[#E84A27]">
            Schedule
          </Link>
          <Link href="/roster" className="hover:text-[#E84A27]">
            Roster
          </Link>
          <Link href="/contact" className="hover:text-[#E84A27]">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#13294B] py-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link href="/about" className="hover:text-[#E84A27]" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/practice-info" className="hover:text-[#E84A27]" onClick={() => setIsMenuOpen(false)}>
              Practice Info
            </Link>
            <Link href="/schedule" className="hover:text-[#E84A27]" onClick={() => setIsMenuOpen(false)}>
              Schedule
            </Link>
            <Link href="/roster" className="hover:text-[#E84A27]" onClick={() => setIsMenuOpen(false)}>
              Roster
            </Link>
            <Link href="/contact" className="hover:text-[#E84A27]" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
