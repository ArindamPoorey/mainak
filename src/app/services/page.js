export default function Services() {
  return (
    <>
      <main>
        <PageBanner
          title="Industrial Machining Services"
          subtitle="Precision engineering solutions tailored for high-fidelity industrial applications. We deliver exact tolerances and robust manufacturing processes."
        />
        <ServicesGrid />
        <SpecialCallout />
        <ServicesCTA />
      </main>
      <style>{styles}</style>
    </>
  );
}

function PageBanner({ title, subtitle }) {
  return (
    <section className="page-banner">
      <div className="container">
        <div className="banner-accent" />
        <h1 className="banner-title">{title}</h1>
        {subtitle && <p className="banner-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

const services = [
  {
    name: 'VMC Machining',
    desc: 'High-speed Vertical Machining Centers providing multi-axis precision for complex geometries and rigorous production runs.',
    img: './genimages/vmcm.png',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    name: 'CNC Turning',
    desc: 'Automated computer numerical control turning for cylindrical components, ensuring consistent dimensions across large batches.',
    img: 'https://image.made-in-china.com/202f0j00aKIkCdNMSFuH/Precision-China-CNC-Lathe-Machine-Price-CK6152E-.webp',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    name: 'Facing Services',
    desc: 'Creating perfectly flat surfaces perpendicular to rotational axes, fundamental for subsequent high-tolerance assembly.',
    img: 'https://5.imimg.com/data5/SELLER/Default/2020/10/OF/JM/BD/27725522/automatic-facing-centering-machine-500x500.jpg',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    name: 'Precision Drilling',
    desc: 'Deep hole and standard drilling operations with rigid tooling to maintain exact positional accuracy and surface finish.',
    img: 'https://5.imimg.com/data5/SELLER/Default/2024/4/408596812/QC/OP/GF/2273958/13-185-high-speed-precision-drilling-machine.jpg',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
      </svg>
    ),
  },
  {
    name: 'Rough Turning',
    desc: 'Aggressive material removal for raw castings and forgings, optimizing cycle times before final precision finishing.',
    img: 'https://d2n4wb9orp1vta.cloudfront.net/cms/PM0210_HardTurn_a.jpg;maxWidth=400',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
        <path d="M13 13l6 6"/>
      </svg>
    ),
  },
  {
    name: 'Metal Cutting',
    desc: 'Industrial-grade cutting processes tailored to diverse alloys, minimizing thermal distortion and material waste.',
    img: 'https://www.gauermetal.com/wp-content/uploads/2024/12/x-popular-metal-cutting-methods-for-your-next-project.jpg',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>
      </svg>
    ),
  },
];

function ServicesGrid() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.name} className="service-card">
              <div className="service-img-wrap">
                <img
                  src={s.img}
                  alt={s.name}
                  className="service-img"
                  loading="lazy"
                />
              </div>
              <div className="service-body">
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-name">{s.name}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecialCallout() {
  return (
    <section className="special-section">
      <div className="container">
        <div className="special-card">
          <div className="special-left-bar" />
          <div className="special-content">
            <div className="special-title-row">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
              </svg>
              <h3 className="special-title">Special Tools, Dies & Fixture Design</h3>
            </div>
            <p className="special-desc">
              Beyond standard operations, our engineering division conceptualizes and fabricates
              custom tooling and fixturing. This specialized capability ensures complex parts can be
              held rigidly and machined accurately, enabling repeatable quality on even the most
              non-standard geometries.
            </p>
          </div>
          <a href="/contact" className="special-btn">Consult Engineering</a>
        </div>
      </div>
    </section>
  );
}

function ServicesCTA() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <span className="cta-accent" />
        <h2 className="cta-heading">Ready to specify your project requirements?</h2>
        <p className="cta-sub">Connect with our technical team to discuss material specifications, tolerances, and production scheduling for your next industrial order.</p>
        <div className="cta-actions">
          <a href="/contact" className="btn-primary">Request a Quote</a>
          <a href="https://wa.me/919028096789" target="_blank" rel="noopener noreferrer" className="btn-outline-white">WhatsApp Us</a>
          <a href="tel:+919028096789" className="btn-outline-white">Call Now</a>
          <a href="mailto:akenterprisespune33@gmail.com" className="btn-outline-white">Send Email</a>
        </div>
      </div>
    </section>
  );
}

