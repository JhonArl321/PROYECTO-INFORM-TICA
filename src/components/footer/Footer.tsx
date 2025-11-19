import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';
import QuickLinks from './QuickLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between gap-8">
        <ContactInfo />
        <QuickLinks />
        <SocialLinks />
      </div>

    
      <div className="mt-8 text-center text-gray-400 px-4 sm:px-6 lg:px-8">
        &copy; 2025 — En recuerdo de los estudiantes del Técnico en Informática de la UVG Altiplano, como muestra de gratitud por el apoyo financiero brindado durante dos años.
      </div>
    </footer>
  );
};

export default Footer;
