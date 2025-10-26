"use client";
import { useState } from "react";
import Image from "next/image";

// 2024-2025 Roster (Old)
const players2024 = [
  {
    id: 1,
    capNumber: "1",
    firstName: "Daniel",
    lastName: "Schacht",
    grade: "Sr.",
    position: "Goalie",
    image: "/images/roster/Daniel.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 2,
    capNumber: "1A",
    firstName: "Ethan",
    lastName: "Nicolls",
    grade: "MS.",
    position: "Goalie",
    image: "/images/roster/Ethan.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 3,
    capNumber: "2",
    firstName: "Adrian",
    lastName: "Lam",
    grade: "So.",
    position: "Point / Center D",
    image: "/images/roster/Adrian.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 4,
    capNumber: "3",
    firstName: "Jake",
    lastName: "Lehman",
    grade: "Sr.",
    position: "Point / Center D",
    image: "/images/roster/JakeLehman.png",
    travelTeam: true,
    exec: true,
  },
  {
    id: 5,
    capNumber: "4",
    firstName: "Martin",
    lastName: "Polomsky",
    grade: "So.",
    position: "Point / Center D",
    image: "/images/roster/Martin.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 6,
    capNumber: "5",
    firstName: "Javier",
    lastName: "Garcia Mainieri",
    grade: "Phd.",
    position: "Whole set",
    image: "/images/roster/Javi.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 7,
    capNumber: "6",
    firstName: "Joe",
    lastName: "Shapiro",
    grade: "Jr.",
    position: "Utility",
    image: "/images/roster/JoeShapiro.png",
    travelTeam: true,
    exec: true,
  },
  {
    id: 8,
    capNumber: "7",
    firstName: "Kamil",
    lastName: "Czarnik",
    grade: "Sr.",
    position: "Utility",
    image: "/images/roster/KamilCzarnik.JPG",
    travelTeam: true,
    exec: true,
  },
  {
    id: 9,
    capNumber: "8",
    firstName: "Patrick",
    lastName: "Alonso",
    grade: "MS.",
    position: "Utility",
    image: "/images/roster/PatrickAlonso.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 10,
    capNumber: "9",
    firstName: "Mathew",
    lastName: "Czech",
    grade: "Sr.",
    position: "Utility",
    image: "/images/roster/Matthew.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 11,
    capNumber: "10",
    firstName: "Charlie",
    lastName: "Wang",
    grade: "Sr.",
    position: "Point / Center D",
    image: "/images/roster/CharlieWang.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 12,
    capNumber: "11",
    firstName: "Hugo",
    lastName: "Allaume",
    grade: "Sr.",
    position: "Whole set",
    image: "/images/exec/hugo.jpg",
    travelTeam: true,
    exec: false,
  },
  {
    id: 13,
    capNumber: "12",
    firstName: "Frank",
    lastName: "Krklus",
    grade: "Sr.",
    position: "Utility",
    image: "/images/roster/FrankKrklus.png",
    travelTeam: true,
    exec: true,
  },
  {
    id: 14,
    capNumber: "13",
    firstName: "Jack",
    lastName: "Walberer",
    grade: "Sr.",
    position: "Utility",
    image: "/images/roster/JackWalberer.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 15,
    capNumber: "14",
    firstName: "Avi",
    lastName: "Winick",
    grade: "Sr.",
    position: "Utility",
    image: "/images/roster/Avi.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 16,
    capNumber: "15",
    firstName: "Nadav",
    lastName: "Efrat",
    grade: "So.",
    position: "Utility",
    image: "/images/roster/Nadav.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 17,
    capNumber: "16",
    firstName: "Alan",
    lastName: "Jiang",
    grade: "Jr.",
    position: "Utility",
    image: "/images/roster/Alan.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 18,
    capNumber: "17",
    firstName: "David",
    lastName: "Heurta",
    grade: "Sr.",
    position: "Utility",
    image: "/images/roster/DavidHuerta.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 19,
    capNumber: "18",
    firstName: "Roy",
    lastName: "Otamura",
    grade: "So.",
    position: "Utility",
    image: "/images/roster/Roy.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 20,
    capNumber: "19",
    firstName: "Vasilije",
    lastName: "Djuranovic",
    grade: "So.",
    position: "Utility",
    image: "/images/roster/Vas.png",
    travelTeam: true,
    exec: true,
  },
  {
    id: 21,
    capNumber: "20",
    firstName: "Joseph",
    lastName: "Fallouh",
    grade: "Sr.",
    position: "Utility",
    image: "/images/roster/JosephFallou.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 22,
    capNumber: "",
    firstName: "Andrew",
    lastName: "Czech",
    grade: "So.",
    position: "",
    image: "/images/roster/Andrew.png",
    travelTeam: false,
    exec: true,
  },
  {
    id: 23,
    capNumber: "",
    firstName: "Adrian",
    lastName: "Rosales",
    grade: "So.",
    position: "",
    image: "/images/roster/AdrianRosales.PNG",
    travelTeam: false,
    exec: false,
  },
  {
    id: 24,
    capNumber: "",
    firstName: "Peter",
    lastName: "Thompson",
    grade: "Sr.",
    position: "N/A",
    image: "/images/roster/PeterThompson.PNG",
    travelTeam: false,
    exec: false,
  },
  {
    id: 25,
    capNumber: "",
    firstName: "Oren",
    lastName: "Davidson",
    grade: "Sr.",
    position: "",
    image: "/images/roster/OrenDavidson.PNG",
    travelTeam: false,
    exec: false,
  },
  {
    id: 26,
    capNumber: "",
    firstName: "Yaseen",
    lastName: "Maatah",
    grade: "So.",
    position: "",
    image: "/images/roster/Yaseen.PNG",
    travelTeam: false,
    exec: false,
  },
  {
    id: 27,
    capNumber: "",
    firstName: "Charles",
    lastName: "Ross",
    grade: "Phd.",
    position: "",
    image: "",
    travelTeam: false,
    exec: false,
  },
  {
    id: 28,
    capNumber: "",
    firstName: "Anthony",
    lastName: "Petrashko",
    grade: "Sr.",
    position: "",
    image: "/images/roster/AnthonyPetrashenko.PNG",
    travelTeam: false,
    exec: false,
  },
  {
    id: 29,
    capNumber: "",
    firstName: "Jeffrey",
    lastName: "Mao",
    grade: "Sr.",
    position: "",
    image: "",
    travelTeam: false,
    exec: false,
  },
];

