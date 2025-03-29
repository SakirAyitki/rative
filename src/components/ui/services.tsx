"use client";

import { motion } from "framer-motion";
import { BarChart3, Users2, Target, TrendingUp } from "lucide-react";
import { RainbowButton } from "./rainbow-button";
import { GlareCard } from "@/components/ui/glare-card";

const services = [
  {
    icon: <BarChart3 className="w-16 h-16" />,
    title: "Sosyal Medya Verilerinin Takibi",
    description: "Sosyal medyadaki trendleri detaylı bir şekilde analiz ederek kendi hesaplarınızı ön plana çıkarın ve rakiplerinizden bir adım öne geçin!",
    features: ["Etkileşim Analizi", "İçerik Performansı", "Takipçi İstatistikleri"]
  },
  {
    icon: <Users2 className="w-16 h-16" />,
    title: "Rakip Analizi",
    description: "Rakiplerinizin metriklerini detaylı bir şekilde inceleyerek, zayıf ve güçlü yönlerinizi tespit edin ve kendinizi sürekli güncelleyerek her zaman bir adım önde olun!",
    features: ["Rakip Takibi", "Strateji Karşılaştırma", "Pazar Konumu"]
  },
  {
    icon: <Target className="w-16 h-16" />,
    title: "Sosyal Medya Pazarlama Stratejileri",
    description: "Doğru kitleye yönelen çarpıcı reklam stratejileriyle kaynağınızı doğru yere yatırın ve rekabetçi pazarlama stratejileri oluşturun!",
    features: ["Konum Verileri", "Cinsiyet Verileri", "Yaş Verileri"]
  },
  {
    icon: <TrendingUp className="w-16 h-16" />,
    title: "Anlaşılabilir Raporlar",
    description: "Dijital pazarlama performansınızı pratik PDF raporlarıyla takip edin, rapor sonuçlarını tek bakışta karşılaştırarak stratejilerinizi optimize edin!",
    features: ["İşletmeye Özel Raporlar", "Öneriler ve Stratejiler", "Öğrenme ve Gelişim"]
  }
];

export function Services() {
  return (
    <section className="relative pt-32 pb-24 bg-brand-background">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlareCard className="flex flex-col min-h-[500px] overflow-hidden group">
                {/* Üst Kısım - Görsel Alanı */}
                <div className="relative h-48 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/90 transform scale-150 group-hover:scale-[1.6] transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950 to-transparent" />
                </div>

                {/* Alt Kısım - İçerik */}
                <div className="flex flex-col items-center h-full p-8 relative">
                  {/* Orta Kısım - Başlık ve Açıklama */}
                  <div className="flex-1 flex flex-col items-center justify-center w-full space-y-6">
                    {/* Başlık */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
                      {service.title}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mb-6" />

                    {/* Açıklama */}
                    <p className="text-gray-300/90 text-[17px] leading-relaxed font-light tracking-wide text-center max-w-[85%]">
                      {service.description}
                    </p>
                  </div>

                  {/* Alt Kısım - Özellikler */}
                  <div className="w-full mt-auto pt-8 border-t border-white/5">
                    <div className="mb-5 text-sm uppercase tracking-wider text-brand-primary/90 font-semibold text-center">
                      Öne Çıkan Özellikler
                    </div>
                    <ul className="grid gap-3">
                      {service.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className="text-gray-400 text-center text-[15px] font-medium tracking-wide hover:text-gray-200 transition-colors duration-200"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlareCard>
            </motion.div>
          ))}
        </div>

        {/* CTA Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
} 