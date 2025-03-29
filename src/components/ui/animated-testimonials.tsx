"use client";

import { ArrowLeft, ArrowRight } from "lucide-react"; // lucide-react kullanıyoruz
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className={cn("max-w-6xl mx-auto px-4", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="relative">
          <div className="relative h-96 w-full">
            <AnimatePresence>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute inset-0"
              >
                <Image
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  fill
                  className="object-cover rounded-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <motion.p className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
                "{testimonials[active].quote}"
              </motion.p>

              <div className="space-y-2">
                <p className="text-xl font-semibold text-white">
                  {testimonials[active].name}
                </p>
                <p className="text-lg text-gray-400">
                  {testimonials[active].designation}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 pt-12 md:pt-0 relative z-10">
            <button
              onClick={handlePrev}
              className="h-12 w-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-200 cursor-pointer"
              aria-label="Önceki yorum"
            >
              <ArrowLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="h-12 w-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-200 cursor-pointer"
              aria-label="Sonraki yorum"
            >
              <ArrowRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 