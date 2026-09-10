"use client";

import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { generateCallLink, generateWhatsAppLink } from "@/lib/utils";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 shadow-2xl shadow-black/10">
      <div className="grid grid-cols-3 h-16">
        <a href={generateCallLink(COMPANY.phone[0])} className="flex flex-col items-center justify-center gap-0.5 bg-medical-red text-white active:scale-95 transition-transform">
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-bold">CALL</span>
        </a>
        <a href={generateWhatsAppLink(COMPANY.whatsapp[0])} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-0.5 bg-green-500 text-white active:scale-95 transition-transform border-x border-white/20">
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-bold">WHATSAPP</span>
        </a>
        <a href="#contact" className="flex flex-col items-center justify-center gap-0.5 bg-deep-navy text-white active:scale-95 transition-transform">
          <CalendarCheck className="w-5 h-5" />
          <span className="text-[10px] font-bold">BOOK</span>
        </a>
      </div>
    </div>
  );
}
