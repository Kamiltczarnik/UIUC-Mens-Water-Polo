"use client"

import Image from "next/image"

export default function TeamHistory() {
  const performanceData = [
    { year: 2009, finish: "3rd" },
    { year: 2010, finish: "4th" },
    { year: 2011, finish: "3rd" },
    { year: 2012, finish: "3rd" },
    { year: 2013, finish: "4th" },
    { year: 2014, finish: "4th" },
    { year: 2015, finish: "2nd" },
    { year: 2016, finish: "5th" },
    { year: 2017, finish: "5th" },
    { year: 2018, finish: "5th" },
    { year: 2019, finish: "7th" },
    { year: 2020, finish: "N/A COVID" },
    { year: 2021, finish: "6th" },
    { year: 2022, finish: "7th" },
    { year: 2023, finish: "8th" },
    { year: 2024, finish: "8th" },
    { year: 2025, finish: "8th" }
  ]

  // Create a copy sorted descending by year
  const sortedPerformance = [...performanceData].sort((a, b) => b.year - a.year)

  const bigTenTeams = [
    { name: "University of Illinois", logo: "/images/logos/illinois.png" },
    { name: "Indiana University", logo: "/images/logos/indiana.png" },
    { name: "University of Iowa", logo: "/images/logos/iowa.png" },
    { name: "University of Michigan", logo: "/images/logos/michigan.png" },
    { name: "Michigan State University", logo: "/images/logos/michigan-state.png" },
    { name: "Purdue University", logo: "/images/logos/purdue.png" },
    { name: "University of Wisconsin", logo: "/images/logos/wisconsin.png" },
    { name: "Ohio State University", logo: "/images/logos/ohio-state.png" },
  ]

  return (
    <div className="mb-12 space-y-12">
      {/* History & Mission */}
      <div>
        <h2 className="text-2xl font-bold text-[#13294B] mb-4 ">
          Team History and Mission
        </h2>
        <p className="text-gray-700 mb-4 ">
          We are a group of men at the University of Illinois who enjoy the sport of
          water polo and the camaraderie of the team. We practice both fall and spring
          semesters with our fall semester acting as our season. During the fall semester,
          we practice 3-4 nights per week and travel to three Big Ten tournaments from
          late September to end of October to compete for the Big Ten Division title.
          The spring semester is our off-season in which we practice about 2 nights a week.
          We also co-host a tournament of our own and travel to a couple tournaments outside
          of the Big Ten.
        </p>
      </div>

      {/* Conference Finishes */}
      <section>
        <h3 className="text-xl font-bold text-[#13294B] mb-4 text-center">
          B1G Ten Conference Finishes
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#13294B] text-white">
                <th className="px-4 py-2 text-left">Year</th>
                <th className="px-4 py-2 text-left">Finish</th>
              </tr>
            </thead>
            <tbody>
              {sortedPerformance.map((row) => (
                <tr key={row.year} className="even:bg-gray-100">
                  <td className="px-4 py-2">{row.year}</td>
                  <td className="px-4 py-2">{row.finish}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Big Ten Conference Teams */}
      <section>
        <h3 className="text-xl font-bold text-[#13294B] mb-4 text-center">
          Big Ten Conference Teams
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center">
          {bigTenTeams.map((team) => (
            <div key={team.name} className="flex flex-col items-center space-y-2">
              <div className="relative w-16 h-16">
                <Image
                  src={team.logo}
                  alt={`${team.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-center text-gray-800">{team.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
