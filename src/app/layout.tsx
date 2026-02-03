import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/atoms/themes";

import Navbar from "@/components/organisms/NavBar";
import Footer from "@/components/organisms/Footer";
import { Outfit, Instrument_Serif } from "next/font/google";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
  variable: "--font-outfit",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-instrument",
});
export const metadata: Metadata = {
  title: {
    default: 'Sebastian Betancourt | Software Developer',
    template: '%s | Sebastian Betancourt',
  },
  description:
    'Portafolio profesional de Sebastian Betancourt, desarrollador Full Stack especializado en Next.js, React y Node.js.',
  keywords: [
    'Sebastian Betancourt',
    'Full Stack Developer',
    'Next.js',
    'React',
    'Typescript',
    'Nodejs',
    'PosgreSQL',
    'Desarrollador Software',
    'Portafolio',
  ],
  authors: [{ name: 'Sebastian Betancourt' }],
  creator: 'Sebastian Betancourt',

  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),

  openGraph: {
    title: 'Sebastian Betancourt | Software Developer',
    description:
      'Portafolio profesional con proyectos reales en Next.js, React y SaaS.',
    url: process.env.SITE_URL ?? 'http://localhost:3000',
    siteName: 'Sebastian Betancourt',
    images: [
      {
        url: '/img/icon.png',
        width: 1200,
        height: 630,
        alt: 'Portafolio Sebastian Betancourt',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sebastian Betancourt | Full Stack Developer',
    description:
      'Portafolio profesional con proyectos reales en Next.js y React.',
    images: ['/img/icon.png'],
  },

  icons: {
    icon: '/img/icon.png',
    shortcut: '/img/icon.png',
    apple: '/img/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${outfit.variable} ${instrumentSerif.variable} overflow-x-hidden`}
      >
        <ThemeProvider>
          <Navbar />

          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}