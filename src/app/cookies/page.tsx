"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/ui/footer";

export default function Cookies() {
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
              Çerez Politikası
            </h1>
            <p className="text-xl text-gray-300">
              Web sitemizin çerez kullanımı hakkında bilmeniz gerekenler
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
                  Web sitemizi her ziyaretinizde erişim ve kullanımlarınızı gösteren bilgiler sitemizi kullanışlı, etkili, güvenli hale getirmek ve size daha iyi hizmet verebilmek amacıyla çeşitli veri elde etme araçları ile veya bizim adımıza faaliyet gösteren iş ortalarımız olan üçüncü kişiler tarafından ilgili teknolojiler kullanılarak verileriniz toplanır ve hukuka uygun olarak işlenir.
                </p>
              </div>

              {/* Çerez Nedir */}
              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Çerez (&quot;Cookie&quot;) Nedir?
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Çerezler, bir web sayfası ziyaret edildiği zaman tarayıcılardaki kullanıcıların depolandığı genelde harf ve rakamlardan oluşan çok küçük metin dosyalarıdır. Kişilerin web siteleri üzerinde aradıklarını tarayıcı geçmişinde kayıt tutar. Site üzerindeki hareketleri tarayıcı kayıtlarında tutarak bir web sitesine izin verir. Çerezler, web sitelerine aynı ziyaretçinin siteyi yeniden ziyaret ettiğini gösteren kimlik kartlarına benzetilebilir. Çerezler, ziyaretçilere ilişkin isim, cinsiyet veya adres gibi kişisel verileri içermezler.
                </p>
              </div>

              {/* Çerez Çeşitleri */}
              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Çerezlerin Çeşitleri ve Kullanım Amaçları
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Site sahibi tarafından yönetilen Çerezler, Web sitesi Çerezi olarak adlandırılmaktadır. Bunun dışında farklı firmalar tarafından yönetilen üçüncü taraf Çerezlerinde kullanılabilmektedir...
                </p>
              </div>

              {/* Kullandığımız Çerez Türleri */}
              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Kullandığımız Çerez Türleri
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-brand-primary mb-4">Oturum çerezleri</h3>
                    <p className="text-gray-300">Siteyi ziyaretiniz süresinde kullanılan ve tarayıcıyı kapattığınızda silinen geçici çerezlerdir...</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-brand-primary mb-4">Kalıcı çerezler</h3>
                    <p className="text-gray-300">Sitenin işlevselliğini arttırmak, ziyaretçilere daha hızlı ve iyi bir hizmet sunmak için kullanılır...</p>
                  </div>
                  {/* Diğer çerez türleri... */}
                </div>
              </div>

              {/* Çerezleri Kontrol Etme */}
              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Çerezleri Kontrol Etme ve Silme
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Çerezlerin kullanımına ilişkin tercihlerinizi değiştirmek ya da çerezleri engellemek veya silmek için tarayıcınızın ayarlarını değiştirmeniz yeterlidir...
                </p>
                <div className="space-y-3">
                  <a href="https://support.google.com/chrome/answer/95647?hl=tr" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-brand-primary hover:text-brand-secondary transition-colors block">
                    Google Chrome
                  </a>
                  {/* Diğer tarayıcı linkleri... */}
                </div>
              </div>

              {/* Haklar */}
              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Hangi Haklara Sahipsiniz?
                </h2>
                <ul className="list-disc pl-8 space-y-3 text-gray-300">
                  <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
                  <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme</li>
                  {/* Diğer haklar... */}
                </ul>
              </div>

              {/* Rıza ve Değişiklikler */}
              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Rıza ve Politika'daki Değişiklikler
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Politika ile size Çerez kullanımı konusunda detaylı açıklama sunmayı ve Çerez tercihleri konusunda bilgilendirmede bulunmayı hedeflemekteyiz...
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