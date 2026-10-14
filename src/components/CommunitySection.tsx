import React from 'react';
import { MessageCircle, CheckCircle2, ArrowRight, Download, Users, Zap, ShieldCheck } from 'lucide-react';
import { COMMUNITY_BENEFITS } from '../data/reelsData';

interface CommunitySectionProps {
  onOpenJoinModal: () => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="community" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow accents */}
      <div 
        className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF5722]/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD166]/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Distinct Feature Card Container */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#181818] to-[#121212] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          
          {/* Subtle Accent Stripe on top border */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF5722] via-[#FFD166] to-[#FF5722]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF5722] mb-3">
                <MessageCircle className="w-4 h-4" />
                <span>The Film Club Creator Network</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight [text-wrap:balance]">
                Join The Private WhatsApp Circle For Serious Visual Creators.
              </h2>

              <p className="text-base text-neutral-300 leading-relaxed mb-8 max-w-xl font-normal">
                Stop editing in a creative vacuum. Connect directly with over 140+ vetted commercial editors, colorists, and motion artists. Share raw timelines, get immediate critique, collaborate on commercial briefs, and access private Film Club LUT drops.
              </p>

              {/* Benefits Checklist */}
              <div className="space-y-4 mb-10">
                {COMMUNITY_BENEFITS.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FFD166] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenJoinModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-black bg-[#FFD166] hover:bg-[#ffe082] rounded-sm transition-all duration-200 shadow-xl shadow-[#FFD166]/15 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5722]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Join The WhatsApp Group</span>
                </button>

                <a
                  href="https://instagram.com/filmclub.__"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-neutral-200 bg-[#222222] hover:bg-[#2c2c2c] hover:text-white border border-white/10 rounded-sm transition-colors cursor-pointer"
                >
                  <span>Follow @filmclub.__</span>
                  <ArrowRight className="w-4 h-4 text-neutral-400" />
                </a>
              </div>

              <div className="mt-4 text-[11px] text-neutral-500 font-mono">
                Free to join for visual editors, colorists, &amp; DPs · Zero spam policy
              </div>
            </div>

            {/* Right: Mockup Card / Network Preview Badge */}
            <div className="lg:col-span-5">
              <div className="bg-[#141414] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6 shadow-xl">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        FILM CLUB // CHAT
                      </h4>
                      <p className="text-[11px] text-neutral-400 font-mono">
                        140 Members · 38 Online Now
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Active
                  </span>
                </div>

                {/* Simulated Chat Feed */}
                <div className="space-y-3.5 text-xs">
                  <div className="bg-[#1e1e1e] p-3 rounded-lg border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#FFD166]">Julian (NYC)</span>
                      <span className="text-[10px] text-neutral-500 font-mono">14:02</span>
                    </div>
                    <p className="text-neutral-300">
                      Just dropped the new 35mm grain plate in the vault. 4K ProRes 4444 scan from Kodak 500T. Enjoy!
                    </p>
                  </div>

                  <div className="bg-[#1e1e1e] p-3 rounded-lg border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#FF5722]">Elena (Berlin)</span>
                      <span className="text-[10px] text-neutral-500 font-mono">14:18</span>
                    </div>
                    <p className="text-neutral-300">
                      Need a second set of eyes on a 60-second automotive cut before sending to agency. Anyone free for a quick review?
                    </p>
                  </div>

                  <div className="bg-[#1e1e1e] p-3 rounded-lg border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-neutral-300">Film Club Dispatch</span>
                      <span className="text-[10px] text-neutral-500 font-mono">14:25</span>
                    </div>
                    <p className="text-neutral-300">
                      Commercial brief just opened for a luxury fashion showreel. Budget $4,500. Submissions open in #jobs.
                    </p>
                  </div>
                </div>

                {/* Direct Action */}
                <button
                  onClick={onOpenJoinModal}
                  className="w-full py-3 bg-[#FF5722] hover:bg-[#ff6e3d] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#FF5722]/20"
                >
                  <span>Request WhatsApp Group Invite</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
