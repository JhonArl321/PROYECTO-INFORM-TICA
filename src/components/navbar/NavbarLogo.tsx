import { Link } from "react-router-dom";



interface NavbarLogoProps {
  navigateTo: () => void;
}

// Muestra los logos y redirige al inicio al hacer clic

export default function NavbarLogo({ navigateTo }: NavbarLogoProps) {
  return (
    <Link to="/" className="flex items-center space-x-3" onClick={navigateTo}>
      <div className="bg-white/20 p-2 shadow-lg rounded-lg">
        <img src="/logo1.jpeg" alt="Logo UVG" className="w-12 h-12 object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <img src="/logo2.jpeg" alt="Logo UVG Altiplano" className="h-12 sm:h-16 w-auto object-contain" />
      </div>
    </Link>
  );
}
