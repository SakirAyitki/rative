"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function AnimatedGradientBackground() {
  const { scrollYProgress } = useScroll();

  // Scroll pozisyonuna göre renkleri değiştir
  const gradientPosition = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0deg", "180deg", "360deg"]
  );

  const gradientOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.05, 0.1, 0.05]
  );

  return (
    <motion.div
      className="fixed inset-0 -z-10"
      style={{
        background: `
          radial-gradient(circle at 0% 0%, rgba(43, 149, 255, ${gradientOpacity.get()}) 0%, transparent 50%),
          radial-gradient(circle at 100% 0%, rgba(99, 102, 241, ${gradientOpacity.get()}) 0%, transparent 50%),
          radial-gradient(circle at 100% 100%, rgba(139, 92, 246, ${gradientOpacity.get()}) 0%, transparent 50%),
          radial-gradient(circle at 0% 100%, rgba(0, 229, 255, ${gradientOpacity.get()}) 0%, transparent 50%)
        `,
        transform: `rotate(${gradientPosition.get()})`,
      }}
    />
  );
} 