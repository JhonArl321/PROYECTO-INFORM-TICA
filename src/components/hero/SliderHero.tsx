// SliderHero.tsx
import { useState, useEffect } from 'react';
import { GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';

type Slide = {
  image: string;
  title: string;
  subtitle: string;
};

const slides: Slide[] = [
  { image: '/imagen1.jpeg', title: 'Educación de Excelencia', subtitle: 'Formando profesionales del futuro' },
  { image: '/imagen2.jpeg', title: 'Comunidad Estudiantil', subtitle: 'Unidos por el conocimiento' },
  { image: '/imagen3.jpeg', title: 'Oportunidades para Todos', subtitle: 'Becas que transforman vidas' }
];

const SliderHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="flex justify-center mb-6 animate-bounce">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                <GraduationCap size={56} className="text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-2xl animate-fade-in">{slide.title}</h2>
            <p className="text-lg sm:text-xl md:text-2xl font-medium drop-shadow-lg">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Botones de navegación */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group z-10">
        <ChevronLeft size={28} className="text-white group-hover:scale-110 transition-transform" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group z-10">
        <ChevronRight size={28} className="text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)} className={`transition-all duration-300 rounded-full ${index === currentSlide ? 'w-12 h-3 bg-white' : 'w-3 h-3 bg-white/50 hover:bg-white/75'}`} />
        ))}
      </div>
    </div>
  );
};

export default SliderHero;
