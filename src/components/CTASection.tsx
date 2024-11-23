import React from 'react';
import { MessageCircle } from 'lucide-react';

export const CTASection = () => (
  <div className="space-y-6 sm:space-y-8">
    <p className="text-base sm:text-lg md:text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed px-4">
      Stay updated and get exclusive launch discounts!
      <br className="hidden sm:block" />
      Join our community now.
    </p>
    
    <button 
      onClick={() => window.open('https://chat.whatsapp.com/KuIQt1BZrBjBJ2jVAupvTs', '_blank')}
      className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-green-600 rounded-full overflow-hidden transition-all duration-300 ease-out hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-900"
    >
      <span className="relative flex items-center gap-2">
        Join Community <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
      </span>
    </button>
  </div>
);