import { 
  Users, 
  LightbulbIcon, 
  GraduationCap, 
  Globe, 
  Star, 
  TrendingUp
} from 'lucide-react';
import { Benefit } from '../types';

export const benefitsData: Benefit[] = [
  {
    title: "Supportive Community",
    description: "Connect with like-minded individuals in a nurturing environment that fosters growth, collaboration, and mutual support.",
    icon: () => Users({ size: 32 })
  },
  {
    title: "Innovation Hub",
    description: "Access cutting-edge resources and tools that enable you to bring your innovative ideas to life with expert guidance.",
    icon: () => LightbulbIcon({ size: 32 })
  },
  {
    title: "Continuous Learning",
    description: "Expand your knowledge through workshops, seminars, and mentorship programs designed to enhance your skills.",
    icon: () => GraduationCap({ size: 32 })
  },
  {
    title: "Global Network",
    description: "Join a diverse, international network of professionals and thought leaders spanning various industries and disciplines.",
    icon: () => Globe({ size: 32 })
  },
  {
    title: "Recognition & Growth",
    description: "Showcase your achievements and gain recognition for your contributions within the community and beyond.",
    icon: () => Star({ size: 32 })
  },
  {
    title: "Career Advancement",
    description: "Unlock new opportunities and accelerate your career progression through our extensive industry connections.",
    icon: () => TrendingUp({ size: 32 })
  }
];