// 2025-2026 Roster (Current)
const players2025 = [
  {
    id: 1,
    capNumber: "1",
    firstName: "Daniel",
    lastName: "Schacht",
    grade: "Sr.",
    position: "Goalie",
    image: "/images/roster/Daniel.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 2,
    capNumber: "1A",
    firstName: "Anthony",
    lastName: "Petrashko",
    grade: "Sr.",
    position: "Goalie",
    image: "/images/roster/AnthonyPetrashenko.PNG",
    travelTeam: true,
    exec: false,
  },
  {
    id: 3,
    capNumber: "2",
    firstName: "Nadav",
    lastName: "Efrat",
    grade: "So.",
    position: "Utility",
    image: "/images/roster/Nadav.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 4,
    capNumber: "3",
    firstName: "Mathew",
    lastName: "Czech",
    grade: "Sr.",
    position: "Utility",
    image: "/images/roster/Matthew.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 5,
    capNumber: "4",
    firstName: "Roy",
    lastName: "Otamura",
    grade: "So.",
    position: "Utility",
    image: "/images/roster/Roy.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 6,
    capNumber: "5",
    firstName: "Charlie",
    lastName: "Wang",
    grade: "Graduate",
    position: "Point / Whole D",
    image: "/images/roster/CharlieWang.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 7,
    capNumber: "6",
    firstName: "Joe",
    lastName: "Shapiro",
    grade: "Jr.",
    position: "Utility",
    image: "/images/roster/JoeShapiro.png",
    travelTeam: true,
    exec: true,
  },
  {
    id: 8,
    capNumber: "7",
    firstName: "Kamil",
    lastName: "Czarnik",
    grade: "Sr.",
    position: "Utility",
    image: "/images/roster/KamilCzarnik.JPG",
    travelTeam: true,
    exec: true,
  },
  {
    id: 9,
    capNumber: "8",
    firstName: "Javier",
    lastName: "Garcia Mainieri",
    grade: "Graduate",
    position: "Whole Set",
    image: "/images/roster/Javi.png",
    travelTeam: true,
    exec: false,
  },
  // {
  //   id: 10,
  //   capNumber: "9",
  //   firstName: "",
  //   lastName: "",
  //   grade: "",
  //   position: "",
  //   image: "",
  //   travelTeam: false,
  //   exec: false,
  // },
  {
    id: 11,
    capNumber: "10",
    firstName: "Jake",
    lastName: "Lehman",
    grade: "Sr.",
    position: "Point / Whole D",
    image: "/images/roster/JakeLehman.png",
    travelTeam: true,
    exec: true,
  },
  {
    id: 12,
    capNumber: "11",
    firstName: "Hugo",
    lastName: "Allaume",
    grade: "Sr.",
    position: "Whole Set",
    image: "/images/exec/hugo.jpg",
    travelTeam: true,
    exec: false,
  },
  {
    id: 13,
    capNumber: "12",
    firstName: "Frank",
    lastName: "Krklus",
    grade: "Sr.",
    position: "Utility",
    image: "/images/roster/FrankKrklus.png",
    travelTeam: true,
    exec: true,
  },
  {
    id: 14,
    capNumber: "13",
    firstName: "Jack",
    lastName: "Walberer",
    grade: "Graduate",
    position: "Utility",
    image: "/images/roster/JackWalberer.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 15,
    capNumber: "14",
    firstName: "Martin",
    lastName: "Polomsky",
    grade: "So.",
    position: "Point / Whole D",
    image: "/images/roster/Martin.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 16,
    capNumber: "15",
    firstName: "Alan",
    lastName: "Jiang",
    grade: "Jr.",
    position: "Utility",
    image: "/images/roster/Alan.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 17,
    capNumber: "16",
    firstName: "Mac",
    lastName: "Mika",
    grade: "Fr.",
    position: "Utility",
    image: "/images/roster/Mac.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 18,
    capNumber: "17",
    firstName: "Avi",
    lastName: "Winick",
    grade: "Sr.",
    position: "Mascot",
    image: "/images/roster/Avi.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 19,
    capNumber: "18",
    firstName: "Vasilije",
    lastName: "Djuranovic",
    grade: "So.",
    position: "Utility",
    image: "/images/roster/Vas.png",
    travelTeam: true,
    exec: true,
  },
  {
    id: 20,
    capNumber: "19",
    firstName: "Henrique",
    lastName: "Coelho",
    grade: "Fr.",
    position: "Whole Set",
    image: "/images/roster/Henrique.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 21,
    capNumber: "20",
    firstName: "Patrick",
    lastName: "Alonso",
    grade: "Graduate",
    position: "Utility",
    image: "/images/roster/PatrickAlonso.png",
    travelTeam: true,
    exec: false,
  },
  // {
  //   id: 22,
  //   capNumber: "21",
  //   firstName: "",
  //   lastName: "",
  //   grade: "",
  //   position: "",
  //   image: "",
  //   travelTeam: false,
  //   exec: false,
  // },
  {
    id: 23,
    capNumber: "22",
    firstName: "Drew",
    lastName: "Morgan",
    grade: "Fr.",
    position: "Utility",
    image: "/images/roster/Drew.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 24,
    capNumber: "25",
    firstName: "Anthony",
    lastName: "Zebron",
    grade: "Fr.",
    position: "Utility",
    image: "/images/roster/Lebron.png",
    travelTeam: true,
    exec: false,
  },
  {
    id: 25,
    capNumber: "E",
    firstName: "Andrew",
    lastName: "Czech",
    grade: "So.",
    position: "Manager",
    image: "/images/roster/Andrew.png",
    travelTeam: false,
    exec: true,
  },
  // Non-travel team players who paid dues
  {
    id: 26,
    capNumber: "",
    firstName: "Peter",
    lastName: "Thompson",
    grade: "Sr.",
    position: "",
    image: "/images/roster/PeterThompson.PNG",
    travelTeam: false,
    exec: false,
  },
  {
    id: 27,
    capNumber: "",
    firstName: "Will",
    lastName: "Rendall",
    grade: "Fr.",
    position: "",
    image: "",
    travelTeam: false,
    exec: false,
  },
  {
    id: 28,
    capNumber: "",
    firstName: "Lazar",
    lastName: "Mirkovic",
    grade: "Fr.",
    position: "",
    image: "",
    travelTeam: false,
    exec: false,
  },
  {
    id: 29,
    capNumber: "",
    firstName: "Gabriel",
    lastName: "Aguila",
    grade: "Fr.",
    position: "",
    image: "",
    travelTeam: false,
    exec: false,
  },
  {
    id: 30,
    capNumber: "",
    firstName: "Terry",
    lastName: "Ryson",
    grade: "Graduate",
    position: "",
    image: "",
    travelTeam: false,
    exec: false,
  },
  {
    id: 31,
    capNumber: "",
    firstName: "Ethan",
    lastName: "Nicolls",
    grade: "Graduate",
    position: "",
    image: "/images/roster/Ethan.png",
    travelTeam: false,
    exec: false,
  },
  {
    id: 32,
    capNumber: "",
    firstName: "Stephen",
    lastName: "Hersh",
    grade: "Fr.",
    position: "",
    image: "",
    travelTeam: false,
    exec: false,
  },
  {
    id: 33,
    capNumber: "",
    firstName: "Gabe",
    lastName: "Alpher",
    grade: "Fr.",
    position: "",
    image: "",
    travelTeam: false,
    exec: false,
  },
  {
    id: 34,
    capNumber: "",
    firstName: "Patrick",
    lastName: "Mojsa",
    grade: "Sr.",
    position: "",
    image: "",
    travelTeam: false,
    exec: false,
  },
  {
    id: 35,
    capNumber: "",
    firstName: "David",
    lastName: "Hampton",
    grade: "Fr.",
    position: "",
    image: "",
    travelTeam: false,
    exec: false,
  },
  {
    id: 36,
    capNumber: "",
    firstName: "Porter",
    lastName: "Donohue",
    grade: "Fr.",
    position: "",
    image: "",
    travelTeam: false,
    exec: false,
  },
  {
    id: 37,
    capNumber: "",
    firstName: "Luke",
    lastName: "Helsdingen",
    grade: "Jr.",
    position: "",
    image: "",
    travelTeam: false,
    exec: false,
  },
  {
    id: 38,
    capNumber: "",
    firstName: "Adrian",
    lastName: "Rosales",
    grade: "So.",
    position: "",
    image: "/images/roster/AdrianRosales.PNG",
    travelTeam: false,
    exec: false,
  },
  {
    id: 39,
    capNumber: "",
    firstName: "Ethan",
    lastName: "Chan",
    grade: "Fr.",
    position: "",
    image: "",
    travelTeam: false,
    exec: false,
  },
  {
    id: 40,
    capNumber: "",
    firstName: "Konrad",
    lastName: "Kremper",
    grade: "Fr.",
    position: "",
    image: "",
    travelTeam: false,
    exec: false,
  },
];

