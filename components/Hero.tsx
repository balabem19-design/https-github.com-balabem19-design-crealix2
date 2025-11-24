import React, { useEffect, useState } from 'react';
import { generateImage } from '../services/geminiService';
import { ArrowRight, Box } from 'lucide-react';
import { ScrollReveal } from './AnimationWrapper';

export const Hero: React.FC = () => {
  const [heroImage, setHeroImage] = useState<string | null>(null);

  useEffect(() => {
    // Generate the abstract 3D object
    const fetchImage = async () => {
      const prompt = "A hyper-realistic translucent glass cube floating in a dark void, soft cyan and lilac neon rim lighting, minimal, 8k resolution, cinematic lighting, futuristic texture, slight dispersion effect";
      const img = await generateImage(prompt, "16:9");
      if (img) setHeroImage(img);
    };
    fetchImage();
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0C0C0D]">
      {/* Background Micro Noise & Lines */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
      }}></div>
      
      {/* Vertical Light Lines */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#3CEFFF]/20 to-transparent left-1/4 animate-[pulse_4s_infinite]"></div>
         <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#A16EFF]/20 to-transparent left-3/4 animate-[pulse_6s_infinite_1s]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pt-20">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-8">
          <ScrollReveal delay={0}>
            <div className="inline-block px-3 py-1 border border-[#3CEFFF]/30 rounded-full bg-[#3CEFFF]/5">
              <span className="text-[#3CEFFF] text-xs font-bold tracking-widest uppercase">Nova Era do Marketing</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Elevamos sua marca ao nível que o seu cliente <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3CEFFF] to-[#A16EFF]">sonha em alcançar.</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="text-gray-400 text-lg max-w-lg font-light">
              Tecnologia, estratégia e inteligência artificial trabalhando juntas para fazer sua marca vender mais.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#servicos" className="btn-shine px-8 py-4 bg-white text-black font-bold text-lg rounded-none hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group">
                Criar Meu Projeto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/5548991849190" className="px-8 py-4 border border-[#3CEFFF] text-[#3CEFFF] font-bold text-lg rounded-none hover:bg-[#3CEFFF]/10 transition-all flex items-center justify-center hover:shadow-[0_0_20px_rgba(60,239,255,0.2)]">
                Falar com a Crealix
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* 3D Object Visual */}
        <div className="order-1 lg:order-2 flex justify-center items-center relative">
           <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
              {/* Fallback geometric shape if generation takes time */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3CEFFF]/20 to-[#A16EFF]/20 blur-3xl rounded-full animate-pulse"></div>
              {heroImage ? (
                <img 
                  src={heroImage} 
                  alt="Abstract 3D Shape" 
                  className="relative z-10 w-full h-full object-contain animate-float drop-shadow-[0_0_30px_rgba(60,239,255,0.3)]"
                />
              ) : (
                 <div className="w-64 h-64 border border-[#3CEFFF]/30 bg-[#3CEFFF]/5 backdrop-blur-md rotate-45 animate-float relative z-10 flex items-center justify-center">
                   <div className="w-32 h-32 border border-[#A16EFF]/50 rotate-90"></div>
                 </div>
              )}
           </div>
        </div>

      </div>
    </section>
  );
};
