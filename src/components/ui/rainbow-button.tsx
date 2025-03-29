import React from "react";
import { cn } from "@/lib/utils";

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function RainbowButton({
  children,
  className,
  ...props
}: RainbowButtonProps) {
  return (
    <div className="relative inline-block">
      {/* Dönen gradient border */}
      <div 
        className="absolute -inset-[1px] rounded-full"
        style={{
          background: 'linear-gradient(var(--rotate), #2B95FF, #00E5FF, #6366F1, #8B5CF6, #2B95FF)',
          animation: 'spin 6s linear infinite',
        }}
      />

      {/* Butonun iç kısmı */}
      <div className="absolute inset-[1px] rounded-full bg-[#040837]" />
      
      {/* Ana buton */}
      <button
        className={cn(
          "relative inline-flex items-center justify-center",
          "px-8 py-3 rounded-full",
          "text-white font-medium text-base",
          "hover:bg-white/5 cursor-pointer",
          "transition-all duration-300",
          className
        )}
        {...props}
      >
        {children}
      </button>

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
    </div>
  );
} 