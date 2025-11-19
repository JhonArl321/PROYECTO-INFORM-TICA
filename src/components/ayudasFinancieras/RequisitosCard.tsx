import { CheckCircle } from "lucide-react";

type Requisito = {
  texto: string;
};

const requisitos: Requisito[] = [
  { texto: "Promedio mínimo de 75 puntos" },
  { texto: "Completar 10 horas de beca por ciclo académico" },
  { texto: "Firma del contrato de beca al inicio del ciclo" },
  { texto: "Presentar documentación completa y en tiempo" },
  { texto: "Mantener conducta ejemplar dentro del campus" },
];

export default function RequisitosCard() {
  return (
    <div className="bg-green-50 p-8 rounded-xl shadow-md border border-green-100">
      <div className="flex items-center mb-4">
        <CheckCircle className="text-green-600 mr-3" size={28} />
        <h3 className="text-2xl font-bold text-gray-900">Requisitos</h3>
      </div>
      <ul className="space-y-3 text-gray-700">
        {requisitos.map((r, i) => (
          <li key={i} className="flex items-start">
            <span className="text-green-600 mr-2 mt-1">•</span>
            <span>{r.texto}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
