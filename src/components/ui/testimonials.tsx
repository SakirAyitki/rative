"use client";

import { AnimatedTestimonials } from "./animated-testimonials";

const testimonials = [
  {
    quote: "Rative sayesinde sosyal medya yönetimimiz çok daha kolay ve verimli hale geldi. Özellikle rakip analizi özelliği çok faydalıydı.",
    name: "Ahmet Yılmaz",
    designation: "Pazarlama Müdürü, TechCo",
    src: "/testimonials/person1.jpg" // Bu görselleri public/testimonials klasörüne eklemelisiniz
  },
  {
    quote: "Detaylı raporlama özellikleri ve kullanıcı dostu arayüzü ile Rative, sosyal medya yönetimimizde vazgeçilmez bir araç haline geldi.",
    name: "Ayşe Kaya",
    designation: "Dijital Pazarlama Uzmanı, MarketPro",
    src: "/testimonials/person2.jpg"
  },
  {
    quote: "Rakiplerimizin stratejilerini anlamamızda ve kendi stratejilerimizi geliştirmemizde Rative çok yardımcı oldu. Kesinlikle tavsiye ediyorum.",
    name: "Mehmet Demir",
    designation: "CEO, GrowthLab",
    src: "/testimonials/person3.jpg"
  }
];

export function Testimonials() {
  return (
    <section className="relative bg-brand-background min-h-screen flex items-center">
      {/* Üst Ayraç */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent" />
      
      {/* İnce Çizgi */}
      <div className="absolute inset-x-0 top-0 border-t border-white/5" />

      <div className="container mx-auto pt-32 pb-32">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Rative İle Güçlenenler Neler Söylüyor?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Rative'i kullanan müşterilerimizin deneyimlerini dinleyin
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} />
      </div>

      {/* Alt Ayraç */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-transparent via-brand-secondary/5 to-transparent" />
    </section>
  );
} 