import { ReactNode } from 'react';

export interface Benefit {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  testimonial: string;
  achievements: string[];
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}