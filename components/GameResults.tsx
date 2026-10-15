"use client"

export default function SeasonResults() {
  const currentSeason = "2025-2026"
  const currentSeasonGames = [
    {
      name: "Northwestern Tournament",
      dateRange: "March 7-8, 2026",
      games: [
        { date: "Mar 7-8", opponent: "—", score: "Results not recorded" },
      ],
    },
    {
      name: "Iowa State Tournament",
      dateRange: "February 28-March 1, 2026",
      games: [
        { date: "Feb 28", opponent: "Iowa", score: "Result not recorded" },
        { date: "Feb 28", opponent: "Northwestern", score: "Result not recorded" },
        { date: "Feb 28", opponent: "Kentucky", score: "Result not recorded" },
        { date: "Mar 1", opponent: "Iowa State", score: "Result not recorded" },
      ],
    },
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
        { date: "Oct 5", opponent: "Indiana 'A'", score: "L 8-14" },
        { date: "Oct 5", opponent: "Indiana 'B'", score: "W 16-5" },
      ],
    },
    {
      name: "Ohio State University Tournament",
      dateRange: "September 20-21",
      games: [
        { date: "Sep 20", opponent: "Purdue", score: "L 5-10" },
        { date: "Sep 20", opponent: "Michigan State 'A'", score: "L 7-14" },
        { date: "Sep 21", opponent: "Michigan State 'B'", score: "W 11-2" },
        { date: "Sep 21", opponent: "Ohio State", score: "L 8-15" },
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
      <section aria-labelledby="results-2026" className="space-y-6">
        <h2 id="results-2026" className="text-2xl font-bold text-[#13294B]">2026-2027 Season Results</h2>
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="bg-[#13294B] px-4 py-3 text-white">
            <h3 className="text-lg font-semibold">Purdue University Tournament</h3>
            <p className="mt-0.5 text-sm opacity-90">October 3-4, 2026 · West Lafayette, IN</p>
          </div>
          <div className="overflow-x-auto">
            <table className="mobile-game-table min-w-full">
              <caption className="sr-only">Illinois results at Purdue. Illinois score listed first.</caption>
              <thead className="bg-gray-100"><tr>
                {["Date", "Time", "Opponent", "Result", "Video"].map((heading) => <th key={heading} scope="col" className="px-4 py-3 text-left font-semibold text-gray-700">{heading}</th>)}
              </tr></thead>
              <tbody>
                {[
                  { date: "Oct 3", time: "2:50 PM", opponent: 'Michigan "B"', score: "W 12-4", video: true },
                  { date: "Oct 3", time: "5:50 PM", opponent: "Michigan State", score: "L 4-9", video: true },
                  { date: "Oct 3", time: "8:50 PM", opponent: 'Michigan "A"', score: "L 3-12", video: true },
                  { date: "Oct 4", time: "12:35 PM", opponent: "Ohio State", score: "L 5-18", video: false },
                ].map((game, index) => (
                  <tr key={game.date + game.time} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td data-label="Date" className="whitespace-nowrap border-b px-4 py-3 text-gray-800">{game.date}</td>
                    <td data-label="Time" className="whitespace-nowrap border-b px-4 py-3 text-gray-800">{game.time}</td>
                    <td data-label="Opponent" className="border-b px-4 py-3 text-gray-800">{game.opponent}</td>
                    <td data-label="Result" className={`whitespace-nowrap border-b px-4 py-3 font-semibold ${game.score.startsWith("W") ? "text-green-600" : "text-red-600"}`}>{game.score}</td>
                    <td data-label="Video" className="whitespace-nowrap border-b px-4 py-3">{game.video ? <a href="https://www.cwpatv.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#13294B] underline hover:text-[#FF5F05]">Watch (Free)</a> : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <details className="group rounded-xl border border-gray-200 bg-gray-50">
        <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-5 py-4 text-xl font-bold text-[#13294B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF5F05] [&::-webkit-details-marker]:hidden">
          Past Seasons
          <span aria-hidden="true" className="transition-transform group-open:rotate-180">⌄</span>
        </summary>
        <div className="px-4 pb-4 sm:px-5">
        <h3 className="mb-4 font-semibold text-gray-600">{currentSeason} Results</h3>

        {currentSeasonGames.map((tourn, idx) => (
          <section
            key={idx}
            className="bg-white shadow-md rounded-lg overflow-hidden mb-6 opacity-75"
          >
            <div className="bg-gray-600 text-white px-4 py-3">
              <h3 className="text-lg font-semibold">{tourn.name}</h3>
              <p className="text-sm opacity-90 mt-0.5">{tourn.dateRange} · {currentSeason}</p>
            </div>
            <table className="mobile-game-table min-w-full">
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
                      <td data-label="Date" className="py-3 px-4 border-b text-gray-800">{game.date}</td>
                      <td data-label="Opponent" className="py-3 px-4 border-b text-gray-800">{game.opponent}</td>
                      <td data-label="Result" className="py-3 px-4 border-b">
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


        <h3 className="mb-4 mt-8 font-semibold text-gray-600">{previousSeason} Results</h3>
        {previousSeasonGames.map((tourn, idx) => (
          <section
            key={idx}
            className="bg-white shadow-md rounded-lg overflow-hidden mb-6 opacity-75"
          >
            <div className="bg-gray-600 text-white px-4 py-3">
              <h3 className="text-lg font-semibold">{tourn.name}</h3>
              <p className="text-sm opacity-90 mt-0.5">{tourn.dateRange}</p>
            </div>
            <table className="mobile-game-table min-w-full">
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
                      <td data-label="Date" className="py-3 px-4 border-b text-gray-800">{game.date}</td>
                      <td data-label="Opponent" className="py-3 px-4 border-b text-gray-800">{game.opponent}</td>
                      <td data-label="Result" className="py-3 px-4 border-b">
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
      </details>
    </div>
  )
}
