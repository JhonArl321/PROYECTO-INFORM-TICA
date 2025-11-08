"use client"

import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import HomePage from "../src/pages/HomePage"
import AyudasPage from "../src/pages/AyudasPage"
import RegistroPage from "../src/pages/RegistroPage"
import ClubsPage from "../src/pages/ClubsPage"
import TestimoniosPage from "../src/pages/TestimoniosPage"
import FAQPage from "../src/pages/FAQPage"
import ContactoPage from "../src/pages/ContactoPage"
import { Routes, Route } from "react-router-dom"

export default function Page() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ayudas" element={<AyudasPage />} />
            <Route path="/registro" element={<RegistroPage />} />
            <Route path="/clubes" element={<ClubsPage />} />
            <Route path="/testimonios" element={<TestimoniosPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
