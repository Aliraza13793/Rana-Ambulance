# Rana Ambulance Services — Premium 3D Healthcare Website

## Project Structure

**Spec-Driven Development:** All new features, sections, or major changes MUST have a corresponding spec file in `Specs/` directory before implementation.

```
Specs/
├── Spec.md              # Main spec file for all features/sections
└── [feature-name].md    # Additional feature-specific specs (optional)
```

**Workflow:**
1. Create or update `Specs/Spec.md` with detailed requirements
2. Review and approve spec
3. Implement according to spec
4. Mark spec as implemented when complete

---

## Assets & Media

All website images, videos, and 3D assets are stored in the `pics/` folder.

```
pics/
├── ambulance/          # Ambulance exterior/interior photos
│   ├── basic-ambulance.webp
│   ├── icu-ambulance.webp
│   ├── ventilator-ambulance.webp
│   └── patient-transport.webp
├── equipment/          # Medical equipment photos & 3D renders
│   ├── ventilator.webp
│   ├── oxygen-cylinder.webp
│   ├── cardiac-monitor.webp
│   ├── defibrillator.webp
│   ├── stretcher.webp
│   ├── wheelchair.webp
│   ├── ambu-bag.webp
│   ├── iv-equipment.webp
│   ├── first-aid-kit.webp
│   └── emergency-bag.webp
├── hero/               # Hero section assets
│   ├── ambulance-3d.glb
│   ├── medical-elements.glb
│   └── hero-bg.webp
├── team/               # Staff/team photos
├── gallery/            # General gallery images
├── icons/              # Custom SVG icons
└── og/                 # Open Graph / Social share images
```

**3D Assets:**
- Store `.glb` / `.gltf` / `.obj` models in `pics/hero/` or `pics/equipment/`
- Use Three.js React Three Fiber to render 3D models of medical equipment
- Medical tools (ventilator, oxygen, monitor, etc.) should use 3D animated renders where possible
- Fallback to high-quality `.webp` images if 3D fails to load

**Image Guidelines:**
- Use WebP format for all photos
- Max width: 1920px for hero, 1200px for cards
- Always provide `alt` text for accessibility
- Use `next/image` for optimization
- Lazy load images below the fold

---

## Project Overview

Build a modern, premium, highly interactive website for **Rana Ambulance Services**, a professional ambulance and medical transportation company providing reliable ambulance services across Pakistan.

The website should communicate:

> **"When Every Second Matters, We're Ready."**

Rana Ambulance Services provides 24/7 emergency and non-emergency ambulance transportation, ICU/ventilator ambulance services, oxygen support, patient transfers, hospital-to-hospital transfers, long-distance transportation, wheelchair transportation, and other medical transport services across Pakistan.

The website should feel **trustworthy, premium, modern, medical, fast, and technologically advanced**.

---

# Design Inspiration

Use the following Dribbble design as the primary visual inspiration:

https://dribbble.com/shots/27236527-Rare-Design-Labs-Three-js-Hero

Do NOT copy the design directly.

Instead, take inspiration from:

* Premium creative agency aesthetic
* Large immersive hero section
* Three.js/WebGL interaction
* Smooth animations
* 3D objects
* Cinematic transitions
* Minimal typography
* Strong visual hierarchy
* Dark sophisticated background
* Interactive mouse movement
* Scroll-based animations
* High-end modern UI

Adapt this creative style specifically for a **medical/ambulance brand**.

---

# Technology Stack

Use:

* Next.js
* TypeScript
* React
* Tailwind CSS
* Three.js
* React Three Fiber
* Drei
* Framer Motion
* GSAP where useful
* Lucide React icons

Use modern component architecture.

The website must be:

* Fully responsive
* SEO optimized
* Fast loading
* Accessible
* Mobile friendly
* Performance optimized
* Production ready

---

# Brand

## Company Name

Rana Ambulance Services

## Main Positioning

24/7 Emergency & Medical Transportation Across Pakistan

## Business Information

