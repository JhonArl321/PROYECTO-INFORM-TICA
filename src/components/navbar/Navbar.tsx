import { useState, useEffect } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinksDesktop from "./NavbarLinksDesktop";
import NavbarLinksMobile from "./NavbarLinksMobile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigateTo = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#005c3c] shadow-xl" : "bg-[#006341] shadow-lg"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <NavbarLogo navigateTo={navigateTo} />
          <NavbarLinksDesktop navigateTo={navigateTo} />
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-300"
            >
              {isOpen ? <span>X</span> : <span>≡</span>}
            </button>
          </div>
        </div>
      </div>
      {isOpen && <NavbarLinksMobile navigateTo={navigateTo} />}
    </nav>
  );
}
