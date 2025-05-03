import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative h-[500px] w-full">
      <Image src="/images/OSU-2025.jpeg" alt="UIUC Men's Water Polo Team" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">WELCOME TO</h2>
        <h1 className="text-4xl md:text-6xl font-bold">UIUC MEN'S WATER POLO</h1>
      </div>
    </div>
  )
}
