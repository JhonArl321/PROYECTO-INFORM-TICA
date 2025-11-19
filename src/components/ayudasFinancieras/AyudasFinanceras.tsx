import RequisitosCard from "./RequisitosCard";
import DocumentosCard from "./DocumentosCard";
import ErroresComunes from "./ErroresComunes";
import { Download } from "lucide-react";

export default function AyudasFinancieras() {
  return (
    <section id="ayudas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ayudas Financieras
          </h2>
          <p className="text-xl text-gray-600">
            Recordamos los siguientes detalles importantes para solicitar y mantener una ayuda financiera en UVG Altiplano.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <RequisitosCard />
          <DocumentosCard />
        </div>

        <ErroresComunes />

        <div className="text-center">
          <a
            href="/guiaAyudaFinanciera.pdf"
            download="Guia_de_Ayuda_Financiera_UVG.pdf"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all hover:scale-105 mx-auto"
          >
            <Download className="mr-2" size={20} />
            Descargar Guía de Ayuda Financiera (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
