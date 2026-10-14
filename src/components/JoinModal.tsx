import React, { useState } from 'react';
import { X, MessageCircle, Check, ArrowRight, Sparkles, Copy } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    handle: '',
    role: 'Video Editor',
    portfolio: '',
    software: 'DaVinci Resolve'
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyInvite = () => {
    navigator.clipboard.writeText('https://chat.whatsapp.com/filmclub-creators-network');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#161616] border border-white/10 rounded-xl overflow-hidden shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-white rounded hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF5722] mb-2">
              <MessageCircle className="w-4 h-4" />
              <span>Film Club Creator Network</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">
              Join The Creator Circle
            </h3>
            <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
              Connect with 140+ video editors, colorists, and motion designers. Share timelines, receive peer critiques, and access private assets.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded bg-[#1c1c1c] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#FF5722] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Instagram Handle
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@yourhandle"
                    value={formData.handle}
                    onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-[#1c1c1c] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#FF5722] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Primary Discipline
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-[#1c1c1c] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF5722] transition-colors"
                  >
                    <option value="Video Editor">Video Editor</option>
                    <option value="Colorist">Colorist</option>
                    <option value="Motion Designer">Motion Designer</option>
                    <option value="Cinematographer">Cinematographer / DP</option>
                    <option value="Director">Director</option>
                    <option value="Sound Designer">Sound Designer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Portfolio / Showreel Link
                </label>
                <input
                  type="url"
                  placeholder="https://vimeo.com/... or your website"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded bg-[#1c1c1c] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#FF5722] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Primary NLE / Grading Suite
                </label>
                <select
                  value={formData.software}
                  onChange={(e) => setFormData({ ...formData, software: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded bg-[#1c1c1c] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF5722] transition-colors"
                >
                  <option value="DaVinci Resolve Studio">DaVinci Resolve Studio</option>
                  <option value="Adobe Premiere Pro">Adobe Premiere Pro</option>
                  <option value="Final Cut Pro">Final Cut Pro</option>
                  <option value="Avid Media Composer">Avid Media Composer</option>
                  <option value="After Effects / Cinema 4D">After Effects / Cinema 4D</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#FFD166] hover:bg-[#ffe082] text-black text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#FFD166]/15"
                >
                  <span>Request WhatsApp Access</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-center text-neutral-500 font-mono">
                Applications reviewed within 12 hours by our curation desk.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-5 animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
              <Check className="w-7 h-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Welcome to Film Club, {formData.name || 'Creator'}!
              </h3>
              <p className="text-xs text-neutral-300 mt-2 max-w-sm mx-auto leading-relaxed">
                Your application has been registered. You can now join our primary WhatsApp Creator Circle directly below:
              </p>
            </div>

            <div className="bg-[#1e1e1e] border border-white/10 rounded-lg p-4 text-left space-y-3">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span className="font-semibold text-white">Direct WhatsApp Group Link</span>
                <span className="font-mono text-[10px] text-emerald-400">Direct Invite</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value="https://chat.whatsapp.com/filmclub-creators-network"
                  className="w-full bg-[#141414] border border-white/10 px-3 py-2 text-xs font-mono text-neutral-300 rounded focus:outline-none"
                />
                <button
                  onClick={handleCopyInvite}
                  className="px-3 py-2 bg-[#2a2a2a] hover:bg-[#333] text-white text-xs font-semibold rounded transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-[#FFD166]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://chat.whatsapp.com"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Open WhatsApp Now</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-3 bg-[#222] hover:bg-[#2c2c2c] text-neutral-300 text-xs font-semibold rounded transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
