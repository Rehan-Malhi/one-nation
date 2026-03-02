"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const ITEMS = [
  { href: "/products/baseball-jerseys", img: "/products/baseball-jerseys/1.png", title: "Baseball Jerseys" },
  { href: "/products/basketball-jerseys", img: "/products/basketball-jerseys/1.png", title: "Basketball Jerseys" },
  { href: "/products/basketball-kits", img: "/products/basketball-kits/1.png", title: "Basketball Kits" },
  { href: "/products/basketball-styled-jerseys", img: "/products/basketball-styled-jerseys/1.png", title: "Basketball Styled Jerseys" },
  { href: "/products/football-jerseys", img: "/products/football-jerseys/1.png", title: "Football Jerseys" },
  { href: "/products/hoodies", img: "/products/hoodies/1.png", title: "Hoodies" },
  { href: "/products/no-slv-hoodies", img: "/products/no-slv-hoodies/1.png", title: "no-sleeve Hoodies" },
  { href: "/products/sports-pants", img: "/products/sports-pants/1.png", title: "Sports Pants" },
  { href: "/products/sports-shirts", img: "/products/sports-shirts/1.png", title: "Sports Shirts" },
];

function RowMarquee({ speed = 10000 }) {
  const data = [...ITEMS, ...ITEMS];

  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      loop
      slidesPerView="auto"
      spaceBetween={24} // ✅ clearer spacing
      freeMode={{ enabled: true, momentum: false }}
      speed={speed}
      allowTouchMove={false}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className="marqueeSwiper"
    >
      {data.map((item, i) => (
        <SwiperSlide
          key={`${item.href}-${i}`}
          className="!w-[260px] sm:!w-[300px] md:!w-[340px]"
        >
          <Link
            href={item.href}
            className="group relative block h-[160px] sm:h-[180px] md:h-[300px] overflow-hidden rounded-2xl bg-white shadow-xl"
          >
            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, 340px"
              className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-110"
              priority={i < 4}
            />

            {/* HOVER OVERLAY */}
            <div className="absolute inset-0 bg-black/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* HOVER TEXT */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <span className="text-sm sm:text-base font-semibold tracking-wide text-white">
                {item.title}
              </span>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function TwoRowMarqueeImages() {
  return (
    <section className="relative w-full overflow-hidden py-8">
      <div className="w-full space-y-6 px-2 sm:px-4">
        {/* TOP – slower */}
        <RowMarquee speed={12000} />
      </div>
    </section>
  );
}
