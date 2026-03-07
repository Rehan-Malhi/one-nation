"use client";

import { motion } from "motion/react";

export default function AnimatedSection({
    children,
    className = "",
    delay = 0,
    duration = 0.8,
    yOffset = 40,
    as = "section",
}) {
    const Component = motion[as] || motion.div;

    return (
        <Component
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </Component>
    );
}
