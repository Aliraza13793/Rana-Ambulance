"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { generateCallLink, generateWhatsAppLink } from "@/lib/utils";

const stats = [
  { value: "24/7", label: "Availability", color: "from-medical-red to-medical-red-dark" },
  { value: "All Pakistan", label: "Cities Covered", color: "from-medical-cyan to-blue-500" },
  { value: "100%", label: "Professional", color: "from-emergency-orange to-yellow-500" },
  { value: "1st", label: "Patient First", color: "from-green-500 to-emerald-500" },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="bg-section-white section-gap-sm">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="space-y-6">
            <div>
              <span className="text-medical-red font-semibold text-base">About Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy mt-2 leading-tight">MORE THAN AN AMBULANCE.</h2>
            </div>
            <p className="text-soft-gray text-base sm:text-lg leading-relaxed">Rana Ambulance Services, founded by Rana Ali and Rana Fahad, is committed to providing dependable medical transportation with compassion, professionalism and respect for every patient and family.</p>
            <div className="space-y-4">
              {[
                { num: "01", title: "Patient Dignity", desc: "Every patient is treated with respect and care throughout their journey." },
                { num: "02", title: "Safety First", desc: "Our priority is the safety and comfort of every patient during transportation." },
                { num: "03", title: "Nationwide Service", desc: "Medical transportation across major cities throughout Pakistan." },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-medical-red/10 rounded-xl flex items-center justify-center shrink-0"><span className="text-medical-red font-bold text-sm">{item.num}</span></div>
                  <div><h4 className="font-semibold text-deep-navy mb-1">{item.title}</h4><p className="text-soft-gray text-sm">{item.desc}</p></div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-18">
              <a href={generateCallLink(COMPANY.phone[0])} className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-medical-red to-medical-red-dark text-white px-8 py-3.5 rounded-xl font-bold text-base hover:shadow-lg hover:shadow-red-500/25 transition-all min-w-[150px]">
                <Phone className="w-5 h-5 shrink-0" /><span>Call Now</span>
              </a>
              <a href={generateWhatsAppLink(COMPANY.whatsapp[0])} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 bg-green-500 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-green-600 transition-all min-w-[150px]">
                <MessageCircle className="w-5 h-5 shrink-0" /><span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-black/5 hover:shadow-xl transition-all border border-gray-100 text-center">
                <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>{stat.value}</div>
                <div className="text-soft-gray font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
