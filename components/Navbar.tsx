import React from "react";
import { Layers } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center relative z-20">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm overflow-hidden border border-gray-100">
          <img
            src="/apple-touch-icon.png"
            alt="Hyrlance Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-bold text-xl tracking-tight text-brand-navy">
          Hyrlance
        </span>
      </div>
      <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
        <a href="#" className="hover:text-brand-navy transition-colors">
          Twitter
        </a>
        <a
          href="https://www.instagram.com/hyrlance.space/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-navy transition-colors"
        >
          Instagram
        </a>
        <a href="#" className="hover:text-brand-navy transition-colors">
          LinkedIn
        </a>
        <a
          href="mailto:hello@hyrlance.com"
          className="hover:text-brand-navy transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};
