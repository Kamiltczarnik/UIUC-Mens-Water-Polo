import Image from "next/image"

export default function ExecBoard() {
  const members = [
    { id: 1, name: "Joe Shapiro", role: "President", image: "/images/exec/joe.png" },
    { id: 2, name: "Jake Lehman", role: "Vice President", image: "/images/exec/jake.jpg" },
    { id: 3, name: "Andrew Czech", role: "Treasurer", image: "/images/exec/andrew.jpeg" },
    { id: 4, name: "Frank Krklus", role: "Secretary", image: "/images/exec/frank.jpg" },
    { id: 5, name: "Kamil Czarnik", role: "Co-Social Chair / Tech Chair", image: "/images/exec/Kamil.jpg" },
    { id: 6, name: "Vasilije Djuranovic", role: "Co-Social Chair", image: "/images/exec/vas.JPG" },
    { id: 7, name: "Matthew Czech", role: "Co-Captain", image: "/images/exec/Czech.png" },
    { id: 8, name: "Hugo Allaume", role: "Co-Captain / Membership Director", image: "/images/exec/hugo.jpg" },
  ]

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#13294B] mb-6">2025-2026 Executive Board</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {members.map((member) => (
          <div
          key={member.id}
          className="bg-gray-100 rounded-lg p-4 flex flex-col items-center"
        >
          <div className="relative w-32 h-32 mb-4">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h3 className="text-xl font-bold text-[#13294B]">{member.name}</h3>
          <p className="text-gray-700 text-sm whitespace-nowrap overflow-hidden truncate w-full text-center">
            {member.role}
          </p>
        </div>
        ))}
      </div>
    </div>
  )
}
