import ContactForm from "@/components/ContactForm"
import DirectContact from "@/components/DirectContact"
import PageHeader from "@/components/PageHeader"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Contact" />

      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Contact Form in a bubble */}
        <div className="md:w-2/3">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <ContactForm />
          </div>
        </div>

        {/* Direct Contact in a bubble */}
        <div className="md:w-1/3 mt-8 md:mt-0">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <DirectContact />
          </div>
        </div>
      </div>
    </div>
  )
}
