"use client";

import type { CSSProperties } from "react";
import { EASE } from "./constants";
import Progress from "./Progress";

export default function TestimonialCard({ testimonial, relative, dragging, paused, mounted, onSelect, onFinish, }: { testimonial: any; relative: number; dragging: boolean; paused: boolean; mounted: boolean; onSelect: () => void; onFinish: () => void; }) {
  const active = relative === 0;
  const side = relative === -1 || relative === 1;

  const cardStyle: CSSProperties = {
    borderRadius: 4,
    touchAction: "pan-y",
    background: "#fff",
    top: "var(--card-top)",
    boxSizing: "border-box",
    zIndex: active ? 20 : 10,
    height: "var(--card-height)",
    willChange: "left, transform",
    padding: "var(--card-padding)",
    opacity: active ? 1 : "var(--side-opacity)",
    width: active ? "var(--card-width)" : "var(--side-width)",
    border: active ? "1px solid #dcd7f5" : "1px solid #ECECF3",
    cursor: active ? (dragging ? "grabbing" : "grab") : side ? "pointer" : "default",
    transform: active ? "translateX(-50%) scale(1)" : "translateX(-50%) scale(var(--side-scale))",
    pointerEvents: active ? "auto" : side ? ("var(--side-pointer)" as CSSProperties["pointerEvents"]) : "none",
    boxShadow: active ? "0 26px 64px -18px rgba(110,90,200,.42)" : "0 10px 30px -18px rgba(110,90,200,.25)",
    transition: !mounted ? "none" : dragging ? `opacity .6s ease, box-shadow .85s ${EASE}` : `left .85s ${EASE}, transform .85s ${EASE}, opacity .6s ease, box-shadow .85s ${EASE}`,
    left: active ? "50%" : relative < 0 ? "calc(50% - var(--card-width) / 2 - var(--side-gap, 24px) - var(--side-width) * var(--side-scale) / 2)" : "calc(50% + var(--card-width) / 2 + var(--side-gap, 24px) + var(--side-width) * var(--side-scale) / 2)",
  };

  return (
    <article aria-hidden={!active} aria-label={active ? undefined : `Show testimonial from ${testimonial.name}`} onClick={active ? undefined : onSelect} className={`absolute select-none ${active ? "" : "cursor-pointer"}`} style={cardStyle} >
      <div className="flex items-start gap-5">
        <img src={testimonial.profile_picture.src} alt={`${testimonial.name} portrait`} className="h-[60px] w-[60px] flex-none rounded-full object-cover" />
        <div> <p className="mt-0.5 text-[14px] font-semibold text-[#3b3b52]">{testimonial.name}</p> <p className="mt-1.5 text-[14px] text-[#6f6f88]">{testimonial.current_position}</p> </div>
        <span aria-hidden="true" className="ml-auto text-[15px] font-bold text-[#CFCFDC]"> in </span>
      </div>

      {active && ( <span className="absolute right-9 top-[78px] rounded-full bg-[#6D55C2] px-5 py-1.5 text-[12px] font-semibold text-white"> Drag </span> )}

      <p className={`text-[#6a6a85] ${side ? "line-clamp-3 text-[12px]" : "text-[length:var(--quote-size)]"}`} style={{ margin: "var(--quote-margin) 0 0", lineHeight: 1.6 }} > {[ "Learn from experienced instructors and industry experts who bring real-world knowledge and practical insights into the classroom.", "Gain valuable insights from professionals who connect theoretical concepts with real-world industry challenges.", "Discover practical knowledge and perspectives from experienced professionals who help students build career-ready skills.", "Learn from industry experts who share their experience and explain how data science is applied in the real world." ][Math.floor(Math.random() * 4)]} </p>
      <p className="mt-5 text-[12px] text-[#8a8aa0]">{testimonial.category}</p>
      {active && <Progress paused={paused} onFinish={onFinish} />}
    </article>
  );
}