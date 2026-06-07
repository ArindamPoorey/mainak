import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Clients', href: '/clients' },
  { label: 'About', href: '/about' },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-brand-name">A K Enterprises</p>
            <p className="footer-brand-desc">
              Precision machined components, special tools, dies and fixtures.
              Serving India&apos;s OEM supply chains from MIDC Bhosari, Pune since 2018.
            </p>
          </div>

          <div className="footer-nav-col">
            <p className="footer-col-label">Navigation</p>
            <ul className="footer-nav-grid">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-col">
            <p className="footer-col-label">Get In Touch</p>
            <ul className="footer-contact-list">
              <li>
                <a href="https://wa.me/919028096789" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.34-.34a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                  +91 9028096789
                </a>
              </li>
              <li>
                <a href="mailto:akenterprisespune33@gmail.com" className="footer-contact-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  akenterprisespune33@gmail.com
                </a>
              </li>
              <li>
                <span className="footer-contact-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  <span>J-316, Near Quality Circle,<br />MIDC Bhosari, Pune-411026</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} A K Enterprises. All rights reserved.</p>
          <p>J-316, MIDC Bhosari, Pune-411026, Maharashtra, India</p>
        </div>

      </div>

      <style>{`
        .footer { background-color: var(--navy); background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px); background-size: 28px 28px; background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px); background-size: 28px 28px; }
        .footer-inner { padding-top: 64px; padding-bottom: 64px; }
        .footer-top {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1.4fr;
          gap: 48px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .footer-brand-name {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 12px;
        }
        .footer-brand-desc { font-size: 14px; line-height: 1.7; color: #9CA3AF; }
        .footer-col-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9CA3AF;
          margin-bottom: 16px;
        }
        .footer-nav-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 32px;
        }
        .footer-link { font-size: 14px; color: #D1D5DB; transition: color var(--transition); }
        .footer-link:hover { color: var(--orange); }
        .footer-contact-list { display: flex; flex-direction: column; gap: 12px; }
        .footer-contact-link {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 14px;
          color: #D1D5DB;
          transition: color var(--transition);
        }
        .footer-contact-link svg { flex-shrink: 0; margin-top: 2px; }
        a.footer-contact-link:hover { color: var(--orange); }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding-top: 32px;
          font-size: 13px;
          color: #6B7280;
        }
        @media (max-width: 1024px) {
          .footer-top { grid-template-columns: 1fr 1fr; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .footer-top { grid-template-columns: 1fr; gap: 32px; }
          .footer-bottom { flex-direction: column; text-align: center; gap: 6px; }
        }
      `}</style>
    </footer>
  );
}