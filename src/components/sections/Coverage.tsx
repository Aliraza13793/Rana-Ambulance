"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin } from "lucide-react";
import { CITIES } from "@/lib/constants";

export default function Coverage() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="coverage" className="bg-section-white section-gap">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-12 sm:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="w-full text-center flex flex-col items-center">
            <span className="text-medical-red font-semibold text-base" style={{ marginBottom: '11px' }}>Coverage</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy mt-2 mb-4">WHEREVER YOU ARE, WE&apos;RE READY TO HELP</h2>
            <p className="text-soft-gray text-base sm:text-lg mx-auto" style={{ marginTop: '10px',marginBottom: '12px' }}>Nationwide medical transportation covering major cities across Pakistan.</p>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {CITIES.map((city, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.3, delay: index * 0.02 }} className="group bg-[#3ec74e]/10 rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#3ec74e]/20 hover:border-[#3ec74e]/40 emergency-pulse flex flex-col items-center justify-center text-center">
              <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mb-1 group-hover:bg-red-500/30 transition-all border border-red-500/50"><MapPin className="w-4 h-4 text-red-500" /></div>
              <h4 className="text-deep-navy font-semibold text-xs sm:text-sm">{city}</h4>
              <p className="text-[#3ec74e] text-[10px]">Pakistan</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-3 bg-medical-red/5 px-6 py-3 rounded-full border border-medical-red/10" style={{ marginTop: '20px'}}>
            <div className="w-2 h-2 bg-green-500 rounded-full emergency-pulse" />
            <span className="text-deep-navy font-semibold text-sm" >Nationwide — 24 Hours — All Over Pakistan</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
