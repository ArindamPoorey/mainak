import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'A K Enterprises — Precision CNC Machining & Special Tooling, Pune',
  description: 'Precision machined components, special tools, dies and fixtures for India\'s OEM supply chains. ISO certified. MIDC Bhosari, Pune.',
  keywords: 'CNC machining Pune, precision components, special tools dies fixtures, VMC machining, MIDC Bhosari, OEM supplier India',
  openGraph: {
    title: 'A K Enterprises — Precision CNC Machining, Pune',
    description: 'Special tools, dies & fixtures — designed, machined, and delivered from Pune\'s MIDC Bhosari since 2018.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}