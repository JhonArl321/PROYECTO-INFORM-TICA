import { Heart } from 'lucide-react';

const ContactoHeader: React.FC = () => (
  <div className="text-center mb-16">
    <div className="flex justify-center mb-4">
      <Heart size={48} className="text-red-500" />
    </div>
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
      Contacto y Agradecimiento
    </h2>
    <div className="max-w-3xl mx-auto">
      <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
        Agradecemos profundamente a la <strong className="text-green-700">Universidad del Valle de Guatemala, Campus Altiplano</strong>, por abrir las puertas del conocimiento a cientos de jóvenes.
      </p>
      <p className="text-base sm:text-lg text-gray-600 italic">
        Su apoyo ha transformado vidas y ha hecho posible que muchos sueños académicos se conviertan en realidad.
      </p>
    </div>
  </div>
);

export default ContactoHeader;
