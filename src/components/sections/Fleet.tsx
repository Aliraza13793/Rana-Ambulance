"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FLEET, COMPANY } from "@/lib/constants";
import { Check, Phone } from "lucide-react";
import { generateCallLink } from "@/lib/utils";

export default function Fleet() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="fleet" className="bg-section-white section-gap">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-12 sm:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="text-medical-red font-semibold text-base">Our Fleet</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy mt-2 mb-4" style={{marginTop: '11px', marginBottom: '11px' }}>OUR AMBULANCE FLEET</h2>
            <p className="text-soft-gray text-base sm:text-lg mx-auto text-center mt-4 mb-8 leading-relaxed" style={{ marginBottom: '13px' }}>Choose the right ambulance for your specific medical transportation needs.</p>
          </motion.div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FLEET.map((vehicle, index) => (
            <motion.div key={vehicle.id} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.05 }} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <div className="relative h-48 sm:h-56 bg-gray-100 overflow-hidden">
                <Image src={vehicle.image} alt={vehicle.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">Available</div>
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1 text-center">
                <h3 className="text-lg font-bold text-deep-navy mb-2">{vehicle.name}</h3>
                <p className="text-soft-gray text-sm mb-4">{vehicle.description}</p>
                <ul className="space-y-2 mb-5 flex-1">
                  {vehicle.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center gap-2 text-sm text-soft-gray"><Check className="w-4 h-4 text-green-500 shrink-0" />{feature}</li>
                  ))}
                </ul>
                <a href={generateCallLink(COMPANY.phone[0])} className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-medical-red to-medical-red-dark text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg transition-all mt-auto">
                  <Phone className="w-4 h-4" />Call Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
