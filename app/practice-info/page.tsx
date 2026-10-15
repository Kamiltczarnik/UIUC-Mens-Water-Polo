import PracticeSchedule from "@/components/PracticeSchedule"
import GearChecklist from "@/components/GearChecklist"
import LocationMap from "@/components/LocationMap"
import PageHeader from "@/components/PageHeader"

export default function PracticeInfo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Practice Info" />
      <section className="mb-8 rounded-xl border border-orange-100 bg-orange-50 p-6">
        <h2 className="text-2xl font-bold text-[#13294B]">Join the Team</h2>
        <p className="mt-2 text-gray-700">Check the practice schedule below and join our GroupMe for team updates and information about getting started.</p>
        <a href="https://groupme.com/join_group/116790929/jgpe4gHC" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-lg bg-[#13294B] px-5 py-3 font-semibold text-white transition hover:bg-[#203e67] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5F05]">Join Our GroupMe</a>
      </section>
      <PracticeSchedule />
      <GearChecklist />
    </div>
  )
}
