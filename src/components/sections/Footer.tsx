"use client";

import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { COMPANY, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { generateCallLink, generateWhatsAppLink } from "@/lib/utils";

const SERVICE_LINKS = ["Emergency Ambulance", "ICU Ambulance", "Ventilator Ambulance", "Oxygen Ambulance", "Patient Transfer", "Hospital Transfer", "Long Distance", "Event Coverage"];

const SOCIAL_ICONS: Record<string, string> = {
  Facebook: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  Instagram: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z",
  YouTube: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z",
  TikTok: "M16.6 5.82s.51.5 0 0A4.278 4.278 0 0115.54 3h-3.09v12.4a2.592 2.592 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.24-1.48z",
};

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="section-container pt-16 sm:pt-20 pb-8" style={{ marginTop: '5px' }}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/pics/Logo.png" alt="Rana Ambulance Logo" width={44} height={44} className="w-11 h-11 object-contain animate-float" />
              <div className="font-bold">
                <div className="text-xl">RANA</div>
                <div className="text-[10px] opacity-60 tracking-widest">AMBULANCE SERVICES</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">24/7 professional ambulance and medical transportation services across Pakistan.</p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-medical-red/30 transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d={SOCIAL_ICONS[social.label]} /></svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-base mb-4">Services</h3>
            <ul className="space-y-2.5">{SERVICE_LINKS.map((s) => (<li key={s}><a href="#services" className="text-white/50 hover:text-medical-red text-sm transition-colors">{s}</a></li>))}</ul>
          </div>
          <div>
            <h3 className="font-bold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2.5">{NAV_LINKS.map((l) => (<li key={l.href}><a href={l.href} className="text-white/50 hover:text-medical-red text-sm transition-colors">{l.label}</a></li>))}</ul>
          </div>
          <div>
            <h3 className="font-bold text-base mb-4">Emergency</h3>
            <div className="space-y-3">
              <a href={generateCallLink(COMPANY.phone[0])} className="flex items-center gap-3 bg-medical-red/20 px-4 py-3 rounded-xl hover:bg-medical-red/30 transition-all" style={{ marginBottom: '5px' }}><Phone className="w-5 h-5 text-medical-red" /><div><div className="text-xs text-white/60">CALL NOW</div><div className="font-semibold text-sm">{COMPANY.phone[0]}</div></div></a>
              <a href={generateWhatsAppLink(COMPANY.whatsapp[0])} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-green-500/20 px-4 py-3 rounded-xl hover:bg-green-500/30 transition-all"><MessageCircle className="w-5 h-5 text-green-400" /><div><div className="text-xs text-white/60">WHATSAPP</div><div className="font-semibold text-sm">{COMPANY.whatsapp[0]}</div></div></a>
            </div>
            <h3 className="font-bold text-base mb-3 mt-6">Offices</h3>
            <div className="space-y-2">
              {Object.entries(COMPANY.addresses).map(([city, addr]) => (
                <div key={city} className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-white/40 mt-0.5 shrink-0" />
                  <div className="text-white/40 text-xs">{addr}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-sm">&copy; {new Date().getFullYear()} Rana Ambulance Services. All rights reserved.</div>
          <div className="text-white/40 text-sm flex items-center gap-1"><Mail className="w-3.5 h-3.5" />{COMPANY.email}</div>
        </div>
      </div>
    </footer>
  );
}
