"use client";

import { motion } from "framer-motion";
import { useScrollAnimation, scrollVariants } from "@/hooks/use-scroll-animation";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Footer } from "@/components/ui/footer";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "E-posta",
    description: "ayitkisakir1@gmail.com",
    href: "mailto:ayitkisakir1@gmail.com"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Telefon",
    description: "+90 (555) 123 45 67",
    href: "tel:+905551234567"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Adres",
    description: "İstanbul, Türkiye",
    href: "https://maps.app.goo.gl/jsWzN1ELsdcEBDTx5"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Çalışma Saatleri",
    description: "Hafta içi 09:00-18:00",
    href: "#"
  }
];

export default function Contact() {
  const { ref, controls } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mail içeriğini oluştur
    const mailtoLink = `mailto:ayitkisakir1@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `İsim: ${formData.name}
E-posta: ${formData.email}

Mesaj:
${formData.message}`
    )}`;

    // Mail uygulamasını aç
    window.location.href = mailtoLink;
  };

  return (
    <main className="relative">
      {/* Hero Section */}
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
              İletişime Geçin
            </h1>
            <p className="text-xl text-gray-400">
              Sorularınız için buradayız. Size yardımcı olmaktan mutluluk duyarız.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Mesaj Gönderin</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">İsim</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">E-posta</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-primary transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-white mb-2">Konu</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Mesaj</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"
                    required
                  />
                </div>
                <div>
                  <RainbowButton type="submit" className="w-full">
                    <span className="flex items-center justify-center gap-2">
                      Gönder
                      <Send className="w-4 h-4" />
                    </span>
                  </RainbowButton>
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-white mb-8">İletişim Bilgileri</h2>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary p-3 flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{info.title}</h3>
                    <p className="text-gray-400">{info.description}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 