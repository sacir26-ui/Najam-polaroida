function Onama() {
  return (
    <main className="about-page">
      <section className="page-hero about-hero">
        <div
          className="page-hero-bg"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(35,20,55,0.72), rgba(97,58,120,0.6)), url(${process.env.PUBLIC_URL}/np-materijali/onama-hero.jpg)`
          }}
        ></div>

        <div className="container">
          <div className="page-hero-content text-center">
            
            <h1 className="page-title page-title-light">
             <span> O nama</span>
            </h1>
            <p className="page-subtitle page-subtitle-light">
              Najam instant kamera je projekt Udruge Lice Sreće koji spaja
              fotografiju, uspomene i humanitarnu pomoć.
            </p>
          </div>
        </div>
      </section>

    <section className="about-story">
  <div className="container">
    <div className="row align-items-center g-5">
      <div className="col-lg-7">
        <div className="about-story-text">
          <span className="section-tag">Tko smo mi</span>
          <h2>Najam instant kamera s humanitarnom pričom</h2>
          <p>
            Najam instant kamera je projekt Udruge Lice Sreće, osmišljen kako bi
            spojio kreativnost, uspomene i konkretnu pomoć onima kojima je
            najpotrebnija.
          </p>
          <p>
            Kroz našu ponudu najma instant kamera omogućavamo svima da zabilježe
            posebne trenutke, a istovremeno podrže obitelji čiji su domovi
            pogođeni elementarnim nepogodama.
          </p>
        </div>
      </div>

      <div className="col-lg-5">
        <div className="about-side-cards">
          <div className="about-mini-card">
            <h3>Naša misija</h3>
            <p>
              Povezati ljubav prema fotografiji s konkretnom pomoći i pokazati da
              zajednica može napraviti stvarnu razliku.
            </p>
          </div>

          <div className="about-mini-card">
            <h3>Naša vizija</h3>
            <p>
              Stvoriti projekt u kojem svaka fotografija ne čuva samo uspomene,
              nego i mijenja živote.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="about-cta">
  <div className="container">
    <div className="about-cta-box text-center">
      <span className="section-tag">Javi nam se</span>
      <h2>Uspomene koje ostaju. Pomoć koja se pamti.</h2>
      <p>
        Saznaj više o našim paketima ili nam se javi za ponudu prilagođenu tvom događaju.
      </p>

      <div className="hero-buttons justify-content-center">
        <a href="/paketi" className="btn hero-btn hero-btn-primary">
          Pogledaj pakete
        </a>
        <a href="/kontakt" className="btn hero-btn hero-btn-secondary">
          Kontaktiraj nas
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Onama;