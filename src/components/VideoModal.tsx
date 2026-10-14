import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Copy, Check, Sliders, Film, Camera } from 'lucide-react';
import { ReelItem } from '../types';

interface VideoModalProps {
  reel: ReelItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ reel, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'info' | 'grade'>('info');

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ' && videoRef.current) {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  if (!reel) return null;

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
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-[#141414] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#161616]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5722]" />
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
              {reel.category} // {reel.aspectRatio}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-300 hover:text-white bg-[#202020] hover:bg-[#282828] rounded border border-white/10 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#FFD166]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-[#202020] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative bg-black aspect-video w-full flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            src={reel.videoUrl}
            poster={reel.thumbnail}
            className="w-full h-full object-contain"
            autoPlay
            playsInline
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
          />

          {/* Letterbox Frame Accent */}
          <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/5" />

          {/* Play/Pause Center Indicator */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs transition-opacity cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-[#FF5722] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
                <Play className="w-7 h-7 ml-1 fill-white" />
              </div>
            </button>
          )}

          {/* Bottom Scrubbing Controls */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-col gap-2">
            {/* Timeline Progress Bar */}
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-neutral-700 accent-[#FF5722] rounded-lg cursor-pointer"
            />

            <div className="flex items-center justify-between text-xs text-neutral-300 font-mono">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="tabular-nums">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] text-neutral-400 uppercase tracking-widest">
                  PRORES 422 HQ
                </span>
                <button
                  onClick={() => {
                    if (videoRef.current) {
                      if (videoRef.current.requestFullscreen) {
                        videoRef.current.requestFullscreen();
                      }
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Details & Specs Section */}
        <div className="p-6 bg-[#141414] overflow-y-auto max-h-[35vh]">
          {/* Header & Title */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
                <span className="text-[#FFD166] font-semibold">{reel.client}</span>
                <span aria-hidden="true">·</span>
                <span>{reel.duration}</span>
                <span aria-hidden="true">·</span>
                <span>{reel.views} views</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {reel.title}
              </h2>
            </div>

            {/* Spec / Info Switcher */}
            <div className="flex items-center gap-2 bg-[#1e1e1e] p-1 rounded-md border border-white/5 shrink-0">
              <button
                onClick={() => setActiveTab('info')}
                className={`px-3 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  activeTab === 'info' ? 'bg-[#FF5722] text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Project Credits
              </button>
              <button
                onClick={() => setActiveTab('grade')}
                className={`px-3 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  activeTab === 'grade' ? 'bg-[#FF5722] text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Color &amp; Gear Specs
              </button>
            </div>
          </div>

          {activeTab === 'info' ? (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-3">
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {reel.description}
                </p>
                {/* Tags rendered as clean unboxed text per zero-pill discipline */}
                <div className="flex flex-wrap items-center gap-x-2 text-xs text-neutral-400 pt-2">
                  <span className="text-neutral-500 font-mono">Disciplines:</span>
                  {reel.tags.map((t, i) => (
                    <React.Fragment key={t}>
                      <span className="text-neutral-200">{t}</span>
                      {i < reel.tags.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-white/5 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Director</span>
                  <span className="text-white font-medium">{reel.director}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Lead Editor</span>
                  <span className="text-white font-medium">{reel.editor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Colorist</span>
                  <span className="text-white font-medium">{reel.colorist}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-[#1a1a1a] p-3.5 rounded border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-[#FFD166] font-semibold">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Camera Package</span>
                </div>
                <p className="text-neutral-200">{reel.camera}</p>
              </div>

              <div className="bg-[#1a1a1a] p-3.5 rounded border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-[#FF5722] font-semibold">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Color Pipeline / LUT</span>
                </div>
                <p className="text-neutral-200 font-mono">{reel.lutUsed}</p>
              </div>

              <div className="bg-[#1a1a1a] p-3.5 rounded border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-neutral-300 font-semibold">
                  <Film className="w-3.5 h-3.5" />
                  <span>Audio Mastering</span>
                </div>
                <p className="text-neutral-200">{reel.audioTrack}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
