"use client";

import { AnimatedTestimonials } from "./animated-testimonials";

const testimonials = [
  {
    quote: "Rative sayesinde sosyal medya yönetimimiz çok daha kolay ve verimli hale geldi. Özellikle rakip analizi özelliği stratejilerimizi geliştirmemizde büyük fayda sağladı.",
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
    <section className="relative bg-brand-background">
      <div className="container mx-auto">
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
    </section>
  );
} 