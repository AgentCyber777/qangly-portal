"use client";

import { motion } from "framer-motion";
import { Users, Shield } from "lucide-react";

export default function ShezhireSlogan() {
  return (
    <div className="bg-gradient-to-r from-qangly-dark via-qangly-primary to-qangly-dark text-white py-10 text-center border-y-2 border-qangly-gold shadow-inner relative overflow-hidden mb-12">
      {/* Фондық паттерн */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Келдібек */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="bg-qangly-gold/20 p-3 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-qangly-gold" />
            </div>
            <div className="text-left">
              <p className="text-qangly-gold font-semibold uppercase tracking-widest text-xs md:text-sm mb-1">Түп атамыз</p>
              <h2 className="text-3xl md:text-5xl font-bold font-serif drop-shadow-md">Келдібек</h2>
            </div>
          </motion.div>

          {/* Бәйтерек */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="bg-qangly-gold/20 p-3 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-qangly-gold" />
            </div>
            <div className="text-left">
              <p className="text-qangly-gold font-semibold uppercase tracking-widest text-xs md:text-sm mb-1">Ұранымыз</p>
              <h2 className="text-3xl md:text-5xl font-bold font-serif drop-shadow-md">Бәйтерек!</h2>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}