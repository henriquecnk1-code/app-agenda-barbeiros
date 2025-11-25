'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, Heart, MessageCircle, Share2, Trophy, 
  TrendingUp, Users, Image as ImageIcon, Send, MoreVertical,
  Award, Star, Zap
} from 'lucide-react';

interface Post {
  id: string;
  author: string;
  authorProfile: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  liked: boolean;
  timestamp: string;
  badge?: string;
}

export default function ComunidadePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'feed' | 'ranking' | 'dicas'>('feed');
  const [newPost, setNewPost] = useState('');

  const posts: Post[] = [
    {
      id: '1',
      author: 'Carlos Silva',
      authorProfile: 'O Artista',
      avatar: '🎨',
      content: 'Acabei de finalizar um degradê perfeito! A técnica de transição suave faz toda diferença. Quem mais curte esse estilo?',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop',
      likes: 124,
      comments: 18,
      shares: 7,
      liked: false,
      timestamp: 'há 2 horas',
      badge: '👑'
    },
    {
      id: '2',
      author: 'Rafael Santos',
      authorProfile: 'O Técnico',
      avatar: '⚙️',
      content: 'Dica profissional: sempre use a navalha no sentido do crescimento do pelo para evitar irritações. Seus clientes vão agradecer!',
      likes: 89,
      comments: 12,
      shares: 15,
      liked: true,
      timestamp: 'há 4 horas'
    },
    {
      id: '3',
      author: 'Lucas Oliveira',
      authorProfile: 'O Visionário',
      avatar: '🚀',
      content: 'Mês incrível! Bati a meta de 150 clientes e aumentei o ticket médio em 30%. Organização e atendimento de qualidade fazem a diferença 💪',
      likes: 156,
      comments: 24,
      shares: 11,
      liked: false,
      timestamp: 'há 6 horas',
      badge: '⭐'
    },
    {
      id: '4',
      author: 'Pedro Costa',
      authorProfile: 'O Detalhista',
      avatar: '✨',
      content: 'Compartilhando meu setup de trabalho! Investir em boas ferramentas é essencial para entregar qualidade.',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=400&fit=crop',
      likes: 201,
      comments: 31,
      shares: 19,
      liked: true,
      timestamp: 'há 8 horas'
    }
  ];

  const rankings = [
    { position: 1, name: 'Carlos Silva', points: 2450, badge: '👑', trend: '+150' },
    { position: 2, name: 'Rafael Santos', points: 2280, badge: '⭐', trend: '+120' },
    { position: 3, name: 'Lucas Oliveira', points: 2150, badge: '🔥', trend: '+95' },
    { position: 4, name: 'Pedro Costa', points: 1980, badge: '💎', trend: '+80' },
    { position: 5, name: 'João Almeida', points: 1850, badge: '🎯', trend: '+70' },
  ];

  const tips = [
    {
      title: 'Técnica de Degradê Perfeito',
      author: 'Carlos Silva',
      likes: 234,
      category: 'Técnica'
    },
    {
      title: 'Como Aumentar Seu Faturamento',
      author: 'Lucas Oliveira',
      likes: 189,
      category: 'Negócios'
    },
    {
      title: 'Cuidados com Ferramentas',
      author: 'Pedro Costa',
      likes: 156,
      category: 'Manutenção'
    },
    {
      title: 'Atendimento ao Cliente',
      author: 'Rafael Santos',
      likes: 142,
      category: 'Soft Skills'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push('/dashboard')}
                className="text-white hover:text-purple-400 transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-bold text-white">Comunidade</h1>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-purple-300" />
                <span className="text-purple-200 text-sm font-medium">10.247 membros</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('feed')}
            className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
              activeTab === 'feed'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            Feed
          </button>
          <button
            onClick={() => setActiveTab('ranking')}
            className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
              activeTab === 'ranking'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            Ranking
          </button>
          <button
            onClick={() => setActiveTab('dicas')}
            className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
              activeTab === 'dicas'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            Dicas & Técnicas
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'feed' && (
              <div className="space-y-6">
                {/* New Post */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                      🎨
                    </div>
                    <div className="flex-1">
                      <textarea
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder="Compartilhe suas conquistas, dicas ou resultados..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 resize-none"
                        rows={3}
                      />
                      <div className="flex items-center justify-between mt-4">
                        <button className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                          <ImageIcon className="w-5 h-5" />
                          <span className="text-sm">Adicionar foto</span>
                        </button>
                        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          <span>Publicar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Posts */}
                {posts.map((post) => (
                  <div key={post.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    {/* Post Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                          {post.avatar}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-white font-bold">{post.author}</span>
                            {post.badge && <span className="text-xl">{post.badge}</span>}
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-purple-400">{post.authorProfile}</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-400">{post.timestamp}</span>
                          </div>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-white transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Post Content */}
                    <p className="text-gray-300 mb-4 leading-relaxed">{post.content}</p>

                    {/* Post Image */}
                    {post.image && (
                      <div className="mb-4 rounded-xl overflow-hidden">
                        <img 
                          src={post.image} 
                          alt="Post" 
                          className="w-full h-auto"
                        />
                      </div>
                    )}

                    {/* Post Actions */}
                    <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                      <button className={`flex items-center gap-2 transition-colors ${
                        post.liked ? 'text-pink-500' : 'text-gray-400 hover:text-pink-500'
                      }`}>
                        <Heart className={`w-5 h-5 ${post.liked ? 'fill-pink-500' : ''}`} />
                        <span className="font-semibold">{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span className="font-semibold">{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
                        <Share2 className="w-5 h-5" />
                        <span className="font-semibold">{post.shares}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'ranking' && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Trophy className="w-7 h-7 text-yellow-400" />
                  Top Profissionais da Semana
                </h3>

                <div className="space-y-4">
                  {rankings.map((rank) => (
                    <div 
                      key={rank.position}
                      className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                        rank.position <= 3
                          ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30'
                          : 'bg-white/5 border border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                          rank.position === 1 ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white' :
                          rank.position === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-gray-800' :
                          rank.position === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' :
                          'bg-white/10 text-gray-400'
                        }`}>
                          {rank.position}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-white font-bold">{rank.name}</span>
                            <span className="text-xl">{rank.badge}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-purple-400">{rank.points} pontos</span>
                            <span className="text-green-400 flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              {rank.trend}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {rank.position <= 3 && (
                        <Award className="w-8 h-8 text-yellow-400" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 text-center">
                  <div className="text-gray-400 text-sm mb-1">Sua posição</div>
                  <div className="text-white font-bold text-2xl mb-1">#12</div>
                  <div className="text-purple-400 text-sm">1.250 pontos • Continue assim!</div>
                </div>
              </div>
            )}

            {activeTab === 'dicas' && (
              <div className="space-y-4">
                {tips.map((tip, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">{tip.title}</h4>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-gray-400">por {tip.author}</span>
                          <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                            {tip.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-pink-400">
                        <Heart className="w-5 h-5" />
                        <span className="font-semibold">{tip.likes}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Estatísticas</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Membros Ativos</span>
                  <span className="text-white font-bold">10.247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Posts Hoje</span>
                  <span className="text-purple-400 font-bold">342</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Dicas Compartilhadas</span>
                  <span className="text-green-400 font-bold">1.856</span>
                </div>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Trending
              </h3>
              
              <div className="space-y-3">
                {[
                  { tag: '#DegradêPerfeito', posts: 234 },
                  { tag: '#DicasDoBarbeiro', posts: 189 },
                  { tag: '#SetupProfissional', posts: 156 },
                  { tag: '#ClienteSatisfeito', posts: 142 }
                ].map((topic, index) => (
                  <button key={index} className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 transition-all">
                    <div className="text-purple-400 font-semibold mb-1">{topic.tag}</div>
                    <div className="text-gray-400 text-sm">{topic.posts} posts</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Top Contributors */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Destaques
              </h3>
              
              <div className="space-y-3">
                {rankings.slice(0, 3).map((user) => (
                  <div key={user.position} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl">
                      {user.badge}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">{user.name}</div>
                      <div className="text-gray-400 text-xs">{user.points} pontos</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
