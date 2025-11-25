// Tipos do sistema de agendamento para barbeiros

export type ProfileType = 'artista' | 'tecnico' | 'visionario' | 'detalhista';

export interface UserProfile {
  id: string;
  name: string;
  phone: string;
  profileType?: ProfileType;
  points: number;
  level: number;
  badges: Badge[];
  createdAt: Date;
  isPremium: boolean;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

export interface Appointment {
  id: string;
  clientName: string;
  clientPhone: string;
  service: string;
  date: Date;
  duration: number;
  price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  rating?: number;
  review?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  text: string;
  profileType: ProfileType;
  points: number;
}

export interface CommunityPost {
  id: string;
  author: string;
  authorProfile: ProfileType;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  createdAt: Date;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  progress: number;
  total: number;
  completed: boolean;
}

export const PROFILE_TYPES = {
  artista: {
    name: 'O Artista',
    description: 'Criativo e inovador, sempre buscando novos estilos',
    color: 'from-purple-500 to-pink-500',
    icon: '🎨'
  },
  tecnico: {
    name: 'O Técnico',
    description: 'Preciso e detalhista, domina todas as técnicas',
    color: 'from-blue-500 to-cyan-500',
    icon: '⚙️'
  },
  visionario: {
    name: 'O Visionário',
    description: 'Empreendedor nato, sempre pensando no futuro',
    color: 'from-orange-500 to-red-500',
    icon: '🚀'
  },
  detalhista: {
    name: 'O Detalhista',
    description: 'Perfeccionista, cada corte é uma obra de arte',
    color: 'from-green-500 to-emerald-500',
    icon: '✨'
  }
};
