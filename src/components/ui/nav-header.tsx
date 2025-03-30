"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button"
import { useRouter, usePathname } from "next/navigation";

type DropdownState = {
  about: boolean;
  language: boolean;
};

export function NavHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
    about: false,
    language: false,
  });

  const toggleDropdown = (key: keyof DropdownState) => {
    setDropdownOpen(prev => {
      // Diğer dropdown'ları kapat
      const newState = Object.keys(prev).reduce((acc, k) => ({
        ...acc,
        [k]: k === key ? !prev[k as keyof DropdownState] : false
      }), {} as DropdownState);
      
      return newState;
    });
  };

  // Dropdown dışına tıklandığında dropdown'ları kapat
  const handleClickOutside = () => {
    setDropdownOpen({ about: false, language: false });
  };

  const calculatePosition = (element: HTMLElement) => {
    let left = 0;
    let current = element;
    
    // Tüm parent elementlerin offsetLeft değerlerini topla
    while (current && !current.classList.contains('nav-container')) {
      left += current.offsetLeft;
      current = current.parentElement as HTMLElement;
    }

    return {
      left,
      width: element.offsetWidth,
      opacity: 1,
    };
  };

  const handleMouseLeave = (key: keyof DropdownState) => {
    setDropdownOpen(prev => ({
      ...prev,
      [key]: false
    }));
    setPosition((pv) => ({ ...pv, opacity: 0 }));
  };

  const handleNavigation = (path: string) => {
    // Eğer path '/' ile başlıyorsa, bu bir sayfa yönlendirmesidir
    if (path.startsWith('/')) {
      router.push(path);
    } else {
      // Değilse bir section'a scroll yapılacaktır
      if (pathname === '/') {
        scrollToSection(path);
      } else {
        router.push(`/#${path}`);
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePricingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      // Ana sayfadaysa direkt scroll
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Ana sayfada değilse ana sayfaya yönlendir ve pricing'e scroll
      router.push('/#pricing');
    }
  };

  const handleEarlyAccessClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/early-access');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Responsive tasarım */}
          <Link href="/" className="flex items-center">
            <div className="w-32 h-32 relative">
              <Image
                src="/logo.png"
                alt="Rative Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Hamburger Menü - Sadece mobilde görünür */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-gray-300 transition-colors"
            type="button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menü */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              Hakkımızda
            </Link>
            <Link href="/help" className="text-gray-300 hover:text-white transition-colors">
              Yardım
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              İletişim
            </Link>
            <RainbowButton href="/early-access">
              Erken Erişim
            </RainbowButton>
          </div>
        </div>

        {/* Mobil Menü */}
        <div 
          className={cn(
            "lg:hidden",
            "fixed left-0 right-0 top-16 p-4 bg-background/95 backdrop-blur-lg border-b border-white/10",
            "transition-all duration-300 ease-in-out",
            isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-4">
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link 
              href="/help" 
              className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Yardım
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </Link>
            <div className="px-4">
              <RainbowButton 
                href="/early-access"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                Erken Erişim
              </RainbowButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

const Tab = ({
  children,
  setPosition,
  calculatePosition,
  onClick,
  isActive,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<{
    left: number;
    width: number;
    opacity: number;
  }>>;
  calculatePosition: (element: HTMLElement) => {
    left: number;
    width: number;
    opacity: number;
  };
  onClick?: (e: React.MouseEvent) => void;
  isActive?: boolean;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  const updatePosition = () => {
    if (!ref.current) return;
    setPosition(calculatePosition(ref.current));
  };

  React.useEffect(() => {
    if (isActive) {
      updatePosition();
    }
  }, [isActive]);

  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={updatePosition}
      className={cn(
        "relative z-10 block cursor-pointer",
        "text-[15px] font-normal text-white/90 transition-colors",
        "hover:text-white",
        isActive && "text-white"
      )}
    >
      {children}
    </li>
  );
};

const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.li
      animate={position}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
      className="absolute inset-y-0 z-0 rounded-full bg-gradient-to-r from-primary/50 to-secondary/50"
      style={{
        margin: '2px',
      }}
    />
  );
}; 