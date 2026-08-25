import type { Metadata } from "next";
import { Outfit, Lora } from "next/font/google";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { FloatingWhatsApp } from "../components/ui/FloatingWhatsApp";
import { LocationProvider } from "../context/LocationContext";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${lora.variable}`}>
      <body>
        <LocationProvider>
          <Navbar />
          <main style={{ minHeight: 'calc(100vh - 140px)' }}>
            {children}
          </main>
          <FloatingWhatsApp />
          <Footer />
        </LocationProvider>
      </body>
    </html>
  );
}
