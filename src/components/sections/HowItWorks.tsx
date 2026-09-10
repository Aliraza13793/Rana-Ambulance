"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, MessageCircle, MapPin, Ambulance } from "lucide-react";

const steps = [
  { number: "01", title: "CALL OR WHATSAPP", description: "Contact Rana Ambulance Services through call or WhatsApp.", icon: Phone, color: "bg-medical-red" },
  { number: "02", title: "SHARE YOUR LOCATION", description: "Provide pickup location and destination.", icon: MapPin, color: "bg-medical-cyan" },
  { number: "03", title: "CHOOSE AMBULANCE TYPE", description: "Emergency, ICU, ventilator, oxygen or patient transport.", icon: Ambulance, color: "bg-emergency-orange" },
  { number: "04", title: "WE DISPATCH", description: "Our team coordinates the appropriate available ambulance.", icon: MessageCircle, color: "bg-green-500" },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="how-it-works" className="bg-section-light section-gap">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-12 sm:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="w-full text-center flex flex-col items-center">
            <span className="text-medical-red font-semibold text-base" style={{marginBottom: '11px' }}>How It Works</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy mt-2 mb-4" style={{marginBottom: '11px' }}>HOW IT WORKS</h2>
            <p className="text-soft-gray text-base sm:text-lg mx-auto mb-8" style={{marginBottom: '13px' }}>Simple steps to get the ambulance service you need.</p>
          </motion.div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.1 }} className="relative text-center group flex flex-col items-center">
              {index < steps.length - 1 && <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-200 to-gray-300" />}
              <div className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto ${step.color} rounded-3xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10`}><step.icon className="w-9 h-9 sm:w-10 sm:h-10 text-white" /></div>
              <div className="text-xs font-bold text-medical-red mb-2" style={{marginTop: '8px' , marginBottom: '8px' }}>STEP {step.number}</div>
              <h3 className="text-base sm:text-lg font-bold text-deep-navy mb-2">{step.title}</h3>
              <p className="text-soft-gray text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
