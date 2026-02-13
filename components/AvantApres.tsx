"use client";

import Image from "next/image";
import { ArrowLeftRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { useState, useEffect, useRef, useCallback } from "react";

const pairs = [
  { before: "/photos-entretien/avant/AV 01.jpg", after: "/photos-entretien/apres/AP 01.jpg" },
  { before: "/photos-entretien/avant/AV 02.jpg", after: "/photos-entretien/apres/AP 02.jpg" },
  { before: "/photos-entretien/avant/AV 03.jpg", after: "/photos-entretien/apres/AP 03.jpg" },
  { before: "/photos-entretien/avant/AV 04.jpg", after: "/photos-entretien/apres/AP 04.jpg" },
  { before: "/photos-entretien/avant/AV 05.jpg", after: "/photos-entretien/apres/AP 05.jpg" },
  { before: "/photos-entretien/avant/AV 06.jpg", after: "/photos-entretien/apres/AP 06.jpg" },
  { before: "/photos-entretien/avant/AV 07.jpg", after: "/photos-entretien/apres/AP 07.jpg" },
  { before: "/photos-entretien/avant/AV 08.jpg", after: "/photos-entretien/apres/AP 08.jpg" },
  { before: "/photos-entretien/avant/AV 09.jpg", after: "/photos-entretien/apres/AP 09.jpg" },
];

/* ────────────────────────────────────────────
   Before / After Slider
   ──────────────────────────────────────────── */
function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging.current) {
        e.preventDefault();
        handleMove(e.touches[0].clientX);
      }
    };
    const onEnd = () => {
      isDragging.current = false;
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onEnd);
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("touchend", onEnd);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onEnd);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onEnd);
    };
  }, [handleMove]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-4/3 select-none overflow-hidden rounded-xl bg-brand-900"
    >
      {/* After image (full background) */}
      <Image
        src={after}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 640px) 85vw, (max-width: 768px) 70vw, (max-width: 1280px) 50vw, 33vw"
      />

      {/* Before image (clipped from left) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 640px) 85vw, (max-width: 768px) 70vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-earth-900/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
        Avant
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-earth-900/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
        Après
      </span>

      {/* Divider line */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white/80"
        style={{ left: `${position}%` }}
      />

      {/* Draggable handle */}
      <button
        className="absolute top-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-110 touch-none"
        style={{ left: `${position}%` }}
        onMouseDown={(e) => {
          e.preventDefault();
          isDragging.current = true;
        }}
        onTouchStart={() => {
          isDragging.current = true;
        }}
        aria-label="Glisser pour comparer avant et après"
      >
        <ArrowLeftRight size={16} strokeWidth={2} className="text-brand-800" />
      </button>
    </div>
  );
}

/* ────────────────────────────────────────────
   Avant / Après Section
   ──────────────────────────────────────────── */
export default function AvantApres() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.firstElementChild;
    const cardWidth = (card?.clientWidth || 400) + 24;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-20 lg:py-28">
      {/* Title + navigation arrows */}
      <div className="mx-auto max-w-6xl px-6 xl:max-w-7xl">
        <FadeIn>
          <div className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ArrowLeftRight
                size={24}
                strokeWidth={2}
                className="text-brand-600"
              />
              <h2 className="text-2xl font-bold text-earth-900 lg:text-3xl">
                Le résultat parle de lui-même
              </h2>
            </div>

            {/* Desktop arrows */}
            <div className="hidden items-center gap-2 md:flex">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-earth-200 text-earth-800 transition-all hover:bg-brand-50 disabled:opacity-30 disabled:cursor-default disabled:hover:bg-transparent"
                aria-label="Précédent"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-earth-200 text-earth-800 transition-all hover:bg-brand-50 disabled:opacity-30 disabled:cursor-default disabled:hover:bg-transparent"
                aria-label="Suivant"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Horizontal carousel */}
      <div className="mx-auto max-w-6xl px-6 xl:max-w-7xl">
        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
        >
          {pairs.map((pair, i) => (
            <div
              key={i}
              className="w-[85vw] shrink-0 snap-start sm:w-[70vw] md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]"
            >
              <BeforeAfterSlider before={pair.before} after={pair.after} />
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-sm text-earth-400">
          Glissez le curseur pour comparer
        </p>
      </div>
    </section>
  );
}
