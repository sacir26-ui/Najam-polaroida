import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="custom-navbar navbar navbar-expand-lg">
      <div className="container">

        <Link className="navbar-brand custom-brand" to="/">
          <img
            src={process.env.PUBLIC_URL + "/np-materijali/logo.png"}
            alt="Najam Polaroida"
            className="logo" 
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
          <ul className="navbar-nav align-items-lg-center custom-nav-list">

            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/o-nama">
                O nama
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/proizvodi">
                Proizvodi i usluge
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/paketi">
                Paketi
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/donacije">
                Donacije
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-nav-link nav-contact-btn" to="/kontakt">
                Kontakt
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;