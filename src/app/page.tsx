'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Calendar, Users, Trophy, Zap, Star, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-purple-300" />
              <span className="text-purple-200 text-sm font-medium">Sistema Profissional de Agendamento</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transforme Seu Salão em um
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Negócio de Sucesso</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Agenda inteligente, notificações automáticas no WhatsApp, gamificação e comunidade profissional. Tudo em um só lugar.
            </p>
            
            <button
              onClick={() => router.push('/onboarding')}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <span>Começar Agora Grátis</span>
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </button>
            
            <p className="text-gray-400 mt-4 text-sm">
              Teste grátis • Sem cartão de crédito • Ative por apenas R$ 69,90/mês
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Users, value: '10.000+', label: 'Profissionais Ativos' },
            { icon: Calendar, value: '500k+', label: 'Agendamentos/Mês' },
            { icon: Star, value: '4.9/5.0', label: 'Avaliação Média' },
            { icon: TrendingUp, value: '+40%', label: 'Aumento em Faturamento' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tudo que Você Precisa em Um Só Lugar
          </h2>
          <p className="text-xl text-gray-300">
            Funcionalidades pensadas para profissionais de beleza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: 'Integração WhatsApp',
              description: 'Notificações automáticas para você e seus clientes. Confirmações, lembretes e muito mais.',
              gradient: 'from-green-500 to-emerald-500'
            },
            {
              icon: Trophy,
              title: 'Gamificação Completa',
              description: 'Ganhe pontos, desbloqueie badges e complete desafios. Torne seu trabalho mais divertido.',
              gradient: 'from-yellow-500 to-orange-500'
            },
            {
              icon: Users,
              title: 'Comunidade Profissional',
              description: 'Conecte-se com outros profissionais, compartilhe dicas e aprenda com os melhores.',
              gradient: 'from-blue-500 to-cyan-500'
            },
            {
              icon: Calendar,
              title: 'Agenda Inteligente',
              description: 'Sistema personalizado que se adapta ao seu estilo de trabalho e otimiza seu tempo.',
              gradient: 'from-purple-500 to-pink-500'
            },
            {
              icon: Star,
              title: 'Prova Social',
              description: 'Avaliações dos clientes, rankings e conquistas para mostrar seu profissionalismo.',
              gradient: 'from-red-500 to-pink-500'
            },
            {
              icon: TrendingUp,
              title: 'Análise de Desempenho',
              description: 'Acompanhe seu crescimento, faturamento e produtividade em tempo real.',
              gradient: 'from-indigo-500 to-purple-500'
            }
          ].map((feature, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Profissionais Reais, Resultados Reais
            </h2>
            <p className="text-xl text-gray-300">
              Veja o que profissionais como você estão conquistando
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Carlos Silva',
                role: 'Barbeiro há 5 anos',
                result: '+60% em agendamentos',
                quote: 'Nunca mais perdi um cliente por desorganização. O sistema mudou meu negócio!'
              },
              {
                name: 'Mariana Costa',
                role: 'Cabeleireira profissional',
                result: '400+ clientes/mês',
                quote: 'A integração com WhatsApp economiza horas do meu dia. Simplesmente perfeito.'
              },
              {
                name: 'Ana Paula Souza',
                role: 'Dona de salão',
                result: 'Nota 5.0 média',
                quote: 'A gamificação me motiva todos os dias. Virei referência na minha região!'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm mb-2">{testimonial.role}</div>
                  <div className="text-purple-400 font-bold">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto Para Transformar Sua Carreira?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de profissionais que já estão crescendo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            {[
              'Teste grátis por 7 dias',
              'Sem cartão de crédito',
              'Cancele quando quiser'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => router.push('/onboarding')}
            className="inline-flex items-center gap-3 bg-white text-purple-600 px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105"
          >
            <span>Começar Minha Transformação</span>
            <ArrowRight className="w-6 h-6" />
          </button>
          
          <p className="text-purple-100 mt-6 text-lg">
            Depois do teste: <span className="font-bold text-white">apenas R$ 69,90/mês</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 py-12 border-t border-white/10">
        <div className="text-center text-gray-400">
          <p>© 2024 SalãoPro. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Transformando profissionais em empresários de sucesso</p>
        </div>
      </div>
    </div>
  );
}
