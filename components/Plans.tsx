import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Plans: React.FC = () => {
  const plans = [
    {
      name: 'Start',
      duration: 'Mínimo 2 meses',
      price: 'Essencial',
      features: ['Gestão de 1 Rede Social', 'Design System Básico', 'Relatórios Mensais', 'Suporte em horário comercial'],
      highlight: false
    },
    {
      name: 'Growth',
      duration: 'Mínimo 3 meses',
      price: 'Recomendado',
      features: ['Gestão de 2 Redes Sociais', 'Tráfego Pago (Setup + Gestão)', 'Webdesign Landing Page', '1 Agente de IA (Atendimento)', 'Dashboards em Tempo Real'],
      highlight: true
    },
    {
      name: 'Scale',
      duration: 'Mínimo 3 meses',
      price: 'Premium',
      features: ['Gestão Completa (Omnichannel)', 'Ecossistema de IA (Vendas + Suporte)', 'Consultoria de Estratégia Mensal', 'Website Institucional Premium', 'Automação de CRM'],
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-[#0C0C0D] relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-white mb-16">Escolha sua evolução</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
           {plans.map((plan) => (
             <div 
               key={plan.name}
               className={`relative p-8 rounded-2xl transition-all duration-300 ${
                 plan.highlight 
                 ? 'bg-gradient-to-b from-[#1a1a1a] to-black border border-[#3CEFFF] shadow-[0_0_30px_rgba(60,239,255,0.1)] transform md:-translate-y-4' 
                 : 'bg-white/5 border border-white/10 hover:border-white/20'
               }`}
             >
               {plan.highlight && (
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#3CEFFF] text-black text-xs font-bold rounded-full uppercase tracking-wider">
                   Mais Escolhido
                 </div>
               )}
               
               <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
               <p className="text-[#A16EFF] text-sm font-medium mb-6">{plan.duration}</p>
               
               <div className="w-full h-[1px] bg-white/10 mb-6"></div>
               
               <ul className="space-y-4 mb-8">
                 {plan.features.map((feature, idx) => (
                   <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                     <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-[#3CEFFF]' : 'text-gray-500'}`} />
                     {feature}
                   </li>
                 ))}
               </ul>

               <a 
                 href="https://wa.me/5548991849190"
                 className={`block w-full py-3 text-center rounded-lg font-bold transition-all ${
                    plan.highlight 
                    ? 'bg-white text-black hover:bg-[#3CEFFF]' 
                    : 'bg-transparent border border-white/20 text-white hover:bg-white hover:text-black'
                 }`}
               >
                 Selecionar
               </a>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
