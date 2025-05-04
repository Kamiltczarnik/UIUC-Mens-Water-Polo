"use client"

export default function SeasonResults() {
  const season = "2024-2025"
  const tournaments = [
    {
      name: "Ohio State University Tournament",
      games: [
        { date: "Sep 14", opponent: "Purdue", score: "L 9-5" },
        { date: "Sep 14", opponent: "Michigan", score: "L 16-11" },
        { date: "Sep 15", opponent: "Michigan State", score: "L 16-6" },
        { date: "Sep 15", opponent: "Ohio State", score: "L 14-7" },
      ],
    },
    {
      name: "University of Iowa Tournament",
      games: [
        { date: "Oct 5", opponent: "Iowa", score: "L 19-13" },
        { date: "Oct 5", opponent: "Indiana", score: "L 18-10" },
        { date: "Oct 6", opponent: "Wisconsin", score: "W 13-11" },
        { date: "Oct 6", opponent: "Indiana", score: "L 11-9" },
      ],
    },
    {
      name: "Big Ten Division Championship",
      games: [
        { date: "Oct 26", opponent: "Michigan", score: "L 19-3" },
        { date: "Oct 26", opponent: "Iowa", score: "L 15-14" },
        { date: "Oct 26", opponent: "Wisconsin", score: "L 12-11" },
      ],
    },
  ]

  return (
    <div className="mb-12 space-y-12">
      <h2 className="text-2xl font-bold text-[#13294B]">
        {season} Season Results
      </h2>

      {tournaments.map((tourn) => (
        <section
          key={tourn.name}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <h3 className="bg-[#13294B] text-white px-4 py-2 text-lg font-semibold">
            {tourn.name}
          </h3>
          <table className="min-w-full">
            <thead className="bg-[#13294B] text-white">
              <tr>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Opponent</th>
                <th className="py-3 px-4 text-left">Result</th>
              </tr>
            </thead>
            <tbody>
              {tourn.games.map((game, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="py-3 px-4 border-b">{game.date}</td>
                  <td className="py-3 px-4 border-b">{game.opponent}</td>
                  <td className="py-3 px-4 border-b">{game.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  )
}
