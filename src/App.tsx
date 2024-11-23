import React from 'react';
import { Background } from './components/Background';
import { Header } from './components/Header';
import { CountdownTimer } from './components/CountdownTimer';
import { CTASection } from './components/CTASection';
import { Decorations } from './components/Decorations';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden perspective">
      <Background />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12 md:space-y-16 text-center">
          <Header />
          <CountdownTimer />
          <CTASection />
        </div>
        <Decorations />
      </div>
    </div>
  );
}

export default App;