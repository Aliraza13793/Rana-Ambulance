"use client";

import { Phone, MessageCircle, CalendarCheck, HeartPulse } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { generateCallLink, generateWhatsAppLink } from "@/lib/utils";

export default function EmergencyCTA() {
  return (
    <section className="bg-gradient-to-r from-medical-red via-red-600 to-medical-red-dark">
      <div className="section-container py-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
          <div className="flex items-center gap-3 text-white">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><HeartPulse className="w-5 h-5" /></div>
            <h2 className="text-lg sm:text-xl font-bold">Need an Ambulance Right Now?</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <a href={generateCallLink(COMPANY.phone[0])} className="inline-flex items-center justify-center gap-2.5 bg-white text-medical-red px-7 py-3 rounded-full font-bold text-sm hover:bg-gray-100 transition-all shadow-lg min-w-[140px]">
              <Phone className="w-4 h-4 shrink-0" /><span>Call Now</span>
            </a>
            <a href={generateWhatsAppLink(COMPANY.whatsapp[0])} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 bg-green-500 text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-green-600 transition-all shadow-lg min-w-[140px]">
              <MessageCircle className="w-4 h-4 shrink-0" /><span>WhatsApp</span>
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2.5 bg-deep-navy text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-deep-navy/90 transition-all shadow-lg min-w-[140px]">
              <CalendarCheck className="w-4 h-4 shrink-0" /><span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
