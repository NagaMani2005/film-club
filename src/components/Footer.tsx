import React from 'react';
import { Instagram, Youtube, Video, ExternalLink, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0c0c0c] border-t border-white/5 py-12 text-xs text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand mark */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a
              href="#"
              className="flex items-center gap-1.5 text-lg font-extrabold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5722]"
            >
              <span>FILMCLUB</span>
              <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
            </a>
            <p className="text-xs text-neutral-400 max-w-sm text-center md:text-left">
              The creative brand and network for visionary video editors, colorists, and motion storytellers.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/filmclub.__"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-neutral-300 hover:text-[#FFD166] transition-colors"
              aria-label="Instagram @filmclub.__"
            >
              <Instagram className="w-4 h-4 text-[#FF5722]" />
              <span className="font-mono">@filmclub.__</span>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
              aria-label="YouTube Channel"
            >
              <Youtube className="w-4 h-4 text-red-500" />
              <span>YouTube</span>
            </a>

            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
              aria-label="Vimeo Pro"
            >
              <Video className="w-4 h-4 text-sky-400" />
              <span>Vimeo</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#181818] hover:bg-[#222] text-neutral-300 hover:text-white border border-white/5 transition-colors cursor-pointer text-[11px] font-mono"
            aria-label="Scroll to top"
          >
            <span>TOP OF PAGE</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Minimalist Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Film Club Collective. All master cuts, sound designs, and grades reserved.
          </p>

          <div className="flex items-center gap-6 text-[11px]">
            <a href="#reels" className="hover:text-neutral-300 transition-colors">Showreels</a>
            <span aria-hidden="true">·</span>
            <a href="#about" className="hover:text-neutral-300 transition-colors">Manifesto</a>
            <span aria-hidden="true">·</span>
            <a href="#community" className="hover:text-neutral-300 transition-colors">WhatsApp Network</a>
            <span aria-hidden="true">·</span>
            <a href="#contact" className="hover:text-neutral-300 transition-colors">Client Briefs</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
