import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenReelModal: (reelId: string) => void;
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReelModal, onOpenJoinModal }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [timecode, setTimecode] = useState('00:01:24:18');
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const mins = Math.floor(current / 60).toString().padStart(2, '0');
      const secs = Math.floor(current % 60).toString().padStart(2, '0');
      const frames = Math.floor((current % 1) * 24).toString().padStart(2, '0');
      setTimecode(`00:${mins}:${secs}:${frames}`);
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle ambient gradient backdrop */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#FF5722]/8 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#FFD166]/5 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Natural editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF5722] mb-4">
              <span>Cinematic Creative Collective</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">@filmclub.__</span>
            </div>

            {/* Bold Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 [text-wrap:balance]">
              The Craft of <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#FFD166]">Motion</span> &amp; <span className="text-[#FF5722]">Raw Emotion.</span>
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-xl font-normal">
              Film Club is an independent editorial sanctuary for visionary video editors, colorists, and cinematographers shaping high-impact reels, commercial master cuts, and narrative cinema.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#reels"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#FF5722] hover:bg-[#ff6e3d] active:bg-[#e64a19] rounded-sm transition-all duration-200 shadow-lg shadow-[#FF5722]/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD166]"
              >
                <Film className="w-4 h-4" />
                <span>Explore Selected Reels</span>
              </a>

              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-neutral-200 bg-[#1e1e1e] hover:bg-[#282828] hover:text-white border border-white/10 hover:border-white/20 rounded-sm transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5722]"
              >
                <span>Join Creator Circle</span>
                <ArrowRight className="w-4 h-4 text-[#FFD166]" />
              </button>
            </div>

            {/* Instagram Tag highlight */}
            <div className="flex items-center gap-3 text-xs text-neutral-400 border-t border-white/5 pt-6">
              <span className="text-neutral-500">Official Creator Community:</span>
              <a 
                href="https://instagram.com/filmclub.__" 
                target="_blank" 
                rel="noreferrer"
                className="font-mono text-neutral-200 hover:text-[#FFD166] transition-colors underline underline-offset-4 decoration-neutral-700 hover:decoration-[#FFD166]"
              >
                instagram.com/filmclub.__
              </a>
            </div>
          </div>

          {/* Right Column: High-Impact Video Container / Cinematic Showcase Frame */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#161616] shadow-2xl shadow-black/80 group">
              
              {/* Aspect Ratio Box with Video */}
              <div className="relative aspect-video w-full bg-[#0a0a0a] overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
                  poster="/src/assets/images/filmclub_hero_cinematic_1791981968341.jpg"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                />

                {/* Film Matte Overlay (Letterbox aesthetic) */}
                <div className="absolute inset-x-0 top-0 h-4 bg-black/60 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-4 bg-black/60 pointer-events-none" />

                {/* Cinematic HUD Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono tracking-wider text-neutral-300 pointer-events-none">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
                    <span>REC // PRORES 4444 XQ</span>
                  </div>
                  <div className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 tabular-nums">
                    <span>{timecode}</span>
                  </div>
                </div>

                {/* Bottom Video Meta Bar */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                  <div className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-xs">
                    <p className="font-semibold text-white tracking-wide">NOCTURNE // SHINJUKU</p>
                    <p className="text-[10px] text-neutral-400 font-mono">DCI 4K · 24.000 FPS · 2.39:1</p>
                  </div>

                  {/* Playback Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="p-2.5 rounded-full bg-black/70 hover:bg-[#FF5722] text-white backdrop-blur-md border border-white/15 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label={isPlaying ? 'Pause showreel preview' : 'Play showreel preview'}
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                    </button>
                    
                    <button
                      onClick={toggleMute}
                      className="p-2.5 rounded-full bg-black/70 hover:bg-[#2a2a2a] text-white backdrop-blur-md border border-white/15 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={() => onOpenReelModal('tokyo-nocturne')}
                      className="p-2.5 rounded-full bg-black/70 hover:bg-[#FFD166] hover:text-black text-white backdrop-blur-md border border-white/15 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      title="Inspect Reel in Theater Mode"
                      aria-label="Inspect Reel in Theater Mode"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Scrim and bottom footer badge info */}
              <div className="p-4 bg-[#141414] border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">Film Club Master Grade</span>
                  <span aria-hidden="true">·</span>
                  <span>Anamorphic CinemaScope</span>
                </div>
                <button
                  onClick={() => onOpenReelModal('tokyo-nocturne')}
                  className="text-[#FFD166] hover:underline font-medium cursor-pointer"
                >
                  View Breakdown &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Item Proof Metrics Row (Full-width row placed below the hero split per photography/portfolio reference) */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              48M<span className="text-[#FF5722]">+</span>
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-1 font-medium">
              Collective Reel Impressions
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              140<span className="text-[#FFD166]">+</span>
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-1 font-medium">
              Vetted Creator Members
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              100<span className="text-[#FF5722]">%</span>
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-1 font-medium">
              DCI-P3 Color Accuracy
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              24<span className="text-neutral-500">/</span>7
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-1 font-medium">
              Active WhatsApp Network
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
