import PracticeSchedule from "@/components/PracticeSchedule"
import GearChecklist from "@/components/GearChecklist"
import LocationMap from "@/components/LocationMap"
import PageHeader from "@/components/PageHeader"

export default function PracticeInfo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Practice Info" />
      <PracticeSchedule />
      <GearChecklist />
    </div>
  )
}
