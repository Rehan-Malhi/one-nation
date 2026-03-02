"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function ImageModal({ image }) {

    const [open, setOpen] = useState(false)

    return (
        <>

            <Image
                width={500}
                height={500}
                src={image}
                alt="nt"
                className="rounded-xl object-cover cursor-pointer w-full"
                onClick={() => setOpen(true)}
            />

            <AnimatePresence>

                {open && (

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur flex items-center justify-center z-50"
                    >

                        <motion.img
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            src={image}
                            className="max-h-[90%] rounded-xl"
                        />

                    </motion.div>

                )}

            </AnimatePresence>

        </>
    )
}