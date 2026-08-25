import React, { useEffect, useState } from "react";

import {
  Link,
  Navigate,
  useParams,
} from "react-router-dom";

import donationPosts from "../data/donationPosts";

function DonacijaDetalj() {
  const { slug } = useParams();

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const post = donationPosts.find(
    (item) => item.slug === slug
  );

  const images = post?.images || [];

  useEffect(() => {
    if (lightboxIndex === null || !post) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      }

      if (e.key === "ArrowRight" && images.length > 1) {
        setLightboxIndex((current) =>
          current === images.length - 1
            ? 0
            : current + 1
        );
      }

      if (e.key === "ArrowLeft" && images.length > 1) {
        setLightboxIndex((current) =>
          current === 0
            ? images.length - 1
            : current - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, post, images.length]);

  if (!post) {
    return <Navigate to="/donacije" replace />;
  }

  const heroImage = post.coverImage
    ? `${process.env.PUBLIC_URL}/${post.coverImage}`
    : `${process.env.PUBLIC_URL}/np-materijali/donacije-hero.png`;


  const previousImage = (e) => {
    e.stopPropagation();

    setLightboxIndex((current) =>
      current === 0
        ? images.length - 1
        : current - 1
    );
  };


  const nextImage = (e) => {
    e.stopPropagation();

    setLightboxIndex((current) =>
      current === images.length - 1
        ? 0
        : current + 1
    );
  };


  return (
    <main className="donation-detail-page page-fade">

      {/* =========================
          HERO
      ========================= */}
      <section
        className="donation-detail-hero"
        style={{
          backgroundImage: `linear-gradient(
            135deg,
            rgba(35,20,55,0.82),
            rgba(97,58,120,0.67)
          ),
          url(${heroImage})`,

          backgroundPosition:
            post.coverPosition || "center",
        }}
      >
        <div className="container">

          <div className="donation-detail-hero-content">

            <Link
              to="/donacije"
              className="donation-back-link"
            >
              <i className="fa-solid fa-arrow-left"></i>
              Sve donacije
            </Link>

            <span className="section-kicker">
              Humanitarna priča
            </span>

            <h1>
              {post.title}
            </h1>

            <p className="donation-detail-subtitle">
              {post.subtitle}
            </p>


          </div>

        </div>
      </section>


      {/* =========================
          SADRŽAJ BLOGA
      ========================= */}
      <section className="donation-article-section">

        <div className="container">

          <article className="donation-article">


            {/* UVOD */}
            <div className="donation-article-intro">

              {post.intro.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}

            </div>


            {/* =========================
                GALERIJA
            ========================= */}
            {images.length > 0 && (
              <div className="donation-detail-gallery">

                {images.map((image, index) => (
                  <button
                    type="button"
                    className="donation-gallery-item"
                    key={index}
                    onClick={() =>
                      setLightboxIndex(index)
                    }
                    aria-label={`Otvori fotografiju ${index + 1}`}
                  >

                    <img
                      src={`${process.env.PUBLIC_URL}/${image}`}
                      alt={`${post.title} ${index + 1}`}
                    />

                    <span className="gallery-zoom-icon">
                      <i className="fa-solid fa-expand"></i>
                    </span>

                  </button>
                ))}

              </div>
            )}


            {/* =========================
                VIDEO
            ========================= */}
            {post.video && (
              <div className="donation-video-section">

                <div className="donation-video-heading">

                  <span>
                    Pogledajte dio akcije
                  </span>

                  <h2>
                    Trenuci iza pomoći
                  </h2>

                </div>

                <div className="donation-video-wrap">

                  <video
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source
                      src={`${process.env.PUBLIC_URL}/${post.video}`}
                      type="video/mp4"
                    />

                    Vaš preglednik ne podržava prikaz videa.
                  </video>

                </div>

              </div>
            )}


            {/* =========================
                TEKST BLOGA
            ========================= */}
            {post.sections.map(
              (section, sectionIndex) => (
                <section
                  className="donation-article-block"
                  key={sectionIndex}
                >

                  <h2>
                    {section.heading}
                  </h2>

                  {section.paragraphs.map(
                    (
                      paragraph,
                      paragraphIndex
                    ) => (
                      <p key={paragraphIndex}>
                        {paragraph}
                      </p>
                    )
                  )}

                </section>
              )
            )}

          </article>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}
      <section className="donation-detail-cta">

        <div className="container">

          <span className="section-kicker">
            Budi dio priče
          </span>

          <h2>
            I tvoja uspomena može postati dobro djelo.
          </h2>

          <p>
            Najmom instant kamere stvaraš uspomene
            za sebe, a istovremeno pomažeš da podrška
            stigne do onih kojima je potrebna.
          </p>

          <div className="donation-detail-cta-buttons">

            <Link
              to="/paketi"
              className="btn-primary-custom"
            >
              Pogledaj pakete
            </Link>

            <Link
              to="/donacije"
              className="donation-secondary-btn"
            >
              Ostale priče
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          LIGHTBOX GALERIJA
      ========================= */}
      {lightboxIndex !== null && (
        <div
          className="donation-lightbox"
          onClick={() =>
            setLightboxIndex(null)
          }
        >

          {/* ZATVORI */}
          <button
            className="lightbox-close"
            onClick={() =>
              setLightboxIndex(null)
            }
            aria-label="Zatvori galeriju"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>


          {/* LIJEVO */}
          {images.length > 1 && (
            <button
              className="lightbox-arrow lightbox-arrow-left"
              onClick={previousImage}
              aria-label="Prethodna fotografija"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          )}


          {/* SLIKA */}
          <div
            className="lightbox-image-wrap"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <img
              src={`${process.env.PUBLIC_URL}/${images[lightboxIndex]}`}
              alt={`${post.title} ${lightboxIndex + 1}`}
            />

            <div className="lightbox-counter">
              {lightboxIndex + 1} / {images.length}
            </div>

          </div>


          {/* DESNO */}
          {images.length > 1 && (
            <button
              className="lightbox-arrow lightbox-arrow-right"
              onClick={nextImage}
              aria-label="Sljedeća fotografija"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          )}

        </div>
      )}

    </main>
  );
}

export default DonacijaDetalj;