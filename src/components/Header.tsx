import React from 'react';

export const Header = () => (
  <div className="space-y-4 sm:space-y-6">
    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
      <img 
        src="https://i.imghippo.com/files/IRsD2704JWo.png" 
        alt="Logo" 
        className="h-16 sm:h-24 md:h-32 object-contain"
      />
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
        Is Coming Soon
      </h1>
    </div>
    <p className="text-lg sm:text-xl text-purple-200 font-light">
      Launching on January 1st, 2025
    </p>
  </div>
);