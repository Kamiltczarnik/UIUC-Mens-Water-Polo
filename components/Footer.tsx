import { Instagram, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#faf9f6] text-[#13294B]">
      <div className="site-container py-10 sm:py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-bold tracking-tight">Illinois Men’s Water Polo</p>
            <a href="mailto:illinoismenswaterpolo@gmail.com" className="mt-2 inline-block break-all text-sm text-slate-600 underline-offset-4 hover:text-[#13294B] hover:underline">illinoismenswaterpolo@gmail.com</a>
          </div>
          <div className="flex flex-wrap items-center gap-7">
            <a href="https://www.instagram.com/illinimenswaterpolo/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium hover:text-[#c44700]"><Instagram size={18} aria-hidden="true" /> Instagram</a>
            <span aria-hidden="true" className="h-5 w-px bg-slate-300" />
            <a href="https://collegiatewaterpolo.org/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium hover:text-[#c44700]">CWPA <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
