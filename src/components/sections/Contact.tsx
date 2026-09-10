"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { generateCallLink, generateWhatsAppLink } from "@/lib/utils";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const offices = [{ city: "Lahore", address: COMPANY.addresses.lahore }, { city: "Rawalpindi", address: COMPANY.addresses.rawalpindi }, { city: "Karachi", address: COMPANY.addresses.karachi }];

  return (
    <section id="contact" className="bg-section-white section-gap">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-12 sm:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="w-full text-center flex flex-col items-center">
            <span className="text-medical-red font-semibold text-base">Contact Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy" style={{ marginTop: '11px', marginBottom: '11px' }}>GET IN TOUCH</h2>
            <p className="text-soft-gray text-base sm:text-lg mx-auto" style={{ marginBottom: '13px' }}>Contact us for ambulance services, inquiries, or emergency assistance.</p>
          </motion.div>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="h-full">
            <div className="relative rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col overflow-hidden" style={{ backgroundImage: "url('/pics/ambulance/pics.jpg')", backgroundSize: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              <div className="absolute inset-0 bg-white/70" />
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-bold text-deep-navy mb-5 text-center">Contact Information</h3>
                <div className="space-y-5 flex-1 flex flex-col justify-center">
                  <a href={generateCallLink(COMPANY.phone[1])} className="flex items-center gap-4 group justify-center" style={{ marginBottom: '11px' }}><div className="w-12 h-12 bg-medical-red/20 rounded-xl flex items-center justify-center group-hover:bg-medical-red/30 transition-all shrink-0"><Phone className="w-5 h-5 text-medical-red" /></div><div><div className="text-base font-bold text-medical-red">Phone</div><div className="font-bold text-deep-navy text-sm">+92 300 8066519</div></div></a>
                  <a href={generateWhatsAppLink(COMPANY.whatsapp[0])} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group justify-center" style={{ marginBottom: '11px' }}><div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-all shrink-0"><MessageCircle className="w-5 h-5 text-green-600" /></div><div><div className="text-base font-bold text-medical-red">WhatsApp</div><div className="font-bold text-deep-navy text-sm">+92 322 4200454</div></div></a>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 group justify-center"><div className="w-12 h-12 bg-medical-cyan/20 rounded-xl flex items-center justify-center group-hover:bg-medical-cyan/30 transition-all shrink-0"><Mail className="w-5 h-5 text-medical-cyan" /></div><div><div className="text-base font-bold text-medical-red">Email</div><div className="font-bold text-deep-navy text-sm">{COMPANY.email}</div></div></a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="h-full">
            <div className="relative rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col overflow-hidden" style={{ backgroundImage: "url('/pics/ambulance/Every.jpg')", backgroundSize: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              <div className="absolute inset-0 bg-white/70" />
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg font-bold text-deep-navy mb-4 text-center">Our Offices</h3>
                <div className="space-y-3 flex-1 flex flex-col justify-center">
                  {offices.map((office, i) => (<div key={i} className="flex flex-col items-center gap-1 text-center"><MapPin className="w-5 h-5 text-medical-red shrink-0" /><div className="font-bold text-medical-red text-base">{office.city}</div><div className="text-deep-navy font-semibold text-xs">{office.address}</div></div>))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 overflow-hidden" style={{ marginTop: '17px' }}>
            <h3 className="text-xl font-bold text-deep-navy mb-4 text-center">Our Location</h3>
            <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.4!2d74.3!3d31.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJail+Road%2C+Lahore!5e0!3m2!1sen!2spk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rana Ambulance Services - Lahore Office"
                className="absolute inset-0"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
