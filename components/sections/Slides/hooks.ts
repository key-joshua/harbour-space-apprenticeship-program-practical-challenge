"use client";

import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return reduced;
}

export function useReveal() {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(frame);
  }, []);
  return revealed;
}

export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const first = requestAnimationFrame(() => {
      const second = requestAnimationFrame(() => setMounted(true));
      return () => cancelAnimationFrame(second);
    });
    return () => cancelAnimationFrame(first);
  }, []);
  return mounted;
}
