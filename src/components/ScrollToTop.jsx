import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Hace scroll al inicio cada vez que cambia de ruta
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
