import React, { useEffect, useState } from 'react';
import { generateImage } from '../services/geminiService';
import { Mic, Calendar, Activity, MessageSquare, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, TiltCard } from './AnimationWrapper';

export const SecretariaSmart: React.FC = () => {
  const [avatarImage, setAvatarImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      // Updated prompt for soft white/cyan background and friendly holographic vibe
      const prompt = "Portrait of a friendly futuristic female AI assistant, elegant and professional, wearing white minimalist tech clothing, soft friendly expression, looking at camera, holographic interface elements surrounding her, soft clean white and cyan background, high key lighting, photorealistic 3D render, octane render";
      const img = await generateImage(prompt, "1:1");
      if (img) setAvatarImage(img);
    };
    fetchImage();
  }, []);

  return (
    <section id="smart" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Background Gradient to blend the requested 'light' avatar into the dark site */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 70% 50%, rgba(60, 239, 255, 0.1) 0%, transparent 60%)`
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Info */}
          <div className="space-y-8 order-2 lg:order-1">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3CEFFF]/30 bg-[#3CEFFF]/5">
                <div className="w-2 h-2 bg-[#3CEFFF] rounded-full animate-ping"></div>
                <span className="text-[#3CEFFF] text-xs font-bold tracking-widest uppercase">Online 24/7</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                🤖 Secretária Smart — <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">A assistente que nunca dorme.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-gray-300 text-lg font-light leading-relaxed">
                A Secretária Smart é a agente de IA da Crealix. Ela realiza <span className="text-white font-semibold">agendamentos, suporte, vendas, atendimento ao cliente, triagem inteligente, follow-up automático e qualificação de leads</span>, tudo em tempo real.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <p className="text-gray-400 text-lg font-light leading-relaxed border-l-2 border-[#3CEFFF] pl-4">
                Ela conversa com naturalidade, entende intenções e conduz seu cliente até onde ele precisa — como uma secretária e um vendedor trabalhando juntos, 24h por dia.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <button className="btn-shine px-8 py-4 bg-gradient-to-r from-[#3CEFFF] to-[#3CEFFF]/80 text-black font-bold text-lg rounded-lg shadow-[0_0_20px_rgba(60,239,255,0.4)] hover:shadow-[0_0_30px_rgba(60,239,255,0.6)] transition-all transform hover:-translate-y-1 hover:scale-105">
                Quero minha Secretária Smart
              </button>
            </ScrollReveal>
          </div>

          {/* Avatar & UI */}
          <div className="order-1 lg:order-2 flex justify-center">
            <TiltCard intensity={10} className="relative w-full max-w-md">
               {/* Holographic Ring */}
               <div className="absolute inset-0 rounded-full border border-[#3CEFFF]/30 animate-[spin_10s_linear_infinite] scale-110"></div>
               <div className="absolute -inset-4 rounded-full border border-dashed border-[#A16EFF]/30 animate-[spin_15s_linear_infinite_reverse] scale-110"></div>
               
               {/* Avatar Container */}
               <div className="relative rounded-full overflow-hidden border-4 border-[#3CEFFF]/20 shadow-[0_0_60px_rgba(60,239,255,0.15)] aspect-square bg-white animate-breathe z-10">
                  {avatarImage ? (
                    <img src={avatarImage} alt="AI Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400 gap-2">
                       <Activity className="animate-bounce text-[#3CEFFF]" />
                       <span className="text-xs">Gerando Avatar...</span>
                    </div>
                  )}
               </div>

               {/* Floating HUD Cards */}
               <div className="absolute top-10 -left-12 bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20 shadow-2xl flex items-center gap-3 animate-float z-20">
                  <div className="bg-[#A16EFF]/20 p-2 rounded-lg">
                    <Calendar className="text-[#A16EFF] w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-300 tracking-wider">STATUS</div>
                    <div className="text-xs text-white font-mono font-bold">AGENDANDO...</div>
                  </div>
               </div>

               <div className="absolute bottom-20 -right-8 bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20 shadow-2xl flex items-center gap-3 animate-float z-20" style={{animationDelay: '1.5s'}}>
                  <div className="bg-[#3CEFFF]/20 p-2 rounded-lg">
                    <CheckCircle2 className="text-[#3CEFFF] w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-300 tracking-wider">LEAD</div>
                    <div className="text-xs text-white font-mono font-bold">QUALIFICADO</div>
                  </div>
               </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
};
