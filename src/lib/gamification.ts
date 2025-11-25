// Sistema de gamificação

import { Badge, Challenge } from './types';

export const BADGES: Badge[] = [
  {
    id: 'first-client',
    name: 'Primeiro Cliente',
    description: 'Atendeu seu primeiro cliente',
    icon: '🎯'
  },
  {
    id: 'organized',
    name: 'Organizado',
    description: '7 dias seguidos com agenda organizada',
    icon: '📅'
  },
  {
    id: 'punctual',
    name: 'Pontual',
    description: '10 atendimentos sem atraso',
    icon: '⏰'
  },
  {
    id: 'popular',
    name: 'Popular',
    description: '50 clientes atendidos',
    icon: '⭐'
  },
  {
    id: 'master',
    name: 'Mestre Barbeiro',
    description: '300 clientes satisfeitos',
    icon: '👑'
  },
  {
    id: 'five-stars',
    name: '5 Estrelas',
    description: 'Manteve média 5.0 por 30 dias',
    icon: '🌟'
  }
];

export const CHALLENGES: Challenge[] = [
  {
    id: 'week-organized',
    title: 'Semana Organizada',
    description: 'Organize sua agenda por 7 dias seguidos',
    points: 100,
    progress: 0,
    total: 7,
    completed: false
  },
  {
    id: 'ten-no-delay',
    title: 'Pontualidade Máxima',
    description: 'Atenda 10 clientes sem atraso',
    points: 150,
    progress: 0,
    total: 10,
    completed: false
  },
  {
    id: 'five-reviews',
    title: 'Feedback Positivo',
    description: 'Receba 5 avaliações 5 estrelas',
    points: 200,
    progress: 0,
    total: 5,
    completed: false
  }
];

export function calculateLevel(points: number): number {
  return Math.floor(points / 500) + 1;
}

export function getNextLevelPoints(currentPoints: number): number {
  const currentLevel = calculateLevel(currentPoints);
  return currentLevel * 500;
}

export function calculateProgress(points: number): number {
  const currentLevelStart = (calculateLevel(points) - 1) * 500;
  const nextLevelStart = calculateLevel(points) * 500;
  const progress = ((points - currentLevelStart) / (nextLevelStart - currentLevelStart)) * 100;
  return Math.min(progress, 100);
}
