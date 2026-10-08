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
    default: 'Sebastian Betancourt | Backend Engineer',
    template: '%s | Sebastian Betancourt',
  },
  description:
    'Portfolio of Sebastian Betancourt, backend engineer working with Go, TypeScript, PostgreSQL and integrations (OAuth, webhooks, AI agents).',
  keywords: [
    'Sebastian Betancourt',
    'Backend Engineer',
    'Go',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Redis',
    'Integrations',
    'Software Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Sebastian Betancourt' }],
  creator: 'Sebastian Betancourt',

  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),

  openGraph: {
    title: 'Sebastian Betancourt | Backend Engineer',
    description:
      'Backend engineer — Go, TypeScript, PostgreSQL & integrations.',
    url: process.env.SITE_URL ?? 'http://localhost:3000',
    siteName: 'Sebastian Betancourt',
    images: [
      {
        url: '/img/icon.png',
        width: 1200,
        height: 630,
        alt: 'Sebastian Betancourt portfolio',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['es_CO'],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sebastian Betancourt | Backend Engineer',
    description:
      'Backend engineer — Go, TypeScript, PostgreSQL & integrations.',
    images: ['/img/icon.png'],
  },

  icons: {
    icon: '/img/icon.png',
    shortcut: '/img/icon.png',
    apple: '/img/icon.png',
  },
}

import ContactCTA from "@/components/organisms/ContactCTA";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${instrumentSerif.variable} overflow-x-hidden`}
      >
        <LanguageProvider>
          <Navbar />

          {children}

          <ContactCTA />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}