import { AlertCircle } from "lucide-react";

const errores = [
  "No cumplir con las 10 horas de beca en el periodo establecido",
  "Entregar documentación incompleta o fuera de plazo",
  "No firmar el contrato de beca antes de iniciar el ciclo",
  "Dejar que el promedio baje de 75 puntos",
];

export default function ErroresComunes() {
  return (
    <div className="bg-red-50 p-8 rounded-xl shadow-md border border-red-100 mb-8">
      <div className="flex items-center mb-4">
        <AlertCircle className="text-red-600 mr-3" size={28} />
        <h3 className="text-2xl font-bold text-gray-900">Errores Comunes a Evitar</h3>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
        {errores.map((e, i) => (
          <div key={i} className="flex items-start">
            <span className="text-red-600 mr-2 mt-1">✗</span>
            <span>{e}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
