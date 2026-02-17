"use client"

export default function SeasonResults() {
  const currentSeason = "2025-2026"
  const currentSeasonGames = [
    {
      name: "Wild Bill Home Tournament",
      dateRange: "February 13-15",
      games: [
        { date: "Feb 13-15", opponent: "—", score: "No results / tournament canceled early" },
      ],
    },
    {
      name: "Big 10 Championships",
      dateRange: "October 25-26",
      games: [
        { date: "Oct 25", opponent: "Purdue", score: "L 9-11" },
        { date: "Oct 25", opponent: "Iowa", score: "L 12-13 (OT)" },
        { date: "Oct 26", opponent: "Michigan State 'B'", score: "L 8-11" },
      ],
    },
    {
      name: "University of Iowa Tournament",
      dateRange: "October 4-5",
      games: [
        { date: "Oct 4", opponent: "Indiana 'A'", score: "W 9-8" },
        { date: "Oct 4", opponent: "Iowa", score: "L 15-16 (OT)" },
        { date: "Oct 5", opponent: "Indiana 'A'", score: "L 14-8" },
        { date: "Oct 5", opponent: "Indiana 'B'", score: "W 16-5" },
      ],
    },
    {
      name: "Ohio State University Tournament",
      dateRange: "September 20-21",
      games: [
        { date: "Sep 20", opponent: "Purdue", score: "L 10-5" },
        { date: "Sep 20", opponent: "Michigan State 'A'", score: "L 14-7" },
        { date: "Sep 21", opponent: "Michigan State 'B'", score: "W 11-2" },
        { date: "Sep 21", opponent: "Ohio State", score: "L 15-8" },
      ],
    },
  ]

  const previousSeason = "2024-2025"
  const previousSeasonGames = [
    {
      name: "Big Ten Division Championship",
      dateRange: "October 26-27, 2024",
      games: [
        { date: "Oct 26", opponent: "Michigan", score: "L 19-3" },
        { date: "Oct 26", opponent: "Iowa", score: "L 15-14" },
        { date: "Oct 26", opponent: "Wisconsin", score: "L 12-11" },
      ],
    },
    {
      name: "University of Iowa Tournament",
      dateRange: "October 5-6, 2024",
      games: [
        { date: "Oct 5", opponent: "Iowa", score: "L 19-13" },
        { date: "Oct 5", opponent: "Indiana", score: "L 18-10" },
        { date: "Oct 6", opponent: "Wisconsin", score: "W 13-11" },
        { date: "Oct 6", opponent: "Indiana", score: "L 11-9" },
      ],
    },
    {
      name: "Ohio State University Tournament",
      dateRange: "September 14-15, 2024",
      games: [
        { date: "Sep 14", opponent: "Purdue", score: "L 9-5" },
        { date: "Sep 14", opponent: "Michigan", score: "L 16-11" },
        { date: "Sep 15", opponent: "Michigan State", score: "L 16-6" },
        { date: "Sep 15", opponent: "Ohio State", score: "L 14-7" },
      ],
    },
  ]

  return (
    <div className="mb-12 space-y-12">
      {/* Current Season */}
      <div>
        <h2 className="text-2xl font-bold text-[#13294B] mb-6">
          {currentSeason} Season Results
        </h2>

        {currentSeasonGames.map((tourn, idx) => (
          <section
            key={idx}
            className="bg-white shadow-md rounded-lg overflow-hidden mb-6"
          >
            <div className="bg-[#13294B] text-white px-4 py-3">
              <h3 className="text-lg font-semibold">{tourn.name}</h3>
              <p className="text-sm opacity-90 mt-0.5">{tourn.dateRange}</p>
            </div>
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Date</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Opponent</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Result</th>
                </tr>
              </thead>
              <tbody>
                {tourn.games.map((game, i) => {
                  const isWin = game.score.startsWith('W')
                  const isLoss = game.score.startsWith('L')
                  
                  return (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="py-3 px-4 border-b text-gray-800">{game.date}</td>
                      <td className="py-3 px-4 border-b text-gray-800">{game.opponent}</td>
                      <td className="py-3 px-4 border-b">
                        <span className={`font-semibold ${
                          isWin ? 'text-green-600' : isLoss ? 'text-red-600' : 'text-gray-600'
                        }`}>
                          {game.score}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </section>
        ))}
      </div>

      {/* Previous Season */}
      <div>
        <h2 className="text-2xl font-bold text-[#13294B] mb-6">
          Previous Season Results
        </h2>

        {previousSeasonGames.map((tourn, idx) => (
          <section
            key={idx}
            className="bg-white shadow-md rounded-lg overflow-hidden mb-6 opacity-75"
          >
            <div className="bg-gray-600 text-white px-4 py-3">
              <h3 className="text-lg font-semibold">{tourn.name}</h3>
              <p className="text-sm opacity-90 mt-0.5">{tourn.dateRange}</p>
            </div>
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Date</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Opponent</th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold">Result</th>
                </tr>
              </thead>
              <tbody>
                {tourn.games.map((game, i) => {
                  const isWin = game.score.startsWith('W')
                  const isLoss = game.score.startsWith('L')
                  
                  return (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="py-3 px-4 border-b text-gray-800">{game.date}</td>
                      <td className="py-3 px-4 border-b text-gray-800">{game.opponent}</td>
                      <td className="py-3 px-4 border-b">
                        <span className={`font-semibold ${
                          isWin ? 'text-green-600' : isLoss ? 'text-red-600' : 'text-gray-600'
                        }`}>
                          {game.score}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </section>
        ))}
      </div>
    </div>
  )
}
