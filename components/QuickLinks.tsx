import Link from "next/link"

export default function QuickLinks() {
  return (
    <div className="bg-[#E84A27] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Link
            href="/about"
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-center py-4 rounded-md font-bold text-xl transition-all"
          >
            ABOUT
          </Link>
          <Link
            href="/practice-info"
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-center py-4 rounded-md font-bold text-xl transition-all"
          >
            PRACTICE INFO
          </Link>
          <Link
            href="/schedule"
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-center py-4 rounded-md font-bold text-xl transition-all"
          >
            SCHEDULE
          </Link>
          <Link
            href="/roster"
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-center py-4 rounded-md font-bold text-xl transition-all"
          >
            ROSTER
          </Link>
          <Link
            href="/contact"
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-center py-4 rounded-md font-bold text-xl transition-all"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  )
}
