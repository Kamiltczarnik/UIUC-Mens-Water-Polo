import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const highlights = [
  { image: "/images/team-highlights/wild-bill2025.jpeg", title: "Wild Bill 2025" },
  { image: "/images/team-highlights/Iowa-teampic.jpeg", title: "On the road at Iowa" },
  { image: "/images/team-highlights/wild-bill2024.JPG", title: "Wild Bill 2024" },
];

export default function Hero() {
  return (
    <div className="bg-[#faf9f6] text-[#13294B]">
      <section className="mx-auto grid max-w-7xl lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center px-6 py-14 sm:px-12 sm:py-20 lg:py-24">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">University of Illinois Urbana-Champaign</p>
          <div className="mb-6 h-1 w-12 bg-[#FF5F05]" />
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">Illinois<br />Men’s Water Polo</h1>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link href="/practice-info/" className="inline-flex min-h-12 items-center gap-3 rounded bg-[#13294B] px-6 py-3 font-semibold text-white transition hover:bg-[#203e67] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF5F05]">Join the Team <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link href="/about/" className="py-3 font-semibold underline decoration-[#FF5F05] underline-offset-8 hover:text-[#c44700]">Get to know us</Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
          <Image src="/images/OSU-2025.jpeg" alt="Illinois men’s water polo team together at Ohio State" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-contain" />
        </div>
      </section>
      <section aria-label="Explore the team" className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            { title: "Practice with us", detail: "Find practice times and what to bring.", href: "/practice-info/" },
            { title: "Follow the season", detail: "Tournament schedules and game results.", href: "/schedule/" },
            { title: "Meet the roster", detail: "The players representing Illinois.", href: "/roster/" },
          ].map((item) => <Link key={item.href} href={item.href} className="group flex items-center justify-between gap-4 px-6 py-7 transition hover:bg-slate-50 sm:px-10"><div><h2 className="text-lg font-bold">{item.title}</h2><p className="mt-1 text-sm text-slate-600">{item.detail}</p></div><ArrowRight aria-hidden="true" size={20} className="shrink-0 text-[#FF5F05] transition-transform group-hover:translate-x-1" /></Link>)}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-20">
        <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Team Photos</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => <figure key={item.image}><div className="relative aspect-[4/3] overflow-hidden rounded"><Image src={item.image} alt={`Illinois water polo team — ${item.title}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" /></div><figcaption className="mt-4 border-l-2 border-[#FF5F05] pl-3 text-sm font-semibold">{item.title}</figcaption></figure>)}
        </div>
      </section>
    </div>
  );
}
