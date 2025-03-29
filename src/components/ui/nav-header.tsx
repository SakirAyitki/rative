"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button"

type DropdownState = {
  about: boolean;
  language: boolean;
};

function NavHeader() {
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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#040837]/50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={64}
              height={64}
              priority
              className="w-auto h-10"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex-1 flex justify-center">
            <ul
              className="nav-container flex items-center gap-8"
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={() => {
                if (!dropdownOpen.about && !dropdownOpen.language) {
                  setPosition(prev => ({ ...prev, opacity: 0 }));
                }
              }}
            >
              <Tab 
                setPosition={setPosition} 
                calculatePosition={calculatePosition}
                onClick={() => scrollToSection('services')}
              >
                Hizmetler
              </Tab>
              <Tab 
                setPosition={setPosition} 
                calculatePosition={calculatePosition}
                onClick={() => scrollToSection('pricing')}
              >
                Fiyatlandırma
              </Tab>
              <Tab setPosition={setPosition} calculatePosition={calculatePosition}>
              Hakkımızda
              </Tab>
              <Tab setPosition={setPosition} calculatePosition={calculatePosition}>
                İletişim
              </Tab>
              

              {/* Dil Dropdown */}
              <div className="relative group">
                <Tab 
                  setPosition={setPosition}
                  calculatePosition={calculatePosition}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown('language');
                  }}
                  isActive={dropdownOpen.language}
                >
                  <span className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    TR
                    <ChevronDown 
                      className={cn(
                        "h-4 w-4 transition-transform",
                        dropdownOpen.language && "rotate-180"
                      )} 
                    />
                  </span>
                </Tab>
                {dropdownOpen.language && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-[calc(100%+0.5rem)] right-0 w-32 rounded-lg border border-white/10 bg-[#040837] p-2 shadow-lg"
                    onMouseLeave={() => handleMouseLeave('language')}
                  >
                    <ul className="space-y-1">
                      <li 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMouseLeave('language');
                        }}
                        className="rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white cursor-pointer"
                      >
                        Türkçe
                      </li>
                      <li 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMouseLeave('language');
                        }}
                        className="rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white cursor-pointer"
                      >
                        English
                      </li>
                    </ul>
                  </motion.div>
                )}
              </div>
            </ul>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">
            <RainbowButton href="/register" className="!px-6 !py-3 text-m">
              Ücretsiz Deneyin
            </RainbowButton>
          </div>
        </div>
      </div>
    </nav>
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

export { NavHeader }; 