import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

type TimeUnit = {
  value: number;
  label: string;
};

const TimeBox = ({ value, label }: TimeUnit) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 sm:p-4 md:p-6">
    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
      {value.toString().padStart(2, '0')}
    </div>
    <div className="text-xs sm:text-sm md:text-base text-purple-200 capitalize mt-1">
      {label}
    </div>
  </div>
);

export const CountdownTimer = () => {
  const timeLeft = useCountdown();
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 md:gap-8 w-full max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto">
      {Object.entries(timeLeft).map(([label, value]) => (
        <TimeBox key={label} value={value} label={label} />
      ))}
    </div>
  );
};