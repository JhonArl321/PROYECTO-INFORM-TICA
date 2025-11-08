import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">Proyecto de Agradecimiento</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              UVG Altiplano
            </p>
            <p className="text-green-400 italic font-medium">
              "Educando para transformar vidas"
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-green-400 transition-colors">Inicio</Link></li>
              <li><Link to="/ayudas" className="hover:text-green-400 transition-colors">Ayudas Financieras</Link></li>
              <li><Link to="/registro" className="hover:text-green-400 transition-colors">Registro Académico</Link></li>
              <li><Link to="/clubes" className="hover:text-green-400 transition-colors">Clubes</Link></li>
              <li><Link to="/testimonios" className="hover:text-green-400 transition-colors">Testimonios</Link></li>
              <li><Link to="/faq" className="hover:text-green-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://altiplano.uvg.edu.gt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  altiplano.uvg.edu.gt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              En recuerdo de los estudiantes del Técnico en Informática de la UVG Altiplano, como muestra de gratitud por el apoyo financiero recibido durante dos años. Página desarrollada en el año 2025.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
