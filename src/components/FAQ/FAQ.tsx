import { useState } from "react";
import { HelpCircle } from "lucide-react";
import FAQItem from "./FAQItem";
import FAQContacto from "./FAQContacto";

interface FAQData {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQData[] = [
    { question: "¿Qué necesito para aplicar a una beca?", answer: "Necesitas mantener un promedio mínimo de 75 puntos..." },
    { question: "¿Dónde descargo el formulario de inscripción?", answer: "El formulario de inscripción está disponible..." },
    { question: "¿Qué promedio debo mantener para conservar mi beca?", answer: "Debes mantener un promedio mínimo de 75 puntos..." },
    { question: "¿Qué hago si no me llega el correo de confirmación?", answer: "Primero revisa tu carpeta de spam..." },
    { question: "¿Cómo propongo un nuevo club estudiantil?", answer: "Necesitas reunir al menos 5 miembros fundadores..." },
    { question: "¿Cuándo son las fechas de inscripción?", answer: "Las inscripciones se realizan dos veces al año..." },
    { question: "¿Puedo trabajar más de 10 horas de beca por ciclo?", answer: "El requisito mínimo son 10 horas por ciclo..." },
    { question: "¿Qué pasa si no cumplo con las horas de beca?", answer: "No cumplir con las 10 horas de beca obligatorias..." },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <HelpCircle size={48} className="text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600">Resolvemos tus dudas más comunes</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <FAQContacto />
      </div>
    </section>
  );
}
