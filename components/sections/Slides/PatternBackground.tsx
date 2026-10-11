"use client";

import Image from "next/image";
import { forwardRef } from "react";

type Props = { shift?: number; reduced?: boolean; mounted?: boolean };

const PatternBackground = forwardRef<HTMLDivElement, Props>(function PatternBackground(_props, ref) {
  return (
    <div ref={ref} aria-hidden="true" className="testimonial-pattern pointer-events-none absolute inset-x-0 top-0 z-0 mx-auto w-[min(1280px,100%)] select-none" style={{ clipPath: "var(--clip)" }} >
      <Image src="/square-patterns.svg" alt="" width={1280} height={270} priority className="block h-auto w-full max-w-none" />
    </div>
  );
});

export default PatternBackground;