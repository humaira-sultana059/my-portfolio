"use client"

import { motion } from "framer-motion"

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* --- Gradient Blobs --- */}
      <motion.div
        className="absolute -top-40 -left-40 w-[50rem] h-[50rem] rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 blur-[180px] opacity-40"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -80, 80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-20rem] right-[-20rem] w-[60rem] h-[60rem] rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-700 blur-[200px] opacity-30"
        animate={{
          x: [0, -120, 120, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* --- Floating Light Particles --- */}
      {[...Array(15)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 bg-pink-400/70 rounded-full blur-[2px]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* --- Soft Gradient Wave Overlay --- */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,0,255,0.05),transparent_70%)] animate-pulse-slow"></div>

      {/* --- Morphing Blob (Liquid Layer) --- */}
      <motion.div
        className="absolute top-[20%] left-[30%] w-[25rem] h-[25rem] bg-gradient-to-br from-purple-700 via-slate-600 to-black opacity-25 mix-blend-screen filter blur-[100px]"
        animate={{
          borderRadius: [
            "40% 60% 70% 30% / 40% 40% 60% 60%",
            "70% 30% 50% 50% / 40% 60% 40% 60%",
            "60% 40% 30% 70% / 50% 50% 70% 30%",
            "40% 60% 70% 30% / 40% 40% 60% 60%",
          ],
          scale: [1, 1.1, 1],
          x: [0, 20, -20, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
