import { Link } from "react-router-dom";

interface NavbarLinksDesktopProps {
  navigateTo: () => void;
}



// Renderiza los enlaces de navegación visibles en escritorio

export default function NavbarLinksDesktop({ navigateTo }: NavbarLinksDesktopProps) {
  const links = [
    { path: "/", label: "Inicio" },
    { path: "/ayudas", label: "Ayudas Financieras" },
    { path: "/registro", label: "Registro Académico" },
    { path: "/faq", label: "FAQ" },
  ];


  return (
    <div className="hidden md:flex items-center space-x-2">

       {/* Enlaces principales */}
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          onClick={navigateTo}
          className="relative px-4 py-2 text-white font-medium hover:bg-white/20 rounded-lg transition-all duration-300 group overflow-hidden"
        >
          <span className="relative z-10">{link.label}</span>
          <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </Link>
      ))}
      <Link
        to="/contacto"
        onClick={navigateTo}
        className="ml-2 px-4 py-2 text-white font-semibold hover:bg-white/20 rounded-lg transition-colors"
      >
        Contacto
      </Link>
    </div>
  );
}
