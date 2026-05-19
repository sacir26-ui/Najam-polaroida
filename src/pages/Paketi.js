import { Link } from "react-router-dom";
import React from "react";

function Paketi() {
  const paketi = [
    {
      name: "Mini",
      photos: "20 fotografija",
      desc: "Savršen za manje proslave, djeliće trenutaka i kratka druženja.",
    },
    {
      name: "Start",
      photos: "30 fotografija",
      desc: "Odličan izbor za manje evente ili kao nadopuna drugim paketima.",
    },
    {
      name: "Basic",
      photos: "40 fotografija",
      desc: "Idealno za rođendane i manje obiteljske događaje.",
    },
    {
      name: "Standard",
      photos: "50 fotografija",
      desc: "Najčešći izbor za manje svadbe, krstitke i manje korporativne evente.",
    },
    {
      name: "Plus",
      photos: "100 fotografija",
      desc: "Super za veća slavlja, tematske evente i foto-kutke.",
      featured: true,
    },
    {
      name: "Premium",
      photos: "150 fotografija",
      desc: "Odlično za proslave s puno gostiju ili cjelodnevne događaje.",
    },
    {
      name: "Pro",
      photos: "200 fotografija",
      desc: "Za veće svadbe i profesionalne evente gdje želite puno uspomena.",
    },
    {
      name: "Ultra",
      photos: "300 fotografija + 2 instant kamere",
      desc: "Savršeno za velike evente, korporativna događanja i svadbe.",
    },
    {
      name: "Ultra Max",
      photos: "500 fotografija + 2 instant kamere",
      desc: "Najveći paket u ponudi za velika događanja i cjelodnevne proslave.",
    },
  ];

  return (
    <main className="packages-page page-fade">
      <section
        className="packages-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(35,20,55,0.78), rgba(97,58,120,0.62)), url(${process.env.PUBLIC_URL}/np-materijali/paketi-hero.jpg)`,
        }}
      >
        <div className="container packages-hero-content">
          <span className="section-kicker">Paketi za svaki događaj</span>

          <h1>
            Odaberi paket za svoju proslavu
            
          </h1>

          <p>
            Pripremili smo pakete koji odgovaraju različitim događajima —
            od manjih okupljanja do velikih svečanosti i vjenčanja.
          </p>
        </div>
      </section>

      <section className="packages-section">
        <div className="container">
          <div className="section-heading text-center">
            <span className="section-kicker">Naša ponuda</span>

            <h2>Paketi prilagođeni svakom događaju</h2>

            <p>
              Svaki paket uključuje korištenje instant kamera i određeni
              broj fotografija, uz mogućnost prilagodbe prema vašim željama.
            </p>
          </div>

          <div className="row g-4">
            {paketi.map((paket, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div
                  className={`package-card ${
                    paket.featured ? "featured-package" : ""
                  }`}
                >
                  {paket.featured && (
                    <div className="featured-badge">
                      Najpopularniji
                    </div>
                  )}

                  <h3>{paket.name}</h3>

                  <div className="package-photos">
                    {paket.photos}
                  </div>

                  <p>{paket.desc}</p>

                  <Link to="/kontakt" className="package-btn">
                    Zatraži ponudu
                  </Link >
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="custom-package-section">
        <div className="container">
          <div className="custom-package-box">
            <span className="section-kicker">
              Prilagođeni paket
            </span>

            <h2>
              Želite potpuno individualnu kombinaciju?
            </h2>

            <p>
              Ako želite drugačiji broj fotografija, dodatnu kameru,
              printer ili posebnu kombinaciju usluga — javite nam se i
              kreirat ćemo paket posebno za vaš događaj.
            </p>

            <Link to="/kontakt" className="btn-primary-custom">
              Izradi svoj paket
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Paketi;