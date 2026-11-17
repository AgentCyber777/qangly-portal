"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[100] group flex items-center justify-center w-14 h-14 rounded-full bg-qangly-dark/80 backdrop-blur-md text-qangly-gold shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-110 hover:bg-qangly-dark"
    >
      {/* Дөңгелек прогресс сақинасы */}
      <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
        <circle 
          cx="50" cy="50" r="46" fill="none" stroke="#d4af37" strokeWidth="6" 
          strokeDasharray="289" strokeDashoffset={289 - (289 * scrollProgress) / 100}
          className="transition-all duration-300 ease-out"
        />
      </svg>
      <ArrowUp size={24} className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  );
}