'use client';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main>
        {/* Hero Banner */}
        <section className="page-banner">
          <div className="container">
            <div className="banner-accent reveal fade-up" />
            <h1 className="banner-title reveal fade-up delay-1">Get In Touch</h1>
            <p className="banner-sub reveal fade-up delay-2">
              Precision engineering requires precise communication. Reach out to discuss your industrial requirements.
            </p>
          </div>
        </section>

        {/* Quick contact cards */}
        <section className="quick-section">
          <div className="container quick-grid">
            <a href="https://wa.me/919028096789" target="_blank" rel="noopener noreferrer" className="quick-card reveal fade-up delay-1">
              <div className="quick-icon wa">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="quick-text">
                <p className="quick-label">WhatsApp</p>
                <p className="quick-value">+91 9028096789</p>
              </div>
              <div className="quick-arrow">→</div>
            </a>

            <a href="tel:+919028096789" className="quick-card reveal fade-up delay-2">
              <div className="quick-icon call">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.34-.34a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div className="quick-text">
                <p className="quick-label">Direct Call</p>
                <p className="quick-value">+91 9028096789</p>
              </div>
              <div className="quick-arrow">→</div>
            </a>

            <a href="mailto:akenterprisespune33@gmail.com" className="quick-card reveal fade-up delay-3">
              <div className="quick-icon mail">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="quick-text">
                <p className="quick-label">Email Us</p>
                <p className="quick-value">akenterprisespune33@gmail.com</p>
              </div>
              <div className="quick-arrow">→</div>
            </a>
          </div>
        </section>

        {/* Info section */}
        <section className="info-section">
          <div className="container info-grid">

            {/* Address card */}
            <div className="info-card reveal fade-right">
              <p className="info-card-label">Headquarters</p>
              <h3 className="info-card-title">A K Enterprises</h3>
              <div className="info-card-divider" />
              <div className="info-row">
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div>
                  <p className="info-name">Mr. Ashwin V. Marne</p>
                  <p className="info-role">Proprietor</p>
                </div>
              </div>
              <div className="info-row">
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <p className="info-address">
                  J-316, Near Quality Circle<br />
                  MIDC Bhosari, Pune-411026<br />
                  Maharashtra, India
                </p>
              </div>
              <div className="info-row">
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
                </div>
                <div>
                  <p className="info-gst-label">GST Number</p>
                  <p className="info-gst">27CIVPM1684F1ZP</p>
                </div>
              </div>
            </div>

            {/* Working hours card */}
            <div className="info-card reveal fade-up delay-1">
              <p className="info-card-label">Working Hours</p>
              <h3 className="info-card-title">When To Reach Us</h3>
              <div className="info-card-divider" />
              <div className="hours-list">
                <div className="hours-row">
                  <span className="hours-day">Monday – Saturday</span>
                  <span className="hours-time">9:00 AM – 7:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Sunday</span>
                  <span className="hours-time closed">Closed</span>
                </div>
              </div>
              <div className="response-badge">
                <div className="badge-dot" />
                <p className="badge-text">We respond within one business day</p>
              </div>
            </div>

            {/* Map card */}
            <div className="info-card map-card reveal fade-left">
              <p className="info-card-label">Location</p>
              <h3 className="info-card-title">Find Us</h3>
              <div className="info-card-divider" />
              <div className="map-placeholder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <p className="map-placeholder-text">J-316, MIDC Bhosari<br />Pune-411026</p>
              </div>
              <a
                href="https://maps.google.com/?q=MIDC+Bhosari+J-316+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn"
              >
                Open in Google Maps →
              </a>
            </div>

          </div>
        </section>

      </main>
      <style>{styles}</style>
    </>
  );
}

