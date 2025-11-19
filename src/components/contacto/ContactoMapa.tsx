const ContactoMapa: React.FC = () => (
  <div className="mt-16">
    <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">
      Encuéntranos en el mapa
    </h3>
    <div className="rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto border border-gray-200">
      <iframe
        title="Ubicación UVG Altiplano"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.786027127874!2d-91.1516!3d14.7666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85894ce37cda87a1%3A0xfd74b201234cd85f!2sUniversidad%20del%20Valle%20de%20Guatemala%20Campus%20Altiplano!5e0!3m2!1ses!2sgt!4v1705000000000!5m2!1ses!2sgt"
        width="100%"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>
    </div>
    <div className="text-center mt-4">
      <a
        href="https://maps.app.goo.gl/RqUoDvJAWh8uCRUi6"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105"
      >
        Abrir en Google Maps
      </a>
    </div>
  </div>
);

export default ContactoMapa;
