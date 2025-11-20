import { Link } from "react-router-dom";

interface NavbarLinksMobileProps {
  navigateTo: () => void;
}

// Renderiza los enlaces de navegación visibles solo en dispositivos móviles
export default function NavbarLinksMobile({ navigateTo }: NavbarLinksMobileProps) {
  const links = [
    { path: "/", label: "Inicio" },
    { path: "/ayudas", label: "Ayudas Financieras" },
    { path: "/registro", label: "Reingreso" },
    { path: "/faq", label: "FAQ" },
  ];

  return (
    <div className="md:hidden bg-[#005c3c] border-t border-green-500/30">
      <div className="px-4 pt-3 pb-4 space-y-2">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={navigateTo}
            className="block w-full text-left px-4 py-3 text-white font-medium hover:bg-white/20 rounded-lg transition-all"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
