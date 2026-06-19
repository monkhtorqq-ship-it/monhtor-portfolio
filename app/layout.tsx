import type { Metadata } from "next";
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/ui/CustomCursor';
import FluidBackground from '../components/ui/FluidBackground';
import ScrollProgress from '../components/ui/ScrollProgress';

const siteUrl = "https://monhtor-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Monkhtor | Digital Architect & Full-Stack Developer",
    template: "%s | Monkhtor",
  },
  description:
    "Next.js, TypeScript, Tailwind CSS ашиглан орчин үеийн, хурдан, гоё веб апликейшн бүтээдэг Full-Stack Developer.",
  keywords: [
    "Monkhtor",
    "Full-Stack Developer",
    "Next.js Developer",
    "Mongolia",
    "Ulaanbaatar",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Monkhtor" }],
  creator: "Monkhtor",

  openGraph: {
    type: "website",
    locale: "mn_MN",
    url: siteUrl,
    siteName: "Monkhtor Portfolio",
    title: "Monkhtor | Digital Architect & Full-Stack Developer",
    description:
      "Next.js, TypeScript, Tailwind CSS ашиглан орчин үеийн веб апликейшн бүтээдэг Full-Stack Developer.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Monkhtor Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Monkhtor | Digital Architect & Full-Stack Developer",
    description:
      "Next.js, TypeScript, Tailwind CSS ашиглан орчин үеийн веб апликейшн бүтээдэг Full-Stack Developer.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050505] font-sans antialiased text-white overflow-x-hidden">
        <ScrollProgress />
        <FluidBackground />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}