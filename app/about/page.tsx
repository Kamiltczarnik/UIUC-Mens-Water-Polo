import TeamHistory from "@/components/TeamHistory"
import CoachProfiles from "@/components/CoachProfiles"
import PageHeader from "@/components/PageHeader"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="About" />
      <TeamHistory />
      <CoachProfiles />
    </div>
  )
}
