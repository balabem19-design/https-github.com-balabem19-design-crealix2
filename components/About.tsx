import React, { useEffect, useState } from 'react';
import { generateImage } from '../services/geminiService';

export const About: React.FC = () => {
  const [officeImage, setOfficeImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const prompt = "Futuristic ultra-clean white marketing agency office, bright natural lighting, holographic projections of data in the air, minimalist robots assisting human designers, scandinavian furniture, wide angle, photorealistic, 8k";
      const img = await generateImage(prompt, "16:9");
      if (img) setOfficeImage(img);
    };
    fetchImage();
  }, []);

  return (
    <section className="relative py-24 bg-[#F5F5F7] overflow-hidden">
      {/* 3D Waves Background Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 50 Q 50 30 100 50 L 100 100 L 0 100 Z" fill="url(#grad1)" />
           <defs>
             <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="white" stopOpacity="0" />
               <stop offset="100%" stopColor="#A16EFF" stopOpacity="0.2" />
             </linearGradient>
           </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="relative group">
            <div className="absolute inset-0 bg-[#A16EFF] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white aspect-[4/3]">
              {officeImage ? (
                <img src={officeImage} alt="Futuristic Office" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center animate-pulse">
                  <span className="text-gray-400">Gerando visual futurista...</span>
                </div>
              )}
              {/* Glass overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-xl p-4 rounded-lg shadow-xl border border-white">
               <div className="flex items-center gap-3">
                 <div className="w-3 h-3 bg-[#3CEFFF] rounded-full animate-pulse"></div>
                 <span className="font-mono text-sm font-bold text-gray-800">DATA DRIVEN</span>
               </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C0C0D]">
              Crealix 2.0 <br/>
              <span className="text-[#A16EFF] text-2xl md:text-3xl font-light">Evolução Digital</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#3CEFFF] to-[#A16EFF]"></div>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              A Crealix evoluiu. Agora somos uma agência orientada <strong className="text-black font-semibold">100% por dados</strong>, criatividade estratégica e inteligência artificial aplicada para gerar resultados reais.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Deixamos para trás o tradicional. Adotamos o futuro para garantir que sua empresa não apenas acompanhe as tendências, mas as defina.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
