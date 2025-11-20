import { ClipboardList } from "lucide-react";
import PasoCard from "./PasoCard";
import DescargasCard from "./DescargasCard";
import ErroresCard from "./ErroresCard";

function Reingreso() {
  return (
    <section id="registro" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITULO */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <ClipboardList size={48} className="text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Reingreso para el siguiente ciclo académico
          </h2>
          <p className="text-xl text-gray-600">
            4 pasos que debes realizar para registrar tu inscripción y asignación de cursos
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

          <PasoCard numero="1" color="blue" titulo="Actualización de datos">
            <li>Ingresa a <a className="text-blue-700 underline" href="https://portal.uvg.edu.gt" target="_blank">portal.uvg.edu.gt</a></li>
            <li>Portal de servicios electrónicos</li>
            <li>Ingresa tu usuario y contraseña</li>
            <li>Ingresa a Estudiantes</li>
            <li>Actualización de Datos</li>
          </PasoCard>

          <PasoCard numero="2" color="green" titulo="Inscripción">
            <li>Ingresa a la opción Inscripción y llena los campos requeridos.</li>
          </PasoCard>

          <PasoCard numero="3" color="purple" titulo="Pago de matrícula">
            <li>Paga en caja UVG Altiplano</li>
            <li>O deposita en G&T Continental</li>
            <li>Notifica al correo ca.caja@uvg.edu.gt</li>
          </PasoCard>

          <PasoCard numero="4" color="purple" titulo="Asignación de cursos">
            <li>
              Ingresa a{" "}
              <a
                href="https://asignaciones.uvg.edu.gt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                asignaciones.uvg.edu.gt
              </a>
            </li>
          </PasoCard>

          {/* TARJETA DE DESCARGAS */}
          <DescargasCard />
        </div>

        {/* ERRORES */}
        <ErroresCard />
      </div>
    </section>
  );
}

export default Reingreso;
