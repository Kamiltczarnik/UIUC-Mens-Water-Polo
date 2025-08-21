export default function UpcomingGames() {
  const tournaments = [
    {
      name: "Ohio State University Tournament",
      dates: "Saturday - Sunday, September 19-20",
      location: "Ohio State University",
      games: [
        {
          date: "Saturday",
          time: "11:50 AM",
          opponent: "Ohio State University",
          homeAway: "Away",
        },
        {
          date: "Saturday",
          time: "2:20 PM",
          opponent: "Purdue University",
          homeAway: "Away",
        },
        {
          date: "Saturday",
          time: "4:50 PM",
          opponent: "Michigan",
          homeAway: "Away",
        },
        {
          date: "Saturday",
          time: "7:20 PM",
          opponent: "Michigan State University Team B",
          homeAway: "Home",
        },
        {
          date: "Sunday",
          time: "1:00 PM",
          opponent: "Michigan State University Team A",
          homeAway: "Home",
        },
      ],
    },
    {
      name: "University of Iowa Tournament",
      dates: "Saturday - Sunday, October 4-5",
      location: "University of Iowa",
      games: [
        {
          date: "Saturday",
          time: "10:45 AM",
          opponent: "Wisconsin U",
          homeAway: "Home",
        },
        {
          date: "Saturday",
          time: "1:00 PM",
          opponent: "Indiana U",
          homeAway: "Home",
        },
        {
          date: "Saturday",
          time: "5:45 PM",
          opponent: "Iowa",
          homeAway: "Away",
        },
        {
          date: "Sunday",
          time: "9:30 AM",
          opponent: "Wisconsin U",
          homeAway: "Home",
        },
      ],
    },
    {
      name: "Big 10s Tournament",
      dates: "Saturday - Sunday, October 25-26",
      location: "Michigan",
      games: [
        {
          date: "TBD",
          time: "TBD",
          opponent: "TBD",
          homeAway: "TBD",
        },
      ],
    },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#13294B] mb-6">Upcoming Tournaments & Games</h2>
      
      {tournaments.map((tournament, tournamentIndex) => (
        <div key={tournamentIndex} className="mb-8">
          <div className="bg-[#13294B] text-white p-4 rounded-t-lg">
            <h3 className="text-xl font-bold">{tournament.name}</h3>
            <p className="text-sm opacity-90">{tournament.dates} • {tournament.location}</p>
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
                {tournament.games.map((game, gameIndex) => (
                  <tr
                    key={gameIndex}
                    className={gameIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-4 border-b text-gray-800 font-medium">{game.date}</td>
                    <td className="py-3 px-4 border-b text-gray-800">{game.time}</td>
                    <td className="py-3 px-4 border-b text-gray-800">{game.opponent}</td>
                    <td className="py-3 px-4 border-b">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        game.homeAway === 'Home' 
                          ? 'bg-[#13294B] text-white' 
                          : game.homeAway === 'Away'
                          ? 'bg-[#FF5F05] text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {game.homeAway}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
