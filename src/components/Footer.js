import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top row g-5">

          <div className="col-lg-4">
            <div className="footer-brand">
              <img
                src="/np-materijali/logo.png"
                alt="Najam Polaroida"
                className="footer-logo"
              />
              <p className="footer-text">
                Najam instant kamera s humanitarnom pričom. Svaki najam pomaže
                obiteljima u potrebi i pretvara uspomene u konkretna dobra djela.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
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

          <div className="col-md-4 col-lg-3">
            <h5 className="footer-title">Kontakt</h5>
            <div className="footer-contact-card">
              <p className="footer-person">Martina Posarić</p>
              <p className="footer-role">Predsjednica Udruge Lice Sreće</p>

              <a href="tel:+385977269583" className="footer-contact-item">
                <i className="fa-solid fa-phone"></i>
                <span>097 726 9583</span>
              </a>

              <a
                href="mailto:udrugalicesrece@gmail.com"
                className="footer-contact-item"
              >
                <i className="fa-solid fa-envelope"></i>
                <span>udrugalicesrece@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <h5 className="footer-title">Podrška i upiti</h5>
            <div className="footer-contact-card">
              <p className="footer-person">Valentina Divković</p>
              <p className="footer-role">Volonterka</p>

              <a href="tel:+385917287271" className="footer-contact-item">
                <i className="fa-solid fa-phone"></i>
                <span>091 728 7271</span>
              </a>

              <a
                href="mailto:Valentinadivkovic7@gmail.com"
                className="footer-contact-item"
              >
                <i className="fa-solid fa-envelope"></i>
                <span>Valentinadivkovic7@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Najam Polaroida · Udruga Lice Sreće. Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;