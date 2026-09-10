import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ranaambulance.com"),
  title: {
    default: "Rana Ambulance Services | 24/7 Emergency Medical Transportation Pakistan",
    template: "%s | Rana Ambulance Services",
  },
  description:
    "Rana Ambulance Services provides 24/7 emergency and non-emergency ambulance transportation, ICU/ventilator ambulance services, oxygen support, patient transfers across Pakistan. When Every Second Matters.",
  keywords: [
    "ambulance service pakistan",
    "ambulance service lahore",
    "ambulance service islamabad",
    "ambulance service karachi",
    "24/7 ambulance service pakistan",
    "emergency ambulance pakistan",
    "icu ambulance pakistan",
    "ventilator ambulance pakistan",
    "oxygen ambulance pakistan",
    "patient transport pakistan",
    "hospital transfer ambulance",
    "long distance ambulance pakistan",
  ],
  authors: [{ name: "Rana Ambulance Services" }],
  creator: "Rana Ambulance Services",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://ranaambulance.com",
    siteName: "Rana Ambulance Services",
    title: "Rana Ambulance Services | 24/7 Emergency Medical Transportation Pakistan",
    description:
      "24/7 emergency and medical transportation services across Pakistan. ICU, ventilator, oxygen ambulances available. Call now for immediate assistance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rana Ambulance Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rana Ambulance Services | 24/7 Emergency Medical Transportation",
    description:
      "24/7 emergency and medical transportation services across Pakistan. ICU, ventilator, oxygen ambulances available.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ranaambulance.com",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Rana Ambulance Services",
              description:
                "24/7 Emergency & Medical Transportation Across Pakistan",
              url: "https://ranaambulance.com",
              telephone: ["+923224200454", "+923008066519"],
              email: "ranaali@gmail.com",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Service Hospital, Jail Road",
                  addressLocality: "Lahore",
                  addressCountry: "PK",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "PIMS Hospital",
                  addressLocality: "Rawalpindi",
                  addressCountry: "PK",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Karachi Hospital",
                  addressLocality: "Karachi",
                  addressCountry: "PK",
                },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [
                "https://facebook.com/ranaambulance",
                "https://instagram.com/ranaambulance",
                "https://youtube.com/@ranaambulance",
                "https://tiktok.com/@ranaambulance",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Rana Ambulance Services",
              description:
                "24/7 Emergency & Medical Transportation Across Pakistan",
              url: "https://ranaambulance.com",
              telephone: ["+923224200454", "+923008066519"],
              email: "ranaali@gmail.com",
              medicalSpecialty: [
                "Emergency Medicine",
                "Critical Care Transport",
                "Patient Transportation",
              ],
              availableService: [
                {
                  "@type": "MedicalProcedure",
                  name: "Emergency Ambulance Transport",
                  procedureType: "https://schema.org/Emergency",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "ICU Ambulance Transport",
                  procedureType: "https://schema.org/Surgical",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Ventilator Ambulance Transport",
                  procedureType: "https://schema.org/Surgical",
                },
                {
                  "@type": "MedicalTherapy",
                  name: "Oxygen Ambulance Transport",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Hospital Transfer",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Patient Transportation",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
