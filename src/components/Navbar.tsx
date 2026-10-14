import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#121212]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/60'
          : 'bg-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-1.5 text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5722]"
            aria-label="Film Club Home"
          >
            <span>FILMCLUB</span>
            <span className="w-2 h-2 rounded-full bg-[#FF5722] inline-block transition-transform duration-300 group-hover:scale-125" />
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a
              href="#reels"
              className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-[#FF5722]"
            >
              Reels
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-[#FF5722]"
            >
              About
            </a>
            <a
              href="#community"
              className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-[#FF5722]"
            >
              Community
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-[#FF5722]"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenJoinModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#FFD166] hover:bg-[#ffe18a] active:bg-[#f5b700] rounded-sm transition-all duration-200 shadow-md shadow-[#FFD166]/10 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5722]"
            >
              <span>Join Club</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5722]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161616] border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            <a
              href="#reels"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-neutral-300 hover:text-white transition-colors py-1"
            >
              Reels
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-neutral-300 hover:text-white transition-colors py-1"
            >
              About
            </a>
            <a
              href="#community"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-neutral-300 hover:text-white transition-colors py-1"
            >
              Community
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-neutral-300 hover:text-white transition-colors py-1"
            >
              Contact
            </a>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#FFD166] hover:bg-[#ffe18a] rounded-sm transition-colors cursor-pointer"
            >
              <span>Join Club</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
