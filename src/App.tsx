import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ReelsGallery } from './components/ReelsGallery';
import { AboutSection } from './components/AboutSection';
import { CommunitySection } from './components/CommunitySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { JoinModal } from './components/JoinModal';
import { REELS_DATA } from './data/reelsData';

export default function App() {
  const [selectedReelId, setSelectedReelId] = useState<string | null>(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const selectedReel = selectedReelId
    ? REELS_DATA.find((r) => r.id === selectedReelId) || null
    : null;

  return (
    <div className="min-h-screen bg-[#121212] text-neutral-100 flex flex-col font-sans selection:bg-[#FF5722] selection:text-white bg-grain">
      {/* Sticky Top Navigation Bar */}
      <Navbar onOpenJoinModal={() => setIsJoinModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenReelModal={(id) => setSelectedReelId(id)}
          onOpenJoinModal={() => setIsJoinModalOpen(true)}
        />

        {/* Featured Reels Gallery */}
        <ReelsGallery
          onOpenReelModal={(id) => setSelectedReelId(id)}
        />

        {/* About & Mission Section */}
        <AboutSection />

        {/* Community & WhatsApp Section */}
        <CommunitySection
          onOpenJoinModal={() => setIsJoinModalOpen(true)}
        />

        {/* Contact / Inquiries Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Video Player Modal */}
      <VideoModal
        reel={selectedReel}
        onClose={() => setSelectedReelId(null)}
      />

      {/* Interactive Join / WhatsApp Community Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />
    </div>
  );
}
