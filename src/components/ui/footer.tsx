"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

interface FooterLink {
  name: string;
  href: string;
  onClick?: () => void;
}

interface FooterLinks {
  [key: string]: FooterLink[];
}

export function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (sectionId: string) => {
    if (pathname === '/') {
      scrollToSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const footerLinks: FooterLinks = {
    ürün: [
      { 
        name: "Hizmetler", 
        href: "#services",
        onClick: () => handleNavigation('services')
      },
      { 
        name: "Fiyatlandırma", 
        href: "#pricing",
        onClick: () => handleNavigation('pricing')
      }
    ],
    şirket: [
      { 
        name: "Hakkımızda", 
        href: "/about",
        onClick: () => router.push('/about')
      },
      { 
        name: "Kariyer", 
        href: "/careers",
        onClick: () => router.push('/careers')
      },
    ],
    destek: [
      { name: "Yardım Merkezi", href: "/help" },
      { name: "SSS", href: "/faq" },
      { 
        name: "İletişim", 
        href: "/contact",
        onClick: () => router.push('/contact')
      },
    ],
    yasal: [
      { name: "Gizlilik Politikası", href: "/privacy" },
      { name: "Kullanım Koşulları", href: "/terms" },
      { name: "KVKK", href: "/gdpr" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/use.rative" },
    { icon: Instagram, href: "https://www.instagram.com/use_rative/" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/rative" },
  ];

  const contactInfo = [
    { icon: Mail, text: "info@rative.com", href: "mailto:info@rative.com" },
    { icon: Phone, text: "+90 (555) 123 45 67", href: "tel:+905551234567" },
    { icon: MapPin, text: "İstanbul, Türkiye", href: "https://maps.app.goo.gl/jsWzN1ELsdcEBDTx5" },
  ];

  return (
    <footer className="relative bg-brand-background">
      {/* Üst Ayraç */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent" />
      
      {/* İnce Çizgi */}
      <div className="absolute inset-x-0 top-0 border-t border-white/5" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Logo ve Sosyal Medya */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/logo.png" 
                alt="Rative Logo" 
                width={120} 
                height={40}
                className="w-auto h-10"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Sosyal medya verilerinizi analiz edin, rakiplerinizi takip edin ve stratejilerinizi geliştirin.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gray-400" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Linkler */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index} className="space-y-4 relative">
              <h4 className="text-white font-semibold uppercase tracking-wider relative z-10">
                {title}
              </h4>
              <ul className="space-y-2 relative z-20">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      href={link.href}
                      onClick={(e) => {
                        if (link.onClick) {
                          e.preventDefault();
                          link.onClick();
                        }
                      }}
                      className="text-gray-400 hover:text-white transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* İletişim Bilgileri */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-white/5">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <Icon className="w-5 h-5" />
                <span>{info.text}</span>
              </motion.a>
            );
          })}
        </div>

        {/* Alt Bilgi */}
        <div className="pt-8 border-t border-white/5 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Rative. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
} 