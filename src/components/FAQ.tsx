import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: '¿Qué necesito para aplicar a una beca?',
      answer: 'Necesitas mantener un promedio mínimo de 75 puntos, completar 10 horas de beca por ciclo, presentar documentación completa (DPI, constancia de ingresos, carta de solicitud), y firmar el contrato de beca al inicio del ciclo académico.',
    },
    {
      question: '¿Dónde descargo el formulario de inscripción?',
      answer: 'El formulario de inscripción está disponible en el portal web de UVG Altiplano. También puedes solicitarlo directamente en el departamento de Registro Académico o contactar por WhatsApp para recibir el enlace directo.',
    },
    {
      question: '¿Qué promedio debo mantener para conservar mi beca?',
      answer: 'Debes mantener un promedio mínimo de 75 puntos durante todo el ciclo académico. Si tu promedio baja de este nivel, podrías perder el beneficio de la beca.',
    },
    {
      question: '¿Qué hago si no me llega el correo de confirmación?',
      answer: 'Primero revisa tu carpeta de spam o correo no deseado. Si no lo encuentras, contacta al departamento de Registro Académico por WhatsApp o correo electrónico con tu número de DPI para verificar el estatus de tu inscripción.',
    },
    {
      question: '¿Cómo propongo un nuevo club estudiantil?',
      answer: 'Necesitas reunir al menos 5 miembros fundadores, definir objetivos claros, crear un cronograma de actividades y presentar una propuesta formal a Coordinación Estudiantil. La propuesta debe incluir el propósito del club y un plan de trabajo.',
    },
    {
      question: '¿Cuándo son las fechas de inscripción?',
      answer: 'Las inscripciones se realizan dos veces al año: en la primera semana de enero para el ciclo de enero, y en la primera semana de julio para el ciclo de julio. Te recomendamos estar atento a las publicaciones oficiales.',
    },
    {
      question: '¿Puedo trabajar más de 10 horas de beca por ciclo?',
      answer: 'El requisito mínimo son 10 horas por ciclo, pero en algunos casos especiales podrías completar más horas según lo acuerdes con tu coordinador de beca. Esto debe ser autorizado previamente.',
    },
    {
      question: '¿Qué pasa si no cumplo con las horas de beca?',
      answer: 'No cumplir con las 10 horas de beca obligatorias puede resultar en la suspensión o pérdida del beneficio. Es importante comunicarte con tu coordinador si tienes algún inconveniente para completarlas a tiempo.',
    },
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
          <p className="text-xl text-gray-600">
            Resolvemos tus dudas más comunes
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-600 text-white p-8 rounded-xl shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-3">¿No encuentras tu respuesta?</h3>
          <p className="mb-6">
            Nuestro equipo está listo para ayudarte con cualquier duda adicional
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Contáctanos Ahora
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
