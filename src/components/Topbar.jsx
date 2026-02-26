"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Topbar() {
  const messages = useRef([
    "Fast 2–3 week turnaround & worldwide shipping",
    "Free mockups on all custom team orders",
    "Player names, numbers & logos included in every kit",
  ]);

  const [idx, setIdx] = useState(0);
  const [hide, setHide] = useState(false);

  const TOP_DELAY = 6000;
  const timerRef = useRef(null);
  const timeoutRef = useRef(null);

  const show = (next) => {
    setHide(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setIdx(next);
      setHide(false);
    }, 220);
  };

  const resetTimer = (startFrom = idx) => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    let local = startFrom;
    timerRef.current = window.setInterval(() => {
      local = (local + 1) % messages.current.length;
      show(local);
    }, TOP_DELAY);
  };

  const next = () => {
    const n = (idx + 1) % messages.current.length;
    show(n);
    resetTimer(n);
  };

  const prev = () => {
    const p = (idx - 1 + messages.current.length) % messages.current.length;
    show(p);
    resetTimer(p);
  };

  useEffect(() => {
    show(0);
    resetTimer(0);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const IconBtn = ({ href, label, children }) => (
    <a
      href={href}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex h-9 w-9 items-center justify-center rounded-full
        bg-white/10 text-white
        shadow-[0_0_0_1px_rgba(255,255,255,0.14)]
        transition duration-200
        hover:bg-white/18 hover:-translate-y-[1px]
        focus:outline-none focus:ring-2 focus:ring-white/40
        active:translate-y-0
      "
    >
      <span className="text-[21px] leading-none">{children}</span>
    </a>
  );

  const ArrowBtn = ({ onClick, label, children }) => (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="
        inline-flex h-9 w-9 items-center justify-center rounded-full
        bg-white/10 text-white
        shadow-[0_0_0_1px_rgba(255,255,255,0.14)]
        transition duration-200
        hover:bg-white/18 hover:-translate-y-[1px]
        focus:outline-none focus:ring-2 focus:ring-white/40
        active:translate-y-0
      "
    >
      <span className="text-[18px] leading-none">{children}</span>
    </button>
  );

  return (
    <div className="w-full bg-[#c52222] text-white">
      <div className="mx-auto flex w-full items-center justify-between gap-3 px-3 py-2 sm:px-6">
        {/* LEFT: icons */}
        <div className="flex shrink-0 items-center gap-2">
          <IconBtn href="https://instagram.com/yourbrand" label="Instagram">
            <FaInstagram />
          </IconBtn>
          <IconBtn href="https://facebook.com/yourbrand" label="Facebook">
            <FaFacebookF />
          </IconBtn>
          <IconBtn href="https://wa.me/123456789" label="WhatsApp">
            <FaWhatsapp />
          </IconBtn>
        </div>

        {/* MESSAGE (single layout, responsive) */}
        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:justify-center">
          <ArrowBtn onClick={prev} label="Previous message">
            <FiChevronLeft />
          </ArrowBtn>

          <span
            className={[
              "min-w-0 select-none",
              "text-[11px] sm:text-[12px]",
              "font-semibold uppercase tracking-[0.10em]",
              "text-right sm:text-center",
              "truncate",
              "transition duration-300 ease-out",
              hide ? "opacity-0 -translate-y-1" : "opacity-100 translate-y-0",
            ].join(" ")}
          >
            {messages.current[idx]}
          </span>

          <ArrowBtn onClick={next} label="Next message">
            <FiChevronRight />
          </ArrowBtn>
        </div>
      </div>
    </div>
  );
}
