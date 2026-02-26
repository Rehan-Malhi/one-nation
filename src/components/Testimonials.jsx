"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { FaStar } from "react-icons/fa";

const TESTIMONIALS = [
  {
    name: "Daniel Brooks — Sports Apparel Brand Owner (USA)",
    text:
      "“We’ve worked with multiple exporters over the years, but this team stands out. The stitching quality, fabric consistency, and on-time delivery exceeded our expectations. Communication was clear throughout production, which made scaling our sportswear line smooth and stress-free.”",
  },
  {
    name: "Ahmed Al-Farsi — Wholesale Buyer (USA)",
    text:
      "“From sampling to bulk shipment, everything was handled professionally. The exporter understood our branding requirements perfectly and delivered custom football kits exactly as promised. Quality control was excellent, and our clients were very satisfied.”",
  },
  {
    name: "Lucas Meyer — Teamwear Distributor (Germany)",
    text:
      "“What impressed us most was their flexibility and technical knowledge of sportswear. They adjusted patterns, sizes, and fabrics according to European standards without delays. A reliable manufacturing partner we plan to work with long-term.”",
  },
  {
    name: "James Wilson — Private Label Sportswear Buyer (UK)",
    text:
      "“The exporter delivered premium-quality tracksuits and training wear with great attention to detail. Packaging, labeling, and finishing were all export-ready. Their pricing is competitive, but the quality feels premium.”",
  },
];

export default function TestimonialsAuto() {
  const trackRef = useRef(null);

  // duplicate items to fake infinite loop
  const items = useMemo(
    () => [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS],
    []
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector("[data-card]");
    if (!card) return;

    const step = card.offsetWidth + 24; // width + gap
    let index = TESTIMONIALS.length;

    track.scrollLeft = step * index;

    const interval = setInterval(() => {
      index += 1;

      track.scrollTo({
        left: step * index,
        behavior: "smooth",
      });

      // reset silently when reaching end
      if (index >= TESTIMONIALS.length * 2) {
        setTimeout(() => {
          track.scrollLeft = step * TESTIMONIALS.length;
          index = TESTIMONIALS.length;
        }, 600);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#b7f01b] py-16">
      <div className="mx-auto px-4 sm:px-6">
        <div
          ref={trackRef}
          className="flex gap-6 overflow-hidden scroll-smooth"
        >
          {items.map((t, i) => (
            <article
              key={i}
              data-card
              className="shrink-0 bg-white rounded-sm border border-black/10 p-7 sm:p-8 shadow-[0_20px_70px_-55px_rgba(0,0,0,0.5)] min-h-[260px] w-full md:w-[calc((100%-48px)/3)]"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-black/10 text-black flex items-center justify-center text-sm font-bold">
                  {t.name[0]}
                </div>
                <h4 className="text-sm text-black font-bold font-semibold">{t.name}</h4>
              </div>

              {/* Text */}
              <p className="mt-5 text-[0.95rem] leading-6 text-black/70">
                {t.text}
              </p>

              {/* Footer */}
              <div className="mt-8 flex justify-between items-end">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <FaStar key={s} className="text-[#b7f01b]" />
                  ))}
                </div>

                <span className="text-sm font-semibold underline underline-offset-4">
                  Read More
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
