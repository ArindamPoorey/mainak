'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // 1. Import the Image component
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Clients', href: '/clients' },
  { label: 'About', href: '/about' },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header className={`nav-header${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">

          <Link href="/" className="nav-logo">
            {/* 2. Replaced the SVG with your brand logo */}
            <Image 
              src="/brandlogos/navbarlogo.png" /* Place logo.png in your 'public' folder */
              alt="A K Enterprises Logo" 
              width={180} 
              height={180} 
              className="brand-image"
              priority /* Loads the logo immediately */
            />
          </Link>

          <nav className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${pathname === link.href ? ' nav-link-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="nav-cta">Get Quote</Link>

          <div className="nav-mobile-controls">
            <a href="https://wa.me/919028096789" target="_blank" rel="noopener noreferrer" className="nav-wa" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span className={`bar${menuOpen ? ' bar1-open' : ''}`} />
              <span className={`bar${menuOpen ? ' bar2-open' : ''}`} />
              <span className={`bar${menuOpen ? ' bar3-open' : ''}`} />
            </button>
          </div>

        </div>

        <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
          <div className="container nav-mobile-inner">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-mobile-link${pathname === link.href ? ' nav-mobile-link-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="nav-mobile-cta">Get Quote</Link>
          </div>
        </div>
      </header>

      <div style={{ height: '64px' }} />

      <style>{`
        /* ... Keep all your existing CSS ... */
        .brand-image {
          object-fit: contain;
          border-radius: 4px; /* Optional: adjust based on your logo shape */
        }
        /* ... existing CSS below ... */
        .nav-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: #fff;
          border-bottom: 1px solid var(--border);
          transition: box-shadow 0.3s ease;
        }
        .nav-header.scrolled {
          border-bottom-color: transparent;
          box-shadow: 0 2px 20px rgba(0,0,0,0.08);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .nav-logo-text {
          font-family: var(--font-heading);
          font-size: 17px;
          font-weight: 600;
          color: var(--text-dark);
          letter-spacing: -0.02em;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link {
          position: relative;
          padding: 6px 12px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-mid);
          border-radius: var(--radius-btn);
          transition: color var(--transition);
        }
        .nav-link:hover { color: var(--text-dark); }
        .nav-link-active { color: var(--orange); }
        .nav-link-active::after {
          content: '';
          position: absolute;
          bottom: 0; left: 12px; right: 12px;
          height: 2px;
          background: var(--orange);
          border-radius: 99px;
        }
        .nav-cta {
          padding: 8px 18px;
          background: var(--orange);
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          border-radius: var(--radius-btn);
          transition: opacity var(--transition);
          white-space: nowrap;
        }
        .nav-cta:hover { opacity: 0.9; }
        .nav-mobile-controls { display: none; align-items: center; gap: 10px; }
        .nav-wa {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px; height: 36px;
          border-radius: 50%;
          background: #25D366;
          flex-shrink: 0;
        }
        .nav-hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px; height: 36px;
          padding: 6px;
        }
        .bar {
          display: block;
          width: 100%; height: 2px;
          background: var(--text-dark);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .bar1-open { transform: rotate(45deg) translate(5px, 5px); }
        .bar2-open { opacity: 0; transform: scaleX(0); }
        .bar3-open { transform: rotate(-45deg) translate(5px, -5px); }
        .nav-mobile-menu {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          border-top: 1px solid transparent;
          transition: max-height 0.3s ease, opacity 0.3s ease;
          background: #fff;
        }
        .nav-mobile-menu.open {
          max-height: 520px;
          opacity: 1;
          border-top-color: var(--border);
        }
        .nav-mobile-inner {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-top: 12px;
          padding-bottom: 16px;
        }
        .nav-mobile-link {
          padding: 12px;
          font-size: 15px;
          font-weight: 500;
          color: var(--text-mid);
          border-radius: var(--radius-btn);
          transition: background var(--transition), color var(--transition);
        }
        .nav-mobile-link:hover { background: var(--surface-dim); color: var(--text-dark); }
        .nav-mobile-link-active { color: var(--orange); background: #fff7f0; }
        .nav-mobile-cta {
          display: block;
          text-align: center;
          margin-top: 10px;
          padding: 12px;
          background: var(--orange);
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          border-radius: var(--radius-btn);
        }
        @media (max-width: 1024px) {
          .nav-links, .nav-cta { display: none; }
          .nav-mobile-controls { display: flex; }
        }
      `}</style>
    </>
  );
}