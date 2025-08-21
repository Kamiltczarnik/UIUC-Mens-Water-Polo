export default function PracticeSchedule() {
  const practices = [
    { day: "Monday", time: "8:30 PM - 10:00 PM", location: "ARC Indoor Pool" },
    { day: "Tuesday", time: "7:00 PM - 8:30 PM", location: "ARC Indoor Pool" },
    { day: "Thursday", time: "8:30 PM - 10:00 PM", location: "ARC Indoor Pool" },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#13294B] mb-2">
        Weekly Practice Schedule (Starting Tuesday September 2)
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
      
      {/* Notes Section */}
      <div className="mt-4">
        <div className="flex items-start mb-3">
          <span className="text-yellow-500 mr-2">★</span>
          <div className="text-sm text-gray-600">
            <div className="mb-2">
              <span className="font-semibold">Tryout Dates:</span> Tuesday September 2, Thursday September 4
            </div>
            <div className="mb-2">
              <span className="font-semibold">No Practice:</span> Thursday 10/2, Thursday 10/23, Thursday 11/13, Thursday 12/4
            </div>
            <div className="mb-2">
              <span className="font-semibold">Shortened Practice (7:00 PM - 8:00 PM):</span> Tuesday 9/30, Tuesday 10/21, Tuesday 11/11, Tuesday 12/2
            </div>
            <div>
              <span className="font-semibold">No Practice:</span> Fall Break (November 22 – 30)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
