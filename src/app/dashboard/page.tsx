'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Calendar, Users, Trophy, TrendingUp, Star, Zap, 
  Bell, Settings, LogOut, Award, Target, Clock,
  MessageCircle, BarChart3, Menu, X
} from 'lucide-react';
import { BADGES, CHALLENGES, calculateLevel, calculateProgress } from '@/lib/gamification';

export default function DashboardPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Mock user data
  const user = {
    name: 'Carlos Silva',
    profileType: 'artista',
    points: 1250,
    level: calculateLevel(1250),
    badges: BADGES.slice(0, 3),
    stats: {
      appointmentsToday: 8,
      appointmentsWeek: 42,
      rating: 4.9,
      revenue: 3450
    }
  };

  const progress = calculateProgress(user.points);
  const nextLevel = (user.level * 500);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <h1 className="text-2xl font-bold text-white">SalãoPro</h1>
            </div>
            
            <nav className="hidden lg:flex items-center gap-6">
              <button className="text-white hover:text-purple-400 transition-colors flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Agenda</span>
              </button>
              <button 
                onClick={() => router.push('/comunidade')}
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                <span>Comunidade</span>
              </button>
              <button 
                onClick={() => router.push('/relatorios')}
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <BarChart3 className="w-5 h-5" />
                <span>Relatórios</span>
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <button className="relative text-white hover:text-purple-400 transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">3</span>
              </button>
              <button className="text-white hover:text-purple-400 transition-colors">
                <Settings className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/40 backdrop-blur-sm border-b border-white/10 p-4">
          <nav className="flex flex-col gap-4">
            <button className="text-white hover:text-purple-400 transition-colors flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Agenda</span>
            </button>
            <button 
              onClick={() => router.push('/comunidade')}
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Users className="w-5 h-5" />
              <span>Comunidade</span>
            </button>
            <button 
              onClick={() => router.push('/relatorios')}
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <BarChart3 className="w-5 h-5" />
              <span>Relatórios</span>
            </button>
          </nav>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Bem-vindo, {user.name}! 👋
          </h2>
          <p className="text-gray-300 text-lg">
            Você está no nível {user.level} • Continue assim para desbloquear mais recompensas!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8 text-blue-400" />
              <span className="text-blue-400 text-sm font-semibold">HOJE</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{user.stats.appointmentsToday}</div>
            <div className="text-gray-300 text-sm">Agendamentos</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-purple-400" />
              <span className="text-purple-400 text-sm font-semibold">SEMANA</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{user.stats.appointmentsWeek}</div>
            <div className="text-gray-300 text-sm">Atendimentos</div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Star className="w-8 h-8 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold">AVALIAÇÃO</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{user.stats.rating}</div>
            <div className="text-gray-300 text-sm">Média de Estrelas</div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-8 h-8 text-green-400" />
              <span className="text-green-400 text-sm font-semibold">FATURAMENTO</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">R$ {user.stats.revenue}</div>
            <div className="text-gray-300 text-sm">Esta Semana</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Level Progress */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  Seu Progresso
                </h3>
                <span className="text-purple-400 font-semibold">Nível {user.level}</span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 text-sm">{user.points} pontos</span>
                  <span className="text-gray-400 text-sm">{nextLevel} pontos</span>
                </div>
                <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
              
              <p className="text-gray-300 text-sm">
                Faltam {nextLevel - user.points} pontos para o próximo nível!
              </p>
            </div>

            {/* Challenges */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                <Target className="w-6 h-6 text-orange-400" />
                Desafios Ativos
              </h3>
              
              <div className="space-y-4">
                {CHALLENGES.map((challenge) => (
                  <div key={challenge.id} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-white font-semibold mb-1">{challenge.title}</h4>
                        <p className="text-gray-400 text-sm">{challenge.description}</p>
                      </div>
                      <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg px-3 py-1 text-white text-sm font-bold">
                        +{challenge.points}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                          style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-gray-400 text-sm whitespace-nowrap">
                        {challenge.progress}/{challenge.total}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Ações Rápidas</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => router.push('/agenda')}
                  className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-left hover:scale-105 transition-transform"
                >
                  <Calendar className="w-8 h-8 text-white mb-3" />
                  <div className="text-white font-semibold">Nova Agenda</div>
                  <div className="text-purple-100 text-sm">Adicionar horário</div>
                </button>
                
                <button className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-6 text-left hover:scale-105 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white mb-3" />
                  <div className="text-white font-semibold">WhatsApp</div>
                  <div className="text-green-100 text-sm">Enviar mensagem</div>
                </button>
                
                <button 
                  onClick={() => router.push('/comunidade')}
                  className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-left hover:scale-105 transition-transform"
                >
                  <Users className="w-8 h-8 text-white mb-3" />
                  <div className="text-white font-semibold">Comunidade</div>
                  <div className="text-blue-100 text-sm">Ver feed</div>
                </button>
                
                <button 
                  onClick={() => router.push('/relatorios')}
                  className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-left hover:scale-105 transition-transform"
                >
                  <BarChart3 className="w-8 h-8 text-white mb-3" />
                  <div className="text-white font-semibold">Relatórios</div>
                  <div className="text-orange-100 text-sm">Ver análises</div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Badges */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                <Award className="w-6 h-6 text-purple-400" />
                Conquistas
              </h3>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {user.badges.map((badge) => (
                  <div key={badge.id} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-3xl mb-2 mx-auto">
                      {badge.icon}
                    </div>
                    <div className="text-white text-xs font-semibold mb-1">{badge.name}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-gray-400 text-sm mb-2">Próxima conquista</div>
                <div className="text-white font-semibold">Popular</div>
                <div className="text-gray-400 text-xs">Atenda 50 clientes</div>
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                <Clock className="w-6 h-6 text-blue-400" />
                Agenda de Hoje
              </h3>
              
              <div className="space-y-3">
                {[
                  { time: '09:00', client: 'João Silva', service: 'Corte + Barba' },
                  { time: '10:30', client: 'Maria Santos', service: 'Escova + Hidratação' },
                  { time: '14:00', client: 'Lucas Oliveira', service: 'Corte Simples' },
                  { time: '15:30', client: 'Ana Costa', service: 'Coloração' }
                ].map((appointment, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-400 font-semibold">{appointment.time}</span>
                      <span className="text-green-400 text-xs">Confirmado</span>
                    </div>
                    <div className="text-white font-semibold">{appointment.client}</div>
                    <div className="text-gray-400 text-sm">{appointment.service}</div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => router.push('/agenda')}
                className="w-full mt-4 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 text-purple-300 py-3 rounded-xl font-semibold transition-colors"
              >
                Ver Agenda Completa
              </button>
            </div>

            {/* WhatsApp Integration */}
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">WhatsApp Ativo</h3>
                  <p className="text-green-300 text-sm">Notificações automáticas</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-green-200">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>3 lembretes enviados hoje</span>
                </div>
                <div className="flex items-center gap-2 text-green-200">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>5 confirmações recebidas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