const styles = `
  /* ── Scroll animations ── */
  .reveal { opacity: 0; transition: opacity 0.6s ease, transform 0.6s ease; }
  .reveal.visible { opacity: 1; transform: none !important; }
  .fade-up    { transform: translateY(28px); }
  .fade-right { transform: translateX(-32px); }
  .fade-left  { transform: translateX(32px); }
  .delay-1 { transition-delay: 0.1s; }
  .delay-2 { transition-delay: 0.2s; }
  .delay-3 { transition-delay: 0.3s; }

  /* ── Banner ── */
  .page-banner {
    background-color: var(--navy);
    background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px);
    background-size: 28px 28px;
    padding: 80px 0 90px;
  }
  .banner-accent { width: 40px; height: 3px; background: var(--orange); margin-bottom: 20px; }
  .banner-title { font-family: var(--font-heading); font-size: clamp(32px,5vw,52px); font-weight: 700; color: #fff; margin-bottom: 14px; }
  .banner-sub { font-size: 16px; line-height: 1.7; color: #9CA3AF; max-width: 500px; }

  /* ── Quick cards ── */
  .quick-section { background: var(--surface); border-bottom: 1px solid var(--border); }
  .quick-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .quick-card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 28px 24px;
    border-right: 1px solid var(--border);
    transition: background 0.2s ease, transform 0.2s ease;
    position: relative;
    overflow: hidden;
  }
  .quick-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: var(--orange);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  .quick-card:hover::after { transform: scaleX(1); }
  .quick-card:hover { background: var(--surface-dim); }
  .quick-card:last-child { border-right: none; }

  .quick-icon {
    width: 48px; height: 48px;
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }
  .quick-card:hover .quick-icon { transform: scale(1.1); }
  .quick-icon.wa   { background: #dcfce7; color: #16a34a; }
  .quick-icon.call { background: #fff7f0; color: var(--orange); }
  .quick-icon.mail { background: #eff6ff; color: #2563eb; }

  .quick-text { flex: 1; }
  .quick-label { font-size: 10px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-faint); margin-bottom: 4px; }
  .quick-value { font-family: var(--font-heading); font-size: 15px; font-weight: 600; color: var(--text-dark); }

  .quick-arrow {
    font-size: 18px;
    color: var(--text-faint);
    transition: transform 0.2s ease, color 0.2s ease;
  }
  .quick-card:hover .quick-arrow { transform: translateX(4px); color: var(--orange); }

  /* ── Info section ── */
  .info-section { background: var(--surface-dim); padding: 80px 0 100px; }
  .info-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    align-items: start;
  }

  .info-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }
  .info-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.08);
    border-color: var(--orange);
  }

  .info-card-label { font-size: 10px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--orange); }
  .info-card-title { font-family: var(--font-heading); font-size: 20px; font-weight: 700; color: var(--text-dark); }
  .info-card-divider { height: 1px; background: var(--border); }

  .info-row { display: flex; align-items: flex-start; gap: 12px; }
  .info-icon {
    width: 32px; height: 32px;
    background: var(--surface-dim);
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    color: var(--orange);
    flex-shrink: 0;
    margin-top: 2px;
    transition: background 0.2s ease, transform 0.2s ease;
  }
  .info-card:hover .info-icon { background: #fff7f0; transform: scale(1.05); }
  .info-name { font-family: var(--font-heading); font-size: 15px; font-weight: 600; color: var(--text-dark); }
  .info-role { font-size: 13px; color: var(--text-faint); margin-top: 2px; }
  .info-address { font-size: 14px; line-height: 1.65; color: var(--text-mid); }
  .info-gst-label { font-size: 10px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-faint); margin-bottom: 3px; }
  .info-gst { font-family: monospace; font-size: 14px; color: var(--text-dark); }

  /* Hours */
  .hours-list { display: flex; flex-direction: column; gap: 12px; }
  .hours-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--border); }
  .hours-row:last-child { border-bottom: none; }
  .hours-day { font-size: 14px; font-weight: 500; color: var(--text-dark); }
  .hours-time { font-size: 14px; color: var(--text-mid); }
  .hours-time.closed { color: var(--text-faint); }

  .response-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-radius: 8px;
    margin-top: 4px;
  }
  .badge-dot { width: 8px; height: 8px; border-radius: 50%; background: #16a34a; flex-shrink: 0; animation: pulse 2s infinite; }
  .badge-text { font-size: 13px; color: #166534; font-weight: 500; }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.6; transform: scale(1.3); }
  }

  /* Map */
  .map-placeholder {
    background: var(--surface-dim);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
    transition: border-color 0.2s ease;
  }
  .info-card:hover .map-placeholder { border-color: rgba(249,115,22,0.3); }
  .map-placeholder-text { font-size: 13px; line-height: 1.5; color: var(--text-mid); }
  .map-btn {
    display: inline-flex;
    align-items: center;
    padding: 10px 20px;
    background: var(--navy);
    color: #fff;
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 500;
    border-radius: var(--radius-btn);
    transition: opacity 0.2s ease, transform 0.2s ease;
    align-self: flex-start;
  }
  .map-btn:hover { opacity: 0.85; transform: translateX(3px); }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .info-grid { grid-template-columns: 1fr 1fr; }
    .map-card { grid-column: 1 / -1; max-width: 480px; }
  }
  @media (max-width: 768px) {
    .quick-grid { grid-template-columns: 1fr; }
    .quick-card { border-right: none; border-bottom: 1px solid var(--border); }
    .quick-card:last-child { border-bottom: none; }
    .info-grid { grid-template-columns: 1fr; }
    .map-card { max-width: 100%; }
  }
`;