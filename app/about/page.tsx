import TeamHistory from "@/components/TeamHistory"
import CoachProfiles from "@/components/CoachProfiles"
import PageHeader from "@/components/PageHeader"

export default function About() {
  return (
    <div className="site-container py-8">
      <PageHeader title="About" />
      <CoachProfiles />
      <TeamHistory />
    </div>
  )
}
