"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const galleryItems = [
  { id: 1, title: "White Ambulance", category: "Fleet", image: "/pics/ambulance/white-ambulance.jpg" },
  { id: 2, title: "Silver Ambulance", category: "Fleet", image: "/pics/ambulance/silver-ambulance.jpg" },
  { id: 3, title: "Blue Ambulance", category: "Fleet", image: "/pics/ambulance/blue-ambulance.jpg" },
  { id: 4, title: "Our Fleet", category: "Fleet", image: "/pics/ambulance/all-ambulances.jpg" },
  { id: 5, title: "Emergency Response", category: "Emergency", image: "/pics/ambulance/every.jpg" },
  { id: 6, title: "Ambulance Service", category: "Service", image: "/pics/ambulance/pics.jpg" },
  { id: 7, title: "Ambulance", category: "Fleet", image: "/pics/gallery/Amb.jpeg" },
  { id: 8, title: "Ambulance 1", category: "Fleet", image: "/pics/gallery/Amb1.jpeg" },
  { id: 9, title: "Inside Ambulance", category: "Interior", image: "/pics/gallery/Inside.jpeg" },
];

export default function Gallery() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const nextImage = () => { if (selectedImage === null) return; const idx = galleryItems.findIndex((i) => i.id === selectedImage); setSelectedImage(galleryItems[(idx + 1) % galleryItems.length].id); };
  const prevImage = () => { if (selectedImage === null) return; const idx = galleryItems.findIndex((i) => i.id === selectedImage); setSelectedImage(galleryItems[(idx - 1 + galleryItems.length) % galleryItems.length].id); };

  return (
    <section id="gallery" className="bg-section-white section-gap">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-12 sm:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="text-medical-red font-semibold text-base">Gallery</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy" style={{ marginTop: '11px', marginBottom: '11px' }}>OUR GALLERY</h2>
            <p className="text-soft-gray text-base sm:text-lg text-center block" style={{ marginBottom: '13px' }}>Take a look at our fleet, equipment, and medical transportation services.</p>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryItems.map((item, index) => (
            <motion.div key={item.id} initial={{ opacity: 0, scale: 0.95 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.3, delay: index * 0.04 }} onClick={() => setSelectedImage(item.id)} className="group relative aspect-square bg-gray-100 rounded-xl overflow-hidden cursor-pointer">
              <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 sm:p-4 z-10">
                <div className="text-center"><span className="text-[10px] text-medical-red font-semibold">{item.category}</span><h3 className="text-white font-bold text-xs sm:text-sm">{item.title}</h3></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white hover:text-medical-red transition-colors z-10"><X className="w-7 h-7" /></button>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-2 sm:left-4 text-white hover:text-medical-red z-10 p-2"><ChevronLeft className="w-8 h-8" /></button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-2 sm:right-4 text-white hover:text-medical-red z-10 p-2"><ChevronRight className="w-8 h-8" /></button>
            <motion.div key={selectedImage} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="max-w-4xl w-full max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
              <Image src={galleryItems.find((i) => i.id === selectedImage)?.image || ""} alt="" width={1200} height={800} className="w-full h-auto max-h-[85vh] object-contain rounded-xl" />
              <div className="absolute bottom-4 left-4 right-4 text-center"><p className="text-white font-bold text-lg drop-shadow-lg">{galleryItems.find((i) => i.id === selectedImage)?.title}</p></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
