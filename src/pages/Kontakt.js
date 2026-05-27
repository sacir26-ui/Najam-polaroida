import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";

function Kontakt() {
  const form = useRef();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const odabraniPaket = params.get("paket");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fscb8vc",
        "template_e04cgkl",
        form.current,
        "XF8i105mE4q-gwJCc"
      )
      .then(
          () => {
            const successBox = document.createElement("div");

            successBox.className = "form-success-message";
            successBox.innerText = "Upit je uspješno poslan!";

            form.current.prepend(successBox);

            setTimeout(() => {
              successBox.remove();
            }, 4000);

            form.current.reset();
          },
          () => {
            const errorBox = document.createElement("div");

            errorBox.className = "form-error-message";
            errorBox.innerText = "Došlo je do greške prilikom slanja.";

            form.current.prepend(errorBox);

            setTimeout(() => {
              errorBox.remove();
            }, 4000);
          }
        );
  };

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

                <a
                href="mailto:Valentinadivkovic7@gmail.com"
                className="contact-info-item"
              >
                <i className="fa-solid fa-envelope"></i>

                <div>
                  <span>Email</span>
                  <p>Valentinadivkovic7@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+385915352103"
                className="contact-info-item"
              >
                <i className="fa-solid fa-phone"></i>

                <div>
                  <span>Telefon</span>
                  <p>+385 91 535 2103</p>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=Zagreb,Hrvatska"
                target="_blank"
                rel="noreferrer"
                className="contact-info-item"
              >
                <i className="fa-solid fa-location-dot"></i>

                <div>
                  <span>Lokacija</span>
                  <p>Zagreb, Hrvatska</p>
                </div>
</a>

                <div className="contact-socials">
                  <a
                    href="https://www.facebook.com/share/18cGg7zk2N/"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>

                  <a
                    href="https://www.instagram.com/najam_polaroida?igsh=MTU0ZzAwcmJqd3Fubg=="
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>

                  <a
                    href="https://www.tiktok.com/@najam.polaroida?_r=1&_t=ZN-96Ur9uTTxEU"
                    aria-label="TikTok"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <input
                  type="hidden"
                  name="package"
                  value={odabraniPaket || ""}
                />

                {odabraniPaket && (
                  <div className="selected-package-box">
                    <span>Odabrani paket</span>
                    <strong>{odabraniPaket}</strong>
                  </div>
                )}

                <div className="row g-3">
                  <div className="col-md-6">
                    <label>Ime i prezime</label>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Unesite ime i prezime"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Email adresa</label>
                    <input
                      type="email"
                      name="from_email"
                      placeholder="Unesite email adresu"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Telefon</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Unesite broj telefona"
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Vrsta događaja</label>
                    <input
                      type="text"
                      name="event_type"
                      placeholder="Vjenčanje, rođendan, event..."
                    />
                  </div>

                  <div className="col-12">
                    <label>Poruka</label>
                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Napišite za koji paket ste zainteresirani, datum događaja i dodatne želje..."
                      required
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