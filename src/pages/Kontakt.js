import React from "react";

function Kontakt() {
  return (
    <main className="contact-page page-fade">
      <section
        className="contact-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(35,20,55,0.78), rgba(97,58,120,0.62)), url(${process.env.PUBLIC_URL}/np-materijali/hero-slika.png)`,
        }}
      >
        <div className="container contact-hero-content">
          <span className="section-kicker">Kontakt</span>
          <h1>Javite nam se</h1>
          <p>
            Imate pitanje, želite rezervirati paket ili kreirati posebnu ponudu
            za svoj događaj? Tu smo za vas.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="section-heading text-center">
            <span className="section-kicker">Kontaktirajte nas</span>
            <h2>Dogovorimo vašu instant priču</h2>
            <p>
              Pošaljite nam upit i javit ćemo vam se s prijedlogom paketa koji
              najbolje odgovara vašem događaju.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-5">
              <div className="contact-info-box">
                <h3>Informacije</h3>
                <p>
                  Za rezervacije, upite o paketima, donacijama ili suradnjama,
                  slobodno nam se javite.
                </p>

                <div className="contact-info-item">
                  <i className="fa-solid fa-envelope"></i>
                  <div>
                    <span>Email</span>
                    <a href="mailto:Valentinadivkovic7@gmail.com">Valentinadivkovic7@gmail.com</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <i className="fa-solid fa-phone"></i>
                  <div>
                    <span>Telefon</span>
                    <a href="tel:+385915352103">+385 91 535 2103</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <i className="fa-solid fa-location-dot"></i>
                  <div>
                    <span>Lokacija</span>
                    <p>Zagreb, Hrvatska</p>
                  </div>
                </div>

                <div className="contact-socials">
                  <a href="https://www.facebook.com/share/18cGg7zk2N/" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/najam_polaroida?igsh=MTU0ZzAwcmJqd3Fubg==" aria-label="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.tiktok.com/@najam.polaroida?_r=1&_t=ZN-96Ur9uTTxEU" aria-label="TikTok">
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <form className="contact-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label>Ime i prezime</label>
                    <input type="text" placeholder="Unesite ime i prezime" />
                  </div>

                  <div className="col-md-6">
                    <label>Email adresa</label>
                    <input type="email" placeholder="Unesite email adresu" />
                  </div>

                  <div className="col-md-6">
                    <label>Telefon</label>
                    <input type="text" placeholder="Unesite broj telefona" />
                  </div>

                  <div className="col-md-6">
                    <label>Vrsta događaja</label>
                    <input type="text" placeholder="Vjenčanje, rođendan, event..." />
                  </div>

                  <div className="col-12">
                    <label>Poruka</label>
                    <textarea
                      rows="6"
                      placeholder="Napišite za koji paket ste zainteresirani, datum događaja i dodatne želje..."
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="contact-submit-btn">
                      Pošalji upit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Kontakt;