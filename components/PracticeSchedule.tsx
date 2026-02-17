export default function PracticeSchedule() {
  const practices = [
    { day: "Monday", time: "8:30 PM - 10:00 PM", location: "ARC Indoor Pool" },
    { day: "Thursday", time: "8:30 PM - 10:00 PM", location: "ARC Indoor Pool" },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#13294B] mb-2">
        Weekly Practice Schedule (Spring 2026)
      </h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-[#13294B] text-white">
            <tr>
              <th className="py-3 px-4 text-left">Day</th>
              <th className="py-3 px-4 text-left">Time</th>
              <th className="py-3 px-4 text-left">Location</th>
            </tr>
          </thead>
          <tbody>
            {practices.map((practice, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="py-3 px-4 border-b">{practice.day}</td>
                <td className="py-3 px-4 border-b">{practice.time}</td>
                <td className="py-3 px-4 border-b">{practice.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
