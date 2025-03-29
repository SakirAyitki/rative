"use client";

import { motion } from "framer-motion";
import { useScrollAnimation, scrollVariants } from "@/hooks/use-scroll-animation";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Footer } from "@/components/ui/footer";
import { 
  BookOpen, 
  HelpCircle, 
  MessageCircle, 
  Search,
  ChevronRight,
  FileText,
  Video,
  Rocket,
  Mail,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

interface Category {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

const popularTopics = [
  {
    title: "Hesap oluşturma ve yönetimi",
    description: "Yeni hesap oluşturma, profil düzenleme, güvenlik ayarları ve hesap yönetimi ile ilgili tüm bilgiler."
  },
  {
    title: "Sosyal medya hesaplarını bağlama",
    description: "Facebook, Instagram, Twitter ve diğer sosyal medya hesaplarınızı Rative'e nasıl bağlayacağınızı öğrenin."
  },
  {
    title: "Raporlama ve analizler",
    description: "Detaylı analiz raporları oluşturma, veri yorumlama ve performans takibi hakkında bilgiler."
  },
  {
    title: "Faturalama ve abonelikler",
    description: "Ödeme yöntemleri, fatura bilgileri, abonelik planları ve yükseltme işlemleri hakkında bilgiler."
  },
  {
    title: "API entegrasyonu",
    description: "Rative API'sini kendi uygulamanıza nasıl entegre edeceğiniz hakkında teknik dökümanlar."
  },
  {
    title: "Güvenlik ve gizlilik",
    description: "Veri güvenliği, gizlilik ayarları ve hesap güvenliği hakkında önemli bilgiler."
  }
];

export default function Help() {
  const { ref, controls } = useScrollAnimation();
  const [openTopic, setOpenTopic] = useState<number | null>(null);

  const scrollToPopularTopics = () => {
    const element = document.getElementById('popular-topics');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Başlangıç Rehberi",
      description: "Rative'i kullanmaya başlamak için temel bilgiler",
      onClick: scrollToPopularTopics
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Eğitimler",
      description: "Çok Yakında",
      onClick: scrollToPopularTopics
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "Sık Sorulan Sorular",
      description: "En çok sorulan soruların cevapları",
      onClick: scrollToPopularTopics
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "İleri Seviye Rehberler",
      description: "Çok Yakında",
      onClick: scrollToPopularTopics
    }
  ];

  return (
    <main className="relative">
      {/* Hero Section with Search */}
      <section className="min-h-[40vh] flex items-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nasıl Yardımcı Olabiliriz?
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              İhtiyacınız olan tüm bilgiler burada
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Yardım konusu ara..."
                className="w-full px-12 py-4 rounded-full bg-white/5 border border-white/10 
                         text-white focus:outline-none focus:border-brand-primary transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                onClick={category.onClick}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10
                            hover:border-brand-primary/50 transition-all duration-300 group
                            ${typeof category.onClick !== 'undefined' ? 'cursor-pointer' : ''}`}
              >
                <CategoryContent category={category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section id="popular-topics" className="py-20 relative bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={scrollVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Popüler Konular
            </h2>
            <p className="text-xl text-gray-400">
              En çok aranan yardım konuları
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {popularTopics.map((topic, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: 0.1 * index }
                  }
                }}
                className="rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenTopic(openTopic === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 bg-white/5
                            hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <BookOpen className="w-5 h-5 text-gray-400 group-hover:text-brand-primary transition-colors" />
                    <span className="text-gray-400 group-hover:text-white transition-colors text-left">
                      {topic.title}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200
                              ${openTopic === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openTopic === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-gray-400">
                      {topic.description}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Aradığınızı bulamadınız mı?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Destek ekibimiz size yardımcı olmaktan mutluluk duyacaktır
            </p>
            <div className="flex justify-center gap-4">
              <RainbowButton href="/contact" className="!px-8 !py-4">
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Destek Al
                </span>
              </RainbowButton>
              <RainbowButton href="mailto:support@rative.com" className="!px-8 !py-4">
                <span className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  E-posta Gönder
                </span>
              </RainbowButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const CategoryContent = ({ category }: { category: Category }) => (
  <>
    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary 
                    p-3 flex items-center justify-center mb-4">
      {category.icon}
    </div>
    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-brand-primary transition-colors">
      {category.title}
    </h3>
    <p className="text-gray-400">{category.description}</p>
  </>
); 