import { Link } from 'react-router-dom';

const QuickLinks: React.FC = () => {
  return (
    <div>
      <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/ayudas">Ayudas Financieras</Link></li>
        <li><Link to="/registro">Reingreso</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/creadores">Creadores</Link></li>
      </ul>
    </div>
  );
};

export default QuickLinks;
