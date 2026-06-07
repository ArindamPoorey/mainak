export default function Products() {
  return (
    <>
      <main>
        <PageBanner
          title="Products We Manufacture"
          subtitle="Custom precision components for OEM supply chains. No standard catalogue — every part is made to your requirement."
        />
        <ProductGrid />
        <AuthorizedStockist />
        <ProductCTA />
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

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PRODUCTS LIST
   To add a new product:
   1. Add a new object to the `products` array below
   2. Set `name` to the product name
   3. Set `desc` to a one-line description
   4. Set `img` to an Unsplash URL or your own image path
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const products = [
  {
    name: 'Grinding and Cutting Wheels',
    desc: 'High-performance abrasive wheels designed for fast, clean cutting and grinding of metal and masonry.',
    img: 'https://www.renwa-abrasive.com/uploads/21858/info/p202408261522436ab4e.jpg', // Angle grinder sparks
  },
  {
    name: 'Flap Discs and Flap Wheels',
    desc: 'Versatile abrasive discs engineered for aggressive material removal, blending, and smooth surface finishing.',
    img: 'https://www.3mindia.in/wps/wcm/connect/922152fe-d55a-4ce3-95cf-da9988027aeb/3M_CubitronTM_II_Faecherschleifscheibe_967a-410x205px.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-922152fe-d55a-4ce3-95cf-da9988027aeb-nZ363JB', // Metalwork finishing
  },
  {
    name: 'Abrasive Belts & Packing Belts',
    desc: 'Durable sanding belts for continuous material prep and high-tensile packing belts for heavy-duty industrial strapping.',
    img: 'https://www.combatabrasives.com/cdn/shop/files/Surface-Conditioning-Belts-3.jpg?v=1745968442&width=2048', // Industrial manufacturing
  },
  {
    name: 'Perforated Grills and Filter Assembly',
    desc: 'Precision-engineered perforated metal grills and assemblies designed for optimal air filtration and fluid separation.',
    img: 'https://rectorseal.com/media/catalog/product/cache/1fcb13513d89f044c960feca818b0090/1/2/1280_MtT4sEsx7cG342zA.jpg-1646784881', // Perforated metal mesh
  },
  {
    name: 'Industrial Wipes',
    desc: 'Heavy-duty, highly absorbent cleaning wipes formulated to quickly remove tough grease, oil, and workshop grime.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLKl2G-DijSliEbLoxwizX2Dk0SnuFL3NWQ&s', // Workshop cleanup/supplies
  },
  {
    name: 'Industrial Toolings',
    desc: 'Custom precision dies, fixtures, and cutting tools manufactured for consistent mass-production machining.',
    img: 'https://inchtools.com/wp-content/uploads/2023/04/industrial-tools.webp', // CNC drill bits/machining
  },
  {
    name: 'Safety Equipment',
    desc: 'Comprehensive personal protective equipment (PPE) to ensure worker safety in hazardous industrial environments.',
    img: 'https://cpimg.tistatic.com/02479521/b/4/Industrial-Safety-Equipement.jpg', // Hard hats and safety gear
  },
  {
    name: 'Material Handling Equipment',
    desc: 'Robust equipment including pallet jacks, hoists, and trolleys designed to safely maneuver heavy industrial loads.',
    img: 'https://5.imimg.com/data5/SELLER/Default/2020/11/NJ/VV/QV/21609698/material-handling-equipment-500x500-1.jpg', // Warehouse and pallets
  },
  {
    name: 'Castor Wheels',
    desc: 'Heavy-duty swivel and rigid caster wheels engineered for smooth workplace mobility and high load-bearing capacity.',
    img: 'https://m.media-amazon.com/images/I/61Jb-ZoO-RL.jpg', // Industrial trolley
  },
  {
    name: 'Hydraulic Hoses and Fittings',
    desc: 'High-pressure hydraulic hoses and leak-proof steel fittings built for reliable, heavy-duty fluid power transmission.',
    img: 'https://5.imimg.com/data5/GI/YC/MY-32061269/hydraulic-hoses-and-fittings.jpg', // Industrial piping and hoses
  },
  {
    name: 'SS Fittings, Flanges and Fasteners',
    desc: 'Corrosion-resistant stainless steel fasteners, flanges, and piping connectors for harsh industrial and chemical environments.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTQL07mI8B88T5bIj-hC4N57Jte18k0-4QQ&s', // Nuts, bolts, and fasteners
  },
  {
    name: 'Modular Assemblies and Conveyor Systems',
    desc: 'Scalable conveyor belts and modular assembly lines to streamline automated manufacturing and logistics operations.',
    img: 'https://www.designedconveyor.com/wp-content/uploads/2019/11/factory-1137993_640.jpg', // Automated production line
  },
  {
    name: 'Stationary Consumables',
    desc: 'Essential industrial office supplies, inventory tags, and documentation materials required for everyday plant operations.',
    img: 'https://5.imimg.com/data5/SL/MY/JO/SELLER-19492446/office-stationery-office-consumable-and-office-supply-500x500.jpg', // Stationery and clips
  },
  {
    name: 'Power Press Parts',
    desc: 'Durable replacement components, clutches, and die cushions specifically manufactured for heavy mechanical power presses.',
    img: 'https://3.imimg.com/data3/VJ/YB/MY-3404179/power-press-components-500x500.jpg', // Heavy metal machinery
  }
  /* ── ADD NEW PRODUCTS BELOW THIS LINE ──
  {
    name: 'Your Product Name',
    desc: 'One-line description of the product.',
    img: 'https://your-image-url.com/image.jpg',
  },
  */
];

function ProductGrid() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <div className="product-grid">
          {products.map((p) => (
            <div key={p.name} className="product-card">
              <div className="product-img-wrap">
                <img
                  src={p.img}
                  alt={p.name}
                  className="product-img"
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{p.name}</h3>
                <p className="product-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   AUTHORIZED STOCKIST BRANDS
   To add a new brand:
   1. Add a new object to the `brands` array below
   2. Set `name` to the brand name (used as alt text)
   3. Replace the `img` placeholder path with your actual
      brand logo image, e.g. '/brands/mitutoyo.png'
      Place logo files in: public/brands/
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const brands = [
  { name: 'Palymak',  img: './brandlogos/Palymak.png' },
  { name: 'Cumi',     img: './brandlogos/Cumi.png' },
  { name: '3M',    img: './brandlogos/3M.png' },
  { name: 'Bosch',     img: './brandlogos/Bosch.png' },
  { name: 'STARCKE',       img:'./brandlogos/STARCKE.png' },
  { name: 'Dupont',        img: './brandlogos/Dupont.png' },
  { name: 'NACHI',     img: './brandlogos/nachi.png' },
  { name: 'Norton',   img: './brandlogos/Norton.png' },
  { name: 'Abracut',   img: './brandlogos/Abracut.png' },
  { name: 'Wendt',   img: './brandlogos/Wendt.png' },
  { name: 'Udyogi',   img: './brandlogos/Udyogi.png' },
  { name: 'Karam',   img: './brandlogos/Karam.png' },
  { name: 'Venus',   img: './brandlogos/Venus.png' },
  { name: 'Supo',   img: './brandlogos/Supo.png' },
  { name: 'Sumatic Caster',   img: './brandlogos/sumatic.png' },
  { name: 'Addison',   img: './brandlogos/Addison.png' },
  { name: 'Totem',   img: './brandlogos/Totem.png' },
  { name: 'TG',   img: './brandlogos/TG.png' },
  { name: 'Taegutec',   img: './brandlogos/Taegutec.png' },
  { name: 'Janatics',   img: './brandlogos/Janatics.png' },
  { name: 'Smc',   img: './brandlogos/Smc.png' },
  { name: 'Festo',   img: './brandlogos/Festo.png' },
  { name: 'Yuken',   img: './brandlogos/Yuken.png' },
  /* ── ADD NEW BRANDS BELOW THIS LINE ──
  { name: 'BrandName', img: '/brands/brandname.png' },
  */
];

function AuthorizedStockist() {
  return (
    <section className="section-pad bg-dim">
      <div className="container">
        <div className="label-row">
          <span className="accent-dash" />
          <span className="label-text">Authorized Stockist</span>
        </div>
        <h2 className="section-heading">Official Brands We Stock</h2>
        <p className="stock-sub">We are authorized stockists for the following premium industrial brands.</p>

        <div className="brand-grid">
          {brands.map((b) => (
            <div key={b.name} className="brand-slot">
              {b.img ? (
                /* ── BRAND LOGO IMAGE: replace img path in the brands array above ── */
                <img
                  src={b.img}
                  alt={b.name}
                  className="brand-logo-img"
                />
              ) : (
                /* ── PLACEHOLDER: shown until you add the real logo image ── */
                <div className="brand-placeholder">
                  <span className="brand-placeholder-name">{b.name}</span>
                  <span className="brand-placeholder-hint">Add logo in /public/brands/</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCTA() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <span className="cta-accent" />
        <h2 className="cta-heading">Need a quote for any of these products?</h2>
        <p className="cta-sub">Send us your drawing or requirement and we will get back within one business day.</p>
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
  .bg-white { background: var(--surface); }
  .bg-dim { background: var(--surface-dim); }

  /* Product Grid */
  .product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .product-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-bottom-color 0.2s ease;
    border-bottom: 2px solid transparent;
  }
  .product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    border-bottom-color: var(--orange);
  }
  .product-img-wrap {
    width: 100%;
    aspect-ratio: 16/10;
    overflow: hidden;
    background: var(--surface-dim);
  }
  .product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
  .product-card:hover .product-img { transform: scale(1.04); }
  .product-info { padding: 20px 22px 24px; }
  .product-name {
    font-family: var(--font-heading);
    font-size: 16px;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 8px;
  }
  .product-desc {
    font-size: 13px;
    line-height: 1.6;
    color: var(--text-mid);
  }

  /* Brand grid */
  .label-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
  .accent-dash { display: block; width: 20px; height: 2px; background: var(--orange); flex-shrink: 0; }
  .label-text { font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--orange); }
  .section-heading { font-family: var(--font-heading); font-size: clamp(24px,3vw,34px); font-weight: 700; color: var(--text-dark); margin-bottom: 10px; }
  .stock-sub { font-size: 15px; color: var(--text-mid); margin-bottom: 40px; }

  .brand-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  .brand-slot {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }
  .brand-slot:hover {
    border-color: var(--orange);
    box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  }
  .brand-logo-img {
    max-width: 100%;
    max-height: 56px;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: filter 0.2s ease, opacity 0.2s ease;
  }
  .brand-slot:hover .brand-logo-img {
    filter: grayscale(0%);
    opacity: 1;
  }
  .brand-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    text-align: center;
  }
  .brand-placeholder-name {
    font-family: var(--font-heading);
    font-size: 15px;
    font-weight: 700;
    color: var(--text-dark);
    letter-spacing: -0.01em;
  }
  .brand-placeholder-hint {
    font-size: 10px;
    color: var(--text-faint);
    font-family: monospace;
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
  .cta-heading { font-family: var(--font-heading); font-size: clamp(22px,4vw,36px); font-weight: 700; color: #fff; margin-bottom: 14px; }
  .cta-sub { font-size: 15px; color: #9CA3AF; line-height: 1.7; max-width: 480px; margin: 0 auto 36px; }
  .cta-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
  .btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--orange); color: #fff; font-family: var(--font-body); font-size: 14px; font-weight: 500; border-radius: var(--radius-btn); transition: opacity 0.2s ease; }
  .btn-primary:hover { opacity: 0.9; }
  .btn-outline-white { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: transparent; color: #fff; font-family: var(--font-body); font-size: 14px; font-weight: 500; border: 1px solid rgba(255,255,255,0.35); border-radius: var(--radius-btn); transition: all 0.2s ease; }
  .btn-outline-white:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.6); }

  /* Responsive */
  @media (max-width: 1024px) {
    .brand-grid { grid-template-columns: repeat(4, 1fr); }
  }
  @media (max-width: 900px) {
    .product-grid { grid-template-columns: repeat(2, 1fr); }
    .brand-grid { grid-template-columns: repeat(3, 1fr); }
  }
  @media (max-width: 640px) {
    .section-pad { padding: 60px 0; }
    .product-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
    .brand-grid { grid-template-columns: repeat(2, 1fr); }
    .cta-actions { flex-direction: column; align-items: center; }
    .btn-primary, .btn-outline-white { width: 100%; max-width: 280px; justify-content: center; }
  }
  @media (max-width: 400px) {
    .product-grid { grid-template-columns: 1fr; }
  }
`;