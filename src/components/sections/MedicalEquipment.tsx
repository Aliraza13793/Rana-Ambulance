"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { EQUIPMENT } from "@/lib/constants";
import { Wind, Activity, HeartPulse, Zap, Syringe, Heart, Thermometer, BedDouble, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const categoryIcons: Record<string, LucideIcon> = { Respiratory: Wind, Monitoring: Activity, Emergency: HeartPulse, Airway: Zap, Infusion: Syringe, Cardiac: Heart, Diagnostic: Thermometer, Transport: BedDouble, Safety: ShieldCheck };

export default function MedicalEquipment() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="equipment" className="bg-section-light section-gap">
      <div className="section-container" ref={ref}>
        <div className="mb-12 sm:mb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="w-full text-center">
            <span className="text-medical-red font-semibold text-base">Our Equipment</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy" style={{marginTop: '11px', marginBottom: '13px' }}>EQUIPPED FOR THE MOMENTS THAT MATTER</h2>
            <p className="text-soft-gray text-base sm:text-lg mx-auto" style={{marginBottom: '13px' }}>Ambulances equipped with essential medical equipment based on service level and patient requirements.</p>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {EQUIPMENT.map((item, index) => {
            const Icon = categoryIcons[item.category] || Wind;
            return (
              <motion.div key={item.id} initial={{ opacity: 0, scale: 0.95 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.3, delay: index * 0.03 }} className="group bg-white rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-medical-red/20 text-center flex flex-col items-center">
                <div className="w-12 h-12 mx-auto bg-medical-red/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-medical-red/20 transition-all">
                  <Icon className="w-6 h-6 text-medical-red" />
                </div>
                <h4 className="text-deep-navy font-semibold text-xs sm:text-sm mb-1">{item.name}</h4>
                <p className="text-soft-gray text-[10px] sm:text-xs">{item.category}</p>
                <p className="text-medical-red text-[9px] sm:text-[10px] font-medium mt-1">{item.available}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
