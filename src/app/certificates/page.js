"use client";

import { useEffect, useState } from "react";

export default function CertificatesPage() {
  const [certificates, setCertificates] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null); // <-- New state to catch the error

  useEffect(() => {
    // Set up a timeout so it doesn't hang forever
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds

    fetch("/api/certificates", { signal: controller.signal })
      .then((res) => {
        clearTimeout(timeoutId);
        if (!res.ok) throw new Error(`Server returned status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setCertificates(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        // Translate abort error to a readable timeout message
        const message = err.name === 'AbortError' ? 'Request timed out after 10 seconds.' : err.message;
        setErrorMsg(message);
        setIsLoading(false);
      });

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelectedImage(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <main>
        <section className="page-banner">
          <div className="container">
            <h1>Certificates</h1>
          </div>
        </section>

        <section className="gallery-section">
          <div className="container">
            {isLoading ? (
              <div style={{ textAlign: "center", padding: "40px", color: "var(--text-mid)" }}>
                Loading certificates...
              </div>
            ) : errorMsg ? (
              <div style={{ textAlign: "center", padding: "40px", color: "red", fontWeight: "bold" }}>
                Error: {errorMsg}
              </div>
            ) : certificates.length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px", color: "var(--text-mid)" }}>
                No certificates found.
              </div>
            ) : (
              <div className="gallery-grid">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="gallery-item"
                    onClick={() => setSelectedImage(cert.src)}
                  >
                    <img
                      src={cert.src}
                      alt={`Certificate ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="close-btn"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Certificate"
            />
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: styles }} />
    </>
  );
}

const styles = `
.page-banner {
  background-color: var(--navy);
  background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px);
  background-size: 28px 28px;
  padding: 80px 0;
  text-align: center;
}

.page-banner h1 {
  color: #fff;
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 700;
}

.gallery-section {
  padding: 80px 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.gallery-item {
  cursor: pointer;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: #fff;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
}

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.92);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 20px;
}

.lightbox-content {
  max-width: 95vw;
  max-height: 90vh;
  overflow: auto;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 90vh;
  display: block;
  border-radius: 12px;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.close-btn:hover {
  background: rgba(255,255,255,0.25);
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .page-banner {
    padding: 60px 0;
  }

  .gallery-section {
    padding: 60px 0;
  }
}
`;