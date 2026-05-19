import { Link } from "react-router-dom";
import React from "react";

function Donacije() {
  const posts = [
    {
      title: "Donacija obitelji Kolak",
      subtitle: "Kada se nada ponovno zapali",
      amount: "131,98 €",
      text: "Zahvaljujući prvim najmovima instant kamera, prikupljena sredstva usmjerena su na obnovu doma obitelji Kolak nakon požara.",
    },
    {
      title: "Donacija obitelji Uremović",
      subtitle: "Dom koji se ruši, ali nada koja traje",
      amount: "Plaćeni računi za struju",
      text: "Obitelji Uremović pomogli smo plaćanjem računa za struju, kako bi u teškim životnim uvjetima imali barem osnovnu sigurnost.",
    },
    {
      title: "Humanitarni stand-up show",
      subtitle: "Smijeh koji hrani i gradi",
      amount: "140,60 €",
      text: "Prodajom ulaznica prikupljen je iznos doniran obitelji Uremović za hranu i osnovne kućne potrepštine.",
    },
    {
      title: "Donacija obitelji Kolak",
      subtitle: "Drugi korak prema sigurnom domu",
      amount: "115,50 €",
      text: "Dodatna donacija omogućila je pomoć pri postavljanju laminata u obnovljenom prostoru obitelji Kolak.",
    },
  ];

  return (
    <main className="donations-page page-fade">
      <section
        className="donations-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(35,20,55,0.78), rgba(97,58,120,0.62)), url(${process.env.PUBLIC_URL}/np-materijali/donacije-hero.jpg)`,
        }}
      >
        <div className="container donations-hero-content">
          <span className="section-kicker">Donacije</span>

          <h1>
            Zajedno stvaramo dobro
            
          </h1>

          <p>
            Svaka fotografija može postati nečija nova šansa. Kroz najam
            instant kamera vaše uspomene pretvaramo u stvarnu pomoć
            obiteljima kojima je podrška najpotrebnija.
          </p>
        </div>
      </section>

      <section className="donations-intro">
        <div className="container">
          <div className="section-heading text-center">
            <span className="section-kicker">Naše priče</span>

            <h2>Zajedno mijenjamo živote</h2>

            <p>
              Kroz projekt najma instant kamera, humanitarne događaje i
              podršku naše zajednice, vaše trenutke sreće pretvaramo u pomoć
              obiteljima koje su preživjele požare, urušene domove i teške
              životne okolnosti.
            </p>
          </div>

          <div className="donation-stats">
            <div className="donation-stat">
              <strong>18+</strong>
              <span>donacija do sada</span>
            </div>

            <div className="donation-stat">
              <strong>15.000 €+</strong>
              <span>ukupno donirano</span>
            </div>

            <div className="donation-stat">
              <strong>8+</strong>
              <span>obitelji kojima smo pomogli</span>
            </div>
          </div>
        </div>
      </section>

      <section className="donation-blog-section">
        <div className="container">
          <div className="row g-4">
            {posts.map((post, index) => (
              <div className="col-lg-6" key={index}>
                <article className="donation-post-card">
                  <div className="donation-post-image">
                    <span>Slika uskoro</span>
                  </div>

                  <div className="donation-post-content">
                    <span className="donation-post-label">
                      Blog priča
                    </span>

                    <h3>{post.title}</h3>
                    <h4>{post.subtitle}</h4>

                    <div className="donation-amount">
                      {post.amount}
                    </div>

                    <p>{post.text}</p>

                    <a href="/kontakt" className="donation-post-btn">
                      Podrži naš rad
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="donations-cta">
        <div className="container">
          <h2>
            Vaša uspomena može biti nečiji novi početak.
          </h2>

          <p>
            Svaki najam instant kamere i svaka podrška pomažu nam nastaviti
            pomagati obiteljima kojima je pomoć najpotrebnija.
          </p>

          <Link to="/kontakt" className="btn-primary-custom">
            Kontaktirajte nas
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Donacije;