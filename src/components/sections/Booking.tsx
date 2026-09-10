"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send, Phone, MessageCircle, AlertCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { generateCallLink, generateWhatsAppLink } from "@/lib/utils";

export default function Booking() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    patientName: "",
    phone: "",
    pickup: "",
    destination: "",
    ambulanceType: "",
    condition: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking request submitted! We will contact you shortly.");
    setFormData({ patientName: "", phone: "", pickup: "", destination: "", ambulanceType: "", condition: "", date: "", time: "", notes: "" });
  };

  return (
    <section id="booking" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-light-gray/50 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-medical-red font-semibold text-base">Book Now</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy mt-2 mb-4">
              BOOK AN AMBULANCE
            </h2>
            <p className="text-soft-gray text-base sm:text-lg max-w-2xl mx-auto">
              Fill in the details below to request an ambulance.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-yellow-800 font-semibold text-sm">For emergencies, please call directly.</p>
              <p className="text-yellow-700 text-xs">This form is for non-emergency booking requests. We will contact you to confirm.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-black/5 border border-gray-100">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="sm:col-span-2">
                <label className="block text-deep-navy font-semibold text-sm mb-1.5">Patient Name *</label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-red focus:ring-2 focus:ring-medical-red/20 outline-none transition-all text-sm"
                  placeholder="Enter patient name"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-deep-navy font-semibold text-sm mb-1.5">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-red focus:ring-2 focus:ring-medical-red/20 outline-none transition-all text-sm"
                  placeholder="+92 XXX-XXXXXXX"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-deep-navy font-semibold text-sm mb-1.5">Pickup Location *</label>
                <input
                  type="text"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-red focus:ring-2 focus:ring-medical-red/20 outline-none transition-all text-sm"
                  placeholder="Enter pickup address"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-deep-navy font-semibold text-sm mb-1.5">Destination *</label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-red focus:ring-2 focus:ring-medical-red/20 outline-none transition-all text-sm"
                  placeholder="Enter destination address"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-deep-navy font-semibold text-sm mb-1.5">Ambulance Type *</label>
                <select
                  name="ambulanceType"
                  value={formData.ambulanceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-red focus:ring-2 focus:ring-medical-red/20 outline-none transition-all text-sm"
                >
                  <option value="">Select ambulance type</option>
                  <option value="emergency">Emergency Ambulance</option>
                  <option value="icu">ICU Ambulance</option>
                  <option value="ventilator">Ventilator Ambulance</option>
                  <option value="oxygen">Oxygen Ambulance</option>
                  <option value="patient-transport">Patient Transport</option>
                  <option value="wheelchair">Wheelchair Transport</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-deep-navy font-semibold text-sm mb-1.5">Patient Condition</label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-red focus:ring-2 focus:ring-medical-red/20 outline-none transition-all text-sm"
                >
                  <option value="">Select condition</option>
                  <option value="critical">Critical</option>
                  <option value="serious">Serious</option>
                  <option value="stable">Stable</option>
                  <option value="non-emergency">Non-Emergency</option>
                </select>
              </div>

              <div>
                <label className="block text-deep-navy font-semibold text-sm mb-1.5">Required Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-red focus:ring-2 focus:ring-medical-red/20 outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-deep-navy font-semibold text-sm mb-1.5">Required Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-red focus:ring-2 focus:ring-medical-red/20 outline-none transition-all text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-deep-navy font-semibold text-sm mb-1.5">Additional Information</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-red focus:ring-2 focus:ring-medical-red/20 outline-none transition-all text-sm resize-none"
                  placeholder="Any special requirements..."
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-medical-red to-medical-red-dark text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-red-500/25 transition-all"
              >
                <Send className="w-4 h-4" />
                REQUEST AMBULANCE
              </button>
              <a
                href={generateCallLink(COMPANY.phone[0])}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-deep-navy text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-deep-navy/90 transition-all"
              >
                <Phone className="w-4 h-4" />
                CALL INSTEAD
              </a>
              <a
                href={generateWhatsAppLink(COMPANY.whatsapp[0])}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WHATSAPP
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
