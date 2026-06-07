'use client';
import { useEffect } from 'react';

export default function About() {
  // Bulletproof Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once it's visible to save phone battery/performance
            observer.unobserve(entry.target); 
          }
        });
      },
      { 
        threshold: 0, // Triggers immediately when it enters the screen
        rootMargin: "50px" // Triggers 50px before it even scrolls into view
      }
    );
    
    const elements = document.querySelectorAll('.reveal');
    
    setTimeout(() => {
      elements.forEach((el) => observer.observe(el));
    }, 100);

    // MOBILE FAILSAFE: If the observer fails on a weird mobile browser, 
    // force all elements to appear after 2 seconds so the page is never blank.
    const failsafe = setTimeout(() => {
      elements.forEach((el) => el.classList.add('visible'));
    }, 2000);
    
    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  return (
    <>
      <main>
        <HeroBanner />
        <WhoWeAre />
        <CorePrinciples />
        <AboutTimeline />
        <InspectionFacility />
        <AboutCTA />
      </main>
      
      <style dangerouslySetInnerHTML={{ __html: styles }} />
    </>
  );
}

/* ── Hero — full image background with dark overlay ── */
function HeroBanner() {
  return (
    <section className="about-hero">
      <div className="about-hero-overlay" />
      <div className="container about-hero-inner">
        <p className="about-hero-eyebrow reveal fade-up">Since 2018 · MIDC Bhosari, Pune</p>
        <h1 className="about-hero-heading reveal fade-up delay-1">
          Precision in Every<br />Micron
        </h1>
        <p className="about-hero-sub reveal fade-up delay-2">
          Founded in 2018, A K Enterprises provides MNC-grade machining solutions to
          India&apos;s leading OEM supply chains. We engineer trust through absolute accuracy.
        </p>
      </div>
    </section>
  );
}

/* ── Who We Are — text left, image right ── */
function WhoWeAre() {
  return (
    <section className="section-pad bg-white">
      <div className="container who-inner">
        <div className="who-text reveal fade-right">
          <div className="tag-chip">Company Profile</div>
          <h2 className="who-heading">Engineered for Complex Manufacturing Challenges.</h2>
          <p className="who-body">
            A K Enterprises specialises in the design and manufacture of high-precision
            special tools, critical dies, and complex inspection fixtures. Our state-of-the-art
            facility in Pune is equipped to handle the most demanding tolerances required by
            modern industrial applications.
          </p>
          <p className="who-body" style={{ marginTop: '16px' }}>
            With robust in-house design capabilities utilising advanced CAD/CAM software,
            we transform conceptual requirements into fully realised, inspection-ready
            components, ensuring seamless integration into our clients&apos; supply chains.
          </p>
          <div className="who-stats reveal fade-up delay-2">
            <div className="who-stat">
              <p className="who-stat-val">8</p>
              <p className="who-stat-label">Specialists</p>
            </div>
            <div className="who-stat">
              <p className="who-stat-val">11</p>
              <p className="who-stat-label">Machines</p>
            </div>
            <div className="who-stat">
              <p className="who-stat-val">ISO</p>
              <p className="who-stat-label">Certified</p>
            </div>
          </div>
        </div>
        <div className="who-img-wrap reveal fade-left">
          <img
            src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=900&q=80&fit=crop"
            alt="CNC Machining at A K Enterprises"
            className="who-img"
          />
        </div>
      </div>
    </section>
  );
}

