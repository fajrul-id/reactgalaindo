import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import "swiper/css/bundle";
import Home from "./pages/Home/Home";
// import Info from "./pages/Info/Info";
import Kontak from "./pages/Kontak/Kontak";
import Legalitas from "./pages/Legalitas/Legalitas";
import Notfound from "./pages/Notfound/Notfound";
import Produk from "./pages/Produk/Produk";
import Struktur from "./pages/Struktur/Struktur";
import Unitusaha from "./pages/Unitusaha/Unitusaha";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/produk" element={<Produk />} />
        <Route exact path="/struktur" element={<Struktur />} />
        <Route exact path="/kontak" element={<Kontak />} />
        <Route exact path="/unitusaha" element={<Unitusaha />} />
        <Route exact path="/legalitas" element={<Legalitas />} />
        <Route exact path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
