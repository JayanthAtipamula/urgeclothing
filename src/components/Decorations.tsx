import React from 'react';
import { Sparkles } from 'lucide-react';

export const Decorations = () => (
  <>
    <Sparkles className="absolute top-8 sm:top-12 left-8 sm:left-12 text-purple-400/20 w-6 h-6 sm:w-8 sm:h-8 animate-pulse" />
    <Sparkles className="absolute bottom-8 sm:bottom-12 right-8 sm:right-12 text-purple-400/20 w-6 h-6 sm:w-8 sm:h-8 animate-pulse animation-delay-2000" />
  </>
);