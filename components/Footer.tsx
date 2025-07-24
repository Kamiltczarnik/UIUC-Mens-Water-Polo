import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#13294B] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0 space-x-4">
            <p className="text-sm">illinoismenswaterpolo@gmail.com</p>
            <Link
              href="https://www.instagram.com/illinimenswaterpolo/"
              target="_blank"
              aria-label="Instagram">
              <Instagram className="h-6 w-6 transition ease-in-out duration-200 transform hover:scale-110 hover:text-[#E84A27]" />
            </Link>
          </div>

          <div>
            <Link
              href="https://collegiatewaterpolo.org/Club/"
              target="_blank"
              className="text-sm uppercase transition-colors duration-200 ease-in-out hover:text-[#E84A27]">
              CWPA.ORG
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