**Owners:** Rana Ali & Rana Fahad

**Phone Numbers (Call/WhatsApp):**
* +92322-4200454
* +92300-8066519

**Email:** ranaali@gmail.com

**Office Addresses:**
1. **Lahore:** Mian Head Office, Service Hospital, Jail Road, Lahore
2. **Rawalpindi:** PIMS Hospital, Rawalpindi
3. **Karachi:** Karachi Hospital

**Service Availability:** 24 hours, all over Pakistan

## Brand Personality

* Professional
* Reliable
* Compassionate
* Fast
* Trustworthy
* Medical
* Premium
* Human-centered

---

# Color Direction

Use a sophisticated medical color system with **WHITE as the main background**.

Primary Background:

* **White (#FFFFFF)** — Main website background
* **Off-White (#F8FAFC)** — Section alternating background
* **Soft Gray (#F1F5F9)** — Card backgrounds, subtle surfaces

Primary Colors:

* **Deep Navy (#0F172A)** — Headings, text, dark elements
* **Medical Red (#DC2626)** — Emergency CTAs, alerts, critical elements
* **White (#FFFFFF)** — Main background
* **Soft Gray (#64748B)** — Body text, secondary elements

Optional accent:

* Emergency Orange (#F97316)
* Medical Cyan (#06B6D4)

The hero section can use a **dark cinematic 3D environment** that transitions into the clean white main site below.

The visual style should feel like a combination of:

**Emergency Healthcare + Premium Technology + Modern Pakistani Service Brand**

**KEY:** The website transitions from a dark immersive 3D hero → clean white main site. This creates visual impact while maintaining readability.

---

# HERO SECTION

Create a highly immersive Three.js hero section.

Background:

* Dark cinematic environment
* Subtle animated particles
* Medical-tech atmosphere
* Soft glowing emergency lights
* Abstract 3D medical elements

Main 3D object:

Use the 3D ambulance model from `pics/hero/ambulance-3d.glb`.

The ambulance should:

* Slowly rotate
* React to mouse movement
* Have subtle emergency-light animation
* Have realistic reflections
* Cast soft shadows
* Feel premium rather than cartoonish

Add subtle floating medical elements around it (from `pics/hero/medical-elements.glb`):

* Oxygen cylinder
* ECG monitor
* Heart-rate waveform
* Medical cross
* Stethoscope
* Ambulance beacon
* Emergency medical bag
* Defibrillator-inspired abstract object

Do not overcrowd the scene.

The hero section uses a dark environment that transitions smoothly into the clean white main website below.

---

# HERO COPY

Large headline:

## "WHEN EVERY SECOND MATTERS."

Secondary line:

### "Rana Ambulance Services — 24/7 Medical Transportation Across Pakistan."

Supporting text:

"Fast, reliable and professional ambulance services with emergency medical support, patient transportation and specialized critical-care vehicles."

Primary CTA:

### CALL AMBULANCE NOW

Secondary CTA:

### BOOK AN AMBULANCE

Additional CTA:

### WHATSAPP US

Display:

**24/7 Emergency Response**

---

# EMERGENCY FLOATING UI

Create a floating emergency status card in the hero:

🚑 AVAILABLE 24/7

"Emergency Response Ready"

Add animated pulse indicator.

Another card:

📍 COVERAGE

"Across Pakistan"

Another:

⚕ MEDICAL SUPPORT

"Trained Medical Staff"

These cards should subtly float around the 3D ambulance.

---

# NAVIGATION

Create a premium sticky navbar.

Logo:

RANA
AMBULANCE SERVICES

Navigation:

* Home
* About
* Services
* Ambulances
* Equipment
* Coverage
* Contact

Right side:

### 🚑 Emergency: Call Now

On mobile:

* Hamburger menu
* Large Call Ambulance button

Navbar should become slightly blurred/glassmorphic while scrolling.

The navbar should adapt to both the dark hero section and white main site - using white text on hero, dark text on white background.

---

# EMERGENCY CTA BAR

Immediately below the hero create a high-impact emergency bar.

Example:

## Need an Ambulance Right Now?

### We're available 24 hours a day, 7 days a week.

Buttons:

**CALL NOW**

**WHATSAPP**

**BOOK AMBULANCE**

Make this section highly visible on mobile.

---

# SERVICES SECTION

Create an interactive services section.

Title:

## "Medical Transport For Every Situation"

Service cards:

### 01 — Emergency Ambulance

Rapid emergency transportation for accidents, injuries and medical emergencies.

### 02 — ICU / Ventilator Ambulance

Specialized ambulance transportation for critically ill patients requiring advanced medical support.

### 03 — Oxygen Ambulance

Ambulances equipped for patients requiring oxygen support during transportation.

### 04 — Hospital Transfer

Safe transportation between hospitals, clinics and medical facilities.

### 05 — Patient Transportation

Comfortable transportation for patients requiring medical assistance during travel.

### 06 — Long-Distance Ambulance

Intercity and nationwide patient transportation.

### 07 — Wheelchair Transportation

Safe transportation for patients with mobility limitations.

### 08 — Event Medical Coverage

Ambulance and medical support for events, gatherings and organizations.

Use animated cards with:

* Hover effects
* Medical icons
* Small 3D effects
* Smooth reveal animations

---

# AMBULANCE FLEET

Create a visually impressive section:

## "OUR AMBULANCE FLEET"

Show different ambulance categories with images from `pics/ambulance/`.

### Basic Ambulance

For standard patient transportation and emergency response.
Image: `pics/ambulance/basic-ambulance.webp`

### Advanced Life Support Ambulance

For patients requiring advanced emergency medical support.
Image: `pics/ambulance/advanced-life-support.webp`

### ICU / Ventilator Ambulance

For critical patients requiring intensive monitoring and respiratory support.
Image: `pics/ambulance/icu-ambulance.webp`

### Patient Transport Vehicle

For comfortable non-emergency medical transportation.
Image: `pics/ambulance/patient-transport.webp`

Each vehicle should have:

* Large image from `pics/ambulance/`
* 3D model from `pics/hero/ambulance-3d.glb` (optional)
* Equipment list
* Service type
* "Book This Ambulance" button

Use horizontal scrolling or 3D carousel.

---

# MEDICAL EQUIPMENT SECTION

Create an impressive interactive section titled:

## "EQUIPPED FOR THE MOMENTS THAT MATTER"

Show medical equipment with animated 3D renders and cards.

**Use 3D animated models from `pics/equipment/` for all medical tools:**

* Ventilator — 3D rotating model with animated breathing mechanism
* Oxygen Cylinder — 3D model with pressure gauge animation
* Cardiac Monitor — 3D model with live ECG waveform
* Defibrillator — 3D model with shock animation
* Suction Machine — 3D model with operation animation
* Ambu Bag — 3D model with compression animation
* IV Equipment — 3D model with drip animation
* Pulse Oximeter — 3D model with reading display
* Blood Pressure Monitor — 3D model with cuff animation
* Stretcher — 3D model with extend/retract animation
* Wheelchair — 3D model with fold/unfold animation
* First Aid Kit — 3D model with opening animation
* Emergency Medical Bag — 3D model with contents reveal
* PPE & Infection Control — 3D model with items display

Include:

### Oxygen System

Oxygen cylinders and delivery equipment for patients requiring oxygen support.

### Ventilator

For specialized critical-care transportation when clinically appropriate.

### Cardiac Monitor

For monitoring vital signs and cardiac activity during transport.

### Defibrillator

Emergency cardiac equipment where available.

### Suction Machine

For airway secretion management.

### Ambu Bag

Manual ventilation support equipment.

### IV Equipment

Equipment for supporting medically supervised patient transport.

### Pulse Oximeter

For oxygen saturation and pulse monitoring.

### Blood Pressure Monitor

For monitoring blood pressure during transportation.

### Stretcher

Safe and secure patient transportation.

### Wheelchair

For patients requiring assisted mobility.

### First Aid Kit

Emergency medical supplies for transport situations.

### Emergency Medical Bag

Essential emergency response equipment.

### PPE & Infection Control

Protective equipment and sanitation supplies.

Important:

Do not claim that every ambulance carries every piece of equipment unless the business actually provides it.

Allow the admin to mark equipment as:

* Available
* Not Available
* Available on ICU Ambulance
* Available on Advanced Ambulance

---

# 3D MEDICAL EQUIPMENT EXPERIENCE

Make this section interactive with a **white background**.

Use 3D models from `pics/equipment/` with React Three Fiber animations.

When the user scrolls:

* Oxygen cylinder moves into view (3D model from `pics/equipment/oxygen-cylinder.glb`)
* ECG monitor appears (3D model with animated waveform)
* Heart waveform animates
* Medical bag opens visually (3D model with reveal animation)
* Ambulance interior can transition into view (3D model from `pics/hero/`)

Use Three.js/WebGL only where it improves the experience.

Do not sacrifice performance for unnecessary 3D effects.

The 3D elements should have a **clean, medical aesthetic** against the white background with subtle shadows and depth.

---

# WHY CHOOSE RANA

Create a premium section:

## "WHY FAMILIES TRUST RANA"

Cards:

### 24/7 Availability

Emergency assistance whenever you need us.

### Nationwide Coverage

Patient transportation across major cities and long-distance routes throughout Pakistan.

### Professional Team

Trained ambulance staff and professional drivers.

### Medical Equipment

Ambulances equipped according to service level and patient requirements.

### Safe Transportation

Patient safety, dignity and comfort are our priorities.

### Fast Response

Our dispatch team works to connect patients with the appropriate available ambulance.

---

# HOW IT WORKS

Create a simple animated 4-step process.

### 01

CALL OR WHATSAPP

Contact Rana Ambulance Services.

### 02

SHARE YOUR LOCATION

Provide pickup location and destination.

### 03

CHOOSE AMBULANCE TYPE

Emergency, ICU, ventilator, oxygen or patient transport.

### 04

WE DISPATCH

Our team coordinates the appropriate available ambulance.

Add an animated route line between the steps.

---

# PAKISTAN COVERAGE

Create a large interactive Pakistan map.

Title:

## "WHEREVER YOU ARE, WE'RE READY TO HELP"

Show major cities:

* Lahore
* Islamabad
* Rawalpindi
* Karachi
* Faisalabad
* Multan
* Peshawar
* Quetta
* Sialkot
* Gujranwala
* Gujrat
* Sargodha
* Bahawalpur
* Hyderabad
* Abbottabad
* Mardan
* Sukkur
* Muzaffarabad
* Gilgit
* Skardu

Allow the map to highlight locations.

Add:

**Nationwide Medical Transportation**
**24 Hours — All Over Pakistan — Road Ambulance**

Important:

Do not falsely claim physical ambulance stations in every city unless Rana Ambulance Services actually operates there.

Use wording such as:

"Nationwide / Intercity Service Availability"

where appropriate.

---

# LIVE BOOKING EXPERIENCE

Create an ambulance booking form.

Fields:

### Patient Name

### Phone Number

### Pickup Location

### Destination

### Ambulance Type

### Patient Condition

### Required Date

### Required Time

### Additional Information

Ambulance type dropdown:

* Emergency Ambulance
* Basic Ambulance
* ICU Ambulance
* Ventilator Ambulance
* Oxygen Ambulance
* Patient Transport
* Wheelchair Transport

Buttons:

**REQUEST AMBULANCE**

**CALL INSTEAD**

**WHATSAPP**

For emergency situations, prominently recommend calling the emergency number rather than relying on a form.

---

# EMERGENCY CONTACT

Create an extremely visible section:

## "NEED HELP NOW?"

### CALL RANA AMBULANCE SERVICES

**+92322-4200454**
**+92300-8066519**

Buttons:

☎ CALL NOW

💬 WHATSAPP

The phone numbers should be configurable from the admin dashboard.

Never hard-code fake numbers.

---

# ABOUT RANA

Create a premium storytelling section.

Title:

## "MORE THAN AN AMBULANCE."

Copy:

"Rana Ambulance Services, founded by Rana Ali and Rana Fahad, is committed to providing dependable medical transportation with compassion, professionalism and respect for every patient and family."

Explain:

* Company mission
* Service philosophy
* Patient dignity
* Safety
* Professionalism
* Nationwide transportation
* Founded by Rana Ali & Rana Fahad

Add animated statistics:

**24/7**
Availability

**Nationwide**
Coverage

**Professional**
Service

**Patient First**
Approach

Only display numerical statistics such as ambulance count, response time, patient count, or years of service when verified by the business.

---

# TESTIMONIALS

Create a modern testimonial section.

Show:

* Patient/family name
* City
* Short review
* Rating

Example placeholders can be used during development, but clearly mark them as sample content until replaced with genuine customer testimonials.

---

# GALLERY

Create a premium image gallery using images from `pics/gallery/`:

* Ambulance exterior
* Ambulance interior
* Medical equipment
* Medical staff
* Patient transport
* Ambulance at hospital
* Night emergency response

Use smooth image transitions.

---

# FAQ

Create SEO-friendly FAQ accordion.

Questions:

### Do you provide ambulance service 24/7?

### Do you provide ambulance service across Pakistan?

### Do you provide ICU ambulances?

### Do you provide ventilator ambulance services?

### Do your ambulances have oxygen?

### Can I book an ambulance for hospital-to-hospital transfer?

### Do you provide long-distance ambulance transportation?

### Can a family member travel with the patient?

### How can I book an ambulance?

### Can I contact you through WhatsApp?

### What ambulance should I choose for a critical patient?

For medical questions, avoid giving unsafe medical advice. Encourage users to contact qualified medical professionals/emergency services when appropriate.

---

# CONTACT PAGE

Create a premium contact page.

Include:

## Rana Ambulance Services

Phone:

**+92322-4200454**
**+92300-8066519**

WhatsApp:

**+92322-4200454**
**+92300-8066519**

Email:

**ranaali@gmail.com**

Address:

**Mian HEda Office, Service Hospital, Jail Road, Lahore**
**PIMS Hospital, Rawalpindi**
**Karachi Hospital**

Google Maps:

Embed actual business location once provided.

Contact form:

* Name
* Phone
* Email
* Message

---

# FOOTER

Footer sections:

### Rana Ambulance Services

24/7 professional ambulance and medical transportation services.

### Services

* Emergency Ambulance
* ICU Ambulance
* Ventilator Ambulance
* Oxygen Ambulance
* Patient Transfer
* Hospital Transfer
* Long Distance
* Event Coverage

### Quick Links

* Home
* About
* Services
* Fleet
* Equipment
* Coverage
* Contact

### Emergency

CALL NOW

WHATSAPP

### Social

Facebook
Instagram
YouTube
TikTok

Only show social profiles that actually exist.

### Contact

Phone: +92322-4200454 / +92300-8066519
WhatsApp: +92322-4200454 / +92300-8066519
Email: ranaali@gmail.com

### Offices

Lahore: Mian HEda Office, Service Hospital, Jail Road, Lahore
Rawalpindi: PIMS Hospital, Rawalpindi
Karachi: Karachi Hospital

---

# ADMIN DASHBOARD

Build the site so important information can be managed later.

Admin should be able to manage:

* Ambulance fleet
* Services
* Equipment
* Cities
* Phone numbers
* WhatsApp number
* Email
* Address
* Testimonials
* Gallery
* FAQs
* Emergency banner
* Booking requests

---

# SEO REQUIREMENTS

Implement comprehensive SEO.

Target keywords naturally:

* Ambulance Service Pakistan
* Ambulance Service Lahore
* Ambulance Service Islamabad
* Ambulance Service Karachi
* 24/7 Ambulance Service Pakistan
* Emergency Ambulance Pakistan
* ICU Ambulance Pakistan
* Ventilator Ambulance Pakistan
* Oxygen Ambulance Pakistan
* Patient Transport Pakistan
* Hospital Transfer Ambulance
* Long Distance Ambulance Pakistan

Do NOT keyword stuff.

Implement:

* Dynamic metadata
* Title tags
* Meta descriptions
* Canonical URLs
* Open Graph
* Twitter/X cards
* Robots.txt
* XML sitemap
* JSON-LD structured data
* LocalBusiness schema where appropriate
* Service schema
* FAQ schema where eligible
* Breadcrumb schema
* Semantic HTML
* Optimized images
* Descriptive alt text

Create location/service landing pages only when the business genuinely serves those locations.

---

# PERFORMANCE

Three.js must NOT make the website slow.

Implement:

* Lazy loading
* Dynamic imports
* Code splitting
* Optimized 3D assets (from `pics/` folder)
* WebP/AVIF images
* Responsive images
* Reduced-motion support
* Mobile fallback for 3D
* GPU-friendly animations
* Suspense loading states

If WebGL is unavailable:

Display a high-quality ambulance image/video instead.

On mobile:

Reduce expensive 3D effects.

---

# MOBILE DESIGN

Mobile users should be treated as a first-class experience.

Add a fixed bottom emergency action bar:

🚑 CALL
💬 WHATSAPP
📍 BOOK

Make the emergency phone number immediately accessible.

The website must work beautifully on:

* Mobile
* Tablet
* Laptop
* Desktop
* Large screens

---

# ANIMATION SYSTEM

Use smooth but purposeful animations.

Include:

* Hero entrance animation
* Three.js camera movement
* Mouse parallax
* Scroll reveal
* Number counters
* Card hover animations
* Button micro-interactions
* Page transitions
* Section transitions
* Medical ECG animation
* Ambulance light animation

Avoid excessive animations that distract users during an emergency.

Accessibility:

Respect:

`prefers-reduced-motion`

---

# USER EXPERIENCE PRINCIPLE

The website should answer these questions within seconds:

1. How do I call an ambulance?
2. Is the service available 24/7?
3. Where does Rana Ambulance Services operate?
4. What types of ambulances are available?
5. Do you have ICU/ventilator/oxygen support?
6. How can I book?
7. How much does it cost / how can I get a quote?

Emergency actions must always be more prominent than decorative content.

---

# IMPORTANT MEDICAL DISCLAIMER

Do not make unsupported medical claims.

Do not claim:

* Hospital-level treatment unless actually provided
* Guaranteed survival
* Guaranteed response time
* Guaranteed availability
* Specific equipment on every ambulance
* Certified medical staff unless verified
* Nationwide physical presence unless verified

All service/equipment information should be configurable.

---

# FINAL DESIGN DIRECTION

The finished website should feel like:

**"A futuristic emergency medical command center."**

Imagine:

Premium Three.js visual experience
+
Modern healthcare interface
+
Emergency response technology
+
Pakistan-wide ambulance network
+
Human compassion

The first screen should immediately communicate:

## RANA AMBULANCE SERVICES

### WHEN EVERY SECOND MATTERS.

**24/7 Emergency & Medical Transportation Across Pakistan**

[ CALL AMBULANCE ] [ BOOK NOW ]

The website should look premium enough to compete with modern international healthcare brands while remaining simple enough for a person in an emergency to use immediately.

---

# DESIGN FLOW SUMMARY

1. **Hero (Dark Cinematic):** Immersive 3D environment with ambulance and medical elements
2. **Emergency CTA Bar:** High-visibility transition section
3. **Main Site (Clean White):** All content sections on white background
4. **Footer:** Clean, professional closing

**Visual Transition:** Dark 3D hero → White main site creates premium impact while ensuring readability for emergency information.
