"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);

  const next = () => setStartIndex((prev) => (prev + itemsPerPage) % TESTIMONIALS.length);
  const prev = () => setStartIndex((prev) => (prev - itemsPerPage + TESTIMONIALS.length) % TESTIMONIALS.length);

  const visibleTestimonials = [];
  for (let i = 0; i < itemsPerPage; i++) {
    visibleTestimonials.push(TESTIMONIALS[(startIndex + i) % TESTIMONIALS.length]);
  }

  return (
    <section id="testimonials" className="bg-section-light section-gap">
      <div className="section-container relative" ref={ref}>
        <div className="text-center mb-12 sm:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="w-full text-center flex flex-col items-center">
            <span className="text-medical-red font-semibold text-base">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy" style={{ marginTop: '11px', marginBottom: '11px' }}>WHAT OUR PATIENTS SAY</h2>
            <p className="text-soft-gray text-base sm:text-lg mx-auto" style={{ marginBottom: '13px' }}>Real experiences from families who trusted Rana Ambulance Services.</p>
          </motion.div>
        </div>
        <div className="relative px-0 sm:px-12 lg:px-16">
          <button onClick={prev} className="absolute left-0 sm:-left-4 lg:-left-8 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-medical-red hover:text-white transition-all shadow-lg">
            <ChevronLeft className="w-7 h-7" />
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 relative text-center flex flex-col items-center">
                <Quote className="w-8 h-8 text-medical-red/20 absolute top-4 right-4" />
                <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} />))}</div>
                <p className="text-soft-gray text-sm leading-relaxed mb-6 italic">&quot;{testimonial.review}&quot;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 w-full justify-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-medical-red to-medical-red-dark rounded-full flex items-center justify-center text-white font-bold text-sm">{testimonial.name.charAt(0)}</div>
                  <div><div className="font-semibold text-deep-navy text-sm">{testimonial.name}</div><div className="text-soft-gray text-xs">{testimonial.city}</div></div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={next} className="absolute right-0 sm:-right-4 lg:-right-8 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-medical-red hover:text-white transition-all shadow-lg">
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} onClick={() => setStartIndex(i * itemsPerPage)} className={`w-2.5 h-2.5 rounded-full transition-all ${Math.floor(startIndex / itemsPerPage) === i ? "bg-medical-red w-6" : "bg-gray-300"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
