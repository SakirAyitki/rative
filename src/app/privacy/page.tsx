"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/ui/footer";

export default function Privacy() {
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
              Gizlilik Politikası
            </h1>
            <p className="text-xl text-gray-300">
              Verilerinizin güvenliği bizim için önemli
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="prose prose-invert prose-lg max-w-6xl mx-auto">
            <div className="space-y-12">
              {/* Her ana bölüm için özel stil */}
              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Hizmetlerimiz
                </h2>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-brand-primary mb-6">
                    Rative Inc. Hizmetler
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Rative Inc.'nin sosyal medya yönetimi ve sosyal bakım araçlarına web sitelerimiz ve mobil uygulamalarımız üzerinden ulaşılabilmektedir. Bu araçlar, tek bir çevrimiçi platform üzerinden kolay erişim ve yönetim için tüm sosyal medya hesaplarınızı birleştirmenize olanak tanır. Bu platform aracılığıyla sosyal medya, pazarlama ve reklam kampanyalarınızı yönetebilir; Hedef kitlenizle etkileşime geçin, mesajları planlayıp yayınlayın, müşteri hizmetleri iletişimlerini yönetin ve bu etkinliklerin sonuçlarını analiz edin.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Rative Inc.'nin sosyal müşteri hizmetleri çözümleri Rative Inc. tarafından sağlanmaktadır ve web sitelerimiz aracılığıyla erişilebilir. Bu çözüm, müşteri hizmetleri faaliyetlerinizi yönetmek için müşteri görüşmelerinizi etkileşimli bir kontrol panelinde birleştirmenize olanak tanır. Çözümümüz, WhatsApp Business, TikTok, Facebook, Instagram, Twitter, canlı sohbet ve SMS dahil çok sayıda ürün entegrasyonuna sahiptir.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Sosyal ağlar
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Kişisel bilgilerin Facebook, Instagram, Twitter, LinkedIn ve TikTok dahil olmak üzere sosyal ağlar (toplu olarak "Sosyal Ağlar") tarafından toplanması, kullanılması ve yönetilmesi, ilgili gizlilik politikalarına ve koşullarına tabidir. Sosyal Ağları kullanırken onların gizlilik politikalarına ve şartlarına uymanız gerekmektedir. Rative Inc. Sosyal Ağlardan sorumlu olmadığından gizlilik politikalarını ve koşullarını dikkatle incelemenizi öneririz.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Üçüncü Taraf Hizmetleri
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Hizmetlerimiz ayrıca Rative Inc. hesabınızı özelleştirmenize ve üçüncü taraf hizmetlerine ("Üçüncü Taraf Hizmetler") bağlamanıza da olanak tanır. Bilgilerinizin bu üçüncü taraflarca toplanması, ilgili Üçüncü Taraf Hizmetlerinin gizlilik politikaları ve şartlarına tabidir. Rative Inc. Üçüncü Taraf Hizmetlerinden sorumlu olmadığından gizlilik politikalarını ve koşullarını dikkatle incelemenizi öneririz.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Gizlilik Yükümlülükleriniz
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Gerekli izinlerin alınması ve gerekli bildirimlerin sağlanması da dahil olmak üzere, Hizmetler aracılığıyla bireyler hakkında bilgi toplarken, kullanırken veya açıklarken geçerli gizlilik yasalarına uyacağınıza güveniyoruz. Hizmetleri kullanımınızla ilgili herhangi bir soru veya şikayet alırsak, daha fazla yardım için talebi size yönlendireceğiz.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  İş Amaçları
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Hizmetlerimiz çocukların kullanımına yönelik değildir ve yalnızca en az 18 yaşında olan ve Hizmetleri iş amacıyla kullanan kişiler tarafından erişilebilir olmalıdır.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Hangi bilgileri topluyoruz?
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Aşağıdaki faaliyetler için makul olarak gerekli olduğu ölçüde hakkınızda bilgi topluyoruz:
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-semibold text-brand-primary mb-6">
                  Hizmetlerimizi Kullanmak
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Hizmetlerimizi kullandığınızda aşağıdaki bilgileri toplayabiliriz:
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h4 className="text-xl font-semibold text-brand-primary mb-6">
                  Hesap Bilgileri:
                </h4>
                <ul className="list-disc text-gray-300 leading-relaxed">
                  <li>Adınız, e-posta adresiniz, kuruluş adınız ve adresiniz dahil iletişim ve profil bilgileriniz</li>
                  <li>Dil, saat dilimi ve bizden almak istediğiniz iletişim türleri gibi tercihleriniz</li>
                  <li>Resim (bunu sağlamayı seçerseniz)</li>
                  <li>Kredi kartı numarası gibi ödeme yöntemi ayrıntıları</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h4 className="text-xl font-semibold text-brand-primary mb-6">
                  İçerik:
                </h4>
                <ul className="list-disc text-gray-300 leading-relaxed">
                  <li>Hizmetlere bağlanmayı seçtiğiniz Sosyal Ağlara ilişkin sosyal profil bilgileriniz</li>
                  <li>Bu bilgiyi paylaşmayı seçerseniz adres, şehir veya yer (örneğin bir restoran) gibi belirli bir konum</li>
                  <li>Seçtiğiniz ve Hizmetlere yüklediğiniz mesajlarınız, yayınlarınız, yorumlarınız, resimleriniz, reklamlarınız ve diğer materyalleriniz</li>
                  <li>Sosyal medya içeriği ve kullanıcı tarafından oluşturulan diğer içerikler</li>
                  <li>Bireylerin paylaşmayı seçtiği mesajlaşma içeriği</li>
                  <li>Sosyal medya ve mesajlaşma meta verileri</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h4 className="text-xl font-semibold text-brand-primary mb-6">
                  Günlükler, kullanım ve destek verileri:
                </h4>
                <ul className="list-disc text-gray-300 leading-relaxed">
                  <li>IP adresiniz, tarayıcı türünüz ve ayarlarınız, cihaz bilgileriniz</li>
                  <li>Oturum açma sıklığını ve Hizmetlerin sık erişilen alanları</li>
                  <li>Genel Konum bilgileri</li>
                  <li>Müşteri desteği soruları ve geri bildirimler</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Bilgilerinizi nasıl koruyoruz?
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Rative Inc., bilgilerinizi korumak için endüstri standardında güvenlik önlemleri alır. Bu, çalışanlarımızın, bilgilerini korumak için uygulamaları gereken önlemlerin farkında olmaları için uygun güvenlik ve gizlilik eğitimi ve rehberliği almalarını sağlamayı içerir.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Bilgilerinizi ne kadar süre saklıyoruz?
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Genel olarak Rative Inc. Hizmetleri için Sosyal Ağlardan İçerikleri kalıcı olarak saklamayız. Bunun yerine, Hizmetlerde oturum açtığınızda, oturumunuz sırasında görüntülenmek üzere platformda görüntülenmesi için Sosyal Ağlardan verileri gerçek zamanlı olarak alırız.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Bizimle nasıl iletişime geçilir?
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Herhangi bir sorunuz, endişeniz veya geri bildiriminiz varsa lütfen Gizlilik ekibimize ve Gizlilik Görevlimize/Veri Koruma Görevlimize; veya şu adrese bir mektup gönderin:
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Rative Inc.<br />
                  İstanbul, Türkiye<br />
                  info@userative.com
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Bilgilerinizi nasıl kullanıyoruz?
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Bilgilerinizi aşağıda açıklanan amaçlar doğrultusunda kullanırız:
                  </p>
                  <h3 className="text-2xl font-semibold text-brand-primary mt-8 mb-6">
                    Hizmetlerimizi sağlamak ve güvence altına almak
                  </h3>
                  <ul className="list-disc pl-8 space-y-3 text-gray-300">
                    <li>Kullanıcılarımızı tanımlamak ve kimliklerini doğrulamak</li>
                    <li>Hesabınızı oluşturmak ve yönetmek</li>
                    <li>Ödemeleri işleme koymak</li>
                    <li>Hizmetlerle ilgili olarak sizinle iletişim kurmak</li>
                    <li>Hizmetlerin performansını, güvenliğini ve uyumluluğunu yönetmek</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Bilgilerinize kimler erişebilir?
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Rative Inc. bilgilerinizi kiralamaz veya satmaz. Bilgilerinize erişimi yetkili çalışanlarımızla sınırlandırıyoruz ve aşağıda açıklanan durumlar dışında bilgilerinizi üçüncü şahıslarla paylaşmıyoruz.
                </p>
                <h3 className="text-2xl font-semibold text-brand-primary mt-8 mb-6">
                  Çalışanlar ve Yetkili Yükleniciler
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Çalışanlarımız ve yetkili yüklenicilerimiz, işlerini gerçekleştirmek için bu bilgilere ihtiyaç duyduklarında sizin hakkınızdaki bilgilere erişme ihtiyacı duyabilirler.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Uluslararası veri aktarımları
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Genel Veri Koruma Yönetmeliği (GDPR) ve diğer veri koruma yasaları uyarınca, hakkınızdaki bilgiler yalnızca belirli gereksinimlerin karşılanması durumunda bölgenizden diğer bölgelere aktarılabilir.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Gizlilik Politikası Değişiklikleri
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Hizmetlerimizdeki, geçerli yasalardaki ve diğer faktörlerdeki güncellemeleri yansıtacak şekilde bu gizlilik politikasında istediğimiz zaman değişiklikler yapabiliriz. Herhangi bir maddi değişiklik yapmamız halinde bu web sitesine ve/veya Hizmetlerimize belirgin bir bildirim ekleyeceğiz ancak bu politikayı düzenli aralıklarla inceleyerek bilgi sahibi olmanızı öneririz.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">
                  İletişim
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Herhangi bir sorunuz, endişeniz veya geri bildiriminiz varsa lütfen Gizlilik ekibimize ve Gizlilik Görevlimize/Veri Koruma Görevlimize; veya şu adrese bir mektup gönderin:
                </p>
                <div className="text-gray-300 leading-relaxed">
                  <p className="font-semibold">Rative Inc.</p>
                  <p>İstanbul, Türkiye</p>
                  <p className="text-brand-primary">info@userative.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 