"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigateTo = () => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#005c3c] shadow-xl" // Verde UVG al hacer scroll
          : "bg-[#006341] shadow-lg" // Verde institucional UVG
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LOGO + NOMBRE */}
          <Link
            to="/"
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => navigateTo()}
          >
            <div className="bg-white/20 backdrop-blur-md p-2 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/30 rounded-lg">
              <img src="/uvg.png" alt="Logo UVG" className="w-12 h-12 object-cover" />



            </div>

            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                UVG Altiplano
              </h1>
              <p className="text-xs text-green-100 hidden sm:block">
                Excelencia que trasciende
              </p>
            </div>
          </Link>

          {/* LINKS EN DESKTOP */}
          <div className="hidden md:flex items-center space-x-2">
            {[
              { path: "/", label: "Inicio" },
              { path: "/ayudas", label: "Ayudas Financieras" },
              { path: "/registro", label: "Registro Académico" },
              { path: "/clubes", label: "Clubes" },
              // { path: "/testimonios", label: "Testimonios" },
              { path: "/faq", label: "FAQ" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => navigateTo()}
                className="relative px-4 py-2 text-white font-medium hover:bg-white/20 rounded-lg transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            ))}

            <Link
              to="/contacto"
              onClick={() => navigateTo()}
              className="ml-2 px-5 py-2.5 bg-white text-[#006341] font-bold rounded-lg hover:bg-green-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Contacto
            </Link>
          </div>

          {/* BOTÓN MENU MÓVIL */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {isOpen && (
        <div className="md:hidden bg-[#005c3c] border-t border-green-500/30">
          <div className="px-4 pt-3 pb-4 space-y-2">
            {[
              { path: "/", label: "Inicio" },
              { path: "/ayudas", label: "Ayudas Financieras" },
              { path: "/registro", label: "Registro Académico" },
              { path: "/clubes", label: "Clubes" },
              { path: "/testimonios", label: "Testimonios" },
              { path: "/faq", label: "FAQ" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => navigateTo()}
                className="block w-full text-left px-4 py-3 text-white font-medium hover:bg-white/20 rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contacto"
              onClick={() => navigateTo()}
              className="block w-full text-left px-4 py-3 bg-white text-[#006341] font-bold hover:bg-green-50 rounded-lg transition-all duration-300 shadow-md"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
