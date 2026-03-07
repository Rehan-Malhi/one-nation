import React from "react";
import TeamwearCard from "./ui/TeamwearCard";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

const Teamwear = () => {
  return (
    <section className="w-full bg-[#f6f7f8] py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <FadeInOnScroll yOffset={35} duration={0.8}>
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 inline-block rounded-full border border-slate-300 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
              Teamwear Categories
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Performance Teamwear for Bulk Orders
            </h2>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Designed for clubs, academies, and private labels. Built for
              durability, consistency, and repeat manufacturing.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <TeamwearCard
            src="/mock.png"
            href="/products/baseball"
            title="Baseball Kits"
            meta="MOQ 50 • 180–220 GSM • 10–14 Days"
          />
          <TeamwearCard
            src="/mock.png"
            href="/products/football"
            title="Football Kits"
            meta="MOQ 50 • Sublimation • Pro Fit"
          />
          <TeamwearCard
            src="/mock.png"
            href="/products/basketball"
            title="Basketball Kits"
            meta="MOQ 50 • Breathable Mesh • Fast Dry"
          />
          <TeamwearCard
            src="/mock.png"
            href="/products/tracksuits"
            title="Tracksuits"
            meta="MOQ 50 • Comfort Stretch • Team Sets"
          />
          <TeamwearCard
            src="/mock.png"
            href="/products/hoodies"
            title="Hoodies"
            meta="MOQ 50 • Heavy GSM • Embroidery Ready"
          />
          <TeamwearCard
            src="/mock.png"
            href="/products/soccer"
            title="Soccer Uniforms"
            meta="MOQ 50 • Lightweight • Fast Turnaround"
          />
        </div>
      </div>
    </section>
  );
};

export default Teamwear;
