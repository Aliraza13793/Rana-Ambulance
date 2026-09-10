# Rana Ambulance Services - Premium 3D Healthcare Website

> **"When Every Second Matters, We're Ready."**

A modern, premium, highly interactive website for **Rana Ambulance Services**, a professional ambulance and medical transportation company providing reliable ambulance services across Pakistan.

## Live Demo

🌐 [View Live Website](http://localhost:3000)

---

## Features

### Core Sections
- **Hero Section** - Immersive dark cinematic hero with background image and emergency CTAs
- **Emergency CTA Bar** - High-visibility emergency contact section
- **Services** - 8 medical transport services with animated cards
- **Fleet** - 4 ambulance vehicles with images and details
- **Medical Equipment** - 14 medical equipment items with category icons
- **Why Choose Us** - 6 trust-building feature cards
- **How It Works** - 4-step process visualization
- **Coverage** - 20 Pakistani cities with interactive cards
- **Emergency Contact** - Prominent phone numbers and WhatsApp CTAs
- **Testimonials** - Paginated customer review carousel
- **Gallery** - Image gallery with lightbox viewer
- **FAQ** - 11 frequently asked questions with accordion
- **Contact** - Contact information, offices, and Google Maps embed
- **Footer** - Complete footer with all business information

### Technical Features
- **Responsive Design** - Fully responsive across mobile, tablet, laptop, and desktop
- **Mobile Bottom Bar** - Fixed emergency action bar (Call/WhatsApp/Book)
- **Sticky Navigation** - Fixed navbar with scroll effects
- **Smooth Animations** - Framer Motion scroll-triggered animations
- **SEO Optimized** - Meta tags, Open Graph, Twitter cards, JSON-LD schemas
- **Dynamic Sitemap** - Auto-generated XML sitemap
- **Image Optimization** - Next.js Image component with WebP/AVIF support
- **Performance Optimized** - Lazy loading, code splitting, optimized assets

---

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.3.4 | React framework |
| React | 19.0.0 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Framer Motion | 12.12.1 | Animations |
| Three.js | 0.177.0 | 3D graphics |
| React Three Fiber | 9.7.0 | React Three.js integration |
| Drei | 9.122.0 | Three.js helpers |
| GSAP | 3.12.7 | Advanced animations |
| Lucide React | 0.511.0 | Icons |

---

## Project Structure

```
rana-ambulance/
├── public/
│   └── pics/
│       ├── ambulance/          # Ambulance images
│       ├── gallery/            # Gallery images
│       └── hero/               # Hero section images
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles & Tailwind config
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Home page
│   │   └── sitemap.ts          # Dynamic sitemap
│   ├── components/
│   │   ├── sections/           # All page sections
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── EmergencyCTA.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Fleet.tsx
│   │   │   ├── MedicalEquipment.tsx
│   │   │   ├── WhyChoose.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Coverage.tsx
│   │   │   ├── EmergencyContact.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Booking.tsx
│   │   │   └── Footer.tsx
│   │   ├── three/
│   │   │   └── Scene3D.tsx     # 3D scene component
│   │   └── ui/
│   │       ├── Button.tsx      # Reusable button component
│   │       └── MobileBottomBar.tsx
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   └── lib/
│       ├── constants.ts        # Business data & configuration
│       └── utils.ts            # Utility functions
├── Specs/
│   └── Spec.md                 # Project specifications
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── eslint.config.mjs
```

---

## Business Information

**Company:** Rana Ambulance Services  
**Owners:** Rana Ali & Rana Fahad  
**Service:** 24/7 Emergency & Medical Transportation Across Pakistan

### Contact Information
- **Phone:** +92322-4200454 / +92300-8066519
- **WhatsApp:** +92322-4200454 / +92300-8066519
- **Email:** ranaali@gmail.com

### Office Locations
1. **Lahore:** Mian Head Office, Service Hospital, Jail Road, Lahore
2. **Rawalpindi:** PIMS Hospital, Rawalpindi
3. **Karachi:** Karachi Hospital

---

## Services Offered

1. **Emergency Ambulance** - Rapid emergency transportation
2. **ICU / Ventilator Ambulance** - Critical care transportation
3. **Oxygen Ambulance** - Patients requiring oxygen support
4. **Hospital Transfer** - Between hospitals and clinics
5. **Patient Transportation** - Medical assistance during travel
6. **Long-Distance Ambulance** - Intercity transportation
7. **Wheelchair Transportation** - Mobility-limited patients
8. **Event Medical Coverage** - Events and gatherings

---

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/rana-ambulance.git

# Navigate to project directory
cd rana-ambulance

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Configuration

### Environment Variables
Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://ranaambulance.com
NEXT_PUBLIC_PHONE_1=+92322-4200454
NEXT_PUBLIC_PHONE_2=+92300-8066519
NEXT_PUBLIC_WHATSAPP=+92322-4200454
NEXT_PUBLIC_EMAIL=ranaali@gmail.com
```

### Business Data
All business information is centralized in `src/lib/constants.ts`:
- Company details
- Services
- Fleet information
- Equipment list
- Cities covered
- FAQs
- Testimonials

---

## SEO Features

- Dynamic metadata with title templates
- Open Graph tags for social sharing
- Twitter/X card meta tags
- JSON-LD structured data (LocalBusiness, MedicalBusiness)
- XML sitemap generation
- Robots.txt configuration
- Semantic HTML structure
- Optimized images with alt text

---

## Performance Optimizations

- **Image Optimization** - Next.js Image component with WebP/AVIF
- **Lazy Loading** - Below-the-fold content loaded on demand
- **Code Splitting** - Automatic route-based splitting
- **Font Optimization** - Geist font with next/font
- **Reduced Motion** - Respects prefers-reduced-motion
- **Mobile Optimized** - Reduced animations on mobile devices

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is proprietary and confidential. All rights reserved.

---

## Acknowledgments

- **Design Inspiration:** [Dribbble - Rare Design Labs](https://dribbble.com/shots/27236527-Rare-Design-Labs-Three-js-Hero)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)

---

## Contact

**Rana Ambulance Services**  
📧 ranaali@gmail.com  
📞 +92322-4200454  
📞 +92300-8066519

**Website:** [ranaambulance.com](https://ranaambulance.com)

---

Built with ❤️ for emergency medical services in Pakistan
