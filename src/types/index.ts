export interface Product {
  id: number;
  title: string;
  type: 'class' | 'experience' | 'trip';
  category: string;
  price: number;
  duration: string;
  level: string;
  schedule: string;
  location: string;
  image: string;
  instructor: string;
  rating: number;
  reviews: number;
  includes?: string[];
  // Nuevos campos para la página detalle
  description: string;
  highlights: string[];
  images: string[];
  whatYouWillDo: string[];
  whatIsIncluded: string[];
  requirements: string[];
  meetingPoint: string;
  groupSize: number;
  languages: string[];
  instructorBio: string;
}

export interface Experience {
  id: number;
  title: string;
  type: 'experience';
  category: string;
  price: number;
  duration: string;
  level: string;
  schedule: string;
  location: string;
  image: string;
  instructor: string;
  rating: number;
  reviews: number;
  description: string;
  highlights: string[];
  images: string[];
  whatYouWillDo: string[];
  whatIsIncluded: string[];
  requirements: string[];
  meetingPoint: string;
  groupSize: number;
  languages: string[];
  instructorBio?: string;
}

export interface CommunityEvent {
  id: number;
  title: string;
  type: 'community';
  category: string;
  price: number;
  duration: string;
  schedule: string;
  location: string;
  image: string;
  description: string;
  attendees: number;
  maxAttendees: number;
  highlights: string[];
  images: string[];
  whatYouWillDo: string[];
  whatIsIncluded: string[];
  requirements: string[];
  meetingPoint: string;
  organizer: string;
  organizerBio: string;
  socialMedia?: string[];
}

export interface Category {
  id: string;
  name: string;
}

export type SectionType = 'classes' | 'experiences' | 'trips' | 'community';