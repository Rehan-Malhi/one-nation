"use client"

import Link from "next/link"
import { motion } from "motion/react"

export default function ProductCard({ product, category, index = 0 }) {
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
            className="bg-white shadow-md hover:shadow-xl rounded-2xl overflow-hidden transition-shadow duration-300"
        >
            <Link href={`/products/${category}/${product.slug}`}>
                <div className="overflow-hidden">
                    <img
                        fill="true"
                        src={product.image}
                        alt={product.title}
                        className="h-96 w-full object-contain transition-transform duration-500 ease-out hover:scale-[1.05]"
                    />
                </div>

                <div className="p-5">
                    <h3 className="font-semibold text-black text-lg tracking-tight">
                        {product.title}
                    </h3>
                </div>
            </Link>
        </motion.div>
    )
}