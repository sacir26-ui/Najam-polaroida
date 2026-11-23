import React, { useEffect, useState } from "react";

const STORAGE_KEY = "najam_polaroida_cookie_consent";

function CookieConsent() {

  const [showBanner, setShowBanner] = useState(false);

  const [showSettings, setShowSettings] = useState(false);

  const [hasChoice, setHasChoice] = useState(false);

  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });


  /* =====================================================
     GOOGLE CONSENT UPDATE
  ====================================================== */

  const updateGoogleConsent = (prefs) => {

    window.dataLayer = window.dataLayer || [];

    window.gtag =
      window.gtag ||
      function () {
        window.dataLayer.push(arguments);
      };


    window.gtag("consent", "update", {

      analytics_storage:
        prefs.analytics
          ? "granted"
          : "denied",

      ad_storage:
        prefs.marketing
          ? "granted"
          : "denied",

      ad_user_data:
        prefs.marketing
          ? "granted"
          : "denied",

      ad_personalization:
        prefs.marketing
          ? "granted"
          : "denied",

      functionality_storage: "granted",

      security_storage: "granted",
    });


    window.dataLayer.push({
      event: "consent_updated",

      consent_analytics:
        prefs.analytics
          ? "granted"
          : "denied",

      consent_marketing:
        prefs.marketing
          ? "granted"
          : "denied",
    });
  };


  /* =====================================================
     UČITAJ POSTOJEĆI ODABIR
  ====================================================== */

  useEffect(() => {

    try {

      const saved =
        localStorage.getItem(STORAGE_KEY);


      if (!saved) {

        setShowBanner(true);

        return;
      }


      const parsed =
        JSON.parse(saved);


      const savedPreferences = {

        analytics:
          parsed.analytics === true,

        marketing:
          parsed.marketing === true,
      };


      setPreferences(savedPreferences);

      setHasChoice(true);

      updateGoogleConsent(
        savedPreferences
      );

    } catch (error) {

      setShowBanner(true);
    }

  }, []);


  /* =====================================================
     SPREMI PRIVOLU
  ====================================================== */

  const savePreferences = (prefs) => {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(prefs)
    );


    setPreferences(prefs);

    setHasChoice(true);

    setShowBanner(false);

    setShowSettings(false);


    updateGoogleConsent(prefs);
  };


  /* =====================================================
     PRIHVATI SVE
  ====================================================== */

  const acceptAll = () => {

    savePreferences({
      analytics: true,
      marketing: true,
    });
  };


  /* =====================================================
     ODBIJ NEOBAVEZNE
  ====================================================== */

  const rejectOptional = () => {

    savePreferences({
      analytics: false,
      marketing: false,
    });
  };


  /* =====================================================
     SPREMI POSTAVKE
  ====================================================== */

  const saveCustomSettings = () => {

    savePreferences(preferences);
  };


  /* =====================================================
     ZATVORI POSTAVKE
  ====================================================== */

  
const closeSettings = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const parsed = JSON.parse(saved);

      setPreferences({
        analytics: parsed?.analytics === true,
        marketing: parsed?.marketing === true
      });
    } else {
      setPreferences({
        analytics: false,
        marketing: false
      });
    }
  } catch (error) {
    setPreferences({
      analytics: false,
      marketing: false
    });
  }

  setShowSettings(false);

  if (!hasChoice) {
    setShowBanner(true);
  }
};



  return (
    <>

      {/* =================================================
          GUMB ZA PONOVNO OTVARANJE POSTAVKI
      ================================================= */}

      {hasChoice &&
        !showBanner &&
        !showSettings && (

          <button
            type="button"
            className="cookie-settings-button"
            onClick={() =>
              setShowSettings(true)
            }
          >
            <i className="fa-solid fa-cookie-bite"></i>

            <span>
              Postavke kolačića
            </span>
          </button>

        )}



      {/* =================================================
          COOKIE BANNER
      ================================================= */}

      {showBanner && (

        <div className="cookie-consent-banner">

          <div className="cookie-consent-content">

            <div className="cookie-consent-icon">

              <i className="fa-solid fa-cookie-bite"></i>

            </div>


            <div className="cookie-consent-text">

              <h3>
                Vaša privatnost nam je važna
              </h3>

              <p>
                Koristimo nužne tehnologije za rad stranice,
                a uz vašu privolu možemo koristiti analitičke
                i marketinške kolačiće za mjerenje posjeta,
                poboljšanje stranice i praćenje učinkovitosti oglasa.
              </p>

            </div>


            <div className="cookie-consent-actions">

              <button
                type="button"
                className="cookie-btn cookie-btn-primary"
                onClick={acceptAll}
              >
                Prihvati sve
              </button>


              <button
                type="button"
                className="cookie-btn cookie-btn-secondary"
                onClick={rejectOptional}
              >
                Odbij neobavezne
              </button>


              <button
                type="button"
                className="cookie-btn cookie-btn-link"
                onClick={() => {

                  setShowBanner(false);

                  setShowSettings(true);

                }}
              >
                Postavke
              </button>

            </div>

          </div>

        </div>

      )}



      {/* =================================================
          POSTAVKE KOLAČIĆA
      ================================================= */}

      {showSettings && (

        <div
          className="cookie-settings-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Postavke kolačića"
        >

          <div className="cookie-settings-modal">

            <button
              type="button"
              className="cookie-settings-close"
              onClick={closeSettings}
              aria-label="Zatvori"
            >
              ×
            </button>


            <h3>
              Postavke privatnosti
            </h3>


            <p className="cookie-settings-intro">

              Sami odaberite koje vrste
              kolačića želite dopustiti.

            </p>



            {/* NUŽNI */}

            <div className="cookie-category">

              <div>

                <strong>
                  Nužni
                </strong>

                <p>
                  Potrebni su za osnovno
                  funkcioniranje stranice.
                </p>

              </div>


              <span className="cookie-always-active">

                Uvijek aktivni

              </span>

            </div>



            {/* ANALITIKA */}

            <div className="cookie-category">

              <div>

                <strong>
                  Analitički
                </strong>

                <p>
                  Omogućuju nam razumjeti
                  kako posjetitelji koriste stranicu
                  putem Google Analyticsa.
                </p>

              </div>


              <label className="cookie-switch">

                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      analytics:
                        e.target.checked,
                    })
                  }
                />

                <span className="cookie-slider"></span>

              </label>

            </div>



            {/* MARKETING */}

            <div className="cookie-category">

              <div>

                <strong>
                  Marketinški
                </strong>

                <p>
                  Koriste se za mjerenje
                  učinkovitosti Google oglasa
                  i oglasnih konverzija.
                </p>

              </div>


              <label className="cookie-switch">

                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      marketing:
                        e.target.checked,
                    })
                  }
                />

                <span className="cookie-slider"></span>

              </label>

            </div>



            <div className="cookie-settings-actions">

              <button
                type="button"
                className="cookie-btn cookie-btn-primary"
                onClick={saveCustomSettings}
              >
                Spremi postavke
              </button>


              <button
                type="button"
                className="cookie-btn cookie-btn-secondary"
                onClick={rejectOptional}
              >
                Odbij neobavezne
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default CookieConsent;