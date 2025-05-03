import Image from "next/image"

export default function CoachProfiles() {
  const coaches = [
    {
      id: 1,
      name: "John Doe",
      title: "Head Coach",
      credentials: "MDC",
      image: "/images/coach1.jpg",
    },
    {
      id: 2,
      name: "Mike Smith",
      title: "Assistant Coach",
      credentials: "MA",
      image: "/images/coach2.jpg",
    },
  ]

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#13294B] mb-6">Coaches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {coaches.map((coach) => (
          <div key={coach.id} className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
            <div className="relative w-48 h-48 mb-4">
              <Image
                src={coach.image || "/placeholder.svg"}
                alt={coach.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-[#13294B]">{coach.name}</h3>
            <p className="text-gray-700">
              {coach.title}, {coach.credentials}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
