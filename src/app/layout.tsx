import type { Metadata } from "next";
import { Outfit, Lora } from "next/font/google";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { FloatingWhatsApp } from "../components/ui/FloatingWhatsApp";
import { FloatingAIChatbot } from "../components/ui/FloatingAIChatbot";
import { LocationProvider } from "../context/LocationContext";
import { LanguageProvider } from "../context/LanguageContext";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vedic Venues | Premium Spiritual & Event Spaces",
  description: "Discover and book elegant, traditional, and modern venues for your spiritual and life events.",
  icons: {
    icon: "/seondlogo.png",
    shortcut: "/seondlogo.png",
    apple: "/seondlogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${lora.variable}`}>
      <body>
        <LanguageProvider>
          <LocationProvider>
            <Navbar />
            <main style={{ minHeight: 'calc(100vh - 140px)' }}>
              {children}
            </main>
            <FloatingWhatsApp />
            <FloatingAIChatbot />
            <Footer />
          </LocationProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
