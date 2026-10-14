export type TagType = 'Color Grading' | 'Motion Design' | 'Storytelling' | 'Commercial' | 'Narrative' | 'Music Video';

export interface ReelItem {
  id: string;
  title: string;
  client: string;
  category: TagType;
  tags: string[];
  duration: string;
  aspectRatio: string;
  thumbnail: string;
  videoUrl?: string;
  description: string;
  director: string;
  editor: string;
  colorist: string;
  camera: string;
  lutUsed: string;
  audioTrack: string;
  featured?: boolean;
  views?: string;
}

export interface CreatorBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface CommunityMember {
  name: string;
  handle: string;
  role: string;
  location: string;
}
