interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  bg: string;     // fondo de la tarjeta
  border: string; // borde de la tarjeta
  children: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, bg, border, children }) => {
  return (
    <div className={`${bg} ${border} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all`}>
      {/* Círculo con el icono */}
      <div className="flex justify-center mb-4">
        <div className="p-4 rounded-full bg-green-600">
          {icon}
        </div>
      </div>

      {/* Título de la tarjeta */}
      <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{title}</h3>

      {/* Contenido de la tarjeta */}
      {children}
    </div>
  );
};

export default ContactCard;
