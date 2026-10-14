import React, { useState } from 'react';
import { Play, Film, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import { REELS_DATA } from '../data/reelsData';
import { ReelItem, TagType } from '../types';

interface ReelsGalleryProps {
  onOpenReelModal: (reelId: string) => void;
}

const CATEGORIES: ('All' | TagType)[] = [
  'All',
  'Color Grading',
  'Motion Design',
  'Storytelling',
  'Commercial',
  'Narrative'
];

export const ReelsGallery: React.FC<ReelsGalleryProps> = ({ onOpenReelModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | TagType>('All');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const filteredReels = selectedCategory === 'All'
    ? REELS_DATA
    : REELS_DATA.filter((reel) => reel.category === selectedCategory);

  return (
    <section id="reels" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF5722] mb-3">
              <span>Curated Showreels &amp; Works</span>
              <span aria-hidden="true" className="text-neutral-600">/</span>
              <span className="text-neutral-400">Archive 2026</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white [text-wrap:balance]">
              Cinematic Cuts That Demand Attention.
            </h2>
          </div>

          <p className="text-sm text-neutral-400 max-w-md font-normal">
            Every reel is master-graded and paced to amplify emotional resonance. Click any card to launch the cinema breakdown viewer.
          </p>
        </div>

        {/* Interactive Filter Tabs (Functional segmented buttons per frontend-design skill) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#1a1a1a] rounded-lg border border-white/5 overflow-x-auto scrollbar-none mb-10 w-fit max-w-full">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-semibold rounded-md whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5722] ${
                  isActive
                    ? 'bg-[#FF5722] text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Modern Bento / Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredReels.map((reel, index) => {
            // First item in 'All' view takes a double span for dynamic Bento rhythm
            const isWide = selectedCategory === 'All' && index === 0;

            return (
              <div
                key={reel.id}
                onClick={() => onOpenReelModal(reel.id)}
                onMouseEnter={() => setHoveredCardId(reel.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className={`group relative rounded-xl overflow-hidden bg-[#161616] border border-white/10 hover:border-[#FF5722]/50 transition-all duration-300 flex flex-col cursor-pointer shadow-lg shadow-black/40 ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Media Container with Thumbnail and Play Hover */}
                <div className={`relative w-full overflow-hidden bg-[#0d0d0d] ${isWide ? 'aspect-[21/9] sm:aspect-[16/7]' : 'aspect-video'}`}>
                  {/* Fallback & Image */}
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Fallback CSS container behind img in case of network issue */}
                  <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center -z-10">
                    <Film className="w-8 h-8 text-neutral-700" />
                  </div>

                  {/* Contrast Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 group-hover:via-black/20 transition-all duration-300" />

                  {/* Top Bar with Timecode & Aspect Ratio */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between text-[11px] font-mono text-neutral-300 pointer-events-none">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                      {reel.aspectRatio}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 tabular-nums">
                      {reel.duration}
                    </span>
                  </div>

                  {/* Play Button Overlay (Reveals smoothly on hover) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-[#FF5722] text-white flex items-center justify-center shadow-xl shadow-[#FF5722]/40 transition-all duration-300 transform scale-90 opacity-80 group-hover:scale-100 group-hover:opacity-100 group-hover:bg-[#FFD166] group-hover:text-black">
                      <Play className="w-6 h-6 ml-0.5 fill-current" />
                    </div>
                  </div>

                  {/* Bottom overlay title info on image */}
                  <div className="absolute bottom-3 inset-x-4">
                    <div className="text-[11px] font-semibold tracking-wider text-[#FFD166] uppercase">
                      {reel.client}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-white">
                      {reel.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body & Unboxed Metadata */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#151515]">
                  <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 mb-4 font-normal">
                    {reel.description}
                  </p>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    {/* Zero-Pill tags rendered as clean unboxed text with separators */}
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 overflow-hidden">
                      {reel.tags.slice(0, 2).map((tag, i) => (
                        <React.Fragment key={tag}>
                          <span className="whitespace-nowrap">{tag}</span>
                          {i < Math.min(reel.tags.length, 2) - 1 && (
                            <span aria-hidden="true" className="text-neutral-600">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Interactive Play Action Text */}
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF5722] group-hover:text-[#FFD166] transition-colors shrink-0">
                      <span>Watch Cut</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom prompt for submissions */}
        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-400">
            Have a finished edit or grade you want featured on <span className="text-white font-mono">@filmclub.__</span>?{' '}
            <a href="#community" className="text-[#FFD166] hover:underline font-semibold">
              Submit your cut to the collective &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
