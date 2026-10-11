"use client";

import { useRef, useState, type CSSProperties } from "react";
import { CarouselArrow, PatternBackground, RESPONSIVE_CSS, TestimonialCard, useMounted } from "./Slides";

export function TestimonialSection({ data }: any) {
  const mounted = useMounted();
  const [shift, setShift] = useState(0);
  const [active, setActive] = useState(1);
  const startX = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const count = data?.scholarship?.instructors.length;

  const go = (direction: 1 | -1) => { setActive((current) => (current + direction + count) % count); setShift((current) => current + direction * 40); };
  const relative = (index: number) => { let value = (((index - active) % count) + count) % count; if (value > count / 2) value -= count; return value; };
  const endDrag = () => { if (startX.current === null) return; const distance = dragOffset; startX.current = null; setDragging(false); setDragOffset(0); if (Math.abs(distance) > 80) go(distance < 0 ? 1 : -1); };

  return <section className="relative w-full overflow-hidden bg-white py-16">
    <style>{RESPONSIVE_CSS}</style>
    <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
      <div ref={stageRef} tabIndex={0} role="region" aria-roledescription="carousel" aria-label="Testimonials" className="testimonial-stage relative mx-auto" style={{ height: "var(--stage-height)", "--dx": `${dragOffset}px` } as CSSProperties} onKeyDown={(event) => { if (event.key === "ArrowLeft") go(-1); if (event.key === "ArrowRight") go(1); }} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)} onPointerDown={(event) => { if (!(event.target as HTMLElement).closest("article[aria-hidden=\"false\"]")) return; startX.current = event.clientX; setDragging(true); event.currentTarget.setPointerCapture?.(event.pointerId); }} onPointerMove={(event) => { if (startX.current !== null) setDragOffset(Math.max(-240, Math.min(240, event.clientX - startX.current))); }} onPointerUp={endDrag} onPointerCancel={endDrag}>
        <PatternBackground shift={shift} reduced={false} mounted={mounted} />
        <div aria-live="polite" className="absolute inset-0 z-10">
          {data?.scholarship?.instructors.map((testimonial: any, index: any) => <TestimonialCard key={testimonial.id} testimonial={testimonial} relative={relative(index)} dragging={dragging} mounted={mounted} paused={hovered || dragging} onSelect={() => go(relative(index) < 0 ? -1 : 1)} onFinish={() => go(1)} />)}
        </div>
        <CarouselArrow direction={-1} mounted={mounted} onClick={() => go(-1)} />
        <CarouselArrow direction={1} mounted={mounted} onClick={() => go(1)} />
      </div>
    </div>
  </section>;
}

export default TestimonialSection;
