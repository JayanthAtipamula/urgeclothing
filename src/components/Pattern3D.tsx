import React from 'react';

export const Pattern3D = () => (
  <div className="absolute inset-0 w-full h-full">
    <div className="pattern-grid">
      {Array.from({ length: 100 }).map((_, i) => (
        <div 
          key={i} 
          className="pattern-dot"
          style={{
            animationDelay: `${Math.random() * 2}s`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  </div>
);