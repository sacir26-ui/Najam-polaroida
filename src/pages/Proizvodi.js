import React from "react";

function Proizvodi() {
  const proizvodi = [
    {
      title: "Najam Instax Wide 400 kamere",
      format: "108 × 86 mm",
      text: "Pouzdana instant kamera širokog formata, idealna za vjenčanja, rođendane, evente i sve trenutke koje želite odmah pretvoriti u uspomene.",
      icon: "fa-camera-retro",
    },
    {
      title: "Najam Instax LiPlay kamere",
      format: "86 × 54 mm",
      text: "Kombinira digitalni i instant fotoaparat te omogućuje pregled, odabir i ispis omiljenih trenutaka.",
      icon: "fa-camera",
    },
    {
      title: "Najam Instax Wide printera",
      format: "108 × 86 mm",
      text: "Printer za ispis širokih fotografija direktno s mobitela. Odličan izbor za foto-kutke i događaje.",
      icon: "fa-print",
    },
    {
      title: "Albumi za instant fotografije",
      format: "Wide i Mini format",
      text: "Elegantni albumi za čuvanje fotografija od oštećenja, idealni za uspomene, poklone i posebne događaje.",
      icon: "fa-book-open",
    },
    {
      title: "Printanje fotografija",
      format: "Wide i Mini format",
      text: "Odaberite najbolje trenutke s mobitela ili računala i pretvorite ih u opipljive uspomene.",
      icon: "fa-images",
    },
    {
      title: "Dodatna oprema",
      format: "Filmovi, stalci, remeni i dodaci",
      text: "Oprema koja olakšava korištenje kamera, štiti fotografije i pomaže u stvaranju personaliziranih albuma.",
      icon: "fa-box-open",
    },
  ];

  const oprema = [
    "Instant filmovi",
    "Tripod stalak",
    "Sličice za albume",
    "Flomasteri za albume",
    "Remen za nošenje instant kamera",
    "Punjači",
  ];

  return (
    <main className="products-page">
      <section
        className="products-hero"
        style={{
            backgroundImage: `linear-gradient(135deg, rgba(35, 20, 55, 0.78), rgba(97, 58, 120, 0.62)), url(${process.env.PUBLIC_URL}/np-materijali/proizvodi-hero.jpg)`,
        }}
>
        <div className="products-hero-overlay"></div>

        <div className="container products-hero-content">
          <span className="section-kicker">Najam instant opreme</span>
          <h1>
           <span> Proizvodi   i usluge </span>
          </h1>
          <p>
            Naša ponuda obuhvaća najam modernih instant kamera, printera,
            albuma i dodatne opreme koja vaše uspomene pretvara u trajne,
            opipljive trenutke.
          </p>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="section-heading text-center">
            <span className="section-kicker">Naša ponuda</span>
            <h2>Odaberite uređaj ili uslugu za svoj događaj</h2>
            <p>
              Svaki najam istovremeno podržava humanitarni rad Udruge Lice
              Sreće.
            </p>
          </div>

          <div className="row g-4">
            {proizvodi.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="product-card">
                  <div className="product-icon">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>

                  <h3>{item.title}</h3>
                  <span>{item.format}</span>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="equipment-section">
        <div className="container">
          <div className="equipment-box">
            <div>
              <span className="section-kicker">Dodatna oprema</span>
              <h2>Sve što vam treba za potpuni doživljaj</h2>
              <p>
                U ponudi imamo dodatke koji olakšavaju korištenje instant
                kamera i printera, štite vaše fotografije i omogućuju izradu
                jedinstvenih albuma.
              </p>
            </div>

            <div className="equipment-list">
              {oprema.map((item, index) => (
                <div className="equipment-item" key={index}>
                  <i className="fa-solid fa-check"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="products-cta">
        <div className="container">
          <h2>Želite rezervirati kameru ili printer?</h2>
          <p>
            Javite nam se i zajedno ćemo odabrati najbolju opciju za vaš
            događaj.
          </p>

          <div className="products-cta-buttons">
            <a href="/kontakt" className="btn-primary-custom">
              Kontaktirajte nas
            </a>
            <a href="/paketi" className="btn-outline-custom">
              Pogledaj pakete
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Proizvodi;