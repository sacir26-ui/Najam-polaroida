function Home() {
  return (
    <section className="home-hero">
      <div
        className="home-hero-bg"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(35, 20, 55, 0.72), rgba(97, 58, 120, 0.6)), url("/np-materijali/hero-slika.png")',
        }}
      ></div>

      <div className="container">
        <div className="home-hero-content">
          <p className="hero-kicker">Udruga Lice Sreće</p>

          <h1>
            Najam instant kamera
            <br />
            za uspomene koje čine dobro
          </h1>

          <p className="hero-text">
            Zabilježite nezaboravne trenutke uz naše instant kamere, printere i
            dodatnu opremu. Svaki najam pomaže obiteljima čiji su domovi
            pogođeni elementarnim nepogodama.
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
  );
}

export default Home;