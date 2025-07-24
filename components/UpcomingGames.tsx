export default function UpcomingGames() {
  const games = [
    {
      date: "TBD",
      opponent: "TBD",
      location: "TBD",
      homeAway: "TBD",
    },
    // {
    //   date: "Mon, 25",
    //   opponent: "Northwestern",
    //   location: "ARC Outdoor Pool",
    //   homeAway: "Home",
    // },
    // {
    //   date: "Tue, 30",
    //   opponent: "Michigan State",
    //   location: "ARC Outdoor Pool",
    //   homeAway: "Home",
    // },
    // {
    //   date: "Wed, 21",
    //   opponent: "Iowa",
    //   location: "SFC Rebrous, AM",
    //   homeAway: "Away",
    // },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#13294B] mb-4">Upcoming Games</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-[#13294B] text-white">
            <tr>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Opponent</th>
              <th className="py-3 px-4 text-left">Home / Away</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="py-3 px-4 border-b">{game.date}</td>
                <td className="py-3 px-4 border-b">{game.opponent}</td>
                <td className="py-3 px-4 border-b">{game.homeAway}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
