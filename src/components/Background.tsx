import React from 'react';
import { Pattern3D } from './Pattern3D';

export const Background = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    <Pattern3D />
    <div className="absolute w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
    <div className="absolute w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000 right-0"></div>
    <div className="absolute w-48 sm:w-96 h-48 sm:h-96 bg-indigo-500/10 rounded-full blur-3xl animate-blob animation-delay-4000 bottom-0"></div>
  </div>
);