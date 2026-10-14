import React from 'react';
import { Film, Eye, Flame, Award, MapPin } from 'lucide-react';
import { EDITORS_ROSTER } from '../data/reelsData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#101010] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Manifesto Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left: Mission Statement */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FFD166] mb-3">
              <span>Our Mission</span>
              <span aria-hidden="true" className="text-neutral-600">/</span>
              <span>The Film Club Standard</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight [text-wrap:balance]">
              Built For Editors Who Refuse To Settle For Mediocre Cuts.
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6 font-normal">
              Film Club was created with one uncompromising purpose: to forge a world-class sanctuary where visual creators, video editors, and colorists unite to sharpen their craft, challenge creative boundaries, and make cinematic work that outlasts the algorithm.
            </p>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8 font-normal">
              We reject formulaic cookie-cutter templates. Instead, we obsess over narrative pacing, rhythm, authentic 35mm film emulation, and color science that evokes visceral emotion. Whether cutting international commercial spots or underground short films, we stand for cinematic integrity.
            </p>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#FF5722] mb-1">
                  01. The Sacred Frame
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  Intentional Cuts
                </div>
                <p className="text-xs text-neutral-400">
                  Every frame has purpose; no hollow transitions or frantic filler.
                </p>
              </div>

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#FFD166] mb-1">
                  02. Collective Growth
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  Brutal Critiques
                </div>
                <p className="text-xs text-neutral-400">
                  Constructive feedback from peers who know DaVinci and Premiere inside out.
                </p>
              </div>

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                  03. Color Science
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  Master Standards
                </div>
                <p className="text-xs text-neutral-400">
                  Calibrated DCI-P3 &amp; Rec.709 mastering for pristine display reproduction.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Studio Imagery */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#161616] shadow-2xl">
              <img
                src="/src/assets/images/community_creators_studio_1791981970048.jpg"
                alt="Film Club Color Suite and Timeline Editing Station"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-5 bg-[#141414] border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    Film Club Lab Suite
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                    DaVinci Advanced Panel · Sony BVM Monitor
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#FFD166] uppercase px-2 py-0.5 rounded bg-[#FFD166]/10 border border-[#FFD166]/20">
                  Master Suite
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Creator Roster Section (3-in-a-row or 4-grid per photography/portfolio reference) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#FF5722] mb-1">
                Resident Curators
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                The Creative Direction Behind The Club.
              </h3>
            </div>
            <span className="text-xs text-neutral-400 font-mono">
              Collaborating across London, Berlin, NYC &amp; Tokyo
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EDITORS_ROSTER.map((member) => (
              <div
                key={member.name}
                className="p-5 rounded-xl bg-[#141414] border border-white/5 hover:border-white/20 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#FFD166]">{member.role}</span>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {member.name}
                  </h4>
                  <a
                    href={`https://instagram.com/${member.handle.replace('@', '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-neutral-400 hover:text-white font-mono mt-1 inline-block transition-colors"
                  >
                    {member.handle}
                  </a>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-neutral-500">
                  <MapPin className="w-3 h-3" />
                  <span>{member.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
