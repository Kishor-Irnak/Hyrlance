import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BackgroundGradient } from "./components/BackgroundGradient";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col bg-white">
      <BackgroundGradient />
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8">
        <Hero />
      </main>
      <footer className="w-full py-8 text-center relative z-10 border-t border-gray-100/50">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.instagram.com/hyrlance.space/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-brand-navy transition-colors"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-brand-navy transition-colors"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-brand-navy transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Hyrlance Platform. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
