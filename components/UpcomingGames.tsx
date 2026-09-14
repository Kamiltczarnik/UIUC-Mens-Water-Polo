type Game = { day: string; time: string; matchup: string; gameNumber?: string };
type Tournament = { name: string; location: string; dates: string; note?: string; games: Game[] };

const tournaments: Tournament[] = [
  {
    name: "Crossover Tournament",
    location: "Purdue University, West Lafayette, IN",
    dates: "October 3-4, 2026",
    games: [
      { day: "Saturday, Oct. 3", time: "2:50 PM", matchup: 'University of Illinois vs University of Michigan "B"' },
      { day: "Saturday, Oct. 3", time: "5:50 PM", matchup: "Michigan State University vs University of Illinois" },
      { day: "Saturday, Oct. 3", time: "8:50 PM", matchup: 'University of Illinois vs University of Michigan "A"' },
      { day: "Sunday, Oct. 4", time: "12:35 PM", matchup: "Ohio State University vs University of Illinois" },
    ],
  },
  {
    name: "West Conference Tournament",
    location: "University of Iowa, Iowa City, IA",
    dates: "October 10-12, 2026",
    games: [
      { day: "Saturday, Oct. 10", time: "11:00 AM", matchup: "University of Iowa vs University of Illinois" },
      { day: "Saturday, Oct. 10", time: "1:10 PM", matchup: "University of Illinois vs Indiana University" },
      { day: "Sunday, Oct. 12", time: "9:15 AM", matchup: "University of Illinois vs Indiana University" },
      { day: "Sunday, Oct. 12", time: "1:00 PM", matchup: "University of Iowa vs University of Illinois" },
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
