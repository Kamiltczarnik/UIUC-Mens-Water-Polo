import Link from "next/link"
import { Instagram, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#13294B] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">illinoismenswaterpolo@gmail.com</p>
            <p className="text-sm">(217) 333-1000</p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              href="https://www.instagram.com/illinimenswaterpolo/"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram
                className="h-6 w-6 transition ease-in-out duration-200 transform hover:scale-110 hover:text-[#E84A27]"
              />
            </Link>
            <Link href="https://x.com/IlliniMensWPolo" target="_blank" aria-label="Twitter">
              <Twitter
                className="h-6 w-6 transition ease-in-out duration-200 transform hover:scale-110 hover:text-[#E84A27]"
              />
            </Link>
            <Link href="https://www.facebook.com/illinimenswaterpoloclub" target="_blank" aria-label="Facebook">
              <Facebook
                className="h-6 w-6 transition ease-in-out duration-200 transform hover:scale-110 hover:text-[#E84A27]"
              />
            </Link>
          </div>

          <div>
            <Link
              href="https://collegiatewaterpolo.org/Club/"
              target="_blank"
              className="text-sm uppercase transition-colors duration-200 ease-in-out hover:text-[#E84A27]"
            >
              CWPA.ORG
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
