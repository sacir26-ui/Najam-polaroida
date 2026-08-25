import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./pages/Home";
import Onama from "./pages/Onama";
import Proizvodi from "./pages/Proizvodi";
import Paketi from "./pages/Paketi";
import Donacije from "./pages/Donacije";
import Kontakt from "./pages/Kontakt";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import DonacijaDetalj from "./pages/DonacijaDetalj";

function App() {
  return (

    
    <Router basename="/sasimovic">
      <ScrollToTop />


      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nama" element={<Onama />} />
        <Route path="/proizvodi" element={<Proizvodi />} />
        <Route path="/paketi" element={<Paketi />} />
        <Route path="/donacije" element={<Donacije />} />
        <Route path="/donacije" element={<Donacije />} />

          <Route
            path="/donacije/:slug"
            element={<DonacijaDetalj />}
          />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>







      <Footer />


    </Router>
  );
}

export default App;