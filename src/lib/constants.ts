export const COMPANY = {
  name: "Rana Ambulance Services",
  tagline: "When Every Second Matters",
  description: "24/7 Emergency & Medical Transportation Across Pakistan",
  owners: ["Rana Ali", "Rana Fahad"],
  phone: ["+92322-4200454", "+92300-8066519"],
  whatsapp: ["+92322-4200454", "+92300-8066519"],
  email: "ranaali@gmail.com",
  addresses: {
    lahore: "Mian Head Office, Service Hospital, Jail Road, Lahore",
    rawalpindi: "PIMS Hospital, Rawalpindi",
    karachi: "Karachi Hospital",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Equipment", href: "#equipment" },
  { label: "Coverage", href: "#coverage" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    id: 1,
    title: "Emergency Ambulance",
    description: "Rapid emergency transportation for accidents, injuries and medical emergencies.",
    icon: "Siren",
    color: "#DC2626",
  },
  {
    id: 2,
    title: "ICU / Ventilator Ambulance",
    description: "Specialized ambulance transportation for critically ill patients requiring advanced medical support.",
    icon: "HeartPulse",
    color: "#0F172A",
  },
  {
    id: 3,
    title: "Oxygen Ambulance",
    description: "Ambulances equipped for patients requiring oxygen support during transportation.",
    icon: "Wind",
    color: "#06B6D4",
  },
  {
    id: 4,
    title: "Hospital Transfer",
    description: "Safe transportation between hospitals, clinics and medical facilities.",
    icon: "Building2",
    color: "#F97316",
  },
  {
    id: 5,
    title: "Patient Transportation",
    description: "Comfortable transportation for patients requiring medical assistance during travel.",
    icon: "Ambulance",
    color: "#10B981",
  },
  {
    id: 6,
    title: "Long-Distance Ambulance",
    description: "Intercity and nationwide patient transportation.",
    icon: "MapPin",
    color: "#8B5CF6",
  },
  {
    id: 7,
    title: "Wheelchair Transportation",
    description: "Safe transportation for patients with mobility limitations.",
    icon: "Accessibility",
    color: "#EC4899",
  },
  {
    id: 8,
    title: "Event Medical Coverage",
    description: "Ambulance and medical support for events, gatherings and organizations.",
    icon: "Calendar",
    color: "#F59E0B",
  },
];

export const FLEET = [
  {
    id: 1,
    name: "Silver Ambulance",
    description: "For critical patients requiring intensive monitoring and respiratory support.",
    features: ["Full ICU setup", "Ventilator", "Cardiac monitor", "Infusion pumps", "Suction machine", "Oxygen system"],
    image: "/pics/ambulance/silver-ambulance.jpg",
  },
  {
    id: 2,
    name: "Every Ambulance",
    description: "Our complete fleet for every medical transportation need.",
    features: ["Emergency response", "Patient transfer", "Hospital transfer", "Long distance"],
    image: "/pics/ambulance/Every.jpg",
  },
  {
    id: 3,
    name: "Emg-Ambulance",
    description: "For patients requiring oxygen support during transportation.",
    features: ["Oxygen system", "Basic life support", "Stretcher", "First aid kit"],
    image: "/pics/ambulance/Amb.jpeg",
  },
  {
    id: 4,
    name: "White Ambulance",
    description: "For standard patient transportation and emergency response.",
    features: ["Basic life support", "Stretcher", "First aid kit", "Basic medical supplies"],
    image: "/white1.jpg",
  },
];

export const EQUIPMENT = [
  { id: 1, name: "Ventilator", category: "Critical Care", available: "ICU Ambulance" },
  { id: 2, name: "Oxygen Cylinder", category: "Respiratory", available: "All Ambulances" },
  { id: 3, name: "Cardiac Monitor", category: "Monitoring", available: "Advanced & ICU" },
  { id: 4, name: "Defibrillator", category: "Emergency", available: "Advanced & ICU" },
  { id: 5, name: "Suction Machine", category: "Airway", available: "ICU Ambulance" },
  { id: 6, name: "Ambu Bag", category: "Respiratory", available: "All Ambulances" },
  { id: 7, name: "IV Equipment", category: "Infusion", available: "Advanced & ICU" },
  { id: 8, name: "Pulse Oximeter", category: "Monitoring", available: "All Ambulances" },
  { id: 9, name: "Blood Pressure Monitor", category: "Monitoring", available: "All Ambulances" },
  { id: 10, name: "Stretcher", category: "Transport", available: "All Ambulances" },
  { id: 11, name: "Wheelchair", category: "Transport", available: "Patient Transport" },
  { id: 12, name: "First Aid Kit", category: "Emergency", available: "All Ambulances" },
  { id: 13, name: "Emergency Medical Bag", category: "Emergency", available: "All Ambulances" },
  { id: 14, name: "PPE & Infection Control", category: "Safety", available: "All Ambulances" },
];

export const CITIES = [
  "Lahore", "Islamabad", "Rawalpindi", "Karachi", "Faisalabad",
  "Multan", "Peshawar", "Quetta", "Sialkot", "Gujranwala",
  "Gujrat", "Sargodha", "Bahawalpur", "Hyderabad", "Abbottabad",
  "Mardan", "Sukkur", "Muzaffarabad", "Gilgit", "Skardu",
];

export const FAQS = [
  {
    question: "Do you provide ambulance service 24/7?",
    answer: "Yes, Rana Ambulance Services operates 24 hours a day, 7 days a week, 365 days a year. Emergency medical transportation is always available.",
  },
  {
    question: "Do you provide ambulance service across Pakistan?",
    answer: "Yes, we provide nationwide ambulance services across Pakistan including Lahore, Islamabad, Rawalpindi, Karachi, Faisalabad, Multan, and many other cities.",
  },
  {
    question: "Do you provide ICU ambulances?",
    answer: "Yes, we have ICU-equipped ambulances for critically ill patients requiring intensive monitoring and advanced medical support during transportation.",
  },
  {
    question: "Do you provide ventilator ambulance services?",
    answer: "Yes, our ventilator ambulances are equipped with advanced respiratory support equipment for patients requiring mechanical ventilation during transport.",
  },
  {
    question: "Do your ambulances have oxygen?",
    answer: "Yes, oxygen systems are available on our ambulances. The level of oxygen support varies by ambulance type - from basic portable oxygen to advanced oxygen delivery systems.",
  },
  {
    question: "Can I book an ambulance for hospital-to-hospital transfer?",
    answer: "Yes, we provide safe and comfortable hospital-to-hospital transfers with appropriate medical support based on the patient's condition.",
  },
  {
    question: "Do you provide long-distance ambulance transportation?",
    answer: "Yes, we offer intercity and nationwide patient transportation services for long-distance medical transfers across Pakistan.",
  },
  {
    question: "Can a family member travel with the patient?",
    answer: "Yes, family members can accompany the patient during transportation. The available space depends on the ambulance type and medical equipment required.",
  },
  {
    question: "How can I book an ambulance?",
    answer: "You can book an ambulance by calling our emergency numbers (+92322-4200454 or +92300-8066519), through WhatsApp, or by filling out the booking form on our website.",
  },
  {
    question: "Can I contact you through WhatsApp?",
    answer: "Yes, you can reach us via WhatsApp at +92322-4200454 or +92300-8066519 for non-emergency inquiries and bookings.",
  },
  {
    question: "What ambulance should I choose for a critical patient?",
    answer: "For critical patients, we recommend our ICU/Ventilator Ambulance which provides comprehensive intensive care equipment. However, the appropriate ambulance type depends on the specific medical needs. Please call us for immediate guidance.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ahmed Khan",
    city: "Lahore",
    review: "Rana Ambulance provided excellent service when my father needed urgent hospital transfer. The staff was professional and caring.",
    rating: 5,
  },
  {
    id: 2,
    name: "Fatima Malik",
    city: "Islamabad",
    review: "Quick response time and well-equipped ambulance. They handled my mother's transport with great care and professionalism.",
    rating: 5,
  },
  {
    id: 3,
    name: "Hassan Ali",
    city: "Rawalpindi",
    review: "Very reliable service. The ICU ambulance was well-maintained and the medical staff was competent and compassionate.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ayesha Bibi",
    city: "Karachi",
    review: "They transported my grandmother from Karachi to Lahore safely. The long-distance service was smooth and comfortable throughout.",
    rating: 5,
  },
  {
    id: 5,
    name: "Muhammad Raza",
    city: "Faisalabad",
    review: "Available 24/7 and responded immediately during our emergency. The oxygen ambulance had all the necessary equipment.",
    rating: 5,
  },
  {
    id: 5,
    name: "Saima Noor",
    city: "Multan",
    review: "Professional team that handled my uncle's hospital-to-hospital transfer with utmost care. Highly recommended service.",
    rating: 5,
  },
  {
    id: 6,
    name: "Usman Ghani",
    city: "Peshawar",
    review: "The wheelchair transport service was excellent. They treated my mother with dignity and respect during the entire journey.",
    rating: 5,
  },
  {
    id: 7,
    name: "Zainab Fatima",
    city: "Sialkot",
    review: "Rana Ambulance is the most dependable service in our area. Fast response, clean ambulances, and caring staff every time.",
    rating: 5,
  },
];

export const STATS = [
  { label: "Availability", value: "24/7" },
  { label: "Coverage", value: "Nationwide" },
  { label: "Service", value: "Professional" },
  { label: "Approach", value: "Patient First" },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", url: "https://facebook.com/ranaambulance" },
  { label: "Instagram", url: "https://instagram.com/ranaambulance" },
  { label: "YouTube", url: "https://youtube.com/@ranaambulance" },
  { label: "TikTok", url: "https://tiktok.com/@ranaambulance" },
];
