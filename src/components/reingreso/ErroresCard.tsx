import { AlertTriangle } from "lucide-react";

function ErroresCard() {
  return (
    <div className="bg-yellow-50 p-8 rounded-xl shadow-lg border border-yellow-200">
      <div className="flex items-center mb-4">
        <AlertTriangle size={28} className="text-yellow-600 mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">Errores Comunes</h3>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
        <div className="flex items-start"><span className="text-yellow-600 mr-2 mt-1">⚠</span>Usar correo institucional</div>
        <div className="flex items-start"><span className="text-yellow-600 mr-2 mt-1">⚠</span>Subir documentos incorrectos</div>
        <div className="flex items-start"><span className="text-yellow-600 mr-2 mt-1">⚠</span>No verificar datos</div>
        <div className="flex items-start"><span className="text-yellow-600 mr-2 mt-1">⚠</span>Omitir campos obligatorios</div>
      </div>
    </div>
  );
}

export default ErroresCard;
