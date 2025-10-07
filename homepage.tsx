import React from "react";

/**
 * HomePage – Kurumsal landing (mock içerikler)
 * - Aynı görsel dil: Inter, koyu arka plan, kompakt nav.
 * - Bölümler: Hero, Özellikler, Markalar vitrini, Hakkımızda, CTA, Footer.
 * - Linkler: index.html (Markalar), products.html (Ürünler), contact.html (İletişim)
 * - Not: Stil için homepage.css dosyasını import et.
 */

export default function HomePage() {
  React.useEffect(() => {
    // Küçük bir "aktif sekme" emniyeti (statik linklerde de çalışır)
    const here = (typeof location !== "undefined" ? location.pathname.split("/").pop() : "") || "homepage.html";
    document.querySelectorAll<HTMLAnchorElement>(".desknav__tab[href]").forEach((t) => {
      const isHere = (t.getAttribute("href") || "") === here || (here === "" && t.getAttribute("href") === "homepage.html");
      t.setAttribute("aria-current", isHere ? "page" : "false");
    });
  }, []);

  return (
    <div>
      {/* ==== DESKTOP NAV ==== */}
      <header className="desknav" role="banner" style={{ ["--accent" as any]: "#54577D" }}>
        <div className="desknav__wrap">
          <div className="desknav__inner">
            <div className="desknav__brand">
              <img
                className="desknav__logo"
                src="assets/logo-150.png"
                alt="VELİOĞLU GLOBAL DIŞ TİCARET LİMİTED ŞİRKETİ Logo"
                onError={(e) => ((e.currentTarget.style.display = "none"))}
              />
              <span className="desknav__title">VELİOĞLU GLOBAL DIŞ TİCARET LİMİTED ŞİRKETİ DAĞITIM</span>
            </div>

            <nav className="desknav__tabs" aria-label="Ana gezinme">
              <a className="desknav__tab" href="homepage.html">
                <span className="desknav__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M3 12L12 3l9 9M5 10v10h14V10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </span>
                <span>Ana Sayfa</span>
              </a>
              <a className="desknav__tab" href="index.html">
                <span className="desknav__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1m-9 4h14m-15 0a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </span>
                <span>Markalar</span>
              </a>
              <a className="desknav__tab" href="products.html">
                <span className="desknav__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M4 7h7v7H4V7Zm9 0h7v7h-7V7ZM8 17h8v3H8v-3Z" fill="currentColor"/></svg>
                </span>
                <span>Ürünler</span>
              </a>
              <a className="desknav__tab" href="contact.html">
                <span className="desknav__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M3 10h18M5 10v8m4-8v8m6-8v8m4-8v8M3 18h18M12 4 3 8h18L12 4Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </span>
                <span>İletişim</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* ==== SAYFA ==== */}
      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__text">
              <h1 className="hero__title">Türkiye genelinde güçlü dağıtım, güvenilir tedarik</h1>
              <p className="hero__desc">
                VELİOĞLU GLOBAL; hızlı lojistik, geniş ürün yelpazesi ve veri destekli stok yönetimiyle bayilerine rekabet avantajı sağlar.
                Mock içeriktir: operasyonel mükemmellik, şeffaf raporlama ve sürdürülebilir büyüme.
              </p>
              <div className="hero__cta">
                <a href="products.html" className="btn btn--primary">Ürünleri Keşfet</a>
                <a href="index.html" className="btn">Markalar</a>
              </div>
            </div>
            <div className="hero__media" aria-hidden="true">
              <div className="hero__glow" />
              <img src="assets/hero-mock.png" alt="" onError={(e)=>((e.currentTarget.style.display="none"))}/>
            </div>
          </div>
        </section>

        {/* ÖZELLİKLER */}
        <section className="section">
          <div className="container">
            <h2 className="section__title">Neden Velioğlu?</h2>
            <div className="features">
              {[
                { t: "Ulusal Dağıtım", d: "Türkiye geneli dağıtım ağı; zamanında teslim, minimum iade oranı." },
                { t: "Veri Odaklı Operasyon", d: "Talep tahmini ve stok optimizasyonu ile kayıp kaçak minimize." },
                { t: "Geniş Ürün Yelpazesi", d: "Çay, kahve, atıştırmalık ve sıcak içecek ekipmanları." },
                { t: "Şeffaf Raporlama", d: "Satış/dönemsel performans panelleri; mock veriyle gösterim." },
              ].map((f, i) => (
                <div className="feature" key={i}>
                  <div className="feature__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  </div>
                  <div className="feature__body">
                    <h3>{f.t}</h3>
                    <p>{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MARKA VİTRİNİ (MOCK) */}
        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Öne Çıkan Markalar</h2>
              <a className="link" href="index.html">Tümü</a>
            </div>
            <div className="brands">
              {["Doğuş", "Doğadan", "Nescafé", "Eti", "Nestlé", "Lipton"].map((b, i) => (
                <a className="brand" href={`products.html#brand=${encodeURIComponent(b)}`} key={i}>
                  <img
                    src={`assets/brands/${b.toLowerCase().replace(/[^a-z0-9]/g,'')}.png`}
                    alt={`${b} logo`}
                    onError={(e)=>((e.currentTarget as HTMLImageElement).style.display="none")}
                  />
                  <div className="brand__text">
                    <h4>{b}</h4>
                    <small>12 ürün</small>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* HAKKIMIZDA */}
        <section className="section">
          <div className="container about">
            <div className="about__col">
              <h2 className="section__title">Hakkımızda</h2>
              <p className="about__p">
                2010’dan bu yana hızlı tüketim ürünleri kategorisinde sahadan beslenen karar süreçleri,
                güçlü tedarik ilişkileri ve yenilikçi kanal stratejileriyle sürdürülebilir büyüme odağında çalışıyoruz.
                Bu sayfa mock veridir; görseller ve metinler örnek amaçlıdır.
              </p>
              <ul className="bullets">
                <li>+1200 aktif bayi, 7 bölge kapsama</li>
                <li>%97 zamanında teslim, %1.2 iade oranı</li>
                <li>Power BI / Looker mock panolar</li>
              </ul>
            </div>
            <div className="about__media" aria-hidden="true">
              <div className="card kpi">
                <div className="kpi__row"><span>On-Time Delivery</span><b>97%</b></div>
                <div className="kpi__row"><span>SKU Coverage</span><b>450+</b></div>
                <div className="kpi__row"><span>Return Rate</span><b>1.2%</b></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section cta">
          <div className="container cta__inner">
            <div>
              <h2 className="cta__title">Ürün portföyünüze değer katalım</h2>
              <p className="cta__desc">Demo toplantısı planlayın; sahaya uygun çözümleri birlikte tasarlayalım.</p>
            </div>
            <div className="cta__actions">
              <a href="contact.html" className="btn btn--primary">İletişime Geç</a>
              <a href="products.html" className="btn">Portföy</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <small>© <span id="y">{new Date().getFullYear()}</span> VELİOĞLU GLOBAL DIŞ TİCARET LİMİTED ŞİRKETİ • GitHub Pages</small>
      </footer>
    </div>
  );
}
