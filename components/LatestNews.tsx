import Link from "next/link"

export default function LatestNews() {
  const news = [
    {
      id: 1,
      title: "Illini Defeat Wildcats in Home Opener",
      link: "#",
    },
    {
      id: 2,
      title: "Spring Tournament Announced",
      link: "#",
    },
    {
      id: 3,
      title: "2024 Team Captains Named",
      link: "#",
    },
  ]

  return (
    <div className="py-12 container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-[#E84A27] mb-8">LATEST NEWS</h2>
      <div className="max-w-3xl mx-auto">
        {news.map((item) => (
          <Link key={item.id} href={item.link} className="block border-b border-gray-200 py-4 hover:bg-gray-50">
            <h3 className="text-2xl font-bold text-[#13294B]">{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}
