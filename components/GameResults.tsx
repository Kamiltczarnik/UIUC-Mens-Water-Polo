export default function GameResults() {
  const results = [
    {
      date: "Apr 15",
      opponent: "Northwestern",
      score: "W 10-8",
      location: "Home",
    },
    {
      date: "Apr 8",
      opponent: "Michigan State",
      score: "L 7-9",
      location: "Away",
    },
    {
      date: "Mar 30",
      opponent: "Iowa",
      score: "W 12-6",
      location: "Home",
    },
  ]

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#13294B] mb-4">Results</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-[#13294B] text-white">
            <tr>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Opponent</th>
              <th className="py-3 px-4 text-left">Result</th>
              <th className="py-3 px-4 text-left">Location</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="py-3 px-4 border-b">{result.date}</td>
                <td className="py-3 px-4 border-b">{result.opponent}</td>
                <td className="py-3 px-4 border-b">{result.score}</td>
                <td className="py-3 px-4 border-b">{result.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
