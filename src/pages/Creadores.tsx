import CreadoresCard from "../components/CreadoresCard";

type Creador = {
  nombre: string;
  rol: string;
  foto: string;
};

const Creadores: React.FC = () => {
  const creadores: Creador[] = [
    { nombre: "Juan Alfonso Ralios Larios", rol: "Desarrollador", foto: "/creadoresPagina/juan.jpeg" },
    { nombre: "Nombre 2", rol: "Rol del creador", foto: "/imgs/creador2.jpg" },
    { nombre: "Nombre 3", rol: "Rol del creador", foto: "/imgs/creador3.jpg" },
    { nombre: "Nombre 4", rol: "Rol del creador", foto: "/imgs/creador4.jpg" },
    { nombre: "Nombre 5", rol: "Rol del creador", foto: "/imgs/creador5.jpg" },
    { nombre: "Nombre 6", rol: "Rol del creador", foto: "/imgs/creador6.jpg" },
    { nombre: "Nombre 7", rol: "Rol del creador", foto: "/imgs/creador7.jpg" },
    { nombre: "Nombre 8", rol: "Rol del creador", foto: "/imgs/creador8.jpg" },
    { nombre: "Nombre 9", rol: "Rol del creador", foto: "/imgs/creador9.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-12 drop-shadow-sm">
          Creadores del Proyecto
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {creadores.map((c, i) => (
            <CreadoresCard key={i} nombre={c.nombre} rol={c.rol} foto={c.foto} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Creadores;
