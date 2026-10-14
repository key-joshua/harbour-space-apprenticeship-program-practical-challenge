"use client"

import { Skeleton } from "@/components/ui/skeleton"

function Shimmer({ className = "", delay = "0s" }: { className?: string; delay?: string }) {
  return <Skeleton className={`skeleton-shimmer ${className}`} style={{ animationDelay: delay }} />
}

export function NavSkeleton() {
  return <nav className="relative flex h-10 items-center justify-between bg-[#6A5ACD] px-5" aria-label="Loading navigation">
    <div className="flex items-center gap-4"><Shimmer className="h-2 w-16 bg-white/60" /><Shimmer className="h-2 w-20 bg-white/40" /></div>
    <Shimmer className="h-3 w-5 bg-white/50" />
    <Shimmer className="absolute right-30 top-2 hidden size-[72px] rounded-full bg-[#9bb7a7] md:block" />
  </nav>
}

export function InfoCardsSkeleton() {
  return <div className="relative flex flex-col gap-3 lg:pt-3">
    <div className="skeleton-pattern absolute -bottom-32 right-[-12%] h-[190px] w-[410px] opacity-50" />
    <div className="relative z-10 flex h-[68px] flex-col gap-3 rounded-sm border border-neutral-200 bg-white p-4 animate-[skeleton-pulse_2.5s_ease-in-out_infinite]">
      <Shimmer className="h-2 w-24" delay="0.15s" /><Shimmer className="h-4 w-64" delay="0.15s" />
    </div>
    <div className="relative z-10 grid h-[125px] grid-cols-2 gap-x-10 gap-y-5 rounded-sm border border-neutral-200 bg-white p-4">
      {Array.from({ length: 4 }).map((_, index) => <div className="flex flex-col gap-2" key={index}><Shimmer className="h-2 w-16" delay="0.15s" /><Shimmer className="h-2 w-24" delay="0.15s" /></div>)}
    </div>
  </div>
}

export function HeroSkeleton() {
  return <section className="mx-auto grid max-w-[950px] grid-cols-1 gap-12 px-6 pb-8 pt-20 md:grid-cols-[40%_1fr] md:gap-[15%]">
    <div className="flex flex-col">
      <div className="relative mb-5"><Shimmer className="h-7 w-[85%]" /><Shimmer className="mt-2 h-7 w-[60%]" /><span className="absolute -right-2 -top-5 size-20 rounded-full border border-neutral-200/70" /></div>
      <div className="flex flex-col gap-2"><Shimmer className="h-2 w-full" /><Shimmer className="h-2 w-[55%]" /></div>
      <div className="mt-10 flex flex-col gap-3"><Shimmer className="h-2 w-full" /><Shimmer className="h-2 w-full" /><Shimmer className="h-2 w-[95%]" /><Shimmer className="h-2 w-[70%]" /></div>
      <Shimmer className="mt-8 h-2 w-[45%]" /><Shimmer className="mt-8 hidden h-10 w-[113px] rounded-full md:block" />
    </div>
    <div className="flex flex-col gap-5"><div className="flex items-center gap-3"><Shimmer className="size-8 rounded-full" /><div className="flex flex-col gap-2"><Shimmer className="h-2 w-16" /><Shimmer className="h-2 w-24" /></div></div><InfoCardsSkeleton /></div>
  </section>
}

export function AboutSkeleton() {
  return <section className="mx-auto grid max-w-[950px] grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-[15%]">
    <div className="mx-auto rounded-full border border-neutral-200/50 p-2"><Shimmer className="size-[220px] rounded-full md:size-[320px]" delay="0.3s" /></div>
    <div className="flex flex-col"><div className="flex flex-col gap-2"><Shimmer className="h-8 w-[60%]" delay="0.3s" /><Shimmer className="h-8 w-[75%]" delay="0.3s" /></div><div className="mt-8 flex flex-col gap-3">{["w-full", "w-full", "w-[95%]", "w-[90%]", "w-[80%]", "w-1/2"].map((width, index) => <Shimmer key={`${width}-${index}`} className={`h-2 ${width}`} delay="0.3s" />)}</div></div>
  </section>
}

export default function LoadingPage() {
  return <div aria-busy="true" aria-live="polite" className="min-h-screen overflow-hidden bg-white text-neutral-900"><span className="sr-only">Loading content…</span><NavSkeleton /><main><HeroSkeleton /><AboutSkeleton /></main></div>
}
