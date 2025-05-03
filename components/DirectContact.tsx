export default function DirectContact() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#13294B] mb-4">Direct Contact Info</h2>
      <div className="space-y-2">
        <p>
          <span className="font-bold">Email:</span>{" "}
          <a href="mailto:illinimenswaterpolo@gmail.com" className="text-[#E84A27] hover:underline">
          illinoismenswaterpolo@gmail.com
          </a>
        </p>
        <p>
          <span className="font-bold">Phone:</span>{" "}
          <a href="tel:2173331000" className="text-[#E84A27] hover:underline">
            (217) 333-1000
          </a>
        </p>
      </div>
    </div>
  )
}
