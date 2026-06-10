'use client';
import { useEffect, useRef } from 'react';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustedBy />
        <CoreCapabilities />
        <AKAdvantage />
        <Industries />
        <OurJourney />
        <CTABanner />
      </main>
      <style>{homeStyles}</style>
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="hero-heading">
            World-Class Precision Engineering,{' '}
            <br />
            Built to OEM Standards. Seamless Supply for All Industrial Needs.
          </h1>
          <p className="hero-sub">
            Special tools, dies & fixtures — designed, machined, and delivered from Pune&apos;s MIDC Bhosari since 2018.
          </p>
          <div className="hero-actions">
            <a href="/contact" className="btn-primary">Request a Quote</a>
            <a href="https://wa.me/919028096789" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="https://www.enggpro.com/blogs/wp-content/uploads/2019/12/view-of-factory-against-blue-sky-257700.jpg"
            alt="Heavy Precision CNC Machining"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   TRUSTED BY — AUTO-SCROLLING LOGO CAROUSEL
   To add a client logo:
   1. Add a new object to the `clientLogos` array below
   2. Set `name` to the company name (used as alt text)
   3. Set `logo` to the image path e.g. '/clients/nrb.png'
      → Place logo files in: public/clients/
   4. The list is duplicated automatically for infinite scroll
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const clientLogos = [
  { name: 'Mahindra',                logo: './brandlogos/mahindra.png'},
  { name: 'NRB Bearings',            logo: './brandlogos/nrb.png'     },
  { name: 'Dana',                    logo: './brandlogos/dana.png'},
  { name: 'Blue Ocean Global',       logo: './brandlogos/bog.png'},
  { name: 'Oerlikon Balzers',        logo: './brandlogos/blazers.png' },
  { name: 'Shree Ganesh Engg Works', logo: './brandlogos/shree.png'   },
  { name: 'Exide',                   logo: './brandlogos/exide.png'},
  { name: 'Lupin',                   logo: './brandlogos/lupin.png'},
  { name: 'Mj Biopharm',             logo: './brandlogos/mj.png'},
  { name: 'Fischer Measurements',    logo: './brandlogos/fishler.png'  },
  { name: 'Thermax',                 logo: './brandlogos/Thermax.png'},
  { name: 'Gujarat Nippon',          logo: './brandlogos/gujarat.png'},
  { name: 'MTek',                    logo: './brandlogos/mtek.png'},
  { name: 'Kala Genset',             logo: './brandlogos/kala.png'},
  { name: 'Belrise',                 logo: './brandlogos/belsrise.png'},
  /* ── ADD MORE CLIENT LOGOS BELOW THIS LINE ──
  { name: 'Company Name', logo: '/clients/filename.png' },
  */
];

