"use client";

import { useState } from "react";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

export default function FaqImageSection() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      title: "Safety Packing",
      body:
        "This is a message to those who have never heard of us. Doubt us. Call us out. Challenge us. Because that's when we are at our best. We believe that effort and determination lead to great achievements—no matter where you come from.",
    },
    {
      title: "100% Warranty Products",
      body:
        "We stand behind every product we ship. If anything arrives damaged or incorrect, we'll make it right quickly with a replacement or correction process.",
    },
    {
      title: "Premium Product",
      body:
        "From fabric selection to stitching and finishing, everything is built for performance and durability—made to look sharp and last through the season.",
    },
  ];

  return (
    <section className="w-full mb-16 bg-[#063a3a] py-14">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden h-full rounded-2xl bg-white shadow-[0_25px_80px_-40px_rgba(0,0,0,0.45)]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT */}
            <div className="bg-red-800 p-7 sm:p-10">
              <FadeInOnScroll yOffset={30} duration={0.7}>
                <h2 className="text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl">
                  Harbor The Best in Sports <br className="hidden sm:block" />
                  Accessories
                </h2>
              </FadeInOnScroll>

              <div className="mt-8 space-y-0">
                {faqs.map((item, idx) => {
                  const isOpen = open === idx;
                  return (
                    <FadeInOnScroll key={item.title} delay={idx * 0.12} yOffset={20}>
                      <div
                        className="border-t border-black/20 py-4"
                      >
                        <button
                          type="button"
                          onClick={() => setOpen(isOpen ? -1 : idx)}
                          className="flex w-full text-white items-center justify-between gap-4 text-left transition-colors duration-200 hover:text-white/90"
                        >
                          <span className="text-lg font-extrabold text-gray-300 sm:text-xl">
                            {item.title}
                          </span>

                          <span className="flex h-9 w-9 items-center justify-center rounded-full text-3xl font-md text-black transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                            {isOpen ? "–" : "+"}
                          </span>
                        </button>

                        <div
                          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen
                              ? "mt-3 grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                          <div className="overflow-hidden">
                            <p className="max-w-xl text-sm leading-6 text-slate-2400 sm:text-[0.95rem]">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    </FadeInOnScroll>
                  );
                })}

                <div className="border-t border-black/20" />
              </div>
            </div>

            {/* RIGHT */}
            <FadeInOnScroll yOffset={0} className="relative lg:pt-0 w-full min-h-[680px] bg-red-800 lg:min-h-[920px]">
              <img
                src="/mock.png"
                alt="Team in sports gear"
                className="absolute lg:pt-0 inset-0 h-full w-full object-contain"
              />
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