/* ── Core Principles ── */
function CorePrinciples() {
  const principles = [
    {
      title: 'Mission',
      desc: 'To deliver zero-compromise machined components that empower our clients to build superior products with absolute confidence in quality and reliability.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
        </svg>
      ),
    },
    {
      title: 'Vision',
      desc: 'To be recognised universally as the preferred technical partner for complex manufacturing challenges in high-stakes industrial environments.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
        </svg>
      ),
    },
    {
      title: 'Quality Policy',
      desc: 'Adhering strictly to ISO 9001:2015 certified processes, we enforce a rigorous 100% inspection protocol to ensure unyielding dimensional integrity.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
    },
  ];
  return (
    <section className="section-pad bg-dim">
      <div className="container">
        <h2 className="section-heading-center reveal fade-up">Core Principles</h2>
        <div className="principles-grid">
          {principles.map((p, i) => (
            <div key={p.title} className={`principle-card reveal fade-up delay-${i + 1}`}>
              <div className="principle-top-bar" />
              <div className="principle-icon">{p.icon}</div>
              <h3 className="principle-title">{p.title}</h3>
              <p className="principle-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Timeline ── */
function AboutTimeline() {
  const events = [
    { year: '2018', desc: 'Founded in MIDC Bhosari, Pune with a core team of specialists.' },
    { year: '2020', desc: 'Added 2 CNC Turning Centres and first VMC machine.' },
    { year: '2021', desc: 'Achieved ISO 9001:2015 Quality Management certification.' },
    { year: '2022', desc: 'Added 4th Axis VMC capability, expanding complex part range.' },
    { year: '2023', desc: 'Expanding capacity and client base across OEM supply chains.' },
  ];
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <div className="label-row reveal fade-up">
          <span className="accent-dash" />
          <span className="label-text">Our Journey</span>
        </div>
        <h2 className="section-heading reveal fade-up">Company Timeline</h2>
        <div className="about-timeline">
          {events.map((e, i) => (
            <div key={e.year} className={`at-item reveal fade-up delay-${i + 1}`}>
              <div className="at-year-col">
                <p className="at-year">{e.year}</p>
              </div>
              <div className="at-connector">
                <div className="at-dot" />
                <div className="at-line" />
              </div>
              <div className="at-desc-col">
                <p className="at-desc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Inspection Facility ── */
function InspectionFacility() {
  const instruments = [
    'Baker Digital Height Gauge — 0 to 300mm',
    'Mitutoyo Digital Height Gauge — 0 to 600mm',
    'Luthra Surface Plate — 900mm x 600mm',
    'Mitutoyo Plunger Dial Gauges (0.001mm precision)',
    'Baker Plunger & Lever Dial Gauges',
    'Micrometers — Baker Make (0–125mm range)',
    'Air Gauge Unit',
    'Bore Dial Gauges & Vernier Calipers',
  ];
  return (
    <section className="section-pad bg-dim">
      <div className="container">
        <div className="label-row reveal fade-up">
          <span className="accent-dash" />
          <span className="label-text">Quality Assurance</span>
        </div>
        <h2 className="section-heading reveal fade-up">Inspection Facility</h2>
        <div className="instruments-grid">
          {instruments.map((item, i) => (
            <div key={item} className={`instrument-item reveal fade-up delay-${(i % 4) + 1}`}>
              <div className="instrument-dot" />
              <p className="instrument-text">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ── */
function AboutCTA() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <span className="cta-accent" />
        <h2 className="cta-heading reveal fade-up">Have a component requirement? Let&apos;s talk.</h2>
        <p className="cta-sub reveal fade-up delay-1">Reach out through any channel — we respond within one business day.</p>
        <div className="cta-actions reveal fade-up delay-2">
          <a href="https://wa.me/919028096789" target="_blank" rel="noopener noreferrer" className="btn-primary">WhatsApp Us</a>
          <a href="tel:+919028096789" className="btn-outline-white">Call Now</a>
          <a href="mailto:akenterprisespune33@gmail.com" className="btn-outline-white">Send Email</a>
          <a href="/contact" className="btn-outline-white">Request Quote</a>
        </div>
      </div>
    </section>
  );
}

const styles = `
  /* ── Scroll animation base ── */
  .reveal {
    opacity: 0;
    transition: opacity 0.65s ease, transform 0.65s ease;
  }
  .reveal.visible { opacity: 1; transform: none !important; }

  .fade-up    { transform: translateY(32px); }
  .fade-right { transform: translateX(-40px); }
  .fade-left  { transform: translateX(40px); }

  .delay-1 { transition-delay: 0.1s; }
  .delay-2 { transition-delay: 0.2s; }
  .delay-3 { transition-delay: 0.3s; }
  .delay-4 { transition-delay: 0.4s; }
  .delay-5 { transition-delay: 0.5s; }

  /* ── Hero ── */
  .about-hero {
    position: relative;
    min-height: 480px;
    background-image: url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80&fit=crop');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
    padding-bottom: 72px;
  }
  .about-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(11,31,58,0.55) 0%,
      rgba(11,31,58,0.80) 60%,
      rgba(11,31,58,0.95) 100%
    );
  }
  .about-hero-inner {
    position: relative;
    z-index: 1;
    max-width: 640px;
    padding-top: 80px;
  }
  .about-hero-eyebrow {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--orange);
    margin-bottom: 16px;
  }
  .about-hero-heading {
    font-family: var(--font-heading);
    font-size: clamp(40px, 6vw, 72px);
    font-weight: 700;
    color: #fff;
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
  }
  .about-hero-sub {
    font-size: 16px;
    line-height: 1.75;
    color: rgba(255,255,255,0.72);
    max-width: 520px;
  }

  /* ── Who We Are ── */
  .section-pad { padding: 100px 0; }
  .bg-white { background: var(--surface); }
  .bg-dim { background: var(--surface-dim); }

  .who-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 72px;
    align-items: center;
  }
  .tag-chip {
    display: inline-block;
    padding: 5px 12px;
    border: 1px solid var(--border);
    border-radius: 99px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-mid);
    margin-bottom: 20px;
  }
  .who-heading {
    font-family: var(--font-heading);
    font-size: clamp(24px, 3vw, 34px);
    font-weight: 700;
    color: var(--text-dark);
    line-height: 1.2;
    margin-bottom: 20px;
  }
  .who-body { font-size: 15px; line-height: 1.75; color: var(--text-mid); }
  .who-stats {
    display: flex;
    gap: 32px;
    margin-top: 36px;
    padding-top: 32px;
    border-top: 1px solid var(--border);
  }
  .who-stat-val {
    font-family: var(--font-heading);
    font-size: 30px;
    font-weight: 700;
    color: var(--orange);
  }
  .who-stat-label { font-size: 12px; color: var(--text-mid); margin-top: 4px; }

  .who-img-wrap {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 48px rgba(0,0,0,0.12);
  }
  .who-img { width: 100%; height: 100%; object-fit: cover; display: block; }

  /* ── Core Principles ── */
  .section-heading-center {
    font-family: var(--font-heading);
    font-size: clamp(26px, 3.5vw, 36px);
    font-weight: 700;
    color: var(--text-dark);
    text-align: center;
    margin-bottom: 48px;
  }
  .principles-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .principle-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .principle-top-bar {
    height: 3px;
    width: 36px;
    background: var(--orange);
    border-radius: 2px;
  }
  .principle-icon {
    width: 44px;
    height: 44px;
    background: #fff7f0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--orange);
  }
  .principle-title {
    font-family: var(--font-heading);
    font-size: 18px;
    font-weight: 600;
    color: var(--text-dark);
  }
  .principle-desc { font-size: 14px; line-height: 1.7; color: var(--text-mid); }

  /* ── Timeline ── */
  .label-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
  .accent-dash { display: block; width: 20px; height: 2px; background: var(--orange); flex-shrink: 0; }
  .label-text { font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--orange); }
  .section-heading {
    font-family: var(--font-heading);
    font-size: clamp(24px, 3vw, 34px);
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 40px;
  }

  .about-timeline { display: flex; flex-direction: column; }
  .at-item { display: grid; grid-template-columns: 90px 40px 1fr; align-items: flex-start; }
  .at-year-col { padding: 10px 0; text-align: right; padding-right: 0; }
  .at-year { font-family: var(--font-heading); font-size: 17px; font-weight: 700; color: var(--orange); }
  .at-connector { display: flex; flex-direction: column; align-items: center; padding-top: 13px; }
  .at-dot {
    width: 14px; height: 14px; border-radius: 50%;
    background: var(--orange);
    border: 3px solid #fff;
    box-shadow: 0 0 0 2px var(--orange);
    flex-shrink: 0; z-index: 1;
  }
  .at-line { width: 2px; background: var(--border); flex: 1; min-height: 40px; }
  .at-item:last-child .at-line { display: none; }
  .at-desc-col { padding: 8px 0 40px 20px; }
  .at-desc { font-size: 15px; line-height: 1.65; color: var(--text-mid); }

  /* ── Inspection ── */
  .instruments-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .instrument-item {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 16px 20px;
    display: flex;
    align-items: center;
    gap: 14px;
    transition: border-color 0.2s ease, transform 0.2s ease;
  }
  .instrument-item:hover { border-color: var(--orange); transform: translateX(4px); }
  .instrument-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--orange); flex-shrink: 0; }
  .instrument-text { font-size: 14px; color: var(--text-mid); line-height: 1.4; }

  /* ── CTA ── */
  .cta-banner {
    background-color: var(--navy);
    background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px);
    background-size: 28px 28px;
    padding: 90px 0;
  }
  .cta-inner { text-align: center; }
  .cta-accent { display: block; width: 40px; height: 3px; background: var(--orange); margin: 0 auto 20px; }
  .cta-heading { font-family: var(--font-heading); font-size: clamp(24px,4vw,38px); font-weight: 700; color: #fff; margin-bottom: 14px; }
  .cta-sub { font-size: 15px; color: #9CA3AF; line-height: 1.7; max-width: 480px; margin: 0 auto 40px; }
  .cta-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
  .btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--orange); color: #fff; font-family: var(--font-body); font-size: 14px; font-weight: 500; border-radius: var(--radius-btn); transition: opacity 0.2s ease; }
  .btn-primary:hover { opacity: 0.9; }
  .btn-outline-white { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: transparent; color: #fff; font-family: var(--font-body); font-size: 14px; font-weight: 500; border: 1px solid rgba(255,255,255,0.35); border-radius: var(--radius-btn); transition: all 0.2s ease; }
  .btn-outline-white:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.6); }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .who-inner { grid-template-columns: 1fr; gap: 40px; }
    .who-img-wrap { max-height: 360px; }
    .who-img { height: 360px; }
    .principles-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .section-pad { padding: 64px 0; }
    .about-hero { min-height: 400px; padding-bottom: 48px; }
    
    .principles-grid { grid-template-columns: 1fr; } 
    .instruments-grid { grid-template-columns: 1fr; }
    .at-item { grid-template-columns: 60px 32px 1fr; }
    
    .who-stats { gap: 20px; flex-wrap: wrap; }
    
    .cta-actions { flex-direction: column; align-items: center; }
    .btn-primary, .btn-outline-white { width: 100%; max-width: 280px; justify-content: center; }
  }
`;