"use client";

import Image from "next/image";
import { Phone, MessageCircle, HeartPulse, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { generateCallLink, generateWhatsAppLink } from "@/lib/utils";

export default function EmergencyContact() {
  return (
    <section id="emergency-contact" className="bg-gradient-to-br from-medical-red via-red-600 to-medical-red-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-[120px]" />
      </div>
      <div className="section-container section-gap-sm relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 shrink-0 rounded-2xl overflow-hidden shadow-2xl animate-float">
            <Image src="/pic2.png" alt="Rana Ambulance" width={256} height={256} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-white rounded-full emergency-pulse" />
              <span className="text-white/90 font-medium text-sm">Available 24/7</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white" style={{ marginTop: '9px',marginBottom: '9px' }}>NEED HELP NOW?</h2>
            <p className="text-white/80 text-sm sm:text-base mb-6 w-full text-center" style={{ marginBottom: '11px' }}>Call Rana Ambulance Services for immediate emergency medical transportation across Pakistan.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6">
              <a href={generateCallLink(COMPANY.phone[0])} className="inline-flex items-center justify-center gap-3 bg-white text-medical-red px-6 py-3 rounded-full font-bold text-sm hover:shadow-xl transition-all" style={{ padding: '10px 13px' }}>
                <Phone className="w-4 h-4 shrink-0" />
                <span>CALL NOW | {COMPANY.phone[0]}</span>
              </a>
              <a href={generateWhatsAppLink(COMPANY.whatsapp[0])} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-green-600 transition-all shadow-lg" style={{ padding: '10px 13px' }}>
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WHATSAPP | {COMPANY.whatsapp[0]}</span>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-white/70 text-sm" style={{ marginTop: '11px' }}><HeartPulse className="w-4 h-4" /><span>24/7 Emergency Service</span></div>
              <div className="flex items-center gap-2 text-white/70 text-sm" style={{ marginTop: '11px' }}><MapPin className="w-4 h-4" /><span>Pakistan-Wide Coverage</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
