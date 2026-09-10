import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import EmergencyCTA from "@/components/sections/EmergencyCTA";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Fleet from "@/components/sections/Fleet";
import MedicalEquipment from "@/components/sections/MedicalEquipment";
import WhyChoose from "@/components/sections/WhyChoose";
import HowItWorks from "@/components/sections/HowItWorks";
import Coverage from "@/components/sections/Coverage";
import EmergencyContact from "@/components/sections/EmergencyContact";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import MobileBottomBar from "@/components/ui/MobileBottomBar";
import DynamicSections from "@/components/DynamicSections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DynamicSections />
      <EmergencyCTA />
      <About />
      <Services />
      <Fleet />
      <MedicalEquipment />
      <WhyChoose />
      <HowItWorks />
      <Coverage />
      <EmergencyContact />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <MobileBottomBar />
    </>
  );
}
