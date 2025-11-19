import ContactCard from './ContactCard';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

const ContactoCards: React.FC = () => (
  <div className="grid md:grid-cols-3 gap-8 mb-12">
    <ContactCard 
      icon={<Mail size={32} className="text-white" />} 
      title="Nuestros correos" 
      bg="bg-gradient-to-br from-green-50 to-teal-50" 
      border="border border-green-100"
    >
      <p className="text-center text-gray-700 mb-2">Departamento de Becas:</p>
      <p className="block text-center text-green-700 font-semibold hover:text-green-800 transition-colors">smtale@uvg.edu.gt</p>
      <p className="text-center text-gray-700 mt-4 mb-2">Registro Académico:</p>
      <p className="block text-center text-green-700 font-semibold hover:text-green-800 transition-colors">gmmacario@uvg.edu.gt</p>
    </ContactCard>

    <ContactCard 
      icon={<MessageCircle size={32} className="text-white" />} 
      title="WhatsApp" 
      bg="bg-gradient-to-br from-blue-50 to-purple-50" 
      border="border border-blue-100"
    >
      <p className="text-center text-gray-700 mb-4">Atención a ayudas financieras</p>
      <a href="https://wa.me/50253048803" target="_blank" rel="noopener noreferrer" className="block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">+502 5304-8803</a>
      <p className="text-center text-gray-600 text-sm mt-4">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
    </ContactCard>

    <ContactCard 
      icon={<MapPin size={32} className="text-white" />} 
      title="Ubicación" 
      bg="bg-gradient-to-br from-orange-50 to-red-50" 
      border="border border-orange-100"
    >
      <p className="text-center text-gray-700 mb-2">Campus Altiplano</p>
      <p className="text-center text-gray-600 text-sm leading-relaxed">Sololá, Guatemala</p>
      <a href="https://altiplano.uvg.edu.gt/" target="_blank" rel="noopener noreferrer" className="block text-center text-orange-700 font-semibold hover:text-orange-800 transition-colors mt-4">Visitar Sitio Web Oficial</a>
    </ContactCard>
  </div>
);

export default ContactoCards;
