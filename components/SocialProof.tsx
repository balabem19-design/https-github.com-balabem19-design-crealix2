import React, { useState, useEffect } from 'react';
import { generateImage } from '../services/geminiService';
import { Quote } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const [face1, setFace1] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchFace = async () => {
      const prompt = "Portrait of a successful male CEO, 45 years old, wearing a suit, studio lighting, hyper realistic, neutral background";
      const img = await generateImage(prompt, "1:1");
      if (img) setFace1(img);
    };
    fetchFace();
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        <div className="w-full md:w-1/2 bg-[#0C0C0D]"></div>
        <div className="hidden md:block w-1/2 bg-white" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side (Dark) */}
        <div className="w-full md:w-1/2 text-white">
           <Quote className="w-12 h-12 text-[#3CEFFF] mb-6 opacity-50" />
           <h2 className="text-4xl font-bold mb-8 leading-tight">
             Resultados que falam mais alto que promessas.
           </h2>
           <div className="flex gap-8 mb-12">
              <div>
                <p className="text-4xl font-bold text-[#3CEFFF]">+140%</p>
                <p className="text-sm text-gray-400 mt-1">ROI Médio</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#A16EFF]">24/7</p>
                <p className="text-sm text-gray-400 mt-1">Atendimento IA</p>
              </div>
           </div>
        </div>

        {/* Right Side (Light/Content) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="bg-white/10 backdrop-blur-md md:bg-white p-8 rounded-2xl shadow-2xl max-w-md border border-white/10 md:border-transparent">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#3CEFFF]">
                   {face1 ? (
                     <img src={face1} alt="CEO" className="w-full h-full object-cover" />
                   ) : (
                     <div className="w-full h-full bg-gray-300 animate-pulse"></div>
                   )}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white md:text-black">Roberto Mendes</h4>
                  <p className="text-sm text-gray-400 md:text-gray-500">CEO, Mendes Tech</p>
                </div>
             </div>
             <p className="text-gray-300 md:text-gray-700 italic leading-relaxed">
               "A Crealix não fez apenas um site, eles reestruturaram toda nossa forma de captar clientes. A Secretária Smart triplicou nossos agendamentos no primeiro mês."
             </p>
          </div>
        </div>

      </div>
    </section>
  );
};
