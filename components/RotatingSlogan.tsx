"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function RotatingSlogan() {
  const pathname = usePathname();

  // Егер Шежіре бетінде болсақ, бұл компонентті мүлдем көрсетпейміз
  if (pathname === "/shezhire") {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-qangly-dark via-qangly-primary to-qangly-dark text-white py-8 text-center border-y-2 border-qangly-gold shadow-inner relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center gap-3">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-qangly-gold text-sm md:text-base font-semibold tracking-widest uppercase"
        >
          Абай Құнанбайұлы
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-bold font-serif drop-shadow-md leading-relaxed"
        >
          «Адамзаттың бәрін сүй, бауырым деп...»
        </motion.h2>
      </div>
    </div>
  );
}