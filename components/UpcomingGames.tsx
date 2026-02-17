export default function UpcomingGames() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#13294B] mb-6">Upcoming Tournaments & Games</h2>

      {/* Iowa State Tournament - first chronologically (Feb 27 - March 1) */}
      <div className="mb-8">
        <div className="bg-[#13294B] text-white p-4 rounded-t-lg">
          <h3 className="text-xl font-bold">Iowa State Tournament</h3>
          <p className="text-sm opacity-90">Saturday February 28 – Sunday March 1</p>
        </div>
        <div className="bg-white shadow-md rounded-b-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Date</th>
                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Time</th>
                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Opponent</th>
                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Home / Away</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 border-b text-gray-800">Saturday Feb 28</td>
                <td className="py-3 px-4 border-b text-gray-800">11:00 – 11:50</td>
                <td className="py-3 px-4 border-b text-gray-800">Iowa</td>
                <td className="py-3 px-4 border-b text-gray-800">Home</td>
              </tr>
              <tr className="bg-white">
                <td className="py-3 px-4 border-b text-gray-800">Saturday Feb 28</td>
                <td className="py-3 px-4 border-b text-gray-800">1:20 – 2:00</td>
                <td className="py-3 px-4 border-b text-gray-800">Northwestern</td>
                <td className="py-3 px-4 border-b text-gray-800">Away</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 border-b text-gray-800">Saturday Feb 28</td>
                <td className="py-3 px-4 border-b text-gray-800">4:20 – 5:10</td>
                <td className="py-3 px-4 border-b text-gray-800">Kentucky</td>
                <td className="py-3 px-4 border-b text-gray-800">Away</td>
              </tr>
              <tr className="bg-white">
                <td className="py-3 px-4 border-b text-gray-800">Sunday Mar 1</td>
                <td className="py-3 px-4 border-b text-gray-800">8:00 – 8:50</td>
                <td className="py-3 px-4 border-b text-gray-800">Iowa State</td>
                <td className="py-3 px-4 border-b text-gray-800">Away</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Northwestern Tournament */}
      <div className="mb-8">
        <div className="bg-[#13294B] text-white p-4 rounded-t-lg">
          <h3 className="text-xl font-bold">Northwestern Tournament</h3>
          <p className="text-sm opacity-90">Saturday March 7 – Sunday March 8</p>
        </div>
        <div className="bg-white shadow-md rounded-b-lg overflow-hidden">
          <div className="p-8 text-center text-gray-600">
            <p>Opponents and game times TBD.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
