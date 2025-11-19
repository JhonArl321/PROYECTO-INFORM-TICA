import { Facebook } from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
    <div>
      <h3 className="font-bold mb-4">Redes Sociales</h3>
      <div className="flex space-x-4">
        <a href="https://altiplano.uvg.edu.gt/" target="_blank"><Facebook size={24} /></a>
    
      </div>
    </div>
  );
};

export default SocialLinks;
