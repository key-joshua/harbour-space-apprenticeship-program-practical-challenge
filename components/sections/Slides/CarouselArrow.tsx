"use client";

export default function CarouselArrow({ direction, mounted, onClick }: { direction: -1 | 1; mounted: boolean; onClick: () => void }) {
  return <button type="button" onClick={onClick} aria-label={direction === -1 ? "Previous testimonial" : "Next testimonial"} className="carousel-arrow absolute z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#4B3FA8] shadow-[0_4px_16px_rgba(80,60,160,.22)] transition-transform hover:scale-110" style={{ top: "50%", marginTop: -20, left: direction === -1 ? "var(--arrow-left)" : "auto", right: direction === 1 ? "var(--arrow-right)" : "auto", transition: mounted ? "transform .2s ease" : "none" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d={direction === -1 ? "M10 3L5 8l5 5" : "M6 3l5 5-5 5"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>;
}
