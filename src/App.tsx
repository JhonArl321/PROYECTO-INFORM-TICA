import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import AyudasPage from "./pages/AyudasPage";
import RegistroPage from "./pages/RegistroPage";
import ClubsPage from "./pages/ClubsPage";
import FAQPage from "./pages/FAQPage";
import ContactoPage from "./pages/ContactoPage";
import ScrollToTop from "./components/ScrollToTop";
import Creadores from "./pages/Creadores"; 
import Galeria from "./components/hero/Galeria";


function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollToTop />  

      <Navbar />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ayudas" element={<AyudasPage />} />
          <Route path="/registro" element={<RegistroPage />} />
          <Route path="/clubes" element={<ClubsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/creadores" element={<Creadores />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
