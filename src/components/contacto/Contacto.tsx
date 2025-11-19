import ContactoHeader from './ContactoHeader';
import ContactoCards from './ContactoCards';
import ContactoMapa from './ContactoMapa';

// Componente principal de la sección de contacto
const Contacto: React.FC = () => (
  <section id="contacto" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     
      <ContactoHeader />
      <ContactoCards />
      <ContactoMapa />
    </div>
  </section>
);

// Exportación del componente principal para uso en otras secciones
export default Contacto;
