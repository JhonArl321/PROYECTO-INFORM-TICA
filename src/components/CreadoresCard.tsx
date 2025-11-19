type CreadorCardProps = {
  nombre: string;
  rol: string;
  foto: string;
};

const CreadorCard: React.FC<CreadorCardProps> = ({ nombre, rol, foto }) => {
  return (
    <div className="backdrop-blur-xl bg-white/70 border border-white/60 rounded-2xl shadow-lg p-6 
                    hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center">
      <img
        src={foto}
        alt={nombre}
        className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md"
      />
      <h3 className="text-lg font-semibold text-gray-800">{nombre}</h3>
      <p className="text-green-700 text-sm font-medium">{rol}</p>
    </div>
  );
};

export default CreadorCard;
