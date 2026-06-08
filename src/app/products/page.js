'use client';
import { useState, useRef } from 'react';

export default function Products() {
  return (
    <>
      <main>
        <PageBanner
          title="Products We Supply"
          subtitle="We are authorized stockists for India's leading industrial brands. Click any brand to explore their product range."
        />
        <ProductGrid />
        <BrandStockist />
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
   MANUFACTURED PRODUCTS LIST
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const products = [
  {
    name: 'Grinding and Cutting Wheels',
    desc: 'High-performance abrasive wheels designed for fast, clean cutting and grinding of metal and masonry.',
    img: 'https://www.renwa-abrasive.com/uploads/21858/info/p202408261522436ab4e.jpg',
  },
  {
    name: 'Flap Discs and Flap Wheels',
    desc: 'Versatile abrasive discs engineered for aggressive material removal, blending, and smooth surface finishing.',
    img: 'https://www.3mindia.in/wps/wcm/connect/922152fe-d55a-4ce3-95cf-da9988027aeb/3M_CubitronTM_II_Faecherschleifscheibe_967a-410x205px.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-922152fe-d55a-4ce3-95cf-da9988027aeb-nZ363JB',
  },
  {
    name: 'Abrasive Belts & Packing Belts',
    desc: 'Durable sanding belts for continuous material prep and high-tensile packing belts for heavy-duty industrial strapping.',
    img: 'https://www.combatabrasives.com/cdn/shop/files/Surface-Conditioning-Belts-3.jpg?v=1745968442&width=2048',
  },
  {
    name: 'Perforated Grills and Filter Assembly',
    desc: 'Precision-engineered perforated metal grills and assemblies designed for optimal air filtration and fluid separation.',
    img: 'https://rectorseal.com/media/catalog/product/cache/1fcb13513d89f044c960feca818b0090/1/2/1280_MtT4sEsx7cG342zA.jpg-1646784881',
  },
  {
    name: 'Industrial Wipes',
    desc: 'Heavy-duty, highly absorbent cleaning wipes formulated to quickly remove tough grease, oil, and workshop grime.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLKl2G-DijSliEbLoxwizX2Dk0SnuFL3NWQ&s',
  },
  {
    name: 'Industrial Toolings',
    desc: 'Custom precision dies, fixtures, and cutting tools manufactured for consistent mass-production machining.',
    img: 'https://inchtools.com/wp-content/uploads/2023/04/industrial-tools.webp',
  },
  {
    name: 'Safety Equipment',
    desc: 'Comprehensive personal protective equipment (PPE) to ensure worker safety in hazardous industrial environments.',
    img: 'https://cpimg.tistatic.com/02479521/b/4/Industrial-Safety-Equipement.jpg',
  },
  {
    name: 'Material Handling Equipment',
    desc: 'Robust equipment including pallet jacks, hoists, and trolleys designed to safely maneuver heavy industrial loads.',
    img: 'https://5.imimg.com/data5/SELLER/Default/2020/11/NJ/VV/QV/21609698/material-handling-equipment-500x500-1.jpg',
  },
  {
    name: 'Castor Wheels',
    desc: 'Heavy-duty swivel and rigid caster wheels engineered for smooth workplace mobility and high load-bearing capacity.',
    img: 'https://m.media-amazon.com/images/I/61Jb-ZoO-RL.jpg',
  },
  {
    name: 'Hydraulic Hoses and Fittings',
    desc: 'High-pressure hydraulic hoses and leak-proof steel fittings built for reliable, heavy-duty fluid power transmission.',
    img: 'https://5.imimg.com/data5/GI/YC/MY-32061269/hydraulic-hoses-and-fittings.jpg',
  },
  {
    name: 'SS Fittings, Flanges and Fasteners',
    desc: 'Corrosion-resistant stainless steel fasteners, flanges, and piping connectors for harsh industrial and chemical environments.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTQL07mI8B88T5bIj-hC4N57Jte18k0-4QQ&s',
  },
  {
    name: 'Modular Assemblies and Conveyor Systems',
    desc: 'Scalable conveyor belts and modular assembly lines to streamline automated manufacturing and logistics operations.',
    img: 'https://www.designedconveyor.com/wp-content/uploads/2019/11/factory-1137993_640.jpg',
  },
  {
    name: 'Stationary Consumables',
    desc: 'Essential industrial office supplies, inventory tags, and documentation materials required for everyday plant operations.',
    img: 'https://5.imimg.com/data5/SL/MY/JO/SELLER-19492446/office-stationery-office-consumable-and-office-supply-500x500.jpg',
  },
  {
    name: 'Power Press Parts',
    desc: 'Durable replacement components, clutches, and die cushions specifically manufactured for heavy mechanical power presses.',
    img: 'https://3.imimg.com/data3/VJ/YB/MY-3404179/power-press-components-500x500.jpg',
  },
];

function ProductGrid() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <div className="label-row">
          <span className="accent-dash" />
          <span className="label-text">What We Make</span>
        </div>
        <h2 className="section-heading">Products We Manufacture</h2>
        <div className="product-grid">
          {products.map((p) => (
            <div key={p.name} className="product-card">
              <div className="product-img-wrap">
                <img src={p.img} alt={p.name} className="product-img" loading="lazy" />
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

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   AUTHORIZED STOCKIST BRANDS + PRODUCTS + BROCHURES
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const brands = [
  {
    name: 'Palymak',
    img: './brandlogos/Palymak.png',
    products: [
      { name: 'Abrasive Flap Disc',     brochure: null },
      { name: 'Abrasive Rolls',         brochure: null },
      { name: 'Abrasive Sheets',        brochure: null },
    ],
  },
  {
    name: 'Cumi',
    img: './brandlogos/Cumi.png',
    products: [
      { name: 'Grinding Wheels',        brochure: null },
      { name: 'Cutting Wheels',         brochure: null },
      { name: 'Coated Abrasives',       brochure: null },
    ],
  },
  {
    name: '3M',
    img: './brandlogos/3M.png',
    products: [
      { name: 'Accessories',   brochure: '/brochures/assets_catalogues_3m_abrasives_3m-accessories.pdf'},
      { name: 'Air Tools',        brochure: '/brochures/assets_catalogues_3m_abrasives_3m-air-tools.pdf' },
      { name: 'Angle Grinders',            brochure: '/brochures/assets_catalogues_3m_abrasives_angle-grinders.pdf' },
      { name: 'Belt Machines',            brochure: '/brochures/assets_catalogues_3m_abrasives_belt-machines.pdf' },
      { name: 'Bench Motors',            brochure: '/brochures/assets_catalogues_3m_abrasives_bench-motors.pdf' },
      { name: 'Die Grinders',            brochure: '/brochures/assets_catalogues_3m_abrasives_die-grinders.pdf' },
      { name: 'Fillet Weld Grinders',            brochure: '/brochures/assets_catalogues_3m_abrasives_fillet-weld-grinders.pdf' },
      { name: 'Hand Sanding',            brochure: '/brochures/assets_catalogues_3m_abrasives_hand-sanding.pdf' },
      { name: 'Paint Finishing',            brochure: '/brochures/assets_catalogues_3m_abrasives_paint-finishing.pdf' },
      { name: 'Safety Equipment',            brochure: '/brochures/assets_catalogues_3m_abrasives_safety.pdf' },
      { name: 'Sanders',            brochure: '/brochures/assets_catalogues_3m_abrasives_sanders.pdf' },
      { name: 'Tape Adhesives',            brochure: '/brochures/assets_catalogues_3m_abrasives_tapes-adhesives.pdf' },
      { name: 'Eye Protection',            brochure: '/brochures/assets_catalogues_3m_safety_eye-protection.pdf' },
      { name: 'General Safety',            brochure: '/brochures/assets_catalogues_3m_safety_general-safety.pdf' },
      { name: 'Hearing Protection',            brochure: '/brochures/assets_catalogues_3m_safety_hearing-protection.pdf' },
      { name: 'Respiratory Protection',            brochure: '/brochures/assets_catalogues_3m_safety_respiratory-protection.pdf' },
    ],
  },
  {
    name: 'Bosch',
    img: './brandlogos/Bosch.png',
    products: [
      { name: 'Angle Grinder Discs',     brochure: null },
      { name: 'Cutting Discs',           brochure: null },
      { name: 'Diamond Blades',          brochure: null },
    ],
  },
  {
    name: 'STARCKE',
    img: './brandlogos/STARCKE.png',
    products: [
      { name: 'Abrasive Belts',          brochure: null },
      { name: 'Abrasive Sheets',         brochure: null },
    ],
  },
  {
    name: 'Dupont',
    img: './brandlogos/Dupont.png',
    products: [
      { name: 'Industrial Lubricants',   brochure: null },
      { name: 'Surface Cleaners',        brochure: null },
    ],
  },
  {
    name: 'NACHI',
    img: './brandlogos/nachi.png',
    products: [
      { name: 'HSS Drill Bits',          brochure: null },
      { name: 'Carbide Inserts',         brochure: null },
      { name: 'End Mills',               brochure: null },
    ],
  },
  {
    name: 'Norton',
    img: './brandlogos/Norton.png',
    products: [
      { name: 'Grinding Wheels',         brochure: null },
      { name: 'Flap Discs',              brochure: null },
      { name: 'Bend Saw Blades',         brochure: null },
    ],
  },
  {
    name: 'Abracut',
    img: './brandlogos/Abracut.png',
    products: [
      { name: 'Cutting Wheels',          brochure: null },
      { name: 'Grinding Discs',          brochure: null },
    ],
  },
  {
    name: 'Wendt',
    img: './brandlogos/Wendt.png',
    products: [
      { name: 'Diamond Grinding Wheels', brochure: null },
      { name: 'CBN Wheels',              brochure: null },
    ],
  },
  {
    name: 'Udyogi',
    img: './brandlogos/Udyogi.png',
    products: [
      { name: 'Safety Helmets',          brochure: null },
      { name: 'Safety Gloves',           brochure: null },
      { name: 'Safety Shoes',            brochure: null },
    ],
  },
  {
    name: 'Karam',
    img: './brandlogos/Karam.png',
    products: [
      { name: 'Fall Arrest Systems',     brochure: null },
      { name: 'Safety Harness',          brochure: null },
      { name: 'Hard Hats',               brochure: null },
    ],
  },
  {
    name: 'Venus',
    img: './brandlogos/Venus.png',
    products: [
      { name: 'Safety Shoes',            brochure: null },
      { name: 'PPE Kits',                brochure: null },
    ],
  },
  {
    name: 'Supo',
    img: './brandlogos/Supo.png',
    products: [
      { name: 'PU Caster Wheels',        brochure: null },
      { name: 'Nylon Caster Wheels',     brochure: null },
    ],
  },
  {
    name: 'Sumatic Caster',
    img: './brandlogos/sumatic.png',
    products: [
      { name: 'Industrial Castors',      brochure: null },
      { name: 'Trolley Wheels',          brochure: null },
    ],
  },
  {
    name: 'Addison',
    img: './brandlogos/Addison.png',
    products: [
      { name: 'HSS Drill Bits',          brochure: null },
      { name: 'Taps & Dies',             brochure: null },
    ],
  },
  {
    name: 'Totem',
    img: './brandlogos/Totem.png',
    products: [
      { name: 'Carbide Drill Bits',      brochure: null },
      { name: 'End Mills',               brochure: null },
    ],
  },
  {
    name: 'TG',
    img: './brandlogos/TG.png',
    products: [
      { name: 'Carbide Inserts',         brochure: null },
      { name: 'Milling Cutters',         brochure: null },
    ],
  },
  {
    name: 'Taegutec',
    img: './brandlogos/Taegutec.png',
    products: [
      { name: 'Turning Inserts',         brochure: null },
      { name: 'Milling Inserts',         brochure: null },
      { name: 'Boring Tools',            brochure: null },
    ],
  },
  {
    name: 'Janatics',
    img: './brandlogos/Janatics.png',
    products: [
      { name: 'Pneumatic Cylinders',     brochure: null },
      { name: 'Solenoid Valves',         brochure: null },
      { name: 'FRL Units',               brochure: null },
    ],
  },
  {
    name: 'SMC',
    img: './brandlogos/Smc.png',
    products: [
      { name: 'Pneumatic Fittings',      brochure: null },
      { name: 'Pneumatic Pipes',         brochure: null },
      { name: 'Pneumatic Valves',        brochure: null },
    ],
  },
  {
    name: 'Festo',
    img: './brandlogos/Festo.png',
    products: [
      { name: 'Pneumatic Actuators',     brochure: null },
      { name: 'Electric Drives',         brochure: null },
      { name: 'Process Valves',          brochure: null },
    ],
  },
  {
    name: 'Yuken',
    img: './brandlogos/Yuken.png',
    products: [
      { name: 'Hydraulic Valves',        brochure: null },
      { name: 'Hydraulic Pumps',         brochure: null },
      { name: 'Hydraulic Cylinders',     brochure: null },
    ],
  },
];

function BrandStockist() {
  const [activeBrand, setActiveBrand] = useState(null);
  
  // Create refs for scrolling behavior
  const gridRef = useRef(null);
  const dropdownRef = useRef(null);

  function closeDropdown() {
    setActiveBrand(null);
    // Scroll back to the brand grid slightly after closing
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  }

  function handleBrandClick(brandName) {
    if (activeBrand === brandName) {
      closeDropdown();
    } else {
      setActiveBrand(brandName);
      // Wait a moment for the dropdown element to mount in the DOM
      setTimeout(() => {
        dropdownRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }

  function openBrochure(brochure) {
    if (brochure) {
      window.open(brochure, '_blank');
    }
  }

  const activeBrandData = brands.find((b) => b.name === activeBrand);

  return (
    <section className="section-pad bg-dim">
      <div className="container">
        <div className="label-row">
          <span className="accent-dash" />
          <span className="label-text">Authorized Stockist</span>
        </div>
        <h2 className="section-heading">Official Brands We Stock</h2>
        <p className="stock-sub">
          Click any brand to explore its product range. Click a product to view its brochure.
        </p>

        {/* Brand logo grid with ref attached */}
        <div className="brand-grid" ref={gridRef}>
          {brands.map((b) => (
            <button
              key={b.name}
              className={`brand-slot${activeBrand === b.name ? ' brand-slot-active' : ''}`}
              onClick={() => handleBrandClick(b.name)}
              aria-expanded={activeBrand === b.name}
              aria-label={`View ${b.name} products`}
            >
              <img
                src={b.img}
                alt={b.name}
                className="brand-logo-img"
              />
              <span className="brand-chevron">
                {activeBrand === b.name ? '▲' : '▼'}
              </span>
            </button>
          ))}
        </div>

        {/* Dropdown panel — shown below grid when a brand is active */}
        {activeBrandData && (
          <div className="brand-dropdown" ref={dropdownRef}>
            <div className="brand-dropdown-header">
              <img
                src={activeBrandData.img}
                alt={activeBrandData.name}
                className="dropdown-brand-logo"
              />
              <div>
                <p className="dropdown-brand-name">{activeBrandData.name}</p>
                <p className="dropdown-brand-sub">
                  {activeBrandData.products.length} product{activeBrandData.products.length !== 1 ? 's' : ''} available
                </p>
              </div>
              <button
                className="dropdown-close"
                onClick={closeDropdown}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="dropdown-products">
              {activeBrandData.products.map((p) => (
                <div
                  key={p.name}
                  className={`dropdown-product-row${p.brochure ? ' has-brochure' : ''}`}
                  onClick={() => openBrochure(p.brochure)}
                  role={p.brochure ? 'button' : 'listitem'}
                  tabIndex={p.brochure ? 0 : -1}
                  onKeyDown={(e) => e.key === 'Enter' && openBrochure(p.brochure)}
                >
                  <div className="product-row-left">
                    <span className="product-row-dot" />
                    <span className="product-row-name">{p.name}</span>
                  </div>
                  {p.brochure ? (
                    <span className="product-row-brochure">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                      </svg>
                      View Brochure
                    </span>
                  ) : (
                    <span className="product-row-soon">Coming Soon</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
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
        <p className="cta-sub">Send us your requirement and we will get back within one business day.</p>
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

  .label-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
  .accent-dash { display: block; width: 20px; height: 2px; background: var(--orange); flex-shrink: 0; }
  .label-text { font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--orange); }
  .section-heading { font-family: var(--font-heading); font-size: clamp(24px,3vw,34px); font-weight: 700; color: var(--text-dark); margin-bottom: 10px; }
  .stock-sub { font-size: 15px; color: var(--text-mid); margin-bottom: 40px; }

  /* Product Grid */
  .product-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .product-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-bottom-color 0.2s ease;
    border-bottom: 2px solid transparent;
  }
  .product-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(0,0,0,0.08); border-bottom-color: var(--orange); }
  .product-img-wrap { width: 100%; aspect-ratio: 16/10; overflow: hidden; background: var(--surface-dim); }
  .product-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
  .product-card:hover .product-img { transform: scale(1.04); }
  .product-info { padding: 20px 22px 24px; }
  .product-name { font-family: var(--font-heading); font-size: 16px; font-weight: 600; color: var(--text-dark); margin-bottom: 8px; }
  .product-desc { font-size: 13px; line-height: 1.6; color: var(--text-mid); }

  /* Brand grid */
  .brand-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; scroll-margin-top: 100px; }

  .brand-slot {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 14px;
    cursor: pointer;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease, background 0.2s ease;
    position: relative;
  }
  .brand-slot:hover {
    border-color: var(--orange);
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    transform: translateY(-2px);
  }
  .brand-slot-active {
    border-color: var(--orange);
    background: #fff7f0;
    box-shadow: 0 0 0 2px var(--orange);
  }
  .brand-logo-img {
    max-width: 100%;
    max-height: 48px;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: filter 0.2s ease, opacity 0.2s ease;
  }
  .brand-slot:hover .brand-logo-img,
  .brand-slot-active .brand-logo-img {
    filter: grayscale(0%);
    opacity: 1;
  }
  .brand-chevron {
    font-size: 8px;
    color: var(--text-faint);
    transition: color 0.2s ease;
    line-height: 1;
  }
  .brand-slot-active .brand-chevron { color: var(--orange); }

  /* Dropdown panel */
  .brand-dropdown {
    margin-top: 20px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-left: 3px solid var(--orange);
    border-radius: var(--radius-card);
    overflow: hidden;
    animation: dropIn 0.25s ease;
    scroll-margin-top: 100px; /* Offset to prevent header overlap */
  }
  @keyframes dropIn {
    from { opacity: 0; transform: translateY(-10px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .brand-dropdown-header {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 24px;
    border-bottom: 1px solid var(--border);
    background: var(--surface-dim);
  }
  .dropdown-brand-logo {
    max-height: 36px;
    max-width: 100px;
    object-fit: contain;
  }
  .dropdown-brand-name {
    font-family: var(--font-heading);
    font-size: 17px;
    font-weight: 700;
    color: var(--text-dark);
  }
  .dropdown-brand-sub {
    font-size: 12px;
    color: var(--text-faint);
    margin-top: 2px;
  }
  .dropdown-close {
    margin-left: auto;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--border);
    border: none;
    font-size: 14px;
    color: var(--text-mid);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease, color 0.2s ease;
    flex-shrink: 0;
  }
  .dropdown-close:hover { background: var(--orange); color: #fff; }

  .dropdown-products {
    display: flex;
    flex-direction: column;
  }
  .dropdown-product-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 24px;
    border-bottom: 1px solid var(--border);
    transition: background 0.15s ease;
  }
  .dropdown-product-row:last-child { border-bottom: none; }
  .dropdown-product-row.has-brochure { cursor: pointer; }
  .dropdown-product-row.has-brochure:hover { background: #fff7f0; }
  .dropdown-product-row.has-brochure:hover .product-row-name { color: var(--orange); }

  .product-row-left { display: flex; align-items: center; gap: 12px; }
  .product-row-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); flex-shrink: 0; }
  .product-row-name { font-size: 14px; font-weight: 500; color: var(--text-dark); transition: color 0.15s ease; }

  .product-row-brochure {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 500;
    color: var(--orange);
    padding: 4px 10px;
    border: 1px solid var(--orange);
    border-radius: 99px;
    transition: background 0.15s ease, color 0.15s ease;
  }
  .dropdown-product-row.has-brochure:hover .product-row-brochure {
    background: var(--orange);
    color: #fff;
  }
  .product-row-soon {
    font-size: 11px;
    color: var(--text-faint);
    padding: 4px 10px;
    border: 1px solid var(--border);
    border-radius: 99px;
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
  @media (max-width: 1024px) { .brand-grid { grid-template-columns: repeat(4, 1fr); } }
  @media (max-width: 900px)  { .product-grid { grid-template-columns: repeat(2, 1fr); } .brand-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 640px) {
    .section-pad { padding: 60px 0; }
    .product-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
    .brand-grid { grid-template-columns: repeat(2, 1fr); }
    .brand-dropdown-header { flex-wrap: wrap; }
    .cta-actions { flex-direction: column; align-items: center; }
    .btn-primary, .btn-outline-white { width: 100%; max-width: 280px; justify-content: center; }
  }
  @media (max-width: 400px) { .product-grid { grid-template-columns: 1fr; } }
`;