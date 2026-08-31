import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const closeMenu = () => {
    const navbar = document.getElementById("mainNavbar");
    const toggler = document.querySelector(
      '[data-bs-target="#mainNavbar"]'
    );

    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }

    if (toggler) {
      toggler.setAttribute("aria-expanded", "false");
      toggler.classList.add("collapsed");
    }
  };

  return (
    <nav className="custom-navbar navbar navbar-expand-lg">
      <div className="container">

        {/* LOGO */}
        <NavLink
          className="navbar-brand custom-brand"
          to="/"
          onClick={closeMenu}
        >
          <img
            src={
              process.env.PUBLIC_URL +
              "/np-materijali/logo.png"
            }
            alt="Najam Polaroida"
            className="logo"
          />
        </NavLink>


        {/* HAMBURGER */}
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Otvori navigaciju"
        >
          <span className="premium-toggler-icon">
            <span></span>
            <span></span>
          </span>
        </button>


        {/* NAVIGACIJA */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="mainNavbar"
        >
          <ul className="navbar-nav align-items-lg-center custom-nav-list">

            <li className="nav-item">
              <NavLink
                className="nav-link custom-nav-link"
                to="/"
                end
                onClick={closeMenu}
              >
                Naslovna
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                className="nav-link custom-nav-link"
                to="/o-nama"
                onClick={closeMenu}
              >
                O nama
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                className="nav-link custom-nav-link"
                to="/proizvodi"
                onClick={closeMenu}
              >
                Proizvodi i usluge
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                className="nav-link custom-nav-link"
                to="/paketi"
                onClick={closeMenu}
              >
                Paketi
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                className="nav-link custom-nav-link"
                to="/donacije"
                onClick={closeMenu}
              >
                Donacije
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                className="nav-link custom-nav-link nav-contact-btn"
                to="/kontakt"
                onClick={closeMenu}
              >
                Kontakt
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;