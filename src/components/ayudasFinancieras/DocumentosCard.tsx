import { FileText } from "lucide-react";

const documentos = [
  "Fotocopia de DPI o cédula",
  "Constancia de ingresos familiares",
  "Carta de solicitud de beca",
  "Record de notas actualizado",
  "Formulario de inscripción completo",
];

export default function DocumentosCard() {
  return (
    <div className="bg-blue-50 p-8 rounded-xl shadow-md border border-blue-100">
      <div className="flex items-center mb-4">
        <FileText className="text-blue-600 mr-3" size={28} />
        <h3 className="text-2xl font-bold text-gray-900">Documentos Necesarios</h3>
      </div>
      <ul className="space-y-3 text-gray-700">
        {documentos.map((d, i) => (
          <li key={i} className="flex items-start">
            <span className="text-blue-600 mr-2 mt-1">•</span>
            <span>{d}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
