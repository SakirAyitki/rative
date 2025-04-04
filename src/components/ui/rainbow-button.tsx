import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface RainbowButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  type?: "submit" | "button";
}

export function RainbowButton({ children, href, className, target, rel, onClick, type }: RainbowButtonProps) {
  if (type) {
    return (
      <button 
        type={type}
        className={cn(
          "relative group z-20",
          "inline-flex items-center justify-center",
          "px-8 py-3 rounded-full",
          "text-white font-medium text-base",
          "transition-all duration-300",
          "cursor-pointer",
          className
        )}
        onClick={onClick as any}
      >
        {/* Dönen gradient border */}
        <div 
          className="absolute -inset-[1px] rounded-full -z-10"
          style={{
            background: 'linear-gradient(var(--rotate), #2B95FF, #00E5FF, #6366F1, #8B5CF6, #2B95FF)',
            animation: 'spin 6s linear infinite',
          }}
        />

        {/* Butonun iç kısmı */}
        <div className="absolute inset-[1px] rounded-full bg-[#040837] -z-10" />
        
        {children}

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
    );
  }

  return (
    <Link 
      href={href || '#'}
      className={cn(
        "relative group z-20",
        "inline-flex items-center justify-center",
        "px-8 py-3 rounded-full",
        "text-white font-medium text-base",
        "transition-all duration-300",
        "cursor-pointer",
        className
      )}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      {/* Dönen gradient border */}
      <div 
        className="absolute -inset-[1px] rounded-full -z-10"
        style={{
          background: 'linear-gradient(var(--rotate), #2B95FF, #00E5FF, #6366F1, #8B5CF6, #2B95FF)',
          animation: 'spin 6s linear infinite',
        }}
      />

      {/* Butonun iç kısmı */}
      <div className="absolute inset-[1px] rounded-full bg-[#040837] -z-10" />
      
      {children}

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
    </Link>
  );
} 