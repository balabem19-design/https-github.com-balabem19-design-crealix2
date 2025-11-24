import React from 'react';
import { Share2, Layout, Zap, Bot, BarChart3 } from 'lucide-react';
import { ServiceItem } from '../types';
import { ScrollReveal, TiltCard } from './AnimationWrapper';

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: '1',
      title: 'Gestão de Redes Sociais',
      description: 'Conteúdos estratégicos que criam conexão e transformam atenção em vendas.',
      icon: <Share2 className="w-8 h-8 text-[#3CEFFF]" />
    },
    {
      id: '2',
      title: 'Webdesign Premium',
      description: 'Sites que passam confiança antes mesmo do cliente ler seu texto.',
      icon: <Layout className="w-8 h-8 text-[#A16EFF]" />
    },
    {
      id: '3',
      title: 'Automações Inteligentes',
      description: 'Converta mais enquanto sua empresa dorme.',
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      id: '4',
      title: 'Agentes de IA',
      description: 'Atendimento inteligente que entende, responde e vende com precisão cirúrgica.',
      icon: <Bot className="w-8 h-8 text-[#3CEFFF]" />
    },
    {
      id: '5',
      title: 'Tráfego Pago',
      description: 'Estratégias baseadas em dados reais, não em achismos.',
      icon: <BarChart3 className="w-8 h-8 text-[#A16EFF]" />
    }
  ];

  return (
    <section id="servicos" className="relative py-32 bg-[#0C0C0D]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Nossas Soluções</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#3CEFFF] to-[#A16EFF] mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <TiltCard intensity={5} className="h-full">
                <div className="h-full glass-panel p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 hover:neon-border-cyan flex flex-col justify-between group">
                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-[#3CEFFF] to-[#A16EFF] opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity blur-md"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 p-4 bg-white/5 w-fit rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/10">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#3CEFFF] transition-colors">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-8 pt-6 border-t border-white/5">
                     <span className="text-xs font-mono text-gray-500 group-hover:text-[#3CEFFF] transition-colors flex items-center gap-2">
                       0{index + 1} // EXPLORAR
                     </span>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
