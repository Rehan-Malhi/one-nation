"use client";

import { motion } from "motion/react";

export default function AnimatedCard({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
    yOffset = 30,
    hoverScale = 1.02,
    hoverY = -4,
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
            whileHover={{
                scale: hoverScale,
                y: hoverY,
                transition: { duration: 0.3, ease: "easeOut" },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
