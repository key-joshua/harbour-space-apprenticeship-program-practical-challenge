"use client";

import { useEffect, useRef, useState } from "react";
import { AUTOPLAY_MS } from "./constants";

export default function Progress({ paused, onFinish }: { paused: boolean; onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const pausedRef = useRef(paused);
  const finishRef = useRef(onFinish);
  pausedRef.current = paused;
  finishRef.current = onFinish;

  useEffect(() => {
    let frame = 0;
    let last = performance.now();
    let elapsed = 0;
    const tick = (now: number) => {
      if (!pausedRef.current) elapsed += now - last;
      last = now;
      const value = Math.min(elapsed / AUTOPLAY_MS, 1);
      setProgress(value);
      if (value >= 1) finishRef.current();
      else frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <span aria-hidden="true" className="absolute bottom-0 left-0 w-full" style={{ height: 3, transformOrigin: "left center", transform: `scaleX(${progress})`, background: "linear-gradient(90deg,#8B6FD9,#6D55C2)" }} />;
}
