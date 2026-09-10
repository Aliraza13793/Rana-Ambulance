"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Ambulance, HeartPulse, Wind, Building2, Stethoscope, MapPin, Accessibility, CalendarCheck } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Ambulance, HeartPulse, Wind, Building2, Stethoscope, MapPin, Accessibility, CalendarCheck };

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="services" className="bg-section-light section-gap">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-12 sm:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="text-medical-red font-semibold text-base">Our Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy mt-2 mb-4" style={{ marginTop: '11px',marginBottom: '11px' }}>Medical Transport For Every Situation</h2>
            <p className="text-soft-gray text-base sm:text-lg mx-auto text-center leading-relaxed" style={{ marginBottom: '13px' }}>From emergency response to patient transfers, we provide comprehensive ambulance services across Pakistan.</p>
          </motion.div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Ambulance;
            return (
              <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.05 }} className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-medical-red/20 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300" style={{ backgroundColor: `${service.color}15` }}><Icon className="w-8 h-8" style={{ color: service.color }} /></div>
                <div className="text-xs font-bold text-medical-red mb-2">0{service.id}</div>
                <h3 className="text-lg font-bold text-deep-navy mb-2">{service.title}</h3>
                <p className="text-soft-gray text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
