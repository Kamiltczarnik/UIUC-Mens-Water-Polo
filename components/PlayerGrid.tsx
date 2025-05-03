import Image from "next/image"

export default function PlayerGrid() {
  const players = [
    {
      id: 1,
      name: "John Smith",
      position: "Driver",
      year: "Senior",
      image: "/images/player1.jpg",
    },
    {
      id: 2,
      name: "Mike Johnson",
      position: "Utility",
      year: "Junior",
      image: "/images/player2.jpg",
    },
    {
      id: 3,
      name: "David Williams",
      position: "Center",
      year: "Sophomore",
      image: "/images/player3.jpg",
    },
    {
      id: 4,
      name: "Chris Brown",
      position: "Goalie",
      year: "Senior",
      image: "/images/player4.jpg",
    },
    {
      id: 5,
      name: "Alex Miller",
      position: "Driver",
      year: "Freshman",
      image: "/images/player5.jpg",
    },
    {
      id: 6,
      name: "Ryan Davis",
      position: "Utility",
      year: "Junior",
      image: "/images/player6.jpg",
    },
  ]

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {players.map((player) => (
          <div key={player.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src={player.image || "/placeholder.svg"} alt={player.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#13294B]">{player.name}</h3>
              <p className="text-gray-600">
                {player.position} | {player.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
