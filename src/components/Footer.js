import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">

        <div className="footer-top footer-grid">

          <div>
            <div className="footer-brand">
              <img
                src={process.env.PUBLIC_URL + "/np-materijali/logo.png"}
                alt="Najam Polaroida"
                className="footer-logo"
              />

              <p className="footer-text">
                Najam instant kamera s humanitarnom pričom.
                Svaki najam pomaže obiteljima u potrebi i
                pretvara uspomene u konkretna dobra djela.
              </p>
              <div className="footer-socials">

            <a
              href="https://www.facebook.com/share/18cGg7zk2N/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a
              href="https://www.instagram.com/najam_polaroida?igsh=MTU0ZzAwcmJqd3Fubg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://www.tiktok.com/@najam.polaroida?_r=1&_t=ZN-96Ur9uTTxEU "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <i className="fa-brands fa-tiktok"></i>
            </a>

          </div>
            </div>
          </div>

          <div>
            <h5 className="footer-title">Navigacija</h5>

            <ul className="footer-links">
              <li><a href="/">Početna</a></li>
              <li><a href="/o-nama">O nama</a></li>
              <li><a href="/proizvodi">Proizvodi</a></li>
              <li><a href="/paketi">Paketi</a></li>
              <li><a href="/donacije">Donacije</a></li>
              <li><a href="/kontakt">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-title-spacer"></div>

            <div className="footer-contact-card">
              <p className="footer-person">
                Martina Posarić
              </p>

              <p className="footer-role">
                Predsjednica Udruge Lice sreće
              </p>

              <a
                href="tel:+385977269583"
                className="footer-contact-item"
              >
                <i className="fa-solid fa-phone"></i>
                <span>097 726 9583</span>
              </a>

              <a
                href="mailto:udrugalicesrece@gmail.com"
                className="footer-contact-item"
              >
                <i className="fa-solid fa-envelope"></i>

                <span>
                  udrugalicesrece@gmail.com
                </span>
              </a>
            </div>
          </div>

          <div>
            <div className="footer-title-spacer"></div>

            <div className="footer-contact-card">
              <p className="footer-person">
                Valentina Divković
              </p>

              <p className="footer-role">
                Zamjenica predsjednice Udruge
              </p>

              <a
                href="tel:+385917287271"
                className="footer-contact-item"
              >
                <i className="fa-solid fa-phone"></i>
                <span>091 728 7271</span>
              </a>

              <a
                href="mailto:Valentinadivkovic7@gmail.com"
                className="footer-contact-item"
              >
                <i className="fa-solid fa-envelope"></i>

                <span>
                  Valentinadivkovic7@gmail.com
                </span>
              </a>
            </div>
          </div>

          <div>
            <h5 className="footer-title">
               Podrška i upiti
            </h5>

            <div className="footer-contact-card">
              <p className="footer-person">
                Vedrana Divković
              </p>

              <p className="footer-role">
                Voditelj projekta Najam Polaroida
              </p>

              <a
                href="tel:+385915352103"
                className="footer-contact-item"
              >
                <i className="fa-solid fa-phone"></i>
                <span>091 535 2103</span>
              </a>

              <a
                href="mailto:Valentinadivkovic7@gmail.com"
                className="footer-contact-item"
              >
                <i className="fa-solid fa-envelope"></i>

                <span>
                  Valentinadivkovic7@gmail.com
                </span>
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Najam Polaroida · Udruga Lice Sreće.
            Sva prava pridržana.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;