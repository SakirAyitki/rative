"use client";

import { motion } from "framer-motion";
import { BarChart3, Users2, Target, TrendingUp, Check } from "lucide-react";
import { RainbowButton } from "./rainbow-button";
import { GlareCard } from "@/components/ui/glare-card";
import { useScrollAnimation, scrollVariants } from "@/hooks/use-scroll-animation";

const services = [
  {
    icon: <BarChart3 className="w-16 h-16" />,
    title: "Sosyal Medya Verilerinin Takibi",
    description: "Sosyal medyadaki trendleri detaylı bir şekilde analiz ederek kendi hesaplarınızı ön plana çıkarın ve rakiplerinizden bir adım öne geçin!"
  },
  {
    icon: <Users2 className="w-16 h-16" />,
    title: "Rakip Analizi",
    description: "Rakiplerinizin metriklerini detaylı bir şekilde inceleyerek, zayıf ve güçlü yönlerinizi tespit edin ve kendinizi sürekli güncelleyerek her zaman bir adım önde olun!"
  },
  {
    icon: <Target className="w-16 h-16" />,
    title: "Sosyal Medya Pazarlama Stratejileri",
    description: "Doğru kitleye yönelen çarpıcı reklam stratejileriyle kaynağınızı doğru yere yatırın ve rekabetçi pazarlama stratejileri oluşturun!"
  },
  {
    icon: <TrendingUp className="w-16 h-16" />,
    title: "Anlaşılabilir Raporlar",
    description: "Dijital pazarlama performansınızı pratik PDF raporlarıyla takip edin, rapor sonuçlarını tek bakışta karşılaştırarak stratejilerinizi optimize edin!"
  }
];

export function Services() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="services" className="relative min-h-screen flex items-center bg-brand-background">
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
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Sosyal medya başarınız için ihtiyacınız olan tüm araçlar ve analizler tek bir platformda
          </p>
        </motion.div>

        {/* Hizmet Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
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
              <GlareCard className="flex flex-col min-h-[400px] overflow-hidden group">
                {/* Üst Kısım - İkon ve Başlık */}
                <div className="relative p-8 flex flex-col items-center text-center">
                  {/* İkon */}
                  <div className="text-white/90 transform group-hover:scale-110 transition-transform duration-300 mb-6">
                    <div className="w-16 h-16">
                      {service.icon}
                    </div>
                  </div>

                  {/* Başlık - Sabit yükseklik */}
                  <div className="h-[60px] flex items-center"> {/* Sabit yükseklik container'ı */}
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* İçerik */}
                <div className="flex-1 flex flex-col w-full px-8 pb-8">
                  {/* Açıklama */}
                  <p className="text-base text-gray-400 text-center">
                    {service.description}
                  </p>
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