'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, TrendingUp, DollarSign, Users, Calendar,
  BarChart3, PieChart, LineChart, Download, Filter, FileText, FileSpreadsheet, X
} from 'lucide-react';

export default function RelatoriosPage() {
  const router = useRouter();
  const [period, setPeriod] = useState<'week' | 'month' | 'year'>('month');
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Estados dos filtros
  const [selectedService, setSelectedService] = useState<string>('all');
  const [selectedProfessional, setSelectedProfessional] = useState<string>('all');
  const [dateRange, setDateRange] = useState<string>('current');

  // Previne hydration mismatch e fetch desnecessários
  useEffect(() => {
    setMounted(true);
  }, []);

  // Mock data
  const stats = {
    revenue: {
      current: 15420,
      previous: 12350,
      growth: 24.8
    },
    appointments: {
      current: 156,
      previous: 142,
      growth: 9.9
    },
    clients: {
      current: 89,
      previous: 76,
      growth: 17.1
    },
    avgTicket: {
      current: 98.85,
      previous: 86.97,
      growth: 13.7
    }
  };

  const topServices = [
    { name: 'Corte + Barba', count: 45, revenue: 4050 },
    { name: 'Coloração', count: 32, revenue: 4800 },
    { name: 'Escova + Hidratação', count: 28, revenue: 2240 },
    { name: 'Corte Simples', count: 51, revenue: 2040 }
  ];

  const revenueByDay = [
    { day: 'Seg', value: 2100 },
    { day: 'Ter', value: 2450 },
    { day: 'Qua', value: 1980 },
    { day: 'Qui', value: 2680 },
    { day: 'Sex', value: 3120 },
    { day: 'Sáb', value: 3090 }
  ];

  const handleExport = (format: 'excel' | 'pdf' | 'doc') => {
    // Simulação de exportação
    alert(`Exportando relatório como ${format.toUpperCase()}...`);
    setShowExportMenu(false);
  };

  const applyFilters = () => {
    // Simulação de aplicação de filtros
    alert(`Filtros aplicados:\nServiço: ${selectedService}\nProfissional: ${selectedProfessional}\nPeríodo: ${dateRange}`);
    setShowFilters(false);
  };

  const clearFilters = () => {
    setSelectedService('all');
    setSelectedProfessional('all');
    setDateRange('current');
  };

  if (!mounted) {
    return null;
  }

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
              <h1 className="text-2xl font-bold text-white">Relatórios</h1>
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setShowExportMenu(!showExportMenu)}
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Exportar</span>
              </button>

              {showExportMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
                  <button
                    onClick={() => handleExport('excel')}
                    className="w-full px-4 py-3 text-left text-white hover:bg-purple-500/20 transition-colors flex items-center gap-3"
                  >
                    <FileSpreadsheet className="w-5 h-5 text-green-400" />
                    <span>Exportar como Excel</span>
                  </button>
                  <button
                    onClick={() => handleExport('pdf')}
                    className="w-full px-4 py-3 text-left text-white hover:bg-purple-500/20 transition-colors flex items-center gap-3"
                  >
                    <FileText className="w-5 h-5 text-red-400" />
                    <span>Exportar como PDF</span>
                  </button>
                  <button
                    onClick={() => handleExport('doc')}
                    className="w-full px-4 py-3 text-left text-white hover:bg-purple-500/20 transition-colors flex items-center gap-3"
                  >
                    <FileText className="w-5 h-5 text-blue-400" />
                    <span>Exportar como DOC</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Period Selector */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1">
            <button
              onClick={() => setPeriod('week')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                period === 'week' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Semana
            </button>
            <button
              onClick={() => setPeriod('month')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                period === 'month' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Mês
            </button>
            <button
              onClick={() => setPeriod('year')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                period === 'year' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Ano
            </button>
          </div>

          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2 hover:bg-white/10"
          >
            <Filter className="w-5 h-5" />
            <span>Filtros</span>
          </button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Filter className="w-6 h-6 text-purple-400" />
                Filtros Avançados
              </h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Filtro de Serviço */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Serviço
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">Todos os Serviços</option>
                  <option value="corte-barba">Corte + Barba</option>
                  <option value="coloracao">Coloração</option>
                  <option value="escova">Escova + Hidratação</option>
                  <option value="corte-simples">Corte Simples</option>
                </select>
              </div>

              {/* Filtro de Profissional */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Profissional
                </label>
                <select
                  value={selectedProfessional}
                  onChange={(e) => setSelectedProfessional(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">Todos os Profissionais</option>
                  <option value="maria">Maria Silva</option>
                  <option value="joao">João Santos</option>
                  <option value="ana">Ana Costa</option>
                  <option value="pedro">Pedro Oliveira</option>
                </select>
              </div>

              {/* Filtro de Período Customizado */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Período Customizado
                </label>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="current">Período Atual</option>
                  <option value="last-7">Últimos 7 dias</option>
                  <option value="last-30">Últimos 30 dias</option>
                  <option value="last-90">Últimos 90 dias</option>
                  <option value="custom">Personalizado</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={applyFilters}
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors font-semibold"
              >
                Aplicar Filtros
              </button>
              <button
                onClick={clearFilters}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Limpar Filtros
              </button>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 text-green-400" />
              <div className="flex items-center gap-1 text-green-400 text-sm font-semibold">
                <TrendingUp className="w-4 h-4" />
                <span>+{stats.revenue.growth}%</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              R$ {stats.revenue.current.toLocaleString('pt-BR')}
            </div>
            <div className="text-gray-300 text-sm">Faturamento Total</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8 text-blue-400" />
              <div className="flex items-center gap-1 text-blue-400 text-sm font-semibold">
                <TrendingUp className="w-4 h-4" />
                <span>+{stats.appointments.growth}%</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {stats.appointments.current}
            </div>
            <div className="text-gray-300 text-sm">Agendamentos</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-purple-400" />
              <div className="flex items-center gap-1 text-purple-400 text-sm font-semibold">
                <TrendingUp className="w-4 h-4" />
                <span>+{stats.clients.growth}%</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {stats.clients.current}
            </div>
            <div className="text-gray-300 text-sm">Clientes Ativos</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="w-8 h-8 text-orange-400" />
              <div className="flex items-center gap-1 text-orange-400 text-sm font-semibold">
                <TrendingUp className="w-4 h-4" />
                <span>+{stats.avgTicket.growth}%</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              R$ {stats.avgTicket.current.toFixed(2).replace('.', ',')}
            </div>
            <div className="text-gray-300 text-sm">Ticket Médio</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue Chart */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <LineChart className="w-6 h-6 text-purple-400" />
                Faturamento por Dia
              </h3>
            </div>
            
            <div className="space-y-4">
              {revenueByDay.map((item, index) => {
                const maxValue = Math.max(...revenueByDay.map(d => d.value));
                const percentage = (item.value / maxValue) * 100;
                
                return (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm font-medium">{item.day}</span>
                      <span className="text-white font-semibold">
                        R$ {item.value.toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top Services */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <PieChart className="w-6 h-6 text-blue-400" />
                Serviços Mais Vendidos
              </h3>
            </div>
            
            <div className="space-y-4">
              {topServices.map((service, index) => {
                const maxCount = Math.max(...topServices.map(s => s.count));
                const percentage = (service.count / maxCount) * 100;
                
                return (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-white font-semibold mb-1">{service.name}</div>
                        <div className="text-gray-400 text-sm">{service.count} atendimentos</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold">
                          R$ {service.revenue.toLocaleString('pt-BR')}
                        </div>
                      </div>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="mt-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">💡 Insights de Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-green-400 font-semibold mb-2">✅ Ponto Forte</div>
              <p className="text-gray-300 text-sm">
                Seu faturamento cresceu 24.8% em relação ao período anterior. Continue assim!
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-blue-400 font-semibold mb-2">📊 Oportunidade</div>
              <p className="text-gray-300 text-sm">
                Sexta-feira é seu melhor dia. Considere aumentar a disponibilidade.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-orange-400 font-semibold mb-2">🎯 Meta</div>
              <p className="text-gray-300 text-sm">
                Faltam apenas R$ 580 para atingir sua meta mensal de R$ 16.000!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
