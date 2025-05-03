import ContactForm from "@/components/ContactForm"
import DirectContact from "@/components/DirectContact"
import PageHeader from "@/components/PageHeader"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Contact" />
      <ContactForm />
      <DirectContact />
    </div>
  )
}
