"use client";

import { motion } from "framer-motion";
import { useScrollAnimation, scrollVariants } from "@/hooks/use-scroll-animation";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Footer } from "@/components/ui/footer";
import { Briefcase, Users, Rocket, Star, ArrowRight, Building2, Globe2, Gem } from "lucide-react";

const benefits = [
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Uzaktan Çalışma",
    description: "Hibrit çalışma modeli ile istediğiniz yerden çalışma imkanı"
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Kariyer Gelişimi",
    description: "Sürekli öğrenme ve gelişim fırsatları"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Harika Ekip",
    description: "Dinamik ve yenilikçi bir ekibin parçası olun"
  },
  {
    icon: <Gem className="w-6 h-6" />,
    title: "Rekabetçi Maaş",
    description: "Piyasa üstü ücret ve yan haklar"
  }
];

const positions = [
  {
    title: "Frontend Developer",
    type: "Tam Zamanlı",
    location: "Uzaktan / İstanbul",
    department: "Mühendislik",
    description: "Modern web teknolojileri ile kullanıcı deneyimini en üst seviyeye çıkaracak yetenekli frontend geliştiriciler arıyoruz."
  },
  {
    title: "Backend Developer",
    type: "Tam Zamanlı",
    location: "Uzaktan / İstanbul",
    department: "Mühendislik",
    description: "Ölçeklenebilir ve güvenli backend sistemleri geliştirecek deneyimli backend geliştiriciler arıyoruz."
  },
  {
    title: "UI/UX Designer",
    type: "Tam Zamanlı",
    location: "Uzaktan / İstanbul",
    department: "Tasarım",
    description: "Kullanıcı odaklı ve yenilikçi tasarımlar oluşturacak yaratıcı UI/UX tasarımcıları arıyoruz."
  }
];

const handleApply = (position: string) => {
  console.log(`Başvuru yapıldı: ${position}`);
  // İleride buraya başvuru formu veya başvuru mantığı eklenebilir
};

export default function Careers() {
  const { ref, controls } = useScrollAnimation();

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center relative overflow-hidden">
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
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Bizimle Çalışın
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Geleceği şekillendiren bir ekibin parçası olun
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-gray-400">
                <Building2 className="w-5 h-5" />
                <span>Hibrit Çalışma</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-5 h-5" />
                <span>Harika Ekip</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Rocket className="w-5 h-5" />
                <span>Hızlı Büyüme</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={scrollVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Neden Rative?
            </h2>
            <p className="text-xl text-gray-400">
              Size sunduğumuz fırsatlar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10
                          hover:border-brand-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary 
                              p-3 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={scrollVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Açık Pozisyonlar
            </h2>
            <p className="text-xl text-gray-400">
              Ekibimize katılın
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {positions.map((position, index) => (
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
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10
                          hover:border-brand-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="text-gray-400 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span className="text-gray-400 flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="text-gray-400 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {position.department}
                      </span>
                    </div>
                    <p className="text-gray-400">{position.description}</p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <RainbowButton 
                      href="#"
                      className="!px-6 !py-3" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleApply(position.title);
                      }}
                    >
                      <span className="flex items-center gap-2">
                        Başvur
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </RainbowButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 