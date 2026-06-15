import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/ui/CustomCursor';
import FluidBackground from '../components/ui/FluidBackground';

export const metadata = {
  title: 'Monkhtor Portfolio',
  description: 'Luxury Portfolio built with Next.js & Tailwind CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050505] font-sans antialiased text-white overflow-x-hidden">
        <FluidBackground />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}