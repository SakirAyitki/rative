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
    <section id="pricing" className="relative bg-brand-background min-h-screen flex items-center">
      {/* Üst Ayraç */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent" />
      
      {/* İnce Çizgi */}
      <div className="absolute inset-x-0 top-0 border-t border-white/5" />

      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={scrollVariants}
        className="container mx-auto py-32"
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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fiyatlandırma
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            İhtiyaçlarınıza en uygun paketi seçin
          </p>
        </motion.div>

        {/* Fiyatlandırma Seçenekleri */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={cn("text-lg", !isYearly ? "text-white" : "text-gray-400")}>Aylık</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={cn(
              "w-16 h-8 rounded-full relative transition-colors duration-200",
              isYearly ? "bg-brand-primary" : "bg-white/10"
            )}
          >
            <div
              className={cn(
                "absolute top-1 w-6 h-6 rounded-full bg-white transition-transform duration-200",
                isYearly ? "right-1" : "left-1"
              )}
            />
          </button>
          <span className={cn("text-lg", isYearly ? "text-white" : "text-gray-400")}>
            Yıllık <span className="text-brand-primary">(%20 İndirim)</span>
          </span>
        </div>

        {/* Paketler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            >
              <GlareCard 
                className={cn(
                  "relative overflow-hidden z-10",
                  plan.isPopular ? "border-[1px] border-brand-primary/50" : ""
                )}
                href={plan.href}
              >
                <div className="flex flex-col h-full p-8">
                  {/* Paket Başlığı */}
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-white">
                        ${isYearly ? plan.yearlyPrice : plan.price}
                      </span>
                      <span className="text-gray-400">/{isYearly ? 'yıllık' : plan.period}</span>
                    </div>
                    {isYearly && (
                      <div className="text-sm text-brand-primary mt-2">Yıllık faturalandırma</div>
                    )}
                  </div>

                  {/* Özellikler */}
                  <div className="flex-1 mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buton ve Açıklama */}
                  <div className="relative z-30">
                    <RainbowButton 
                      href={plan.href}
                      className={cn(
                        "w-full !px-6 !py-3 text-base",
                        plan.isPopular ? "bg-brand-primary hover:bg-brand-primary/90" : ""
                      )}
                    >
                      {plan.buttonText}
                    </RainbowButton>
                    <p className="text-sm text-gray-400 mt-4 text-center">
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