"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/ui/footer";

export default function KVKK() {
  return (
    <main className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/30 via-brand-secondary/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary/20 via-brand-secondary/10 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-brand-primary/90 to-brand-secondary bg-clip-text text-transparent mb-6">
              KVKK Aydınlatma Metni
            </h1>
            <p className="text-xl text-gray-300">
              Kişisel verilerinizin korunması hakkında bilmeniz gerekenler
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="prose prose-invert prose-lg max-w-6xl mx-auto">
            <div className="space-y-12">
              {/* Giriş */}
              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <p className="text-gray-300 leading-relaxed">
                  Kişisel verilerinizi özel hayatın gizliliği ve kişilerin temel hak ve özgürlüklerinin korunması ilkesine uygun olarak muhafazası, işlenmesi ve mevzuata uygun olarak aktarımı aşamalarında userative.com olarak Veri Sorumlusu sıfatı ile gerekli önlemleri alıyoruz.
                </p>
              </div>

              {/* Amaç */}
              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Aydınlatma Metni Hakkında
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Kişisel Verilerin İşlenmesi Aydınlatma Metnimizi ("Aydınlatma Metni") Kişisel Verilerin Korunması Kanunu (KVKK) ve yasal düzenlemeler çerçevesinde kişisel verilerinizin işlenmesi, saklanması ve aktarılmasına ilişkin veri sahibi ilgili kişileri bilgilendirmek amacıyla hazırladık. Bu sayfa içerisinde veri sorumlusu olarak bilgilerimize, kişisel verilerin hangi amaçla işleneceği, kimlere ve hangi amaçla aktarılabileceğine, kişisel veri toplamanın yöntemi ve hukuki sebebine, KVKK da sayılı haklarınız hakkında tüm bilgiye ulaşabilirsiniz.
                </p>
              </div>

              {/* Değişiklikler */}
              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Değişiklikler
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Aydınlatma Metni içerisinde gerekli olduğu takdirde değişiklik yapabiliriz. Yapılacak değişiklikler yayımlanmasıyla birlikte geçerlilik kazanacaktır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 