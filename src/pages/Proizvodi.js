import React, { useState } from "react";
import { Link } from "react-router-dom";

function Proizvodi() {
  const [showEquipmentInfo, setShowEquipmentInfo] = useState(false);

  const proizvodi = [
    {
      title: "Najam Instax Wide 400 kamere",
      format: "Dimenzija fotografije: 108 × 86 mm",
      text: "Pouzdana instant kamera širokog formata, idealna za vjenčanja, rođendane, evente i sve trenutke koje želite odmah pretvoriti u uspomene.",
      image: "np-materijali/proizvodi/instax-wide-400.jpg",
      icon: "fa-camera-retro",
      selection: "Instax Wide 400 kamera",
    },
    {
      title: "Najam Instax LiPlay kamere",
      format: "Dimenzija fotografije: 86 × 54 mm",
      text: "Kombinira digitalni i instant fotoaparat te omogućuje pregled, odabir i ispis omiljenih trenutaka.",
      image: "np-materijali/proizvodi/instax-liplay.jpg",
      icon: "fa-camera",
      selection: "Instax LiPlay kamera",
    },
    {
      title: "Najam Instax Wide printera",
      format: "Dimenzija fotografije: 108 × 86 mm",
      text: "Printer za ispis širokih fotografija direktno s mobitela. Odličan izbor za foto-kutke i događaje.",
      image: "np-materijali/proizvodi/instax-wide-printer.jpg",
      icon: "fa-print",
      selection: "Instax Wide printer",
    },
  ];

  const usluge = [
    {
      title: "Albumi za instant fotografije",
      format: "Wide i Mini format",
      text: "Elegantni albumi za čuvanje fotografija, idealni za uspomene, poklone, vjenčanja i druge posebne događaje.",
      image: "np-materijali/proizvodi/albumi.jpg",
      icon: "fa-book-open",
      selection: "Albumi za instant fotografije",
    },
    {
      title: "Printanje fotografija",
      format: "Wide i Mini format",
      text: "Odaberite najbolje trenutke s mobitela ili računala i pretvorite ih u opipljive instant uspomene.",
      image: "np-materijali/proizvodi/printanje.jpg",
      icon: "fa-images",
      selection: "Printanje fotografija",
    },
    {
      title: "Dodatna oprema",
      format: "Filmovi, stalci, remeni i dodaci",
      text: "Sve što može olakšati korištenje kamera i pomoći u stvaranju personaliziranih instant uspomena.",
      image: "np-materijali/proizvodi/dodatna-oprema.jpg",
      icon: "fa-box-open",
      selection: "Dodatna oprema",
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

  const contactLink = (selection, odabirFotki = false) => {
    const params = new URLSearchParams();

    params.set("paket", selection);

    if (odabirFotki) {
      params.set("odabirFotki", "true");
    }

    return `/kontakt?${params.toString()}`;
  };

  const openEquipmentInfo = () => {
    setShowEquipmentInfo((prev) => !prev);

    setTimeout(() => {
      document
        .querySelector(".equipment-inline-info")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 100);
  };

  return (
    <main className="products-page page-fade">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        className="products-hero"
        style={{
          backgroundImage: `linear-gradient(
            135deg,
            rgba(35,20,55,0.78),
            rgba(97,58,120,0.62)
          ),
          url(${process.env.PUBLIC_URL}/np-materijali/proizvodi-hero.jpg)`,
        }}
      >
        <div className="container products-hero-content">
          <span className="section-kicker">
            Najam instant opreme
          </span>

          <h1>
            Proizvodi i usluge
          </h1>

          <p>
            Kamere, printeri, albumi i dodaci koji vaše posebne
            trenutke pretvaraju u uspomene koje možete ponijeti sa sobom.
          </p>
        </div>
      </section>


      {/* =====================================================
          KAMERE I PRINTERI
      ===================================================== */}
      <section className="products-section">
        <div className="container">

          <div className="products-heading text-center">
            <span className="section-kicker">
              Naša ponuda
            </span>

            <h2>
              Kamere i printeri za svaki događaj
            </h2>

            <p>
              Odaberite uređaj koji najbolje odgovara vašem događaju,
              broju gostiju i načinu na koji želite stvarati uspomene.
            </p>
          </div>


          <div className="row g-4">
            {proizvodi.map((item, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
              >
                <Link
                  to={contactLink(item.selection, true)}
                  className="product-card-link"
                >
                  <article className="product-card">

                    <div className="product-image">
                      <img
                        src={`${process.env.PUBLIC_URL}/${item.image}`}
                        alt={item.title}
                      />

                      <div className="product-image-overlay"></div>
                    </div>


                    <div className="product-card-content">

                      <div className="product-icon">
                        <i className={`fa-solid ${item.icon}`}></i>
                      </div>


                      <span className="product-format">
                        {item.format}
                      </span>


                      <h3>
                        {item.title}
                      </h3>


                      <p>
                        {item.text}
                      </p>


                      <span className="product-more">
                        Pošalji upit

                        <i className="fa-solid fa-arrow-right"></i>
                      </span>

                    </div>

                  </article>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          USLUGE
      ===================================================== */}
      <section className="products-services-section">
        <div className="container">

          <div className="products-heading text-center">
            <span className="section-kicker">
              Usluge i dodatno
            </span>

            <h2>
              Sve za vaše instant uspomene
            </h2>

            <p>
              Fotografije ne moraju završiti samo u ruci.
              Spremite ih u album, isprintajte omiljene trenutke
              ili upotpunite paket dodatnom opremom.
            </p>
          </div>


          <div className="row g-4">
            {usluge.map((item, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
              >

                {item.selection === "Dodatna oprema" ? (

                  <button
                    type="button"
                    className="product-card-link product-card-button"
                    onClick={openEquipmentInfo}
                  >
                    <article className="product-card product-service-card">

                      <div className="product-image product-service-image">
                        <img
                          src={`${process.env.PUBLIC_URL}/${item.image}`}
                          alt={item.title}
                        />

                        <div className="product-image-overlay"></div>
                      </div>


                      <div className="product-card-content">

                        <div className="product-icon">
                          <i className={`fa-solid ${item.icon}`}></i>
                        </div>


                        <span className="product-format">
                          {item.format}
                        </span>


                        <h3>
                          {item.title}
                        </h3>


                        <p>
                          {item.text}
                        </p>


                        <span className="product-more">
                          {showEquipmentInfo ? "Zatvori" : "Saznaj više"}

                          <i
                            className={`fa-solid ${
                              showEquipmentInfo
                                ? "fa-chevron-up"
                                : "fa-chevron-down"
                            }`}
                          ></i>
                        </span>

                      </div>

                    </article>
                  </button>

                ) : (

                  <Link
                    to={contactLink(item.selection)}
                    className="product-card-link"
                  >
                    <article className="product-card product-service-card">

                      <div className="product-image product-service-image">
                        <img
                          src={`${process.env.PUBLIC_URL}/${item.image}`}
                          alt={item.title}
                        />

                        <div className="product-image-overlay"></div>
                      </div>


                      <div className="product-card-content">

                        <div className="product-icon">
                          <i className={`fa-solid ${item.icon}`}></i>
                        </div>


                        <span className="product-format">
                          {item.format}
                        </span>


                        <h3>
                          {item.title}
                        </h3>


                        <p>
                          {item.text}
                        </p>


                        <span className="product-more">
                          Pošalji upit

                          <i className="fa-solid fa-arrow-right"></i>
                        </span>

                      </div>

                    </article>
                  </Link>

                )}

              </div>
            ))}
          </div>


          {/* =====================================================
              INLINE INFO - DODATNA OPREMA
          ===================================================== */}
          {showEquipmentInfo && (
            <div className="equipment-inline-info">

              <div className="equipment-inline-icon">
                <i className="fa-solid fa-box-open"></i>
              </div>


              <div className="equipment-inline-content">

                <span className="section-kicker">
                  Dodatna oprema
                </span>

                <h3>
                  Dostupna uz najam kamera i paketa
                </h3>

                <p>
                  Filmovi, stalci, remeni i ostali dodaci dostupni su
                  uz najam kamere, printera ili odabranog paketa.
                  Ako niste sigurni što vam treba, rado ćemo vam
                  preporučiti najbolju kombinaciju za vaš događaj.
                </p>


                <div className="equipment-inline-actions">

                  <Link
                    to="/paketi"
                    className="btn-primary-custom"
                  >
                    Pogledaj pakete
                  </Link>


                  <Link
                    to="/kontakt"
                    className="equipment-inline-contact"
                  >
                    Trebaš savjet?

                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>


                  <button
                    type="button"
                    className="equipment-inline-close"
                    onClick={() => setShowEquipmentInfo(false)}
                  >
                    Zatvori
                  </button>

                </div>

              </div>

            </div>
          )}

        </div>
      </section>


      {/* =====================================================
          DODATNA OPREMA
      ===================================================== */}
      <section className="equipment-section">
        <div className="container">

          <div className="equipment-box">

            <div className="equipment-copy">

              <span className="section-kicker">
                Dodatna oprema
              </span>

              <h2>
                Male stvari koje upotpunjuju cijeli doživljaj
              </h2>

              <p>
                Uz kamere i printere dostupna je i dodatna oprema
                koja olakšava korištenje, čuvanje i personaliziranje
                vaših instant uspomena.
              </p>


              <button
                type="button"
                className="equipment-link equipment-link-button"
                onClick={openEquipmentInfo}
              >
                Saznaj više o dodatnoj opremi

                <i className="fa-solid fa-arrow-up"></i>
              </button>

            </div>


            <div className="equipment-list">
              {oprema.map((item, index) => (
                <div
                  className="equipment-item"
                  key={index}
                >
                  <i className="fa-solid fa-check"></i>

                  <span>
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="products-cta">
        <div className="container">

          <span className="products-cta-kicker">
            Trebaš pomoć pri odabiru?
          </span>

          <h2>
            Pronađimo najbolju opciju za tvoj događaj.
          </h2>

          <p>
            Javi nam što planiraš, koliko gostiju očekuješ i kakve
            uspomene želiš stvoriti. Pomoći ćemo ti odabrati kameru,
            printer ili kompletan paket.
          </p>


          <div className="products-cta-buttons">

            <Link
              to="/kontakt"
              className="btn-primary-custom"
            >
              Kontaktirajte nas
            </Link>

            <Link
              to="/paketi"
              className="btn-outline-custom"
            >
              Pogledaj pakete
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Proizvodi;