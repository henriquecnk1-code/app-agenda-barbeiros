'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, ArrowLeft, Sparkles, Check } from 'lucide-react';
import { QUIZ_QUESTIONS } from '@/lib/quiz-data';
import { PROFILE_TYPES, ProfileType } from '@/lib/types';

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [profileScores, setProfileScores] = useState<Record<ProfileType, number>>({
    artista: 0,
    tecnico: 0,
    visionario: 0,
    detalhista: 0
  });
  const [showResult, setShowResult] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<ProfileType | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'quarterly' | 'yearly'>('quarterly');

  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  const plans = [
    {
      id: 'monthly',
      name: '1 Mês',
      price: 69.90,
      period: 'mês',
      savings: null,
      popular: false
    },
    {
      id: 'quarterly',
      name: '3 Meses',
      price: 59.90,
      period: 'mês',
      savings: 'Economize R$ 30',
      popular: true
    },
    {
      id: 'yearly',
      name: '12 Meses',
      price: 49.90,
      period: 'mês',
      savings: 'Economize R$ 240',
      popular: false
    }
  ];

  const handleAnswer = (optionIndex: number) => {
    const option = currentQuestion.options[optionIndex];
    
    // Atualiza respostas
    setAnswers({ ...answers, [currentQuestion.id]: optionIndex });
    
    // Atualiza pontuação do perfil
    setProfileScores({
      ...profileScores,
      [option.profileType]: profileScores[option.profileType] + option.points
    });

    // Próxima pergunta ou resultado
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      // Determina perfil dominante
      const dominantProfile = Object.entries(profileScores).reduce((a, b) => 
        a[1] > b[1] ? a : b
      )[0] as ProfileType;
      
      setSelectedProfile(dominantProfile);
      setTimeout(() => setShowResult(true), 500);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (showResult && selectedProfile) {
    const profile = PROFILE_TYPES[selectedProfile];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12 animate-fade-in">
            <div className="text-8xl mb-6">{profile.icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Você é {profile.name}!
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              {profile.description}
            </p>
          </div>

          <div className={`bg-gradient-to-br ${profile.color} rounded-3xl p-1 mb-8`}>
            <div className="bg-slate-900 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Sua Agenda Personalizada Está Pronta!
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="text-4xl mb-3">📅</div>
                  <h3 className="text-xl font-bold text-white mb-2">Agenda Otimizada</h3>
                  <p className="text-gray-300">Sistema adaptado ao seu estilo de trabalho</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="text-4xl mb-3">💬</div>
                  <h3 className="text-xl font-bold text-white mb-2">WhatsApp Integrado</h3>
                  <p className="text-gray-300">Notificações automáticas para você e clientes</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="text-4xl mb-3">🏆</div>
                  <h3 className="text-xl font-bold text-white mb-2">Gamificação Ativa</h3>
                  <p className="text-gray-300">Pontos, badges e desafios personalizados</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="text-4xl mb-3">👥</div>
                  <h3 className="text-xl font-bold text-white mb-2">Comunidade Pro</h3>
                  <p className="text-gray-300">Conecte-se com profissionais como você</p>
                </div>
              </div>

              <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-6 text-center">Escolha Seu Plano</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {plans.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id as any)}
                      className={`relative bg-white/5 hover:bg-white/10 border-2 rounded-xl p-4 transition-all duration-300 ${
                        selectedPlan === plan.id 
                          ? 'border-purple-500 scale-105' 
                          : 'border-white/10'
                      } ${plan.popular ? 'pt-6' : ''}`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                          MAIS POPULAR
                        </div>
                      )}
                      
                      <div className="text-center">
                        <div className="text-sm text-gray-400 mb-1">{plan.name}</div>
                        <div className="text-3xl font-bold text-white mb-1">
                          R$ {plan.price.toFixed(2).replace('.', ',')}
                        </div>
                        <div className="text-xs text-gray-400 mb-2">por {plan.period}</div>
                        
                        {plan.savings && (
                          <div className="text-xs font-semibold text-green-400">
                            {plan.savings}
                          </div>
                        )}
                        
                        {selectedPlan === plan.id && (
                          <div className="mt-2 flex items-center justify-center gap-1 text-purple-400">
                            <Check className="w-4 h-4" />
                            <span className="text-xs font-semibold">Selecionado</span>
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="bg-purple-500/10 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Teste Grátis</span>
                    <span className="text-2xl font-bold text-purple-400">7 dias</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Experimente todos os recursos sem compromisso
                  </div>
                </div>

                <div className="flex items-center gap-2 text-purple-300 text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Cancele quando quiser • Sem compromisso</span>
                </div>
              </div>

              <button
                onClick={() => router.push('/dashboard')}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <span>Comece Agora Seu Teste Grátis</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              
              <p className="text-center text-gray-400 mt-4">
                Junte-se a 10.000+ profissionais de beleza
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => router.push('/')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Voltar ao início
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">
              Pergunta {currentStep + 1} de {QUIZ_QUESTIONS.length}
            </span>
            <span className="text-purple-400 text-sm font-semibold">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            {currentQuestion.question}
          </h2>

          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-2xl p-6 text-left transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-lg text-white group-hover:text-purple-300 transition-colors">
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
          
          <button
            onClick={() => router.push('/')}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
