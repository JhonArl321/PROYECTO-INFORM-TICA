import CreadoresCard from "../components/CreadoresCard";

type Creador = {
  nombre: string;
  rol: string;
  foto: string;
};

// aqui va la foto de los creadores 
const Creadores: React.FC = () => {
  const creadores: Creador[] = [
    { nombre: "Juan Alfonso Ralios Larios", rol: "Diseñador & Desarrollador", foto: "/creadoresPagina/juan.jpeg" },
    { nombre: " ", rol: " ", foto: " " },
    { nombre: " ", rol: " ", foto: " " },
    { nombre: " ", rol: " ", foto: " " },
    { nombre: " ", rol: " ", foto: " " },
    { nombre: " ", rol: " ", foto: " " },
    { nombre: " ", rol: " ", foto: " " },
    { nombre: " ", rol: "", foto: " " },
    { nombre: " ", rol: " ", foto: " " },
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
