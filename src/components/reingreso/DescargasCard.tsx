import { Download } from "lucide-react";

function DescargasCard() {
    return (
        <div className=" p-8 rounded-xl flex flex-col justify-center items-center space-y-4">
            <a
                href="/instructivospdf/inscripcion.pdf"
                download="Instructivo_inscripcion_UVG.pdf"
                className="animate-wobble inline-flex items-center bg-purple-600 hover:bg-black text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all w-full max-w-xs text-center"
            >
                <Download className="mr-2" size={20} />
                Descargar instructivo de Inscripción
            </a>

            <a
                href="/instructivospdf/asignacionCursos.pdf"
                download="Instructivo_asignacionCursos_UVG.pdf"
                className="animate-wobble flex justify-center items-center bg-green-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all w-full max-w-xs text-center"
            >
                <Download className="mr-2" size={20} />
                Descargar instructivo de asignacion de cursos
            </a>

        </div>
    );
}

export default DescargasCard;
