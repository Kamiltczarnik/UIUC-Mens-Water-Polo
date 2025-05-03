export default function GearChecklist() {
  const gearItems = ["Water polo suit", "Cap", "Goggles", "Towel", "Water bottle"]

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#13294B] mb-4">Gear Checklist</h2>
      <ul className="list-disc pl-5 space-y-2">
        {gearItems.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
