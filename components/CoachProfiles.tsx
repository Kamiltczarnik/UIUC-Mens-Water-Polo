import Image from "next/image";

type Crop = { zoom: number; x: number; y: number };

const defaultCrops: Record<number, Crop> = {
  1: { zoom: 1.2, x: 50, y: 50 },
  2: { zoom: 1.05, x: 50, y: 64 },
  3: { zoom: 1.25, x: 50, y: 60 },
  4: { zoom: 1, x: 38, y: 9 },
  5: { zoom: 1.35, x: 50, y: 9 },
  6: { zoom: 1.15, x: 50, y: 50 },
  7: { zoom: 1.2, x: 57, y: 50 },
  8: { zoom: 2.4, x: 40, y: 0 },
  9: { zoom: 1, x: 50, y: 50 },
};

export default function ExecBoard() {
  const members = [
    {
      id: 1,
      name: "Andrew Czech",
      role: "President",
      image: "/images/exec/andrew.jpeg",
    },
    {
      id: 2,
      name: "Vasilije Djuranovic",
      role: "Vice President",
      image: "/images/exec/vas-2026.jpg",
    },
    {
      id: 3,
      name: "Mac Mika",
      role: "Treasurer",
      image: "/images/exec/mac-2026.jpg",
    },
    {
      id: 4,
      name: "Joe Shapiro",
      role: "Secretary",
      image: "/images/exec/joe-2026.jpg",
    },
    {
      id: 5,
      name: "Gabriel Aguila",
      role: "Co-Social Chair",
      image: "/images/exec/gabriel-2026.jpg",
    },
    {
      id: 6,
      name: "Henrique Coelho",
      role: "Co-Social Chair",
      image: "/images/exec/henrique-2026.jpeg",
    },
    {
      id: 7,
      name: "Roy Otamura",
      role: "Co-Captain",
      image: "/images/exec/roy-2026.jpg",
    },
    {
      id: 8,
      name: "Martin Polomsky",
      role: "Co-Captain",
      image: "/images/exec/martin-2026.jpg",
    },
    {
      id: 9,
      name: "Matthew Czech",
      role: "Co-Captain",
      image: "/images/exec/Czech.png",
    },
  ];

  return (
    <div className="mb-12">
      <h2 className="mb-6 text-2xl font-bold text-[#13294B]">
        2026-2027 Executive Board
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {members.map((member) => {
          const crop = defaultCrops[member.id];
          return <div
            key={member.id}
            className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                  style={{
                    objectPosition: `${crop.x}% ${crop.y}%`,
                    transform: `scale(${crop.zoom})`,
                  }}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-white px-3 text-center text-xs text-gray-500">
                  Photo coming soon
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold text-[#13294B]">{member.name}</h3>
            <p className="text-gray-700 text-sm whitespace-nowrap overflow-hidden truncate w-full text-center">
              {member.role}
            </p>
          </div>
        })}
      </div>
    </div>
  );
}
