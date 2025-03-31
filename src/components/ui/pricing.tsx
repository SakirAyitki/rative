"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { RainbowButton } from "./rainbow-button";
import { GlareCard } from "./glare-card";
import { useScrollAnimation, scrollVariants } from "@/hooks/use-scroll-animation";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

const plans = [
  {
    name: "BAŞLANGIÇ",
    price: "0",
    yearlyPrice: "0",
    period: "aylık",
    features: [
      "Sosyal Medya Verilerinin Takibi",
      "Rakip Analizi (Maksimum 1 Rakip)",
      "Sosyal Medya Pazarlama Stratejileri",
    ],
    description: "Bireysel kullanıcılar ve küçük işletmeler için ideal",
    buttonText: "Ücretsiz Dene",
    href: "/payment/starter",
    isPopular: false
  },
  {
    name: "PROFESYONEL",
    price: "18",
    yearlyPrice: "14",
    period: "aylık",
    features: [
      "Geçmiş Sosyal Medya Verilerinin Takibi",
      "Rakip Analizi (Maksimum 5 Rakip)",
      "Sosyal Medya Pazarlama Stratejileri",
      "Anlaşılabilir Raporlar"
    ],
    description: "Büyüyen işletmeler ve profesyonel kullanım için",
    buttonText: "Hemen Başla",
    href: "/payment/professional",
  },
  {
    name: "KURUMSAL",
    price: "30",
    yearlyPrice: "26",
    period: "aylık",
    features: [
      "Sosyal Medya Verilerinin Takibi",
      "Rakip Analizi (Sınırsız)",
      "Kişiselleştirilmiş Sosyal Medya Pazarlama Stratejileri",
      "Anlaşılabilir Raporlar",
    ],
    description: "Büyük kurumlar ve özel ihtiyaçlar için",
    buttonText: "Bizimle İletişime Geçin",
    href: "/payment/enterprise",
    isPopular: false
  }
];

export function Pricing() {
  const { ref, controls } = useScrollAnimation();
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative bg-brand-background min-h-screen flex items-center py-12 sm:py-16 md:py-24 lg:py-0">
      {/* Üst Ayraç */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent" />
      
      {/* İnce Çizgi */}
      <div className="absolute inset-x-0 top-0 border-t border-white/5" />

      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={scrollVariants}
        className="container mx-auto px-4 py-12 sm:py-16 md:py-24 lg:py-32 w-full"
      >
        {/* Başlık */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.2 }
            }
          }}
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
            Fiyatlandırma
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            İhtiyaçlarınıza en uygun paketi seçin
          </p>
        </motion.div>

        {/* Fiyatlandırma Seçenekleri */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16 px-4">
          <span className={cn("text-base sm:text-lg", !isYearly ? "text-white" : "text-gray-400")}>Aylık</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={cn(
              "w-14 sm:w-16 h-7 sm:h-8 rounded-full relative transition-colors duration-200",
              isYearly ? "bg-brand-primary" : "bg-white/10"
            )}
          >
            <div
              className={cn(
                "absolute top-1 w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-white transition-transform duration-200",
                isYearly ? "right-1" : "left-1"
              )}
            />
          </button>
          <span className={cn("text-base sm:text-lg", isYearly ? "text-white" : "text-gray-400")}>
            Yıllık <span className="text-brand-primary whitespace-nowrap">(%20 İndirim)</span>
          </span>
        </div>

        {/* Paketler */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-6 lg:gap-8 px-4 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.2 * (index + 1) }
                }
              }}
              className="flex"
            >
              <GlareCard 
                className={cn(
                  "relative overflow-hidden z-10 h-130",
                  plan.isPopular ? "border-[1px] border-brand-primary/50" : ""
                )}
                href={plan.href}
              >
                <div className="flex flex-col min-h-full p-5 sm:p-6 md:p-8">
                  {/* Paket Başlığı */}
                  <div className="text-center mb-5 sm:mb-6 md:mb-8">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center gap-1 sm:gap-2">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        ${isYearly ? plan.yearlyPrice : plan.price}
                      </span>
                      <span className="text-sm sm:text-base text-gray-400">/{isYearly ? 'yıllık' : plan.period}</span>
                    </div>
                    {isYearly && (
                      <div className="text-xs sm:text-sm text-brand-primary mt-2">Yıllık faturalandırma</div>
                    )}
                  </div>

                  {/* Özellikler */}
                  <div className="flex-1 mb-5 sm:mb-6 md:mb-8">
                    <ul className="space-y-3 sm:space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buton ve Açıklama */}
                  <div className="relative z-30">
                    <RainbowButton 
                      href={plan.href}
                      className={cn(
                        "w-full !px-3 sm:!px-4 md:!px-6 !py-2 sm:!py-2.5 md:!py-3 text-sm sm:text-base",
                        plan.isPopular ? "bg-brand-primary hover:bg-brand-primary/90" : ""
                      )}
                    >
                      {plan.buttonText}
                    </RainbowButton>
                    <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4 text-center">
                      {plan.description}
                    </p>
                  </div>
                </div>
              </GlareCard>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Alt Ayraç */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-transparent via-brand-secondary/5 to-transparent" />
    </section>
  );
}