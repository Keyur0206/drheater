import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import WhatsAppFloatingButton from "@/components/common/WhatsappFloatingBtn";
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

export const metadata = {
  title: {
    default: "DR Heater",
    template: "%s | DR Heater",
  },
  description: "Industrial heating solutions for manufacturing industries.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
