'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Calendar as CalendarIcon, Plus, Clock, User, DollarSign, 
  Phone, MessageCircle, Check, X, ArrowLeft, Search, Filter
} from 'lucide-react';

interface TimeSlot {
  time: string;
  available: boolean;
  appointment?: {
    clientName: string;
    clientPhone: string;
    service: string;
    price: number;
    status: 'confirmed' | 'pending';
  };
}

export default function AgendaPage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showNewAppointment, setShowNewAppointment] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock time slots
  const timeSlots: TimeSlot[] = [
    { time: '09:00', available: false, appointment: { clientName: 'João Silva', clientPhone: '(11) 98765-4321', service: 'Corte + Barba', price: 80, status: 'confirmed' } },
    { time: '09:30', available: true },
    { time: '10:00', available: true },
    { time: '10:30', available: false, appointment: { clientName: 'Pedro Santos', clientPhone: '(11) 98765-1234', service: 'Corte Simples', price: 50, status: 'confirmed' } },
    { time: '11:00', available: true },
    { time: '11:30', available: true },
    { time: '12:00', available: true },
    { time: '12:30', available: true },
    { time: '13:00', available: true },
    { time: '13:30', available: true },
    { time: '14:00', available: false, appointment: { clientName: 'Lucas Oliveira', clientPhone: '(11) 98765-5678', service: 'Barba', price: 40, status: 'pending' } },
    { time: '14:30', available: true },
    { time: '15:00', available: true },
    { time: '15:30', available: false, appointment: { clientName: 'Rafael Costa', clientPhone: '(11) 98765-9012', service: 'Corte + Barba', price: 80, status: 'confirmed' } },
    { time: '16:00', available: true },
    { time: '16:30', available: true },
    { time: '17:00', available: true },
    { time: '17:30', available: true },
    { time: '18:00', available: true },
  ];

  const handleWhatsAppNotification = (phone: string, clientName: string) => {
    // Simula envio de notificação WhatsApp
    alert(`📱 Notificação enviada via WhatsApp para ${clientName} (${phone})`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push('/dashboard')}
                className="text-white hover:text-purple-400 transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-bold text-white">Minha Agenda</h1>
            </div>
            
            <button
              onClick={() => setShowNewAppointment(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              <span className="hidden sm:inline">Novo Agendamento</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar & Filters */}
          <div className="lg:col-span-1 space-y-6">
            {/* Date Selector */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CalendarIcon className="w-6 h-6 text-purple-400" />
                Selecionar Data
              </h3>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
                <div className="text-center">
                  <div className="text-purple-400 text-sm font-semibold mb-2">
                    {selectedDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {selectedDate.getDate()}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {selectedDate.toLocaleDateString('pt-BR', { weekday: 'long' })}
                  </div>
                </div>
              </div>

              {/* Quick Date Navigation */}
              <div className="grid grid-cols-7 gap-2">
                {[...Array(7)].map((_, i) => {
                  const date = new Date();
                  date.setDate(date.getDate() + i);
                  const isSelected = date.toDateString() === selectedDate.toDateString();
                  
                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedDate(date)}
                      className={`aspect-square rounded-xl flex flex-col items-center justify-center text-xs transition-all ${
                        isSelected 
                          ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white' 
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-[10px] mb-1">
                        {date.toLocaleDateString('pt-BR', { weekday: 'short' })}
                      </span>
                      <span className="font-bold">{date.getDate()}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Resumo do Dia</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Total de Horários</span>
                  <span className="text-white font-bold">{timeSlots.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Agendados</span>
                  <span className="text-green-400 font-bold">
                    {timeSlots.filter(s => !s.available).length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Disponíveis</span>
                  <span className="text-purple-400 font-bold">
                    {timeSlots.filter(s => s.available).length}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-gray-400">Faturamento Previsto</span>
                  <span className="text-yellow-400 font-bold">
                    R$ {timeSlots.reduce((sum, slot) => sum + (slot.appointment?.price || 0), 0)}
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration Status */}
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
                  <Check className="w-4 h-4" />
                  <span>Confirmações automáticas</span>
                </div>
                <div className="flex items-center gap-2 text-green-200">
                  <Check className="w-4 h-4" />
                  <span>Lembretes 2h antes</span>
                </div>
                <div className="flex items-center gap-2 text-green-200">
                  <Check className="w-4 h-4" />
                  <span>Mensagens personalizadas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Time Slots */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Horários</h3>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400">Confirmado</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-400">Pendente</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-2">
                {timeSlots.map((slot, index) => (
                  <div key={index}>
                    {slot.available ? (
                      <button
                        onClick={() => setShowNewAppointment(true)}
                        className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-xl p-4 transition-all text-left group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                              <Clock className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-bold text-lg">{slot.time}</div>
                              <div className="text-gray-400 text-sm">Horário disponível</div>
                            </div>
                          </div>
                          <Plus className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                        </div>
                      </button>
                    ) : (
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                              slot.appointment?.status === 'confirmed' 
                                ? 'bg-gradient-to-br from-green-500 to-emerald-500' 
                                : 'bg-gradient-to-br from-yellow-500 to-orange-500'
                            }`}>
                              <span className="text-2xl font-bold text-white">{slot.time}</span>
                            </div>
                            <div>
                              <div className="text-white font-bold text-lg mb-1">
                                {slot.appointment?.clientName}
                              </div>
                              <div className="text-gray-400 text-sm mb-1">
                                {slot.appointment?.service}
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="w-4 h-4 text-gray-500" />
                                <span className="text-gray-400">{slot.appointment?.clientPhone}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-green-400 font-bold text-lg mb-2">
                              R$ {slot.appointment?.price}
                            </div>
                            <span className={`text-xs px-3 py-1 rounded-full ${
                              slot.appointment?.status === 'confirmed'
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {slot.appointment?.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleWhatsAppNotification(
                              slot.appointment?.clientPhone || '',
                              slot.appointment?.clientName || ''
                            )}
                            className="flex-1 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-green-300 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                          >
                            <MessageCircle className="w-4 h-4" />
                            <span>WhatsApp</span>
                          </button>
                          
                          <button className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-300 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                            <Check className="w-4 h-4" />
                            <span>Confirmar</span>
                          </button>
                          
                          <button className="bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-300 p-2 rounded-lg transition-colors">
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Appointment Modal */}
      {showNewAppointment && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Novo Agendamento</h3>
              <button
                onClick={() => setShowNewAppointment(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Nome do Cliente</label>
                <input
                  type="text"
                  placeholder="João Silva"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Telefone (WhatsApp)</label>
                <input
                  type="tel"
                  placeholder="(11) 98765-4321"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Serviço</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500">
                  <option value="">Selecione o serviço</option>
                  <option value="corte">Corte Simples - R$ 50</option>
                  <option value="barba">Barba - R$ 40</option>
                  <option value="corte-barba">Corte + Barba - R$ 80</option>
                  <option value="completo">Pacote Completo - R$ 120</option>
                </select>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Horário</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500">
                  <option value="">Selecione o horário</option>
                  {timeSlots.filter(s => s.available).map((slot, i) => (
                    <option key={i} value={slot.time}>{slot.time}</option>
                  ))}
                </select>
              </div>

              <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4">
                <div className="flex items-center gap-2 text-green-300 text-sm mb-2">
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-semibold">Notificação Automática</span>
                </div>
                <p className="text-green-200 text-xs">
                  O cliente receberá confirmação via WhatsApp e lembrete 2h antes do horário
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowNewAppointment(false)}
                  className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
                >
                  Agendar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