const styles = `
  .page-banner {
    background-color: var(--navy);
    background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px);
    background-size: 28px 28px;
    padding: 80px 0 90px;
    text-align: center;
  }
  .banner-accent { width: 40px; height: 3px; background: var(--orange); margin: 0 auto 20px; }
  .banner-title { font-family: var(--font-heading); font-size: clamp(30px,5vw,48px); font-weight: 700; color: #fff; }
  .banner-subtitle { margin-top: 16px; font-size: 16px; line-height: 1.7; color: #9CA3AF; max-width: 600px; margin-left: auto; margin-right: auto; }

  .section-pad { padding: 90px 0; }
  .bg-white { background: var(--surface); }

  /* Services grid */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .service-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  }
  .service-img-wrap {
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
    background: var(--surface-dim);
  }
  .service-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
  .service-card:hover .service-img { transform: scale(1.04); }
  .service-body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .service-icon {
    width: 40px;
    height: 40px;
    background: #fff7f0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--orange);
    flex-shrink: 0;
  }
  .service-name {
    font-family: var(--font-heading);
    font-size: 17px;
    font-weight: 600;
    color: var(--text-dark);
  }
  .service-desc {
    font-size: 13px;
    line-height: 1.65;
    color: var(--text-mid);
  }

  /* Special callout */
  .special-section { padding: 0 0 80px; background: var(--surface); }
  .special-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 40px;
    display: flex;
    align-items: center;
    gap: 32px;
    position: relative;
    overflow: hidden;
  }
  .special-left-bar {
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 4px;
    background: var(--orange);
    border-radius: 4px 0 0 4px;
  }
  .special-content { flex: 1; display: flex; flex-direction: column; gap: 12px; }
  .special-title-row { display: flex; align-items: center; gap: 12px; }
  .special-title {
    font-family: var(--font-heading);
    font-size: clamp(18px, 2.5vw, 24px);
    font-weight: 700;
    color: var(--text-dark);
  }
  .special-desc {
    font-size: 15px;
    line-height: 1.7;
    color: var(--text-mid);
    max-width: 640px;
  }
  .special-btn {
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    padding: 12px 24px;
    background: var(--orange);
    color: #fff;
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    border-radius: var(--radius-btn);
    transition: opacity 0.2s ease;
    flex-shrink: 0;
  }
  .special-btn:hover { opacity: 0.9; }

  /* CTA */
  .cta-banner {
    background-color: var(--navy);
    background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px);
    background-size: 28px 28px;
    padding: 90px 0;
  }
  .cta-inner { text-align: center; }
  .cta-accent { display: block; width: 40px; height: 3px; background: var(--orange); margin: 0 auto 20px; }
  .cta-heading { font-family: var(--font-heading); font-size: clamp(22px,4vw,36px); font-weight: 700; color: #fff; margin-bottom: 14px; }
  .cta-sub { font-size: 15px; color: #9CA3AF; line-height: 1.7; max-width: 560px; margin: 0 auto 36px; }
  .cta-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
  .btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--orange); color: #fff; font-family: var(--font-body); font-size: 14px; font-weight: 500; border-radius: var(--radius-btn); transition: opacity 0.2s ease; }
  .btn-primary:hover { opacity: 0.9; }
  .btn-outline-white { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: transparent; color: #fff; font-family: var(--font-body); font-size: 14px; font-weight: 500; border: 1px solid rgba(255,255,255,0.35); border-radius: var(--radius-btn); transition: all 0.2s ease; }
  .btn-outline-white:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.6); }

  /* Responsive */
  @media (max-width: 900px) {
    .services-grid { grid-template-columns: repeat(2, 1fr); }
    .special-card { flex-direction: column; align-items: flex-start; gap: 24px; }
    .special-btn { width: 100%; justify-content: center; }
  }
  @media (max-width: 640px) {
    .section-pad { padding: 60px 0; }
    .services-grid { grid-template-columns: 1fr; }
    .special-section { padding: 0 0 60px; }
    .special-card { padding: 28px 20px 28px 28px; }
    .cta-actions { flex-direction: column; align-items: center; }
    .btn-primary, .btn-outline-white { width: 100%; max-width: 280px; justify-content: center; }
  }
`;