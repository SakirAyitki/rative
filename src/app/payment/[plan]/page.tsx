"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Footer } from "@/components/ui/footer";
import { CreditCard, Lock, Shield } from "lucide-react";

const plans = {
  starter: {
    name: "BAŞLANGIÇ",
    price: "0",
    yearlyPrice: "0",
    features: [
      "Sosyal Medya Verilerinin Takibi",
      "Rakip Analizi (Maksimum 1 Rakip)",
      "Sosyal Medya Pazarlama Stratejileri",
    ]
  },
  professional: {
    name: "PROFESYONEL",
    price: "18",
    yearlyPrice: "14",
    features: [
      "Geçmiş Sosyal Medya Verilerinin Takibi",
      "Rakip Analizi (Maksimum 5 Rakip)",
      "Sosyal Medya Pazarlama Stratejileri",
      "Anlaşılabilir Raporlar"
    ]
  },
  enterprise: {
    name: "KURUMSAL",
    price: "30",
    yearlyPrice: "26",
    features: [
      "Sosyal Medya Verilerinin Takibi",
      "Rakip Analizi (Sınırsız)",
      "Kişiselleştirilmiş Sosyal Medya Pazarlama Stratejileri",
      "Anlaşılabilir Raporlar",
    ]
  }
};

// Kart numarası formatlama fonksiyonu
const formatCardNumber = (value: string) => {
  const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  const matches = v.match(/\d{4,16}/g);
  const match = matches && matches[0] || '';
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(' ');
  } else {
    return value;
  }
};

// Son kullanma tarihi formatlama fonksiyonu
const formatExpiryDate = (value: string) => {
  const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  if (v.length >= 2) {
    return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
  }
  return v;
};

