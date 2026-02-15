"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/motion";
import type { PlaceReviews } from "@/lib/google-reviews";
import { useState, useEffect, useRef, useCallback } from "react";

function Stars({ count = 5, size = 16 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={0}
          fill="currentColor"
          className="text-star"
        />
      ))}
    </div>
  );
}

export default function Avis({ data }: { data: PlaceReviews }) {
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
    const cardWidth = (card?.clientWidth || 350) + 24;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="avis" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 xl:max-w-7xl">
        <FadeIn>
          <div className="mb-10 flex items-center justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Star size={24} strokeWidth={2} className="text-brand-600" />
                <h2 className="font-fraunces text-2xl font-bold text-earth-900 lg:text-3xl">
                  Ils nous font confiance
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-earth-900">
                  {data.rating.toFixed(1)}/5
                </span>
                <Stars count={5} size={22} />
                <span className="text-sm text-earth-600">
                  — {data.totalReviews} avis Google
                </span>
              </div>
            </div>

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

      <div className="mx-auto max-w-6xl px-6 xl:max-w-7xl">
        <div
          ref={scrollRef}
          className="no-scrollbar flex items-stretch gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
        >
          {data.reviews.map((item, index) => (
            <div
              key={index}
              className="w-[85vw] shrink-0 snap-start sm:w-[70vw] md:w-100 lg:w-105 xl:w-[calc(33.333%-16px)]"
            >
              <div className="relative flex h-full flex-col justify-between rounded-xl bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-md">
                <div>
                  <Stars count={item.rating} size={16} />
                  <p className="mt-5 line-clamp-6 font-fraunces text-[15px] italic leading-relaxed text-earth-800">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-earth-100 pt-5">
                  <div>
                    <p className="font-semibold text-earth-900">{item.name}</p>
                    <p className="mt-0.5 text-sm text-earth-400">
                      {item.relativeTime ? item.relativeTime : "Avis Google"}
                    </p>
                  </div>
                  <span className="text-lg font-bold text-earth-400/30">G</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
