"use client";

import Image from "next/image";
import { Phone, CalendarCheck, MessageCircle, Shield, MapPin, HeartPulse } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { generateCallLink, generateWhatsAppLink } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen overflow-hidden">
      <Image
        src="/pics/hero/Pict 1.png"
        alt="Rana Ambulance Services Background"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/70 to-deep-navy/50" />

      <div className="relative z-10 section-container pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-20 min-h-[90vh] lg:min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          <div className="max-w-2xl space-y-6 sm:space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-green-400 rounded-full emergency-pulse" />
              <span className="text-white/90 font-medium text-sm">24/7 Emergency Service Available</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white">
              WHEN EVERY{" "}
              <span className="bg-gradient-to-r from-medical-red to-emergency-orange bg-clip-text text-transparent">SECOND</span>{" "}
              MATTERS.
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-xl">
              Rana Ambulance Services — 24/7 Medical Transportation Across Pakistan.
            </p>

            <p className="text-base text-white/50 max-w-lg leading-relaxed">
              Fast, reliable and professional ambulance services with emergency medical support, patient transportation and specialized critical-care vehicles.
            </p>

            <div className="flex flex-col gap-3 max-w-md">
              <a href={generateCallLink(COMPANY.phone[0])} className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-medical-red to-medical-red-dark text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-red-500/30 transition-all emergency-pulse">
                <Phone className="w-5 h-5" />CALL AMBULANCE NOW
              </a>
              <a href={generateCallLink(COMPANY.phone[1])} className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-medical-red to-medical-red-dark text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-red-500/30 transition-all emergency-pulse">
                <Phone className="w-5 h-5" />0300-8066519
              </a>
              <div className="flex gap-3">
                <a href="#contact" className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-3.5 rounded-2xl font-semibold text-sm hover:bg-white/20 transition-all border border-white/10">
                  <CalendarCheck className="w-4 h-4" />CONTACT US
                </a>
                <a href={generateWhatsAppLink(COMPANY.whatsapp[0])} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500/20 text-green-400 px-5 py-3.5 rounded-2xl font-semibold text-sm hover:bg-green-500/30 transition-all border border-green-500/20">
                  <MessageCircle className="w-4 h-4" />WHATSAPP
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 pt-2" style={{ marginTop: '8px' }}>
              <div className="flex items-center gap-2 text-white/60 text-sm"><Shield className="w-4 h-4 text-medical-red" />Trusted by Families</div>
              <div className="flex items-center gap-2 text-white/60 text-sm"><MapPin className="w-4 h-4 text-medical-cyan" />Pakistan-Wide</div>
              <div className="flex items-center gap-2 text-white/60 text-sm"><HeartPulse className="w-4 h-4 text-emergency-orange" />Professional Staff</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute top-32 right-8 sm:right-16 lg:right-24 z-20 bg-white/95 backdrop-blur-sm p-5 sm:p-6 rounded-2xl shadow-xl animate-float items-center gap-4 min-w-[220px] sm:min-w-[260px]">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-medical-red to-medical-red-dark rounded-xl flex items-center justify-center shrink-0">
          <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>
        <div className="flex flex-col items-start justify-center flex-1">
          <div className="text-deep-navy font-bold text-sm sm:text-base leading-snug">AVAILABLE 24/7</div>
          <div className="text-soft-gray text-xs sm:text-sm leading-snug">Emergency Ready</div>
        </div>
      </div>
      <div className="hidden lg:flex absolute bottom-24 right-8 sm:right-16 lg:right-24 z-20 bg-white/95 backdrop-blur-sm p-5 sm:p-6 rounded-2xl shadow-xl animate-float items-center gap-4 min-w-[220px] sm:min-w-[260px]" style={{ animationDelay: '1s' }}>
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-medical-cyan to-blue-500 rounded-xl flex items-center justify-center shrink-0">
          <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>
        <div className="flex flex-col items-start justify-center flex-1">
          <div className="text-deep-navy font-bold text-sm sm:text-base leading-snug">COVERAGE</div>
          <div className="text-soft-gray text-xs sm:text-sm leading-snug">All Pakistan</div>
        </div>
      </div>
    </section>
  );
}
