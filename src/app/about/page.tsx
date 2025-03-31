"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollAnimation, scrollVariants } from "@/hooks/use-scroll-animation";
import { GlareCard } from "@/components/ui/glare-card";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Footer } from "@/components/ui/footer";
import { Code, Users, Target, Rocket, Award, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";

const stats = [
  { 
    number: "5+", 
    label: "Yıllık Deneyim",
    icon: "/icons/calendar.png"
  },
  { 
    number: "1000+", 
    label: "Mutlu Müşteri",
    icon: "/icons/users.png"
  },
  { 
    number: "50M+", 
    label: "Analiz Edilen Veri",
    icon: "/icons/chart.png"
  },
  { 
    number: "24/7", 
    label: "Destek",
    icon: "/icons/support.png"
  },
];

const values = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "İnovasyon",
    description: "En son teknolojileri kullanarak sürekli kendimizi yeniliyoruz",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Müşteri Odaklılık",
    description: "Müşterilerimizin başarısı bizim başarımızdır",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Hedef Odaklılık",
    description: "Net hedeflerle yolumuza devam ediyoruz",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Tutku",
    description: "İşimizi severek ve tutkuyla yapıyoruz",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Büyüme",
    description: "Sürekli gelişim ve büyüme odaklı çalışıyoruz",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Kalite",
    description: "En yüksek kalite standartlarını hedefliyoruz",
    gradient: "from-violet-500 to-purple-500"
  },
];

const timeline = [
  {
    year: "2019",
    title: "Rative'in Doğuşu",
    description: "Sosyal medya analizi alanında yenilikçi çözümler sunmak için yola çıktık."
  },
  {
    year: "2020",
    title: "İlk Büyük Başarı",
    description: "500+ müşteriye ulaştık ve ürünümüzü sürekli geliştirdik."
  },
  {
    year: "2021",
    title: "Uluslararası Açılım",
    description: "Global pazara açıldık ve müşteri portföyümüzü genişlettik."
  },
  {
    year: "2022",
    title: "Teknolojik Atılım",
    description: "Yapay zeka destekli analiz özelliklerimizi devreye aldık."
  },
  {
    year: "2023",
    title: "Sürdürülebilir Büyüme",
    description: "1000+ mutlu müşteri ve milyonlarca analiz edilen veri."
  }
];

export default function About() {
  const { ref, controls } = useScrollAnimation();
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="relative">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-4 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Sosyal Medya Analitiğinin <br />
                Geleceğini Şekillendiriyoruz
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              2019&apos;dan beri sosyal medya analizi alanında yenilikçi çözümler sunuyoruz. 
              Amacımız, işletmelerin sosyal medya stratejilerini veriye dayalı kararlarla güçlendirmek.
            </p>
            <RainbowButton href="/early-access" className="!px-8 !py-4 text-lg">
              Bize Katılın <ArrowRight className="w-5 h-5 ml-2" />
            </RainbowButton>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section with 3D Cards */}
      <section className="py-20 relative">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={scrollVariants}
          className="container mx-auto px-4"
        >
          {/* Başlık */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.1 }
              }
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Rakamlarla Rative
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Sosyal medya analizi alanında güvenilir çözümler sunuyoruz
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.2 * index }
                  }
                }}
                whileHover={{ scale: 1.05 }}
                className="w-[450px]"
              >
                <GlareCard className="aspect-[4/3] p-8 flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-6 flex items-center justify-center">
                      <Image
                        src={stat.icon}
                        alt={stat.label}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </GlareCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={scrollVariants}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-16">
            Yolculuğumuz
          </h2>
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-brand-primary to-brand-secondary" />
            
            {/* Timeline Items */}
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: 0.2 * index }
                  }
                }}
                className={`flex items-center mb-8 md:mb-16 ${
                  // Center on mobile, alternate sides on desktop
                  `flex-col md:flex-row ${
                    index % 2 === 0 
                      ? 'md:justify-end items-center md:items-start' 
                      : 'md:justify-start items-center md:items-start'
                  }`
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="relative group">
                    {/* Dot on timeline - Hidden on mobile */}
                    <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-brand-primary 
                                  group-hover:scale-150 transition-transform duration-300
                                  shadow-[0_0_20px_rgba(43,149,255,0.5)]"
                         style={{
                           right: index % 2 === 0 ? '-38px' : 'auto',
                           left: index % 2 === 0 ? 'auto' : '-38px',
                         }}
                    />
                    
                    {/* Card */}
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10
                                  transform transition-all duration-300 group-hover:scale-105
                                  hover:shadow-[0_0_30px_rgba(43,149,255,0.2)]
                                  max-w-[90vw] md:max-w-none mx-auto md:mx-0">
                      {/* Year Badge */}
                      <div className="absolute top-0 left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0 -translate-y-1/2
                                    bg-gradient-to-r from-brand-primary to-brand-secondary
                                    text-white px-4 py-1 rounded-full text-sm font-bold
                                    whitespace-nowrap">
                        {item.year}
                      </div>
                      
                      {/* Content */}
                      <div className="mt-6 md:mt-4">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{item.title}</h3>
                        <p className="text-sm md:text-base text-gray-400">{item.description}</p>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                                    transition-opacity duration-300 pointer-events-none
                                    bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10" />
                      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100
                                    transition-opacity duration-300 pointer-events-none blur-md
                                    bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Values Section with Gradient Cards */}
      <section className="py-20 relative">
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={scrollVariants}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-16">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.1 * index }
                  }
                }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <GlareCard className="p-8 relative overflow-hidden transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className={`mb-6 w-16 h-16 rounded-xl bg-gradient-to-r ${value.gradient} p-4 mx-auto`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-4">{value.title}</h3>
                    <p className="text-gray-400 text-center">{value.description}</p>
                  </div>
                </GlareCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section with Particles */}
      <section className="py-20 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Hikayemizin Bir Parçası Olun
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Sosyal medya başarınızı bir üst seviyeye taşımak için hazır mısınız?
            </p>
            <RainbowButton href="/early-access" className="!px-8 !py-4 text-lg">
              Hemen Başlayın <ArrowRight className="w-5 h-5 ml-2" />
            </RainbowButton>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}