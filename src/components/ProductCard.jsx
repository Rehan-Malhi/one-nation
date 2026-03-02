"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function ProductCard({ product, category }) {
    return (
        <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-white shadow rounded-2xl overflow-hidden"
        >
            <Link href={`/products/${category}/${product.slug}`}>
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-96 w-full object-cover"
                />

                <div className="p-4">
                    <h3 className="font-semibold text-black text-lg">
                        {product.title}
                    </h3>
                </div>
            </Link>
        </motion.div>
    )
}