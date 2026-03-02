"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function Hero() {
  const slides = useRef([
    {
      kicker: "Baseball Full Button Shirts",
      imageSrc: "/front-images/baseball-full-btn-shirts.png",
      bgSrc: "/front-images/bg/1.png",
    },
    {
      kicker: "Football Kits",
      imageSrc: "/front-images/baseball-pant.png",
      bgSrc: "/front-images/bg/2.png",
    },
    {
      kicker: "Basketball Uniforms",
      imageSrc: "/front-images/basketball-uniforms.png",
      bgSrc: "/front-images/bg/3.png",
    },
    {
      kicker: "Hoodies & Lifestyle",
      imageSrc: "/front-images/hoodies.png",
      bgSrc: "/front-images/bg/6.png",
    },
    {
      kicker: "Softball Shirts",
      imageSrc: "/front-images/softball-shirts.png",
      bgSrc: "/front-images/bg/8.png",
    },
    {
      kicker: "Flag Uniforms",
      imageSrc: "/front-images/flag-uniforms.png",
      bgSrc: "/front-images/bg/4.png",
    },
    {
      kicker: "Soccer Shirts",
      imageSrc: "/front-images/soccer-shirts.png",
      bgSrc: "/front-images/bg/7.png",
    },
    {
      kicker: "Windbreakers",
      imageSrc: "/front-images/wnbreakers.png",
      bgSrc: "/front-images/bg/9.png",
    },
    {
      kicker: "American Football",
      imageSrc: "/front-images/football-uniforms.png",
      bgSrc: "/front-images/bg/5.png",
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideTimer = useRef(null);
  const SLIDE_DELAY = 6500;

  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageWrapRef = useRef(null);
  const bgRef = useRef(null);

  const staticTitleHtml =
    `Unveil the Unique<br/>Side of <span class="hero-accent">Custom</span><br/>Team Uniforms`;

  function triggerAnimations() {
    const hero = heroRef.current;
    const text = textRef.current;
    const imgWrap = imageWrapRef.current;
    const bg = bgRef.current;
    if (!hero || !text || !imgWrap || !bg) return;

    text.classList.remove("animate-text-in");
    imgWrap.classList.remove("animate-image-in");
    hero.classList.remove("bg-animate");

    // BG animation class
    bg.classList.remove("animate-bg-in");

    // force reflow
    // eslint-disable-next-line no-unused-expressions
    text.offsetWidth;
    // eslint-disable-next-line no-unused-expressions
    imgWrap.offsetWidth;
    // eslint-disable-next-line no-unused-expressions
    hero.offsetWidth;
    // eslint-disable-next-line no-unused-expressions
    bg.offsetWidth;

    text.classList.add("animate-text-in");
    imgWrap.classList.add("animate-image-in");
    hero.classList.add("bg-animate");

    // trigger BG slide-in
    bg.classList.add("animate-bg-in");
  }

  function nextSlide() {
    setCurrentSlide((s) => (s + 1) % slides.current.length);
  }

  function resetSlideTimer() {
    if (slideTimer.current) window.clearInterval(slideTimer.current);
    slideTimer.current = window.setInterval(nextSlide, SLIDE_DELAY);
  }

  useEffect(() => {
    resetSlideTimer();
    return () => {
      if (slideTimer.current) window.clearInterval(slideTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    triggerAnimations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const slide = slides.current[currentSlide];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero relative overflow-hidden flex items-center justify-center min-h-[calc(80vh-110px)] px-4 pt-[4.5rem] pb-16"
    >
      {/* BG LAYER (changes per slide + slides in from right) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgRef}
          key={slide.bgSrc}
          src={slide.bgSrc}
          alt=""
          aria-hidden="true"
          className="hero-bg absolute inset-0 h-full w-full object-contain opacity-0"
        />
        {/* optional: darken for readability */}
        <div className="absolute inset-0 bg-white/30 sm:bg-white/40 max-sm:bg-white/80" />

      </div>

      <div
        className="relative z-[1] mx-auto w-[min(1700px,calc(100%-48px))] grid min-h-[560px] items-stretch gap-[0px] [grid-template-columns:1.1fr_1.2fr] px-1 max-[900px]:grid-cols-1 max-[900px]:min-h-0 max-[900px]:gap-8"
      >
        {/* TEXT */}
        <div className="self-start pt-[26px] max-[900px]:pt-[10px] max-[900px]:text-center">

          <div ref={textRef} className="will-change-transform will-change-opacity hero-text-anim">
            <div className="mb-3 text-[0.8rem] uppercase tracking-[0.24em] text-gray-800">
              {slide.kicker}
            </div>

            <h1
              className="mb-3 uppercase font-extrabold leading-[1.05] text-gray-800 text-[clamp(2.4rem,4vw,3.2rem)] max-[480px]:text-[clamp(1.7rem,8vw,2.2rem)]"
              dangerouslySetInnerHTML={{ __html: staticTitleHtml }}
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-4 max-[900px]:justify-center">
            <Link
            href={"/inquiry"}
              className="inline-flex items-center gap-2 rounded-full px-[1.9rem] py-3 text-[0.95rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(8,47,73,0.7)] transition [transition-property:transform,box-shadow,background,color,border-color] duration-150 bg-red-800 cursor-pointer hover:-translate-y-[1px]  max-[480px]:justify-center"
            >
              Star Order
            </Link>

            <Link href={"/products"} className="hidden sm:inline-flex cursor-pointer items-center gap-2 rounded-full px-[1.9rem] py-3 text-[0.95rem] font-semibold uppercase tracking-[0.14em] text-gray-600 border border-slate-400/60 bg-black transition [transition-property:transform,box-shadow,background,color,border-color] duration-150 hover:-translate-y-[1px] hover:border-gray-600 hover:text-white hover:shadow-[0_18px_40px_rgba(8,47,73,0.9)] hover:bg-gray-600">
              View Products
            </Link>

          </div>
        </div>

        {/* IMAGE */}
        <div
          ref={imageWrapRef}
          className="self-end flex justify-end pb-[18px] translate-y-[18px] max-[900px]:translate-y-0 max-[900px]:pb-0 max-[900px]:justify-center">
          <img
            className="block object-contain max-w-full [height:var(--hero-img-h,530px)] max-[900px]:[height:min(var(--hero-img-h,420px),52vw)]"
            src={slide.imageSrc}
            alt="Uniform preview"
          />
        </div>
      </div>
    </section>
  );
}
