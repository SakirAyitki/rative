"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Image from "next/image";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

interface HeroGeometricProps {
  title2: string | React.ReactNode;
  description: string;
  logos: string[];
}

export function HeroGeometric({
  title2,
  description,
  logos,
}: HeroGeometricProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-brand-background">
      <div className="flex-1 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.05] via-transparent to-brand-secondary/[0.05] blur-3xl" />

        <div className="absolute inset-0 overflow-hidden">
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="from-[#2B95FF]/[0.15]"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight">
                <span className="bg-gradient-to-r from-[#2B95FF] to-[#00E5FF] text-transparent bg-clip-text">
                  {title2}
                </span>
              </h1>

              <motion.p
                custom={2}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
              >
                {description}
              </motion.p>

              <motion.div
                custom={3}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex justify-center">
                  <RainbowButton
                    href="/early-access"
                    className="!px-8 !py-4 text-m"
                  >
                    Ücretsiz Deneyin
                  </RainbowButton>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#040837]/90 to-transparent" />
        <div className="bg-white/[0.02] backdrop-blur-xl py-8 border-t border-white/10">
          <div className="relative flex overflow-x-hidden">
            <motion.div
              className="flex items-center"
              animate={{
                x: ["0%", "-33.33%"],
              }}
              transition={{
                x: {
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
            >
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="relative w-72 h-20 mx-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#040837] via-transparent to-[#040837]/80" />
    </div>
  );
}
