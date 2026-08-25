type Game = { day: string; time: string; matchup: string; gameNumber?: string };
type Tournament = { name: string; location: string; dates: string; note?: string; games: Game[] };

const tournaments: Tournament[] = [
  {
    name: "Tournament 1",
    location: "Site TBD",
    dates: "Dates TBD",
    games: [
      { day: "Saturday", time: "11:15 AM", matchup: "University of Illinois vs Indiana University" },
      { day: "Saturday", time: "2:30 PM", matchup: "Purdue University vs University of Illinois" },
      { day: "Saturday", time: "8:15 PM", matchup: "University of Iowa vs University of Illinois" },
      { day: "Sunday", time: "10:00 AM", matchup: "University of Illinois vs Indiana University" },
    ],
  },
  {
    name: "University of Michigan Tournament",
    location: "University of Michigan, Ann Arbor, MI",
    dates: "October 10-11, 2026",
    games: [
      { day: "Saturday, Oct. 10", time: "2:05 PM", matchup: 'University of Michigan "B" vs University of Illinois' },
      { day: "Saturday, Oct. 10", time: "4:50 PM", matchup: "University of Illinois vs Michigan State University" },
      { day: "Saturday, Oct. 10", time: "7:35 PM", matchup: 'University of Michigan "A" vs University of Illinois' },
      { day: "Sunday, Oct. 11", time: "2:15 PM", matchup: "University of Illinois vs Ohio State University" },
    ],
  },
  {
    name: "Big Ten Division Championship",
    location: "Ohio State University (OSU)",
    dates: "October 24-25, 2026",
    games: [],
  },
];

export default function UpcomingGames() {
  return (
    <div className="mb-12">
      <h2 className="mb-6 text-2xl font-bold text-[#13294B]">2026 Tournament Schedule</h2>
      {tournaments.map((tournament) => {
        const showsGameNumber = tournament.games.some((game) => game.gameNumber);
        return (
          <section key={tournament.name} className="mb-8 overflow-hidden rounded-lg bg-white shadow-md">
            <div className="bg-[#13294B] p-4 text-white">
              <h3 className="text-xl font-bold">{tournament.name}</h3>
              <p className="text-sm opacity-90">{tournament.location}</p>
              <p className="text-sm opacity-90">{tournament.dates}</p>
            </div>
            {tournament.note && <p className="border-b border-orange-200 bg-orange-50 px-4 py-3 text-sm font-medium text-gray-700">{tournament.note}</p>}
            {tournament.games.length > 0 && <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-100"><tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Date</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Time</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Matchup</th>
                  {showsGameNumber && <th className="px-4 py-3 text-left font-semibold text-gray-700">Game / Place</th>}
                </tr></thead>
                <tbody>{tournament.games.map((game, index) => (
                  <tr key={`${game.day}-${game.time}`} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="whitespace-nowrap border-b px-4 py-3 text-gray-800">{game.day}</td>
                    <td className="whitespace-nowrap border-b px-4 py-3 text-gray-800">{game.time}</td>
                    <td className="border-b px-4 py-3 text-gray-800">{game.matchup}</td>
                    {showsGameNumber && <td className="whitespace-nowrap border-b px-4 py-3 text-gray-800">{game.gameNumber}</td>}
                  </tr>
                ))}</tbody>
              </table>
            </div>}
          </section>
        );
      })}
    </div>
  );
}
