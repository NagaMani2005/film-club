import React, { useState } from 'react';
import { Mail, Send, Check, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial Edit & Color',
    timeline: 'Within 2-4 Weeks',
    budget: '$3,000 - $7,500',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep feedback visible
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#0e0e0e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF5722]">
              <span>Inquiries &amp; Commissions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
              Let&apos;s Create Something Unforgettable.
            </h2>

            <p className="text-sm text-neutral-300 leading-relaxed font-normal">
              Whether you are an independent director seeking a meticulous commercial cut, a brand looking for high-impact social motion reels, or an editor looking to pitch a collaborative film project, get in touch with our team.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs">
              <div>
                <span className="text-neutral-500 font-mono block mb-1">Direct Inquiries:</span>
                <a
                  href="mailto:contact@filmclub.studio"
                  className="text-white hover:text-[#FFD166] font-medium text-sm transition-colors"
                >
                  contact@filmclub.studio
                </a>
              </div>

              <div>
                <span className="text-neutral-500 font-mono block mb-1">Instagram Direct Message:</span>
                <a
                  href="https://instagram.com/filmclub.__"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-[#FFD166] font-medium text-sm transition-colors"
                >
                  @filmclub.__
                </a>
              </div>

              <div>
                <span className="text-neutral-500 font-mono block mb-1">Office Hours &amp; Timezones:</span>
                <span className="text-neutral-300">
                  Monday – Friday · Synchronous across GMT, CET, EST &amp; JST
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[#141414] border border-white/10 rounded-xl shadow-2xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Your Name / Studio
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Nolan Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-[#1c1c1c] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#FF5722] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@agency.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-[#1c1c1c] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#FF5722] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Project Scope
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3 py-2.5 rounded bg-[#1c1c1c] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF5722] transition-colors"
                      >
                        <option value="Commercial Edit & Color">Commercial Edit &amp; Color</option>
                        <option value="Music Video Master Cut">Music Video Master Cut</option>
                        <option value="Short Film Color Grade">Short Film Color Grade</option>
                        <option value="Motion Design Package">Motion Design Package</option>
                        <option value="Social Reel Campaign">Social Reel Campaign</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3 py-2.5 rounded bg-[#1c1c1c] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF5722] transition-colors"
                      >
                        <option value="Urgent (< 10 Days)">Urgent (&lt; 10 Days)</option>
                        <option value="Within 2-4 Weeks">Within 2-4 Weeks</option>
                        <option value="Next Quarter">Next Quarter</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-2.5 rounded bg-[#1c1c1c] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF5722] transition-colors"
                      >
                        <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                        <option value="$3,000 - $7,500">$3,000 - $7,500</option>
                        <option value="$7,500 - $15,000">$7,500 - $15,000</option>
                        <option value="$15,000+">$15,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Brief &amp; Creative Vision
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share your footage details, camera format (e.g. Arri ProRes 4444, RED R3D), reference moodboards, or target delivery date..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#1c1c1c] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#FF5722] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-neutral-500 font-mono">
                      NDA guaranteed upon request
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#FF5722] hover:bg-[#ff6e3d] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-[#FF5722]/20"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Brief</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Inquiry Received, {formData.name}!
                  </h3>
                  <p className="text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed">
                    Our lead producer will review your brief and reply to <span className="text-[#FFD166]">{formData.email}</span> within 24 hours with availability and editorial proposal.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Commercial Edit & Color',
                        timeline: 'Within 2-4 Weeks',
                        budget: '$3,000 - $7,500',
                        message: ''
                      });
                    }}
                    className="mt-4 px-4 py-2 bg-[#222] hover:bg-[#2a2a2a] text-xs font-semibold text-neutral-200 rounded transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
