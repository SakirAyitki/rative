"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/ui/footer";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Rocket, Star, Shield, Users } from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "Özel İndirimler",
    description: "Erken kayıt olanlara özel %30'a varan indirimler"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Öncelikli Erişim",
    description: "Yeni özelliklere ilk siz erişin"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Garantili Fiyat",
    description: "Fiyat artışlarından etkilenmezsiniz"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Özel Destek",
    description: "VIP müşteri desteği hizmeti"
  }
];

export default function EarlyAccess() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      email: formData.get('email'),
      message: `Şirket: ${formData.get('company') || 'Belirtilmedi'}\nErken Kayıt Talebi`,
    };

    try {
      const response = await fetch('https://formspree.io/f/xdoqgwnq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Erken kayıt talebiniz alındı. En kısa sürede size dönüş yapacağız.');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error();
      }
    } catch (error) {
      alert('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative bg-gradient-to-b from-gray-900 via-[#0a0f29] to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/40 via-brand-secondary/30 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary/30 via-brand-secondary/20 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-brand-primary/90 to-brand-secondary bg-clip-text text-transparent mb-6">
              Erken Kayıt Avantajı
            </h1>
            <p className="text-xl text-gray-300">
              Şimdi kayıt olun, özel avantajlardan yararlanın
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative -mt-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20
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

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto mb-10"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Erken Kayıt Formu
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Ad
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Soyad
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    E-posta
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Şirket (Opsiyonel)
                  </label>
                  <input
                    name="company"
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors"
                    placeholder="Şirket adı"
                  />
                </div>

                <button type="submit" className="w-full" disabled={isLoading}>
                  <RainbowButton href="mailto:ayitkisakir1@gmail.com" className="w-full !py-4">
                    {isLoading ? 'Gönderiliyor...' : 'Erken Kayıt Ol'}
                  </RainbowButton>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 