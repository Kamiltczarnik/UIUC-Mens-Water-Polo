export default function LocationMap() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#13294B] mb-4">Practice Location</h2>
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.9259849404513!2d-88.23879492346177!3d40.10133197149633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd70f5a438d47%3A0x5f5b3c1c9d6ea7f7!2sActivities%20and%20Recreation%20Center!5e0!3m2!1sen!2sus!4v1714763000000!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
      <p className="mt-2 text-gray-600">ARC Outdoor Pool, 201 E. Peabody Drive, Champaign, IL 61820</p>
    </div>
  )
}
