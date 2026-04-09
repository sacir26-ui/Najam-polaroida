function Home() {
  return (
    <>
      <section className="home-hero">

       <div
          className="home-hero-bg"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(35,20,55,0.72), rgba(97,58,120,0.6)), url(${process.env.PUBLIC_URL}/np-materijali/hero-slika.png)`
          }}
        ></div>

        <div className="container">
          <div className="home-hero-content">
            <p className="hero-kicker">Udruga Lice Sreće</p>

            <h1>
              Najam instant kamera <br />
              <span className="highlight-font">za uspomene koje čine dobro</span>
            </h1>

            <p className="hero-text">
              Zabilježite nezaboravne trenutke uz naše instant kamere, printere i dodatnu opremu.
              Svaki najam pomaže obiteljima čiji su domovi pogođeni elementarnim nepogodama.
            </p>

            <div className="hero-buttons">
              <a href="/proizvodi" className="btn hero-btn hero-btn-primary">
                Pogledaj ponudu
              </a>

              <a href="/donacije" className="btn hero-btn hero-btn-secondary">
                Pogledaj donacije
              </a>
            </div>
          </div>
        </div>

      </section>




      <section className="kako-radimo">
  <div className="container text-center">
   <h2 className="section-title">
      Kako <span className= "highlight-font"> radimo</span>
  </h2>
    <p className="section-subtitle">
      Jednostavno, brzo i s razlogom.
    </p>

    <div className="steps-wrapper mt-5">
      <div className="row justify-content-center">
        
        <div className="col-md-4">
          <div className="step-card">
            <div className="step-icon">
              <i className="fa-solid fa-calendar-check"></i>
            </div>
            <h5>Rezerviraš kameru</h5>
            <p>Odaberi paket i rezerviraj termin za svoj event.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="step-card">
            <div className="step-icon">
              <i className="fa-solid fa-camera"></i>
            </div>
            <h5>Fotkaš uspomene</h5>
            <p>Gosti dobivaju instant fotografije odmah.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="step-card">
            <div className="step-icon">
              <i className="fa-solid fa-heart"></i>
            </div>
            <h5>Pomažeš drugima</h5>
            <p>Svaki najam doprinosi obiteljima u potrebi.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<section className="paketi-preview">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="section-title">
        Naši <span className="highlight-font">paketi</span>
      </h2>
      <p className="section-subtitle">
        Odaberi paket koji najbolje odgovara tvom događaju.
      </p>
    </div>

    <div className="row g-4 justify-content-center">

      {/* 50 */}
      <div className="col-md-4">
        <div className="package-card">
          <span className="package-badge">Standard</span>
          <h3>50 fotografija</h3>
          <p>Najčešći izbor za manje svadbe i obiteljske događaje.</p>
          <a href="/kontakt" className="package-btn">Zatraži ponudu</a>
        </div>
      </div>

      {/* 100 - NAJPOPULARNIJI */}
      <div className="col-md-4">
        <div className="package-card featured-package">
          <div className="top-badge">Najpopularniji</div>
          <span className="package-badge">Plus</span>
          <h3>100 fotografija</h3>
          <p>Odličan balans cijene i količine – idealno za većinu događaja.</p>
          <a href="/kontakt" className="package-btn">Zatraži ponudu</a>
        </div>
      </div>

      {/* 150 */}
      <div className="col-md-4">
        <div className="package-card">
          <span className="package-badge">Premium</span>
          <h3>150 fotografija</h3>
          <p>Za veće proslave i događaje s puno gostiju.</p>
          <a href="/kontakt" className="package-btn">Zatraži ponudu</a>
        </div>
      </div>

    </div>

    <div className="text-center mt-5">
      <a href="/paketi" className="all-packages-btn">
        Pogledaj sve pakete
      </a>
    </div>
  </div>
</section>

<section className="donacije-preview">
  <div className="container">
    <div className="text-center mb-5">
      <span className="section-tag">Humanitarna priča</span>
      <h2 className="section-title">
        Vaše <span className="highlight-font">uspomene</span> pomažu
      </h2>
      <p className="section-subtitle">
        Svaka fotografija znači novu priliku za nekoga.
      </p>
    </div>

    <div className="row g-4 align-items-stretch">
      <div className="col-lg-7">
        <div className="donation-card donation-card-main">
          <div className="donation-amount">
          <span className="amount">1.320 €</span>
          <span className="amount-label">prikupljeno</span>
          </div>
          <h3>Obitelj Kolak</h3>
          <p>
            Nakon požara koji je uništio njihov dom, zajednica se ujedinila.
            Zahvaljujući vašim najmovima, omogućili smo prve korake obnove i
            povratak sigurnosti.
          </p>

          <a href="/donacije" className="donation-link">
            Pročitaj priču <span>→</span>
          </a>
        </div>
      </div>

      <div className="col-lg-5">
        <div className="donation-side-wrap">
          <div className="donation-card donation-card-side">
            <span className="donation-mini-tag">Pomoć obitelji</span>
            <h4>Obitelj Uremović</h4>
            <p>
              Pomoć u osnovnim uvjetima života — struja, hrana i sigurnost.
            </p>
          </div>

          <div className="donation-card donation-card-side">
            <span className="donation-mini-tag">Događaji</span>
            <h4>Humanitarni događaji</h4>
            <p>
              Stand-up večeri i događaji koji pretvaraju zabavu u pomoć.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-5">
      <a href="/donacije" className="all-packages-btn">
        Pogledaj sve donacije
      </a>
    </div>
  </div>
</section>



    </>
  );
}
export default Home;