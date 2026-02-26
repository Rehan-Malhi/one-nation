"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const ITEMS = [
  { href: "/products/football", img: "/logo.png", title: "Football" },
  { href: "/products/soccer-uniforms", img: "/components/soccer.png", title: "Soccer Uniforms" },
  { href: "/products/football-gloves", img: "/components/gloves.png", title: "Football Gloves" },
  { href: "/products/helmet-decals", img: "/components/helmet.png", title: "Helmet Decals" },
  { href: "/products/football-cleats", img: "/components/cleats.png", title: "Football Cleats" },
  { href: "/products/cheerleading", img: "/components/cheer.png", title: "Cheerleading" },
  { href: "/products/basketball", img: "/components/basketball.png", title: "Basketball" },
  { href: "/products/baseball", img: "/components/baseball.png", title: "Baseball" },
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
            className="group relative block h-[160px] sm:h-[180px] md:h-[300px] overflow-hidden rounded-2xl bg-black/20 shadow-xl"
          >
            {/* IMAGE */}
            <Image
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
