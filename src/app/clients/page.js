export default function Clients() {
  return (
    <>
      <main>
        <PageBanner
          title="Companies That Trust Us"
          subtitle="Partnering with India's leading manufacturers to deliver precision-engineered components across demanding OEM supply chains."
        />
        <ClientGrid />
        <ClientCTA />
      </main>
      {/* Updated to the safe Next.js App Router style injection */}
      <style dangerouslySetInnerHTML={{ __html: styles }} />
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

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CLIENTS LIST
   To add a new client:
   1. Add a new object to the `clients` array below
   2. Set `name` to the company name
   3. Set `logo` to the image path e.g. '/clients/nrb.png'
      → Place logo files in: public/clients/
   4. If no logo yet, set logo to null — initials show instead

   To remove a client: delete its object from the array
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const clients = [
  { name: 'NRB Bearings',            logo: './brandlogos/nrb.png'     },
  { name: 'Dana',                    logo: './brandlogos/dana.png'},
  { name: 'Blue Ocean Global',       logo: './brandlogos/bog.png'},
  { name: 'Oerlikon Balzers',        logo: './brandlogos/blazers.png' },
  { name: 'Shree Ganesh Engg Works', logo: './brandlogos/shree.png'   },
  { name: 'Exide',                   logo: './brandlogos/exide.png'                    },
  { name: 'Lupin',                   logo: './brandlogos/lupin.png'                        },
  { name: 'Mj Biopharm',             logo: './brandlogos/mj.png'                      },
  { name: 'Fischer Measurements',    logo: './brandlogos/fishler.png'  },
  { name: 'Thermax',                 logo: './brandlogos/Thermax.png'},
  { name: 'Gujarat Nippon',          logo: './brandlogos/gujarat.png'},
  { name: 'MTek',                    logo: './brandlogos/mtek.png'},
  { name: 'Kala Genset',             logo: './brandlogos/kala.png'},
  { name: 'Belrise',                 logo: './brandlogos/belsrise.png'},
  /* ── ADD NEW CLIENTS BELOW THIS LINE ──────────────────────
  { name: 'Company Name', logo: '/clients/filename.png' },
  ────────────────────────────────────────────────────────── */
];

function ClientGrid() {
  return (
    <section className="section-pad bg-dim">
      <div className="container">
        <div className="clients-grid">
          {clients.map((c) => (
            <div key={c.name} className="client-card">
              <div className="client-logo-area">
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    className="client-logo-img"
                  />
                ) : (
                  <div className="client-logo-placeholder">
                    <span className="placeholder-initials">
                      {c.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                )}
              </div>
              <p className="client-name">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientCTA() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <span className="cta-accent" />
        <h2 className="cta-heading">Ready to work with us?</h2>
        <p className="cta-sub">Join our network of manufacturers who trust us for critical precision components.</p>
        <div className="cta-actions">
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
  .page-banner {
    background-color: var(--navy);
    background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px);
    background-size: 28px 28px;
    padding: 80px 0 90px;
    text-align: center;
  }
  .banner-accent { width: 40px; height: 3px; background: var(--orange); margin: 0 auto 20px; }
  .banner-title { font-family: var(--font-heading); font-size: clamp(30px,5vw,48px); font-weight: 700; color: #fff; }
  .banner-subtitle { margin-top: 16px; font-size: 16px; line-height: 1.7; color: #9CA3AF; max-width: 580px; margin-left: auto; margin-right: auto; }

  .section-pad { padding: 90px 0; }
  .bg-dim { background: var(--surface-dim); }

  .clients-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .client-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 32px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }
  .client-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.07);
    border-color: var(--orange);
  }

  .client-logo-area {
    height: 72px;
    width: 100%; /* FIX: Ensures the area stays constrained */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .client-logo-img {
    width: 100%; /* FIX: Forces the image to shrink if the card is narrow */
    max-height: 64px;
    max-width: 140px;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: filter 0.2s ease, opacity 0.2s ease;
  }
  .client-card:hover .client-logo-img {
    filter: grayscale(0%);
    opacity: 1;
  }
  .client-logo-placeholder {
    width: 64px;
    height: 64px;
    border-radius: 12px;
    background: var(--surface-dim);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .placeholder-initials {
    font-family: var(--font-heading);
    font-size: 18px;
    font-weight: 700;
    color: var(--text-faint);
    letter-spacing: -0.02em;
  }

  .client-name {
    font-family: var(--font-heading);
    font-size: 14px;
    font-weight: 600;
    color: var(--text-dark);
    line-height: 1.4;
  }

  /* CTA */
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

  @media (max-width: 1024px) { .clients-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 768px)  { .clients-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px) {
    .clients-grid { 
      grid-template-columns: repeat(2, 1fr); 
      gap: 12px; 
    }
    .client-card { 
      padding: 24px 12px; /* FIX: Reduced side padding to give images more width */
    }
    .cta-actions { 
      flex-direction: column; 
      align-items: center; 
    }
    .btn-primary, .btn-outline-white { 
      width: 100%; 
      max-width: 280px; 
      justify-content: center; 
    }
  }
`;