function PlayerAvatar({ image }: { image?: string }) {
  return (
    <div className="relative flex items-center">
      <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={`${image}`}
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        ) : (
          <svg
            className="w-8 h-8 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <circle
              cx="12"
              cy="8"
              r="4"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M4 20c0-4 8-4 8-4s8 0 8 4"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

export default function Roster() {
  const [search, setSearch] = useState("");
  const [showTravelOnly, setShowTravelOnly] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState("2025-2026");

  const players = selectedSeason === "2025-2026" ? players2025 : players2024;

  const filtered = players.filter(
    (p) =>
      (!showTravelOnly || p.travelTeam) &&
      `${p.capNumber} ${p.firstName} ${p.lastName} ${p.grade} ${p.position}`
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#13294B]">Team Roster</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedSeason("2025-2026")}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                selectedSeason === "2025-2026"
                  ? "bg-[#13294B] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              2025-2026
            </button>
            <button
              onClick={() => setSelectedSeason("2024-2025")}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                selectedSeason === "2024-2025"
                  ? "bg-[#13294B] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              2024-2025
            </button>
          </div>
        </div>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search players..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF5F05] focus:ring-2 focus:ring-[#FF5F05]/20 focus:outline-none text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* Responsive: Table for md+ screens, cards for mobile */}
        <div className="hidden md:block overflow-x-auto rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  #
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Player
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Grade
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Position
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center text-gray-500 py-8">
                    No players found.
                  </td>
                </tr>
              )}
              {filtered.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-4 text-gray-700 font-medium">
                    {p.capNumber}
                  </td>
                  <td className="px-4 py-4 flex items-center gap-3">
                    <PlayerAvatar image={p.image} />
                    <span className="font-bold text-[#13294B]">
                      {p.firstName} {p.lastName}
                    </span>
                    {p.travelTeam && (
                      <span className="ml-2 px-2 py-0.5 rounded-full bg-[#FF5F05] text-white text-xs font-semibold">
                        Travel
                      </span>
                    )}
                    {p.exec && (
                      <span className="ml-2 px-2 py-0.5 rounded-full bg-[#13294B] text-white text-xs font-semibold">
                        Exec
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-gray-700">{p.grade}</td>
                  <td className="px-4 py-4 text-gray-700">
                    {p.travelTeam ? p.position : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Mobile card layout */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {filtered.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              No players found.
            </div>
          )}
          {filtered.map((p) => (
            <div
              key={p.id}
              className="flex items-center bg-white rounded-lg shadow p-3 gap-3">
              <PlayerAvatar image={p.image} />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#13294B] text-base">
                    {p.firstName} {p.lastName}
                  </span>
                  {p.travelTeam && (
                    <span className="px-2 py-0.5 rounded-full bg-[#FF5F05] text-white text-xs font-semibold">
                      Travel
                    </span>
                  )}
                  {p.exec && (
                    <span className="px-2 py-0.5 rounded-full bg-[#13294B] text-white text-xs font-semibold">
                      Exec
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-700">Grade: {p.grade}</div>
                {p.travelTeam && p.position && (
                  <div className="text-sm text-gray-700">
                    Position: {p.position}
                  </div>
                )}
                {p.capNumber && (
                  <div className="text-xs text-gray-500 mt-1">
                    #{p.capNumber}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
