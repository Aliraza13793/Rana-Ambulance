"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown, Phone } from "lucide-react";
import { FAQS, COMPANY } from "@/lib/constants";
import { generateCallLink } from "@/lib/utils";

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="bg-section-light section-gap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="section-container" ref={ref}>
        <div className="text-center mb-12 sm:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="w-full text-center flex flex-col items-center">
            <span className="text-medical-red font-semibold text-base">FAQ</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy" style={{ marginTop: '11px', marginBottom: '11px' }}>FREQUENTLY ASKED QUESTIONS</h2>
            <p className="text-soft-gray text-base sm:text-lg mx-auto" style={{ marginBottom: '13px' }}>Find answers to common questions about our ambulance services.</p>
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
          <div className="flex-1 w-full space-y-3">
            {FAQS.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.3, delay: index * 0.03 }} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-medical-red/30 transition-colors">
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-center">
                  <span className="font-semibold text-deep-navy text-xs sm:text-sm md:text-base leading-snug flex-1 text-center">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-medical-red shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <div className="px-5 pb-5 text-soft-gray text-sm leading-relaxed border-t border-gray-100 pt-4 text-center">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <div className="flex items-center justify-center w-full lg:w-auto lg:flex-1 lg:sticky lg:top-32">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 mx-auto animate-float">
              <Image src="/Logo.png" alt="Rana Ambulance Logo" fill className="object-contain" />
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <a href={generateCallLink(COMPANY.phone[0])} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-medical-red to-medical-red-dark text-white px-8 py-4 rounded-2xl font-bold text-base hover:shadow-xl hover:shadow-red-500/25 transition-all"><Phone className="w-5 h-5" />Still Have Questions? Call Now</a>
        </div>
      </div>
    </section>
  );
}
