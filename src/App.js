import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./pages/Home";
import Onama from "./pages/Onama";
import Proizvodi from "./pages/Proizvodi";
import Paketi from "./pages/Paketi";
import Donacije from "./pages/Donacije";
import Kontakt from "./pages/Kontakt";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nama" element={<Onama />} />
        <Route path="/proizvodi" element={<Proizvodi />} />
        <Route path="/paketi" element={<Paketi />} />
        <Route path="/donacije" element={<Donacije />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </Router>
  );
}

export default App;