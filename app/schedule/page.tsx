import UpcomingGames from "@/components/UpcomingGames"
import GameResults from "@/components/GameResults"
import PageHeader from "@/components/PageHeader"

export default function Schedule() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Schedule & Results" />
      <UpcomingGames />
      <GameResults />
    </div>
  )
}
