import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BackgroundGradient } from './components/BackgroundGradient';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col bg-white">
      <BackgroundGradient />
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8">
        <Hero />
      </main>
      <footer className="w-full py-6 text-center text-sm text-gray-400 relative z-10">
        © {new Date().getFullYear()} Hyrlance Platform. All rights reserved.
      </footer>
    </div>
  );
};

export default App;