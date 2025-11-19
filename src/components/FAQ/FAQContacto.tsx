export default function FAQContacto() {
  return (
    <div className="mt-12 bg-blue-600 text-white p-8 rounded-xl shadow-lg text-center">
      <h3 className="text-2xl font-bold mb-3">¿No encuentras tu respuesta?</h3>
      <p className="mb-6">
        Nuestro equipo está listo para ayudarte con cualquier duda adicional
      </p>
      <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
        <a href="https://wa.me/53048803" target="_blank">
          Escríbenos por WhatsApp
        </a>
      </button>
    </div>
  );
}