export default function Payment() {
  const params = useParams();
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
    yearlyPrice: string;
    features: string[];
  } | null>(null);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  useEffect(() => {
    const plan = plans[params.plan as keyof typeof plans];
    setSelectedPlan(plan);
  }, [params.plan]);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, ''); // Tüm boşlukları kaldır
    if (!/^\d*$/.test(value)) return;
    
    const formatted = formatCardNumber(value);
    if (formatted.length <= 19) { // 16 rakam + 3 boşluk
      setCardNumber(formatted);
    }
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Silme işlemi için özel kontrol
    if (value.length < expiryDate.length) {
      // Eğer "/" karakterinden sonrasını siliyorsak
      if (value.endsWith('/')) {
        value = value.slice(0, -1);
      }
      setExpiryDate(value);
      return;
    }

    // Sadece sayıları al
    value = value.replace('/', '');
    if (!/^\d*$/.test(value)) return;
    
    if (value.length <= 4) {
      setExpiryDate(formatExpiryDate(value));
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;
    
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  if (!selectedPlan) return null;

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
              {selectedPlan.name} Paketini Seçtiniz
            </h1>
            <p className="text-xl text-gray-300">
              Hemen ödemenizi yapın ve Rative'in gücünü keşfedin
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sol Taraf - Ödeme Formu */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6">Ödeme Bilgileri</h2>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-200">
                      Kart Üzerindeki İsim
                      <input
                        type="text"
                        className="mt-1 block w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors"
                        placeholder="Ad Soyad"
                      />
                    </label>
                    
                    <label className="block text-sm font-medium text-gray-200">
                      Kart Numarası
                      <div className="mt-1 relative">
                        <input
                          type="text"
                          inputMode="numeric"
                          pattern="\d*"
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                          onKeyDown={(e) => {
                            if (e.key === ' ') {
                              e.preventDefault();
                            }
                          }}
                          className="block w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors"
                          placeholder="0000 0000 0000 0000"
                          maxLength={19}
                        />
                        <CreditCard className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 h-5 w-5" />
                      </div>
                    </label>

                    <div className="grid grid-cols-2 gap-4">
                      <label className="block text-sm font-medium text-gray-200">
                        Son Kullanma Tarihi
                        <input
                          type="text"
                          inputMode="numeric"
                          pattern="\d*"
                          value={expiryDate}
                          onChange={handleExpiryDateChange}
                          className="mt-1 block w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors"
                          placeholder="AA/YY"
                          maxLength={5}
                        />
                      </label>

                      <label className="block text-sm font-medium text-gray-200">
                        CVV
                        <input
                          type="text"
                          inputMode="numeric"
                          pattern="\d*"
                          value={cvv}
                          onChange={handleCvvChange}
                          className="mt-1 block w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors"
                          placeholder="123"
                          maxLength={3}
                        />
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="relative w-full py-4 rounded-lg font-medium group overflow-hidden"
                  >
                    {/* Dönen gradient border */}
                    <div 
                      className="absolute -inset-[1px] rounded-lg -z-10"
                      style={{
                        background: 'linear-gradient(var(--rotate), #2B95FF, #00E5FF, #6366F1, #8B5CF6, #2B95FF)',
                        animation: 'spin 6s linear infinite',
                      }}
                    />

                    {/* Butonun iç kısmı */}
                    <div className="absolute inset-[1px] rounded-lg bg-[#040837] -z-10" />

                    {/* İkon ve metin */}
                    <div className="relative z-10 flex items-center justify-center gap-2 text-white">
                      <Lock className="w-5 h-5" />
                      <span>Güvenli Ödeme Yap</span>
                    </div>

                    {/* Hover efekti */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                    <style jsx>{`
                      @property --rotate {
                        syntax: "<angle>";
                        initial-value: 0deg;
                        inherits: false;
                      }

                      @keyframes spin {
                        0% {
                          --rotate: 0deg;
                        }
                        100% {
                          --rotate: 360deg;
                        }
                      }
                    `}</style>
                  </button>
                </form>
              </div>

              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <Lock className="h-4 w-4" />
                <span>256-bit SSL şifreleme ile güvenli ödeme</span>
              </div>
            </motion.div>

            {/* Sağ Taraf - Sipariş Özeti */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 sticky top-8">
                <h2 className="text-2xl font-bold text-white mb-6">Sipariş Özeti</h2>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-6 border-b border-white/20">
                    <span className="text-gray-200">Plan</span>
                    <span className="text-white font-medium">{selectedPlan.name}</span>
                  </div>

                  <div className="flex justify-between items-center pb-6 border-b border-white/20">
                    <span className="text-gray-200">Fatura Dönemi</span>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setIsYearly(false)}
                        className={`px-4 py-2 rounded-lg transition-colors ${!isYearly ? 'bg-brand-primary text-white' : 'text-gray-400'}`}
                      >
                        Aylık
                      </button>
                      <button
                        onClick={() => setIsYearly(true)}
                        className={`px-4 py-2 rounded-lg transition-colors ${isYearly ? 'bg-brand-primary text-white' : 'text-gray-400'}`}
                      >
                        Yıllık
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200">Ara Toplam</span>
                      <span className="text-white font-medium">
                        ${isYearly ? selectedPlan.yearlyPrice : selectedPlan.price}
                        <span className="text-sm text-gray-400">/{isYearly ? 'yıl' : 'ay'}</span>
                      </span>
                    </div>

                    {isYearly && (
                      <div className="flex justify-between items-center text-brand-primary">
                        <span>Yıllık İndirim</span>
                        <span>20% Tasarruf</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-white/20">
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-white font-medium">Toplam</span>
                      <span className="text-2xl text-white font-bold">
                        ${isYearly ? selectedPlan.yearlyPrice : selectedPlan.price}
                        <span className="text-sm text-gray-400">/{isYearly ? 'yıl' : 'ay'}</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4 flex items-start gap-3">
                    <Shield className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-200">
                      7 gün içinde iade garantisi. Eğer memnun kalmazsanız paranızı iade ediyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 