function TrustedBy() {
  const trackRef = useRef(null);

  // Duplicate items for seamless infinite loop
  const items = [...clientLogos, ...clientLogos];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId;
    let position = 0;
    const speed = 0.5; // px per frame — increase for faster scroll

    function animate() {
      position -= speed;
      // Reset when first half has scrolled fully out
      const halfWidth = track.scrollWidth / 2;
      if (Math.abs(position) >= halfWidth) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    track.addEventListener('mouseenter', () => cancelAnimationFrame(animationId));
    track.addEventListener('mouseleave', () => { animationId = requestAnimationFrame(animate); });

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="trusted">
      <div className="container">
        <p className="trusted-label">Trusted by Industry Leaders</p>
      </div>
      <div className="carousel-outer">
        <div className="carousel-track" ref={trackRef}>
          {items.map((c, i) => (
            <div key={`${c.name}-${i}`} className="carousel-item">
              {c.logo ? (
                <img src={c.logo} alt={c.name} className="carousel-logo" />
              ) : (
                <span className="carousel-name">{c.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreCapabilities() {
  return (
    <section className="section-pad bg-dim">
      <div className="container">
        <div className="section-header-center">
          <h2 className="section-heading">Core Capabilities</h2>
          <p className="section-sub">Engineered solutions for complex manufacturing challenges.</p>
        </div>
        <div className="two-col-cards">
          <div className="pillar-card hover-lift">
            <div className="pillar-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M12 18v-6" /><path d="M8 15h8" />
              </svg>
            </div>
            <h3 className="pillar-title">Precision Products</h3>
            <p className="pillar-desc">Custom tools, specialized dies, and intricate fixtures manufactured to exacting tolerances for demanding industrial applications.</p>
            <ul className="pillar-list">
              <li><CheckIcon /> Special Tools</li>
              <li><CheckIcon /> Press Dies</li>
              <li><CheckIcon /> Assembly Fixtures</li>
            </ul>
          </div>
          <div className="pillar-card hover-lift">
            <div className="pillar-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <h3 className="pillar-title">Industrial Services</h3>
            <p className="pillar-desc">Comprehensive machining services from rapid prototyping to full-scale production runs, ensuring quality at every step.</p>
            <ul className="pillar-list">
              <li><CheckIcon /> CNC Milling & Turning</li>
              <li><CheckIcon /> Wire EDM</li>
              <li><CheckIcon /> Surface Grinding</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function AKAdvantage() {
  const stats = [
    { value: '7+',   label: 'YEARS OF EXCELLENCE', desc: 'Delivering uncompromising quality since 2018.' },
    { value: '360°', label: 'FULL-SOLUTION',        desc: 'From initial design CAD to final inspected delivery.' },
    { value: 'OEM',  label: 'GRADE QUALITY',        desc: 'Strict adherence to international manufacturing standards.' },
  ];
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <div className="section-header-center">
          <h2 className="section-heading">The A K Advantage</h2>
        </div>
        <div className="stats-row">
          {stats.map((s, idx) => (
            <div key={s.value} className={`stat-col ${idx !== 2 ? 'stat-border' : ''}`}>
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
              <p className="stat-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   INDUSTRIES WE SERVE
   To change an industry image:
   Set `img` to any Unsplash URL or your own image path.
   To add a new industry card:
   Add a new object to the `industries` array below.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const industries = [
  {
    label: 'Automotive',
    img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80&fit=crop',
  },
  {
    label: 'Defense',
    img: 'https://defence.in/attachments/indian-defence-industry-webp.3853/',
  },
  {
    label: 'Aerospace',
    img: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=600&q=80&fit=crop',
  },
  {
    label: 'Pharma',
    img: 'https://thalassaemia.org.cy/wp-content/uploads/2019/05/pharma.jpg',
  },
  {
    label: 'Heavy Engineering',
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80&fit=crop',
  },
  {
    label: 'Automation',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMI9cjVYmkWj6LL2FTPK3gfESs9-Ko45uplw&s',
  },
  /* ── ADD MORE INDUSTRIES BELOW THIS LINE ──
  {
    label: 'Industry Name',
    img: 'https://your-image-url.com/image.jpg',
  },
  */
];

function Industries() {
  return (
    <section className="section-pad bg-dim">
      <div className="container">
        <div className="section-header-center">
          <h2 className="section-heading">Industries We Serve</h2>
        </div>
        <div className="industries-grid">
          {industries.map((item) => (
            <div key={item.label} className="industry-card">
              <div className="industry-img-wrap">
                <img src={item.img} alt={item.label} className="industry-img" loading="lazy" />
                <div className="industry-overlay" />
              </div>
              <p className="industry-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurJourney() {
  const events = [
    { year: '2018', desc: 'Founded in MIDC Bhosari' },
    { year: '2020', desc: 'Expanded CNC Capabilities' },
    { year: '2022', desc: 'ISO Certification Achieved' },
    { year: '2024', desc: 'Facility Expansion' },
  ];
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <div className="section-header-center">
          <h2 className="section-heading">Our Journey</h2>
        </div>
        <div className="journey-grid">
          {events.map((e) => (
            <div key={e.year} className="journey-card hover-lift">
              <p className="journey-year">{e.year}</p>
              <p className="journey-desc">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <h2 className="cta-heading">Ready to Build with Precision?</h2>
        <div className="cta-actions">
          <a href="/contact" className="btn-primary">Request Quote</a>
          <a href="/contact" className="btn-outline-white">Contact Sales</a>
        </div>
      </div>
    </section>
  );
}

const homeStyles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: var(--font-body); color: var(--text-mid); background: var(--surface); overflow-x: hidden; }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
  a { text-decoration: none; }

  .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
  .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); border-color: var(--orange); }

  /* Buttons */
  .btn-primary { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 28px; background: var(--orange); color: #fff; font-size: 14px; font-weight: 600; border-radius: var(--radius-btn); transition: opacity 0.2s ease; border: 1px solid var(--orange); white-space: nowrap; }
  .btn-primary:hover { opacity: 0.9; }
  .btn-outline-white { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 28px; background: transparent; color: #fff; font-size: 14px; font-weight: 600; border: 1px solid rgba(255,255,255,0.3); border-radius: var(--radius-btn); transition: all 0.2s ease; white-space: nowrap; }
  .btn-outline-white:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.7); }

  /* Hero */
  .hero {
    background-color: var(--navy);
    background-image: radial-gradient(rgba(255,255,255,0.12) 1.5px, transparent 1.5px);
    background-size: 28px 28px;
    padding: 80px 0;
    border-bottom: 1px solid #1f2937;
  }
  .hero-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
  .hero-heading { font-family: var(--font-heading); font-size: clamp(32px, 4vw, 52px); font-weight: 700; color: #fff; line-height: 1.15; letter-spacing: -0.01em; margin-bottom: 24px; }
  .hero-sub { font-size: 16px; line-height: 1.6; color: #9CA3AF; max-width: 480px; margin-bottom: 32px; }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }
  .hero-image-wrapper { border-radius: 12px; overflow: hidden; max-height: 480px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); }
  .hero-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease; }
  .hero-image-wrapper:hover .hero-img { transform: scale(1.03); }

  /* ── Carousel ── */
  .trusted { background: var(--surface); padding: 40px 0 36px; border-bottom: 1px solid var(--border); overflow: hidden; }
  .trusted-label { text-align: center; font-size: 11px; font-weight: 600; letter-spacing: 0.15em; color: var(--text-faint); margin-bottom: 28px; }
  .carousel-outer {
    overflow: hidden;
    width: 100%;
    /* Fade edges */
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
    mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  }
  .carousel-track {
    display: flex;
    align-items: center;
    gap: 0;
    width: max-content;
    will-change: transform;
  }
  .carousel-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 40px;
    border-right: 1px solid var(--border);
    height: 56px;
    flex-shrink: 0;
  }
  .carousel-logo {
    max-height: 70px;
    max-width: 120px;
    object-fit: contain;
    
    transition: filter 0.2s ease, opacity 0.2s ease;
  }
  .carousel-item:hover .carousel-logo { filter: grayscale(0%); opacity: 1; }
  .carousel-name {
    font-family: var(--font-heading);
    font-size: 15px;
    font-weight: 600;
    color: #6b7280;
    white-space: nowrap;
  }

  /* Sections */
  .section-pad { padding: 90px 0; }
  .bg-dim { background: var(--surface-dim); }
  .bg-white { background: var(--surface); }
  .section-header-center { text-align: center; margin-bottom: 48px; }
  .section-heading { font-family: var(--font-heading); font-size: clamp(26px, 3.5vw, 36px); font-weight: 700; color: var(--text-dark); margin-bottom: 12px; letter-spacing: -0.01em; }
  .section-sub { font-size: 16px; color: var(--text-mid); }

  /* Capabilities */
  .two-col-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .pillar-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-card); padding: 40px; display: flex; flex-direction: column; cursor: pointer; }
  .pillar-icon { margin-bottom: 24px; color: var(--text-dark); background: var(--surface-dim); width: 52px; height: 52px; display: flex; align-items: center; justify-content: center; border-radius: 12px; flex-shrink: 0; }
  .pillar-title { font-family: var(--font-heading); font-size: 20px; font-weight: 600; color: var(--text-dark); margin-bottom: 14px; }
  .pillar-desc { font-size: 15px; line-height: 1.65; color: var(--text-mid); margin-bottom: 24px; }
  .pillar-list { list-style: none; display: flex; flex-direction: column; gap: 12px; margin-top: auto; }
  .pillar-list li { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--text-dark); font-weight: 500; }

  /* Advantage */
  .stats-row { display: grid; grid-template-columns: repeat(3, 1fr); text-align: center; }
  .stat-col { padding: 20px 24px; display: flex; flex-direction: column; align-items: center; }
  .stat-border { border-right: 1px solid var(--border); }
  .stat-value { font-family: var(--font-heading); font-size: clamp(40px, 5vw, 56px); font-weight: 800; color: var(--text-dark); line-height: 1; margin-bottom: 14px; }
  .stat-label { font-size: 11px; font-weight: 700; color: var(--text-dark); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px; }
  .stat-desc { font-size: 14px; line-height: 1.6; color: var(--text-mid); max-width: 220px; }

  /* ── Industries with images ── */
  .industries-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .industry-card {
    border-radius: var(--radius-card);
    overflow: hidden;
    position: relative;
    cursor: default;
    border: 1px solid var(--border);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .industry-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.12); }
  .industry-img-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 4/3;
    overflow: hidden;
  }
  .industry-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
    filter: brightness(0.75);
  }
  .industry-card:hover .industry-img { transform: scale(1.06); filter: brightness(0.6); }
  .industry-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(11,31,58,0.7) 0%, transparent 60%);
  }
  .industry-label {
    position: absolute;
    bottom: 14px;
    left: 0; right: 0;
    text-align: center;
    font-family: var(--font-heading);
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.01em;
    text-shadow: 0 1px 4px rgba(0,0,0,0.4);
    /* label is inside the card, position it over the image */
    padding: 0 12px;
  }

  /* Journey */
  .journey-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
  .journey-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-card); padding: 32px 24px; text-align: center; }
  .journey-year { font-family: var(--font-heading); font-size: 22px; font-weight: 700; color: var(--orange); margin-bottom: 10px; }
  .journey-desc { font-size: 14px; font-weight: 500; color: var(--text-dark); line-height: 1.5; }

  /* CTA */
  .cta-banner {
    background-color: var(--navy);
    background-image: radial-gradient(rgba(255,255,255,0.12) 1.5px, transparent 1.5px);
    background-size: 28px 28px;
    padding: 80px 0;
    border-top: 1px solid #1f2937;
  }
  .cta-inner { text-align: center; }
  .cta-heading { font-family: var(--font-heading); font-size: clamp(22px, 4vw, 36px); font-weight: 700; color: #fff; margin-bottom: 32px; }
  .cta-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .industries-grid { grid-template-columns: repeat(3, 1fr); }
    .journey-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 768px) {
    .hero-inner { grid-template-columns: 1fr; gap: 32px; text-align: center; }
    .hero-content { order: 1; }
    .hero-image-wrapper { order: 2; width: 100%; max-width: 100%; max-height: 280px; }
    .hero-img { width: 100%; height: 280px; object-fit: cover; }
    .hero-heading { font-size: clamp(32px, 8vw, 42px); line-height: 1.15; }
    .hero-heading br { display: none; }
    .hero-sub { max-width: 100%; margin: 0 auto 24px; }
    .hero-actions { width: 100%; justify-content: center; }
    .two-col-cards { grid-template-columns: 1fr; }
    .stats-row { grid-template-columns: 1fr; gap: 32px; }
    .stat-border { border-right: none; border-bottom: 1px solid var(--border); padding-bottom: 32px; }
    .industries-grid { grid-template-columns: repeat(2, 1fr); }
    .journey-grid { grid-template-columns: 1fr; }
    .carousel-item { padding: 0 24px; }
  }

  @media (max-width: 480px) {
    .hero { padding: 40px 0; }
    .hero-heading { font-size: 2rem; line-height: 1.1; }
    .hero-actions { flex-direction: column; width: 100%; }
    .hero-actions a { width: 100%; justify-content: center; }
    .btn-primary, .btn-outline-white { width: 100%; padding: 14px 18px; }
    .hero-image-wrapper { max-height: 220px; }
    .hero-img { height: 220px; }
    .industries-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  }
`;