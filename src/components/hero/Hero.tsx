
import SliderHero from './SliderHero';
import Clubes from './Clubes';
import Galeria from './Galeria';
import Agradecimiento from './Agradecimiento';

// incluye slider, agradecimiento, clubes y galería
const Hero: React.FC = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-green-50 to-blue-50">
      <SliderHero />
      <Agradecimiento />
      <Clubes />
      <Galeria />
    </section>
  );
};

export default Hero;
