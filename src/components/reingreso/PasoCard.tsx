import { ReactNode } from 'react';

interface PasoCardProps {
  numero: number | string;
  color: string;
  titulo: string;
  children?: ReactNode;
}

function PasoCard({ numero, color, titulo, children }: PasoCardProps) {
  return (
    <div className={`bg-white p-8 rounded-xl shadow-lg border-t-4 border-${color}-600`}>
      <div className="text-center mb-4">
        <div className={`bg-${color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
          <span className={`text-2xl font-bold text-${color}-600`}>{numero}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900">{titulo}</h3>
      </div>

      <ul className="space-y-3 text-gray-700">{children}</ul>
    </div>
  );
}

export default PasoCard;
