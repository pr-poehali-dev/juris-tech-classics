import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface AccordionCardProps {
  title: string;
  content: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function AccordionCard({ title, content, isOpen = false, onToggle }: AccordionCardProps) {
  return (
    <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg shadow-purple-500/5 ring-1 ring-gray-100/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-[1.02]">
      <div 
        className="p-6 cursor-pointer flex items-center justify-between"
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{title}</h3>
        <div className={`transform transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-45' : 'rotate-0'} flex-shrink-0`}>
          <Icon 
            name="Plus" 
            size={24} 
            className="text-purple-600 hover:text-purple-700 transition-colors"
          />
        </div>
      </div>
      
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-0">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
          <p className="text-gray-600 leading-relaxed">{content}</p>
        </div>
      </div>
    </Card>
  );
}