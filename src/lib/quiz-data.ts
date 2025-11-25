// Dados do quiz de personalidade profissional

import { QuizQuestion } from './types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: '1',
    question: 'Como você prefere trabalhar?',
    options: [
      { text: 'Experimentando novos estilos e tendências', profileType: 'artista', points: 10 },
      { text: 'Seguindo técnicas comprovadas e precisas', profileType: 'tecnico', points: 10 },
      { text: 'Planejando crescimento e expansão', profileType: 'visionario', points: 10 },
      { text: 'Focando em cada detalhe do corte', profileType: 'detalhista', points: 10 }
    ]
  },
  {
    id: '2',
    question: 'O que mais te motiva no dia a dia?',
    options: [
      { text: 'Criar cortes únicos e inovadores', profileType: 'artista', points: 10 },
      { text: 'Dominar todas as técnicas de corte', profileType: 'tecnico', points: 10 },
      { text: 'Crescer profissionalmente e financeiramente', profileType: 'visionario', points: 10 },
      { text: 'Ver a satisfação do cliente com o resultado', profileType: 'detalhista', points: 10 }
    ]
  },
  {
    id: '3',
    question: 'Como você lida com clientes difíceis?',
    options: [
      { text: 'Proponho soluções criativas e diferentes', profileType: 'artista', points: 10 },
      { text: 'Explico tecnicamente as melhores opções', profileType: 'tecnico', points: 10 },
      { text: 'Transformo em oportunidade de fidelização', profileType: 'visionario', points: 10 },
      { text: 'Ouço atentamente e ajusto cada detalhe', profileType: 'detalhista', points: 10 }
    ]
  },
  {
    id: '4',
    question: 'Qual seu objetivo profissional?',
    options: [
      { text: 'Ser reconhecido pela criatividade', profileType: 'artista', points: 10 },
      { text: 'Ser referência em técnica', profileType: 'tecnico', points: 10 },
      { text: 'Ter minha própria rede de barbearias', profileType: 'visionario', points: 10 },
      { text: 'Ter clientes 100% satisfeitos', profileType: 'detalhista', points: 10 }
    ]
  },
  {
    id: '5',
    question: 'Como você organiza sua agenda?',
    options: [
      { text: 'Deixo espaço para inspiração e criatividade', profileType: 'artista', points: 10 },
      { text: 'Cronometro cada serviço com precisão', profileType: 'tecnico', points: 10 },
      { text: 'Otimizo para máxima produtividade', profileType: 'visionario', points: 10 },
      { text: 'Garanto tempo suficiente para cada cliente', profileType: 'detalhista', points: 10 }
    ]
  }
];
