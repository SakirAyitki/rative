import React from "react";
import { cn } from "@/lib/utils";

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function RainbowButton({ href, className, children, ...props }: RainbowButtonProps) {
  const Comp = href ? 'a' : 'button';
  
  return (
    <Comp
      href={href}
      className={cn(
        "relative group z-20",
        "inline-flex items-center justify-center",
        "px-8 py-3 rounded-full",
        "text-white font-medium text-base",
        "transition-all duration-300",
        "cursor-pointer",
        className
      )}
      {...props}
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
    </Comp>
  );
} 