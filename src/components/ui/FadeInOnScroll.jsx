"use client";

import { motion } from "motion/react";

export default function FadeInOnScroll({
  children,
  delay = 0,
  duration = 0.7,
  yOffset = 30,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
