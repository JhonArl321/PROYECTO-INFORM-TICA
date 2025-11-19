import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
        ) : (
          <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-5 pt-2">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
