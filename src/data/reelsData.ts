import { ReelItem } from '../types';

export const REELS_DATA: ReelItem[] = [
  {
    id: 'tokyo-nocturne',
    title: 'NOCTURNE // SHINJUKU DRIFT',
    client: 'Kuro Media & Film Club Lab',
    category: 'Color Grading',
    tags: ['Color Grading', '35mm Film Grain', 'Teal & Burnt Orange'],
    duration: '01:24',
    aspectRatio: '2.39:1 Anamorphic',
    thumbnail: '/src/assets/images/reel_color_grade_night_1791981970356.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    description: 'An atmospheric visual study exploring neon reflections and deep contrast grading through late-night rainfall in Tokyo. Graded in DaVinci Resolve Studio with a custom Film Club DCI-P3 print film emulation.',
    director: 'Ren Tanaka',
    editor: 'Film Club Collective',
    colorist: 'Leo Vance',
    camera: 'ARRI Alexa Mini LF + Cooke Anamorphic /i Full Frame Plus',
    lutUsed: 'FC-TokyoChrome-v2 (Kodak 2383 Inspired)',
    audioTrack: 'Original Ambient Soundscape by KAIZEN (24-bit 48kHz)',
    featured: true,
    views: '1.4M'
  },
  {
    id: 'kinetic-monolith',
    title: 'KINETIC IDENTITY & LIGHT',
    client: 'AURA Studios',
    category: 'Motion Design',
    tags: ['Motion Design', 'Volumetric Lighting', 'Graphic Overlay'],
    duration: '00:54',
    aspectRatio: '16:9 4K',
    thumbnail: '/src/assets/images/reel_motion_cinema_1791981968571.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'Experimental title sequence exploring silhouetted human geometry against high-output LED projection walls with reactive typography and analog chromatic aberrations.',
    director: 'Maya Lindqvist',
    editor: 'Julian Ross',
    colorist: 'Film Club Studio',
    camera: 'RED V-Raptor 8K VV + Atlas Orion Anamorphic',
    lutUsed: 'FC-Monolith-GoldPrint',
    audioTrack: 'Heavy Sub Bass Pulse - Modular Synthesis',
    featured: true,
    views: '890K'
  },
  {
    id: 'analog-mechanics',
    title: 'THE GLASS OF ZEISS MASTER',
    client: 'CineOptics International',
    category: 'Storytelling',
    tags: ['Storytelling', 'Macro Cinematography', 'Sound Design'],
    duration: '02:08',
    aspectRatio: '2.39:1 Anamorphic',
    thumbnail: '/src/assets/images/reel_analog_storytelling_1791981969827.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description: 'A tactile, visceral documentary piece celebrating mechanical precision in manual cinema lenses. Focuses on metallic gear clicks, coated glass element reflections, and organic light dispersion.',
    director: 'David Thorne',
    editor: 'Elena Rostova',
    colorist: 'Leo Vance',
    camera: 'Sony FX9 + Zeiss Master Primes + Macro Extension',
    lutUsed: 'FC-VintageArri-Natural',
    audioTrack: 'Foley & Classical Cello Arrangement',
    featured: false,
    views: '620K'
  },
  {
    id: 'urban-velocity',
    title: 'STREET VELOCITY // CHRONO',
    client: 'SubZero Athletics & Film Club',
    category: 'Commercial',
    tags: ['Commercial', 'High-Speed Tracking', 'Speed Ramping'],
    duration: '00:42',
    aspectRatio: '9:16 Vertical Reel',
    thumbnail: '/src/assets/images/reel_vertical_streetwear_1791982013272.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    description: 'A vertical cut designed for Instagram and mobile screens (@filmclub.__). Dynamic speed ramping, matched action whip-pans, and rhythmic bass-drop editorial cuts under amber highway lights.',
    director: 'Marcus Sterling',
    editor: 'Film Club Mobile Lab',
    colorist: 'Marcus Sterling',
    camera: 'Sony FX3 + Sony G-Master 24mm f/1.4',
    lutUsed: 'FC-SodiumAmber-WarmCut',
    audioTrack: 'Phonk & Dark Electro Trap (Exclusive Master)',
    featured: true,
    views: '2.8M'
  },
  {
    id: 'directors-vision',
    title: 'DIRECTOR CUT: FIRST PRINCIPLE',
    client: 'Independent Short Feature',
    category: 'Narrative',
    tags: ['Narrative', 'Pacing', 'Editorial Rhythm'],
    duration: '03:15',
    aspectRatio: '2.39:1 CinemaScope',
    thumbnail: '/src/assets/images/filmclub_hero_cinematic_1791981968341.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    description: 'A raw narrative edit prioritizing tension, visual subtext, and lingering silence over algorithmic fast cuts. Proof that patience and meticulous sound design captivate modern audiences.',
    director: 'Arthur Pendelton',
    editor: 'Film Club Collective',
    colorist: 'Elena Rostova',
    camera: 'Panavision Millennium DXL2',
    lutUsed: 'FC-FilmStock-5219',
    audioTrack: 'Atmospheric Binaural Field Recording',
    featured: false,
    views: '450K'
  },
  {
    id: 'grading-masterclass',
    title: 'THE SUITE // RESOLVE COLOR PIPELINE',
    client: 'Film Club Master Series',
    category: 'Color Grading',
    tags: ['Color Grading', 'Node Pipeline', 'CST Workflow'],
    duration: '01:50',
    aspectRatio: '16:9 Studio',
    thumbnail: '/src/assets/images/community_creators_studio_1791981970048.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description: 'An intimate behind-the-scenes breakdown inside the Film Club color suite showing real-time waveform grading, split-screen balance, and skin tone vector targeting.',
    director: 'Leo Vance',
    editor: 'Leo Vance',
    colorist: 'Leo Vance',
    camera: 'Blackmagic URSA Mini Pro 12K',
    lutUsed: 'FC-StudioGradingNode-Pack',
    audioTrack: 'Lo-Fi Tape Beats & Suite Ambience',
    featured: false,
    views: '730K'
  }
];

export const COMMUNITY_BENEFITS = [
  {
    title: 'Weekly Timeline Roasts & Critiques',
    description: 'Submit your rough cuts, reels, and commercial edits for brutally honest, constructive feedback from working industry directors and senior editors.'
  },
  {
    title: 'Curated Film Club LUTs & SFX Packs',
    description: 'Instant access to our private library of film print emulations, analog noise grains, custom sound design impacts, and transition assets.'
  },
  {
    title: 'Direct Client & Production Job Board',
    description: 'Commercial directors, music video producers, and brands regularly post paid gig briefs and freelance editing opportunities directly to our community.'
  },
  {
    title: 'Exclusive WhatsApp & Discord Circles',
    description: 'Fast-paced daily discussions on gear, workflow shortcuts, DaVinci/Premiere plugins, and impromptu virtual edit lock-ins.'
  }
];

export const EDITORS_ROSTER = [
  {
    name: 'Leo Vance',
    handle: '@leovance.cine',
    role: 'Lead Colorist & DIT',
    location: 'London / Remote'
  },
  {
    name: 'Elena Rostova',
    handle: '@rostova_cuts',
    role: 'Narrative & Commercial Editor',
    location: 'Berlin / Remote'
  },
  {
    name: 'Julian Ross',
    handle: '@jrossmotion',
    role: 'Motion Designer & 3D Artist',
    location: 'New York / Remote'
  },
  {
    name: 'Ren Tanaka',
    handle: '@tanaka.visuals',
    role: 'Cinematographer & Director',
    location: 'Tokyo / Remote'
  }
];
