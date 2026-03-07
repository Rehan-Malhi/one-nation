"use client"

import Link from "next/link"
import { motion } from "motion/react"

export default function CategoryCard({ category, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="rounded-2xl shadow-md hover:shadow-xl overflow-hidden bg-white transition-shadow duration-300"
    >
      <Link href={`/products/${category.slug}`}>
        <div className="overflow-hidden">
          <img
            src={category.image}
            className="w-full h-96 object-cover transition-transform duration-500 ease-out hover:scale-[1.05]"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-semibold tracking-tight">
            {category.title}
          </h3>

          <p className="text-gray-500 mt-2 leading-relaxed">
            {category.description}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}