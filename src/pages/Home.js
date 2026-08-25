import { Link } from "react-router-dom";
import donationPosts from "../data/donationPosts";

function Home() {
  const featuredDonations = [...donationPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const [
    mainDonation,
    sideDonationOne,
    sideDonationTwo,
  ] = featuredDonations;

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="home-hero page-fade">
        <div
          className="home-hero-bg"
          style={{
            backgroundImage: `linear-gradient(
              135deg,
              rgba(35,20,55,0.72),
              rgba(97,58,120,0.6)
            ),
            url(${process.env.PUBLIC_URL}/np-materijali/hero-slika.png)`,
          }}
        ></div>

        <div className="container">
          <div className="home-hero-content">
            <p className="hero-kicker">
              Udruga Lice Sreće
            </p>

            <h1>
              Najam instant kamera <br />

              <span className="highlight-font">
                za uspomene koje čine dobro
              </span>
            </h1>

            <p className="hero-text">
              Zabilježite nezaboravne trenutke uz naše instant kamere,
              printere i dodatnu opremu. Svaki najam pomaže obiteljima
              čiji su domovi pogođeni elementarnim nepogodama.
            </p>

            <div className="hero-buttons">
              <Link
                to="/proizvodi"
                className="btn hero-btn hero-btn-primary"
              >
                Pogledaj ponudu
              </Link>

              <Link
                to="/donacije"
                className="btn hero-btn hero-btn-secondary"
              >
                Pogledaj donacije
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          KAKO RADIMO
      ===================================================== */}
      <section className="kako-radimo">
        <div className="container text-center">
          <h2 className="section-title">
            Kako{" "}
            <span className="highlight-font">
              radimo
            </span>
          </h2>

          <p className="section-subtitle">
            Jednostavno, brzo i s razlogom.
          </p>

          <div className="steps-wrapper mt-5">
            <div className="row justify-content-center g-4">

              {/* REZERVACIJA */}
              <div className="col-md-4">
                <Link
                  to="/paketi"
                  className="step-card-link"
                >
                  <div className="step-card">
                    <div
                      className="step-image"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/np-materijali/paketi-hero.jpg)`,
                      }}
                    ></div>

                    <div className="step-card-content">
                      <div className="step-icon">
                        <i className="fa-solid fa-calendar-check"></i>
                      </div>

                      <h5>
                        Rezerviraš kameru
                      </h5>

                      <p>
                        Odaberi paket i rezerviraj termin za svoj event.
                      </p>

                      <span className="step-more">
                        Pogledaj pakete
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>


              {/* FOTKANJE */}
              <div className="col-md-4">
                <Link
                  to="/proizvodi"
                  className="step-card-link"
                >
                  <div className="step-card">
                    <div
                      className="step-image"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/np-materijali/proizvodi-hero.jpg)`,
                      }}
                    ></div>

                    <div className="step-card-content">
                      <div className="step-icon">
                        <i className="fa-solid fa-camera"></i>
                      </div>

                      <h5>
                        Fotkaš uspomene
                      </h5>

                      <p>
                        Gosti dobivaju instant fotografije odmah.
                      </p>

                      <span className="step-more">
                        Pogledaj ponudu
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>


              {/* DONACIJE */}
              <div className="col-md-4">
                <Link
                  to="/donacije"
                  className="step-card-link"
                >
                  <div className="step-card">
                    <div
                      className="step-image"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/np-materijali/donacije-hero.png)`,
                      }}
                    ></div>

                    <div className="step-card-content">
                      <div className="step-icon">
                        <i className="fa-solid fa-heart"></i>
                      </div>

                      <h5>
                        Pomažeš drugima
                      </h5>

                      <p>
                        Tvoja uspomena nekome postaje konkretna pomoć.
                      </p>

                      <span className="step-more">
                        Pogledaj donacije
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          DONACIJE
      ===================================================== */}
      <section className="donacije-preview">
        <div className="container">

          <div className="text-center donation-preview-heading">
            <span className="section-tag">
              Humanitarna priča
            </span>

            <h2 className="section-title">
              Vaše uspomene{" "}
              <span className="highlight-font">
                pomažu
              </span>
            </h2>

            <p className="section-subtitle">
              Iza svakog najma može stajati jedno konkretno dobro djelo.
            </p>
          </div>


          <div className="row g-4 align-items-stretch">

            {/* GLAVNA DONACIJA */}
            {mainDonation && (
              <div className="col-lg-7">
                <Link
                  to={`/donacije/${mainDonation.slug}`}
                  className="home-donation-link"
                >
                  <article className="home-donation-card home-donation-main">

                    <div
                      className="home-donation-main-image"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/${mainDonation.coverImage})`,
                        backgroundPosition:
                          mainDonation.coverPosition || "center",
                      }}
                    >
                      <div className="home-donation-image-overlay"></div>

                      <span className="home-donation-badge">
                        Pomoć obitelji
                      </span>
                    </div>


                    <div className="home-donation-main-content">
                      <div className="home-donation-topline">
                        <span className="home-donation-amount">
                          {mainDonation.amount}
                        </span>

                        <span className="home-donation-amount-label">
                          konkretne pomoći
                        </span>
                      </div>

                      <h3>
                        {mainDonation.title}
                      </h3>

                      <p className="home-donation-subtitle">
                        {mainDonation.subtitle}
                      </p>

                      <p className="home-donation-description">
                        {mainDonation.excerpt}
                      </p>

                      <span className="home-donation-more">
                        Pročitaj priču
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>

                  </article>
                </Link>
              </div>
            )}


            {/* DESNE DONACIJE */}
            <div className="col-lg-5">
              <div className="home-donation-side-wrap">

                {sideDonationOne && (
                  <Link
                    to={`/donacije/${sideDonationOne.slug}`}
                    className="home-donation-link"
                  >
                    <article className="home-donation-card home-donation-side">

                      <div
                        className="home-donation-side-image"
                        style={{
                          backgroundImage: `url(${process.env.PUBLIC_URL}/${sideDonationOne.coverImage})`,
                          backgroundPosition:
                            sideDonationOne.coverPosition || "center",
                        }}
                      >
                        <div className="home-donation-image-overlay"></div>
                      </div>


                      <div className="home-donation-side-content">
                        <span className="home-donation-mini-label">
                          Pomoć obitelji
                        </span>

                        <span className="home-donation-side-amount">
                          {sideDonationOne.amount}
                        </span>

                        <h4>
                          {sideDonationOne.title}
                        </h4>

                        <p>
                          {sideDonationOne.subtitle}
                        </p>

                        <span className="home-donation-side-more">
                          Pročitaj priču
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </div>

                    </article>
                  </Link>
                )}


                {sideDonationTwo && (
                  <Link
                    to={`/donacije/${sideDonationTwo.slug}`}
                    className="home-donation-link"
                  >
                    <article className="home-donation-card home-donation-side">

                      <div
                        className="home-donation-side-image"
                        style={{
                          backgroundImage: `url(${process.env.PUBLIC_URL}/${sideDonationTwo.coverImage})`,
                          backgroundPosition:
                            sideDonationTwo.coverPosition || "center",
                        }}
                      >
                        <div className="home-donation-image-overlay"></div>
                      </div>


                      <div className="home-donation-side-content">
                        <span className="home-donation-mini-label">
                          Pomoć obitelji
                        </span>

                        <span className="home-donation-side-amount">
                          {sideDonationTwo.amount}
                        </span>

                        <h4>
                          {sideDonationTwo.title}
                        </h4>

                        <p>
                          {sideDonationTwo.subtitle}
                        </p>

                        <span className="home-donation-side-more">
                          Pročitaj priču
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </div>

                    </article>
                  </Link>
                )}

              </div>
            </div>

          </div>


          <div className="text-center home-donation-all-wrap">
            <Link
              to="/donacije"
              className="all-packages-btn"
            >
              Pogledaj sve donacije
            </Link>
          </div>

        </div>
      </section>


      {/* =====================================================
          PAKETI
      ===================================================== */}
      <section className="paketi-preview">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="section-title">
              <span className="highlight-font">
                Naši
              </span>{" "}
              paketi
            </h2>

            <p className="section-subtitle">
              Odaberi paket koji najbolje odgovara tvom događaju.
            </p>
          </div>


          <div className="row g-4 justify-content-center">

            {/* 50 */}
            <div className="col-md-4">
              <div className="package-card">
                <span className="package-badge">
                  Standard
                </span>

                <h3>
                  50 fotografija
                </h3>

                <p>
                  Najčešći izbor za manje svadbe i obiteljske događaje.
                </p>

                <Link
                  to="/kontakt"
                  className="package-btn"
                >
                  Zatraži ponudu
                </Link>
              </div>
            </div>


            {/* 100 */}
            <div className="col-md-4">
              <div className="package-card featured-package">

                <div className="top-badge">
                  Najpopularniji
                </div>

                <span className="package-badge">
                  Plus
                </span>

                <h3>
                  100 fotografija
                </h3>

                <p>
                  Odličan balans cijene i količine – idealno za većinu događaja.
                </p>

                <Link
                  to="/kontakt"
                  className="package-btn"
                >
                  Zatraži ponudu
                </Link>
              </div>
            </div>


            {/* 150 */}
            <div className="col-md-4">
              <div className="package-card">
                <span className="package-badge">
                  Premium
                </span>

                <h3>
                  150 fotografija
                </h3>

                <p>
                  Za veće proslave i događaje s puno gostiju.
                </p>

                <Link
                  to="/kontakt"
                  className="package-btn"
                >
                  Zatraži ponudu
                </Link>
              </div>
            </div>

          </div>


          <div className="text-center mt-5">
            <Link
              to="/paketi"
              className="all-packages-btn"
            >
              Pogledaj sve pakete
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;