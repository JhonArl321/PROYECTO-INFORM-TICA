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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#005c3c] shadow-xl" : "bg-[#006341] shadow-lg"
        }`}
    >

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LOGO + NOMBRE */}
          <Link
            to="/"
            className="flex items-center justify-start space-x-3 group cursor-pointer"
            onClick={() => navigateTo()}
          >
            <div className="bg-white/20 backdrop-blur-md p-2 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/30 rounded-lg">
              <img src="/logo1.jpeg" alt="Logo UVG" className="w-12 h-12 object-cover" />
            </div>

            <div className="flex flex-col justify-center">
              <img
                src="/logo2.jpeg"
                alt="Logo UVG Altiplano"
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </div>
          </Link>

          {/* LINKS DESKTOP */}
          <div className="hidden md:flex items-center space-x-2">
            {[
              { path: "/", label: "Inicio" },
              { path: "/ayudas", label: "Ayudas Financieras" },
              { path: "/registro", label: "Reingreso" },
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
              className="ml-2 px-4 py-2 text-white font-semibold  transition-colors duration-300 hover:bg-white/20 rounded-lg "
            >
              Contacto
            </Link>

          </div>

          {/* BOTÓN MENÚ MÓVIL */}
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

          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
