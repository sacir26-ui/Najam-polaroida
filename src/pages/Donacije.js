import React from "react";
import { Link } from "react-router-dom";
import donationPosts from "../data/donationPosts";

function Donacije() {
  const sortedDonationPosts = [...donationPosts].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);
  return (
    <main className="donations-page page-fade">

      {/* =========================
          HERO
      ========================= */}
      <section
        className="donations-hero"
        style={{
          backgroundImage: `linear-gradient(
            135deg,
            rgba(35,20,55,0.78),
            rgba(97,58,120,0.62)
          ),
          url(${process.env.PUBLIC_URL}/np-materijali/donacije-hero.png)`,
        }}
      >
        <div className="container donations-hero-content">

          <span className="section-kicker">
            Donacije
          </span>

          <h1>
            Zajedno stvaramo dobro
          </h1>

          <p>
            Svaka fotografija može postati nečija nova šansa.
            Kroz najam instant kamera vaše uspomene pretvaramo
            u stvarnu pomoć obiteljima kojima je podrška
            najpotrebnija.
          </p>

        </div>
      </section>


      {/* =========================
          UVOD + STATISTIKE
      ========================= */}
      <section className="donations-intro">
        <div className="container">

          <div className="section-heading text-center">

            <span className="section-kicker">
              Naše priče
            </span>

            <h2>
              Zajedno mijenjamo živote
            </h2>

            <p>
              Kroz projekt najma instant kamera, humanitarne događaje
              i podršku naše zajednice, vaše trenutke sreće
              pretvaramo u pomoć obiteljima koje su preživjele
              požare, urušene domove i teške životne okolnosti.
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


      {/* =========================
          BLOG PRIČE
      ========================= */}
      <section className="donation-stories-section">
        <div className="container">

          <div className="donation-stories-heading text-center">

            <span className="section-kicker">
              Priče iza pomoći
            </span>

            <h2>
              Pogledajte kome smo zajedno pomogli
            </h2>

            <p>
              Iza svake donacije nalazi se konkretna priča,
              konkretna potreba i ljudi kojima je podrška
              naše zajednice značila korak prema sigurnijoj
              svakodnevici.
            </p>

          </div>


          <div className="row g-4">

            {sortedDonationPosts.map((post) => (
              <div
                className="col-lg-6"
                key={post.slug}
              >

                <Link
                  to={`/donacije/${post.slug}`}
                  className="donation-story-link"
                >

                  <article className="donation-story-card">

                    {/* SLIKA */}
                    <div
                      className={`donation-story-image ${
                        !post.coverImage
                          ? "donation-story-image-placeholder"
                          : ""
                      }`}
                      style={
                        post.coverImage
                          ? {
                              backgroundImage: `url(${process.env.PUBLIC_URL}/${post.coverImage})`,
                              backgroundPosition: post.coverPosition || "center",
                            }
                          : {}
                      }
                    >

                      {/* PRIVREMENO DOK NEMA SLIKE */}
                      {!post.coverImage && (
                        <div className="donation-image-placeholder-content">

                          <i className="fa-solid fa-heart"></i>

                          <span>
                            Fotografije uskoro
                          </span>

                        </div>
                      )}


                      {/* IZNOS */}
                      <div className="donation-story-amount">
                        {post.amount}
                      </div>

                    </div>


                    {/* SADRŽAJ */}
                    <div className="donation-story-content">

                      <span className="donation-story-label">
                        Humanitarna priča
                      </span>

                      <h3>
                        {post.title}
                      </h3>

                      <h4>
                        {post.subtitle}
                      </h4>

                      <p>
                        {post.excerpt}
                      </p>

                      <span className="donation-story-more">

                        Pročitaj priču

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


      {/* =========================
          CTA
      ========================= */}
      <section className="donations-cta">
        <div className="container">

          <h2>
            Vaša uspomena može biti nečiji novi početak.
          </h2>

          <p>
            Svaki najam instant kamere i svaka podrška pomažu nam
            nastaviti pomagati obiteljima kojima je pomoć
            najpotrebnija.
          </p>

          <Link
            to="/kontakt"
            className="btn-primary-custom"
          >
            Kontaktirajte nas
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Donacije;