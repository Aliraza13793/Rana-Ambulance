"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, MapPin, Users, Stethoscope, ShieldCheck, Zap } from "lucide-react";

const features = [
  { icon: Clock, title: "24/7 Availability", description: "Emergency assistance whenever you need us, day or night.", color: "from-medical-red to-medical-red-dark" },
  { icon: MapPin, title: "Nationwide Coverage", description: "Patient transportation across major cities and long-distance routes.", color: "from-medical-cyan to-blue-500" },
  { icon: Users, title: "Professional Team", description: "Trained ambulance staff and professional drivers.", color: "from-emergency-orange to-yellow-500" },
  { icon: Stethoscope, title: "Medical Equipment", description: "Ambulances equipped according to service level and patient needs.", color: "from-green-500 to-emerald-500" },
  { icon: ShieldCheck, title: "Safe Transportation", description: "Patient safety, dignity and comfort are our priorities.", color: "from-purple-500 to-pink-500" },
  { icon: Zap, title: "Fast Response", description: "Our dispatch team works to connect patients with the appropriate ambulance.", color: "from-amber-500 to-orange-500" },
];

export default function WhyChoose() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="why-choose" className="bg-section-white section-gap">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-12 sm:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="w-full text-center flex flex-col items-center">
            <span className="text-medical-red font-semibold text-base" style={{marginBottom: '11px' }}>Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy mt-2 mb-4" style={{marginBottom: '11px' }}>WHY FAMILIES TRUST RANA</h2>
            <p className="text-soft-gray text-base sm:text-lg mx-auto mt-4 mb-8" style={{marginBottom: '13px' }}>Professional, reliable, and compassionate medical transportation services.</p>
          </motion.div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.05 }} className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-medical-red/20 text-center flex flex-col items-center">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg`}><feature.icon className="w-7 h-7 text-white" /></div>
              <h3 className="text-lg font-bold text-deep-navy mb-2">{feature.title}</h3>
              <p className="text-soft-gray text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
