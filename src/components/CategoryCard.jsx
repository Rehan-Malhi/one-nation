"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function CategoryCard({ category }) {
  return (

<motion.div
whileHover={{ scale:1.05 }}
className="rounded-2xl shadow-md overflow-hidden bg-white"
>

<Link href={`/products/${category.slug}`}>

<img
src={category.image}
className="w-full h-56 object-cover"
/>

<div className="p-5">

<h3 className="text-xl font-semibold">
{category.title}
</h3>

<p className="text-gray-500 mt-2">
{category.description}
</p>

</div>

</Link>

</motion.div>

  )
}