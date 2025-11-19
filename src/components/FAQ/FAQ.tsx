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
  {
    question: "¿Qué necesito para aplicar a una beca?",
    answer: "Debes estar inscrito en la universidad, llenar un formulario en línea cada año (hay guía paso a paso), enviar documentos en PDF de identificación personal y económica, y mantener un promedio mínimo de 75 puntos. Además, se debe aprobar todos los cursos y cumplir 10 horas de beca por ciclo."
  },
  {
    question: "¿Dónde descargo el formulario de inscripción?",
    answer: "El formulario se encuentra disponible en línea. Hay enlaces distintos según si eres estudiante de primer ingreso o de reingreso, y se facilita una guía paso a paso para llenarlo correctamente."
  },
  {
    question: "¿Qué promedio debo mantener para conservar mi beca?",
    answer: "Debes mantener un promedio mínimo de 75 puntos y aprobar todos los cursos obligatorios."
  },
  {
    question: "¿Qué hago si no me llega el correo de confirmación?",
    answer: "Primero revisa tu carpeta de spam. Si hay problemas, puedes reportarlo al soporte técnico para recibir asistencia."
  },
  {
    question: "¿Cómo propongo un nuevo club estudiantil?",
    answer: "Necesitas formar un grupo organizado, definir el fin del club, establecer días de reunión y un cronograma de actividades. La encargada del departamento realizará un monitoreo para asegurar que se cumplan las metas."
  },
  {
    question: "¿Cuándo son las fechas de inscripción?",
    answer: "Las inscripciones se realizan dos veces al año: del 1 al 31 de enero y del 1 al 31 de julio. Los demás meses el sistema está cerrado."
  },
  {
    question: "¿Puedo trabajar más de 10 horas de beca por ciclo?",
    answer: "El requisito mínimo son 10 horas por ciclo. Cumplir más no es obligatorio, pero se debe respetar el mínimo establecido."
  },
  {
    question: "¿Qué pasa si no cumplo con las horas de beca?",
    answer: "No cumplir con las horas obligatorias puede afectar la continuidad de tu beca, ya que es un requisito formal del contrato."
  },
  {
    question: "¿Qué consultas reciben más frecuentemente los estudiantes?",
    answer: "Principalmente sobre los requisitos para aplicar a becas y cómo llenar los formularios correctamente, recuperación de contraseña, documentos requeridos, y cómo organizar clubes o actividades estudiantiles."
  },
  {
    question: "¿Cuál es el canal más utilizado para consultas?",
    answer: "Para consultas rápidas y dudas generales, WhatsApp es el canal preferido. Para documentos formales o envío de PDFs, se utiliza el correo electrónico."
  },
  {
    question: "¿Qué errores suelen cometer los estudiantes al llenar formularios?",
    answer: "Los errores más comunes son ingresar datos financieros incompletos o incorrectos, dejar campos vacíos, poner información personal incompleta y no incluir contacto para seguimiento."
  },
  {
    question: "¿Qué debo entregar para estudiar o inscribirme?",
    answer: "Documentos de identificación (DPI o partida de nacimiento), correo electrónico personal, comprobante de pago y, en el primer ingreso, título de estudios si aplica. Toda inscripción es supervisada y cualquier error se corrige antes de finalizar el proceso."
  },
  {
    question: "¿Cómo se organizan las actividades estudiantiles?",
    answer: "Los grupos deben planificar la actividad o club con cronograma y objetivos. Avisar con al menos un mes de anticipación para solicitar espacios y permisos necesarios. Todo se supervisa para garantizar que se cumplan las metas."
  }
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
