"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

const PRODUCTS = [
  {
    id: "1",
    title: "Basketball Kits",
    desc: "Custom sublimation • Pro athletic fit",
    meta: "MOQ 50 • 180–220 GSM • 10–14 Days",
    href: "/products/football",
    image: "/Products/basketball-kits/1.png",
    badge: "Most Ordered",
  },
  {
    id: "2",
    title: "Hoodies",
    desc: "Heavy GSM • Embroidery ready",
    meta: "MOQ 50 • 300 GSM • 12–15 Days",
    href: "/products/hoodies",
    image: "/Products/Hoodies/1.png",
  },
  {
    id: "3",
    title: "Basketball Styled Jerseys",
    desc: "Comfort stretch • Team sets",
    meta: "MOQ 50 • 220 GSM • 10–12 Days",
    href: "/products/basketball-styled-jerseys",
    image: "/Products/basketball-styled-jerseys/3.png",
  },
  {
    id: "4",
    title: "Football Jerseys",
    desc: "Breathable mesh • Fast delivery",
    meta: "MOQ 50 • 160–180 GSM • 7–10 Days",
    href: "/products/football-jerseys",
    image: "/Products/football-jerseys/1.png",
  },
];

export default function Featured() {
  return (
    <section className="w-full bg-transparent py-20">
      {/* FULL WIDTH WRAPPER */}
      <div className="mx-auto w-full px-6 lg:px-16">
        {/* HEADER */}
        <FadeInOnScroll yOffset={35} duration={0.8}>
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 inline-block rounded-full border border-slate-300 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
              Export Ready Products
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Products Brands Order the Most
            </h2>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Proven styles trusted by teams, academies, and private labels.
              Built for bulk orders, fast production, and repeat buyers.
            </p>
          </div>
        </FadeInOnScroll>

        {/* PRODUCT GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((item, idx) => (
            <FadeInOnScroll key={item.id} delay={idx * 0.12} yOffset={30}>
              <div
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="relative h-[460px] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  />

                  {item.badge && (
                    <div className="absolute right-2 top-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
                      {item.badge}
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600">{item.desc}</p>

                  <p className="mt-2 text-xs font-medium text-slate-500">
                    {item.meta}
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="/inquiry"
                      className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-black hover:shadow-lg"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href={item.href}
                      className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-4 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-red-500 hover:shadow-lg"
                    >
                      View all
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* FOOT NOTE */}
        <FadeInOnScroll delay={0.3}>
          <div className="mt-10 text-sm text-slate-500">
            * All products support private labeling, size customization, and bulk
            export packaging.
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
