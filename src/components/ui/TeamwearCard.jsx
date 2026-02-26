"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const MotionLink = motion(Link);

export default function TeamwearCard({ src, href, title, meta }) {
  return (
    <MotionLink
      href={href}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="relative h-[360px] w-full overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-extrabold text-slate-900">
          {title}
        </h3>

        <p className="mt-1 text-sm text-slate-600">
          Standardized teamwear category for bulk production.
        </p>

        <p className="mt-3 text-xs font-medium text-slate-500">
          {meta}
        </p>

        <div className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-black">
          View Category
        </div>
      </div>
    </MotionLink>
  );
}
