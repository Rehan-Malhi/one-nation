"use client";

import React from "react";
import { FaTruck, FaHandHoldingHeart } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

const DATA = [
  { Icon: MdVerified, title: "Ethical Manufacturing", desc: "Factory-direct production with strict quality control, fair labor, and long-term brand partnerships." },
  { Icon: FaHandHoldingHeart, title: "Dedicated Client Support", desc: "From sampling to bulk export, our team supports you at every stage of production." },
  { Icon: FaTruck, title: "Fast Global Shipping", desc: "Reliable worldwide export with secure packing, on-time dispatch, and trusted freight partners." },
];

export default function ThreeQualities() {
  return (
    <section className="w-full mb-16 px-4 sm:px-6">
      {/* Desktop/tablet: 3 columns | Mobile: horizontal slider (1 card per view) */}
      <div
        className="mx-auto w-full p-3 grid grid-flow-col auto-cols-[85%] gap-4 overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:auto-cols-[60%] md:auto-cols-[45%] lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-3 lg:overflow-visible"
      >
        {DATA.map(({ Icon, title, desc }, i) => (
          <FadeInOnScroll key={i} delay={i * 0.15} yOffset={30}>
            <div
              className="snap-start rounded-md bg-red-800 p-8 pb-24 text-white flex flex-col w-full items-start justify-center gap-2 transition-all duration-300 hover:shadow-xl hover:bg-red-700"
            >
              <Icon className="text-5xl" />
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h3>
              <p className="text-white/80 leading-relaxed">{desc}</p>
            </div>
          </FadeInOnScroll>
        ))}
      </div>

      {/* Optional: small hint text on mobile */}
      <div className="mt-2 text-center text-sm text-slate-500 lg:hidden">
        Swipe to see more →
      </div>
    </section>
  );
}
