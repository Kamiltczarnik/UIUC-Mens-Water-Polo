import Image from "next/image";

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
      image: "/images/exec/vas.JPG",
    },
    {
      id: 3,
      name: "Mac Mika",
      role: "Treasurer",
      image: null,
    },
    {
      id: 4,
      name: "Joe Shapiro",
      role: "Secretary",
      image: "/images/exec/joe.png",
    },
    {
      id: 5,
      name: "Gabriel Aguila",
      role: "Co-Social Chair",
      image: null,
    },
    {
      id: 6,
      name: "Henrique Coelho",
      role: "Co-Social Chair",
      image: null,
    },
    {
      id: 7,
      name: "Roy Otamura",
      role: "Co-Captain",
      image: null,
    },
    {
      id: 8,
      name: "Martin Polomsky",
      role: "Co-Captain",
      image: null,
    },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#13294B] mb-6">
        2026-2027 Executive Board
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
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
        ))}
      </div>
    </div>
  );
}
