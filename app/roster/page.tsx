import PlayerGrid from "@/components/PlayerGrid"
import PageHeader from "@/components/PageHeader"

export default function Roster() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Roster" />
      <PlayerGrid />
    </div>
  )
}
