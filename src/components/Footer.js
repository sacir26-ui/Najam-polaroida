import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">

        <div className="footer-grid">

          {/* LIJEVO */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img
                src={process.env.PUBLIC_URL + "/np-materijali/logo.png"}
                alt="Najam Polaroida"
                className="footer-logo"
              />
            </Link>

            <p className="footer-text">
              Najam instant kamera s humanitarnom pričom.
              Svaki najam pomaže obiteljima u potrebi i pretvara
              uspomene u konkretna dobra djela.
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
                href="https://www.tiktok.com/@najam.polaroida?_r=1&_t=ZN-96Ur9uTTxEU"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>


          {/* NAVIGACIJA */}
          <div className="footer-navigation">
            <h5 className="footer-title">Navigacija</h5>

            <ul className="footer-links">
              <li><Link to="/">Naslovna</Link></li>
              <li><Link to="/o-nama">O nama</Link></li>
              <li><Link to="/proizvodi">Proizvodi i usluge</Link></li>
              <li><Link to="/paketi">Paketi</Link></li>
              <li><Link to="/donacije">Donacije</Link></li>
              <li><Link to="/kontakt">Kontakt</Link></li>
            </ul>
          </div>


          {/* DESNO - GLAVNI KONTAKT */}
          <div className="footer-contact-area">

            <h5 className="footer-title">Najam i upiti</h5>

            <div className="footer-primary-contact">

              <p className="footer-contact-intro">
                Za rezervacije, ponude i sva pitanja javite se
              </p>

              <h3>Vedrana Divković</h3>

              <p className="footer-primary-role">
                Voditelj projekta Najam Polaroida
              </p>

              <div className="footer-primary-links">

                <a href="tel:+385915352103">
                  <span className="footer-contact-icon">
                    <i className="fa-solid fa-phone"></i>
                  </span>

                  <span>
                    <small>Telefon</small>
                    <strong>091 535 2103</strong>
                  </span>
                </a>

                <a href="mailto:Valentinadivkovic7@gmail.com">
                  <span className="footer-contact-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>

                  <span>
                    <small>Email</small>
                    <strong>Valentinadivkovic7@gmail.com</strong>
                  </span>
                </a>

              </div>
            </div>


            {/* OSTALI KONTAKTI */}
            <div className="footer-other-contacts">

              <p className="footer-small-title">
                Kontakti udruge
              </p>

              <div className="footer-other-grid">

                <div className="footer-person">
                  <h4>Martina Posarić</h4>

                  <p className="footer-person-role">
                    Predsjednica Udruge Lice Sreće
                  </p>

                  <a href="tel:+385977269583">
                    <i className="fa-solid fa-phone"></i>
                    097 726 9583
                  </a>

                  <a href="mailto:udrugalicesrece@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                    udrugalicesrece@gmail.com
                  </a>
                </div>


                <div className="footer-person">
                  <h4>Valentina Divković</h4>

                  <p className="footer-person-role">
                    Zamjenica predsjednice Udruge
                  </p>

                  <a href="tel:+385917287271">
                    <i className="fa-solid fa-phone"></i>
                    091 728 7271
                  </a>

                  <a href="mailto:Valentinadivkovic7@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                    Valentinadivkovic7@gmail.com
                  </a>
                </div>

              </div>
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