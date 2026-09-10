"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { generateCallLink } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-xl" : "backdrop-blur-sm"}`} style={{ background: "linear-gradient(to bottom, #294b8f 0%, #294b8f 50%, #DC2626 50%, #DC2626 100%)" }}>
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <Image src="/pics/Logo.png" alt="Rana Ambulance Logo" width={56} height={56} className="w-14 h-14 object-contain animate-float" />
            <div className="font-bold leading-tight">
              <div className="text-xl lg:text-2xl text-[#3ec74e]">RANA</div>
              <div className="text-xs text-[#3ec74e]/80 tracking-widest">AMBULANCE SERVICES</div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-4">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="font-semibold text-lg text-[#3ec74e] hover:text-[#3ec74e]/80 px-5 py-2.5 rounded-lg hover:bg-white/10 transition-all">
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-[#3ec74e]">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/20 shadow-xl max-h-[80vh] overflow-y-auto" style={{ background: "linear-gradient(to bottom, #294b8f 0%, #294b8f 50%, #DC2626 50%, #DC2626 100%)" }}>
          <div className="section-container py-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block font-medium text-[#3ec74e] hover:text-[#3ec74e]/80 py-3.5 px-4 rounded-xl hover:bg-white/10 transition-all text-lg">
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a href={generateCallLink(COMPANY.phone[0])} className="flex items-center justify-center gap-2.5 w-full bg-green-500 text-white py-4 rounded-full font-bold text-base hover:bg-green-600 transition-all">
                <Phone className="w-5 h-5" />
                Call Ambulance Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
