import { Link } from "react-router-dom";

function Onama() {
  return (
    <main className="about-page page-fade">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="page-hero about-hero">
        <div
          className="page-hero-bg"
          style={{
            backgroundImage: `linear-gradient(
              135deg,
              rgba(35,20,55,0.72),
              rgba(97,58,120,0.6)
            ),
            url(${process.env.PUBLIC_URL}/np-materijali/onama-hero.jpg)`,
          }}
        ></div>

        <div className="container">
          <div className="page-hero-content text-center">
            <h1 className="page-title page-title-light">
              O nama
            </h1>

            <p className="page-subtitle page-subtitle-light">
              Najam instant kamera je projekt Udruge Lice Sreće koji
              spaja fotografiju, uspomene i humanitarnu pomoć.
            </p>
          </div>
        </div>
      </section>


      {/* =====================================================
          PRIČA PROJEKTA
      ===================================================== */}
      <section className="about-intro">
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <div className="about-intro-text">

                <span className="section-tag">
                  Naša priča
                </span>

                <h2>
                  Fotografija koja ostaje.
                  <span> Pomoć koja ide dalje.</span>
                </h2>

                <p className="about-lead">
                  Najam Polaroida nastao je iz jednostavne ideje —
                  spojiti nešto lijepo i zabavno s nečim što ima
                  puno dublji smisao.
                </p>

                <p>
                  Kroz projekt Udruge Lice Sreće omogućujemo najam
                  instant kamera za vjenčanja, djevojačke večeri,
                  rođendane i druge posebne trenutke.
                </p>

                <p>
                  Fotografije ostaju gostima kao uspomena, dok projekt
                  istovremeno pomaže obiteljima i pojedincima koji se
                  nalaze u teškim životnim okolnostima.
                </p>

                <Link to="/donacije" className="about-text-link">
                  Pogledaj naše humanitarne priče

                  <i className="fa-solid fa-arrow-right"></i>
                </Link>

              </div>
            </div>


            <div className="col-lg-6">
              <div className="about-intro-visual">

                <div className="about-intro-image-main">
                  <img
                    src={`${process.env.PUBLIC_URL}/np-materijali/o-nama/o6.jpg`}
                    alt="Instant fotografija s posebnog događaja"
                  />
                </div>

                <div className="about-floating-note">
                  <i className="fa-solid fa-heart"></i>

                  <span>
                    Uspomena za vas.
                    <strong> Pomoć za nekoga drugoga.</strong>
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          VIZUALNI KOLAŽ
      ===================================================== */}
      <section className="about-moments">
        <div className="container">

          <div className="about-section-heading text-center">

            <span className="section-tag">
              Trenuci koji ostaju
            </span>

            <h2 className="section-title">
              Vi stvarate trenutke,
              <span className="highlight-font"> mi ih pretvaramo u više</span>
            </h2>

            <p className="section-subtitle">
              Instant fotografija traje nekoliko sekundi za nastati,
              ali uspomena koju ostavlja može trajati godinama.
            </p>

          </div>


          <div className="about-collage">

            <div className="about-collage-item about-collage-large">
              <img
                src={`${process.env.PUBLIC_URL}/np-materijali/o-nama/o7.jpg`}
                alt="Instant kamera i album za fotografije"
              />
            </div>


            <div className="about-collage-right">

              <div className="about-collage-item about-collage-top">
                <img
                  src={`${process.env.PUBLIC_URL}/np-materijali/o-nama/o5.jpg`}
                  alt="Instant fotografije kao dio uspomena"
                />
              </div>

              <div className="about-collage-item about-collage-bottom">
                <img
                  src={`${process.env.PUBLIC_URL}/np-materijali/o-nama/o4.jpg`}
                  alt="Polaroid fotografija s događaja"
                />
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          KAKO NAJAM POSTAJE POMOĆ
      ===================================================== */}
      <section className="about-purpose">
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-5">

              <div className="about-purpose-heading">

                <span className="section-tag">
                  Zašto ovo radimo
                </span>

                <h2>
                  Jedan najam.
                  <span> Tri lijepa koraka.</span>
                </h2>

                <p>
                  Želimo da iza svakog događaja ostane nešto više
                  od fotografija — osjećaj da je lijep trenutak
                  postao dio nečije konkretne pomoći.
                </p>

              </div>

            </div>


            <div className="col-lg-7">

              <div className="about-purpose-steps">

                <div className="about-purpose-step">

                  <span className="about-step-number">
                    01
                  </span>

                  <div>
                    <h3>Odabereš paket</h3>

                    <p>
                      Odabereš kameru i količinu fotografija koja
                      najbolje odgovara tvom događaju.
                    </p>
                  </div>

                </div>


                <div className="about-purpose-step">

                  <span className="about-step-number">
                    02
                  </span>

                  <div>
                    <h3>Stvaraš uspomene</h3>

                    <p>
                      Fotografije nastaju odmah, a gosti ih mogu
                      ponijeti kući ili spremiti u zajednički album.
                    </p>
                  </div>

                </div>


                <div className="about-purpose-step">

                  <span className="about-step-number">
                    03
                  </span>

                  <div>
                    <h3>Uspomena postaje pomoć</h3>

                    <p>
                      Kroz projekt sredstva usmjeravamo prema ljudima
                      kojima je pomoć u tom trenutku najpotrebnija.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          VIDEO
      ===================================================== */}
      <section className="about-video-section">
        <div className="container">

          <div className="about-video-box">

            <div className="row align-items-center g-5">

              <div className="col-lg-6">

                <div className="about-video-text">

                  <span className="section-tag">
                    Uspomene koje se čuvaju
                  </span>

                  <h2>
                    Fotografija ne završava
                    <span> pritiskom na okidač.</span>
                  </h2>

                  <p>
                    Fotografije završe u albumima, na zidovima,
                    među prijateljima i obitelji — na mjestima
                    gdje se posebni trenuci ponovno otkrivaju
                    godinama kasnije.
                  </p>

                  <p>
                    Upravo zato volimo instant fotografiju.
                    Ne ostaje skrivena u galeriji mobitela.
                    Postaje nešto što možeš uzeti u ruke.
                  </p>

                </div>

              </div>


              <div className="col-lg-6">

                <div className="about-video-wrap">

                  <video
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source
                      src={`${process.env.PUBLIC_URL}/np-materijali/o-nama/v2.mp4`}
                      type="video/mp4"
                    />

                    Vaš preglednik ne podržava prikaz videa.
                  </video>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MISIJA I VIZIJA
      ===================================================== */}
      <section className="about-values">
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <div className="about-values-image">
                <img
                  src={`${process.env.PUBLIC_URL}/np-materijali/o-nama/o2.jpg`}
                  alt="Album i instant fotografije"
                />
              </div>

            </div>


            <div className="col-lg-6">

              <div className="about-values-content">

                <span className="section-tag">
                  Ono što nas vodi
                </span>

                <h2>
                  Male uspomene mogu
                  <span> napraviti veliku razliku.</span>
                </h2>


                <div className="about-value">

                  <div className="about-value-icon">
                    <i className="fa-solid fa-heart"></i>
                  </div>

                  <div>
                    <h3>Naša misija</h3>

                    <p>
                      Povezati ljubav prema fotografiji s konkretnom
                      pomoći i pokazati da zajednica kroz male stvari
                      može napraviti stvarnu razliku.
                    </p>
                  </div>

                </div>


                <div className="about-value">

                  <div className="about-value-icon">
                    <i className="fa-solid fa-camera-retro"></i>
                  </div>

                  <div>
                    <h3>Naša vizija</h3>

                    <p>
                      Graditi projekt u kojem svaka nova uspomena
                      otvara mogućnost za još jedno dobro djelo.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          ZAVRŠNA SLIKA / PORUKA
      ===================================================== */}
      <section className="about-final-story">
        <div className="container">

          <div className="about-final-grid">

            <div className="about-final-image">
              <img
                src={`${process.env.PUBLIC_URL}/np-materijali/o-nama/o1.jpg`}
                alt="Album s instant fotografijama"
              />
            </div>


            <div className="about-final-content">

              <span className="section-tag">
                Više od fotografije
              </span>

              <h2>
                Svaka nova uspomena može postati
                <span> dio nečije bolje priče.</span>
              </h2>

              <p>
                Upravo je to srž Najma Polaroida — želimo da
                događaji koje pamtite po lijepim trenucima imaju
                pozitivan trag i izvan tog jednog dana.
              </p>

              <Link to="/donacije" className="about-text-link">
                Pogledaj kome smo pomogli

                <i className="fa-solid fa-arrow-right"></i>
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="about-cta">
        <div className="container">

          <div className="about-cta-box text-center">

            <span className="section-tag">
              Budi dio priče
            </span>

            <h2>
              Stvori uspomene koje znače više.
            </h2>

            <p>
              Odaberi paket za svoj događaj ili nam se javi
              ako želiš ponudu prilagođenu svojim željama.
            </p>


            <div className="hero-buttons justify-content-center">

              <Link
                to="/paketi"
                className="btn hero-btn hero-btn-primary"
              >
                Pogledaj pakete
              </Link>

              <Link
                to="/kontakt"
                className="btn hero-btn hero-btn-secondary"
              >
                Kontaktiraj nas
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Onama;