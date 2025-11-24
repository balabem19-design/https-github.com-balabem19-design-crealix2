import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { generateImage } from '../services/geminiService';
import { ArrowUpRight, Search } from 'lucide-react';
import { ScrollReveal, TiltCard } from '../components/AnimationWrapper';

export const CasesPage: React.FC = () => {
  const [lawFirmImage, setLawFirmImage] = useState<string | null>(null);
  const [archImage, setArchImage] = useState<string | null>(null);
  const [techImage, setTechImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0,0);
    
    const fetchImages = async () => {
      // Mandatory Case: Advocacia Oliveira & Sócios
      // Prompt: hyper realistic facade + reception + holographic secretary
      const lawPrompt = "Hyper realistic modern facade of a law firm building with sign 'Advocacia Oliveira & Sócios' in elegant metal letters, evening lighting, warm interior reception visible through large glass windows featuring a futuristic holographic receptionist, 8k architectural photography, wide shot";
      const lawImg = await generateImage(lawPrompt, "16:9");
      if (lawImg) setLawFirmImage(lawImg);

      // Case 2
      const archPrompt = "Minimalist luxury real estate website mockup displayed on a floating silver laptop, clean white studio background, soft shadows, 3d render, high quality";
      const archImg = await generateImage(archPrompt, "16:9");
      if (archImg) setArchImage(archImg);

      // Case 3
      const techPrompt = "Futuristic fintech mobile app interface floating in mid-air, dark mode, neon accents, isometric view, depth of field, 8k";
      const techImg = await generateImage(techPrompt, "16:9");
      if (techImg) setTechImage(techImg);
    };
    fetchImages();
  }, []);

  const cases = [
    {
      id: 1,
      client: "Advocacia Oliveira & Sócios",
      category: "Branding & Tecnologia",
      description: "Implementação de recepção holográfica e rebranding completo.",
      image: lawFirmImage,
      loadingText: "Renderizando Fachada...",
      isLarge: true
    },
    {
      id: 2,
      client: "Nexus Incorporadora",
      category: "Plataforma High-End",
      description: "Website imersivo para venda de imóveis de luxo.",
      image: archImage,
      loadingText: "Renderizando Mockup...",
      isLarge: false
    },
    {
      id: 3,
      client: "Fintech Vault",
      category: "App Design",
      description: "Interface mobile para banco digital de nova geração.",
      image: techImage,
      loadingText: "Renderizando UI...",
      isLarge: false
    }
  ];

  return (
    <div className="bg-white min-h-screen text-black overflow-x-hidden">
      <NavBar />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 tracking-tighter">
            Cases <br/> Selecionados
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-200 pb-12">
            <p className="text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
              Transformamos visão em autoridade digital através de design, dados e inteligência artificial.
            </p>
            <div className="mt-8 md:mt-0 flex gap-4">
               <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Total Projects: 42</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-32">
          {cases.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 200}>
              <div className="group">
                <TiltCard intensity={10} className="relative mb-10 cursor-pointer">
                  <div className={`relative overflow-hidden rounded-[2rem] shadow-2xl transition-all duration-700 ${project.isLarge ? 'aspect-video' : 'aspect-[16/10]'}`}>
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.client} 
                        className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105" 
                      />
                    ) : (
                       <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center gap-4">
                          <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
                          <span className="text-gray-400 font-mono text-sm uppercase tracking-widest">{project.loadingText}</span>
                       </div>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                  </div>
                </TiltCard>
                
                <div className="flex flex-col md:flex-row justify-between items-start pt-4 px-2">
                  <div className="space-y-2">
                     <span className="text-xs font-bold text-[#3CEFFF] uppercase tracking-widest px-2 py-1 bg-black rounded-md">{project.category}</span>
                     <h2 className="text-4xl md:text-5xl font-bold text-black group-hover:text-[#3CEFFF] transition-colors duration-300 mt-2">{project.client}</h2>
                     <p className="text-gray-500 text-lg max-w-md">{project.description}</p>
                  </div>
                  <button className="mt-6 md:mt-0 w-20 h-20 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group-hover:scale-110 shadow-lg">
                    <ArrowUpRight size={32} className="group-hover:rotate-45 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Modern Pagination */}
        <ScrollReveal delay={400}>
          <div className="mt-32 flex justify-center items-center gap-8">
            <button className="text-gray-400 hover:text-black transition-colors text-sm font-bold uppercase tracking-widest disabled:opacity-50" disabled>Previous</button>
            <div className="flex items-end gap-2">
              <span className="text-black font-bold text-4xl leading-none">1</span>
              <span className="text-gray-300 text-2xl font-light">/ 4</span>
            </div>
            <button className="text-black hover:text-[#3CEFFF] transition-colors text-sm font-bold uppercase tracking-widest btn-shine">Next</button>
          </div>
        </ScrollReveal>
      </div>
      
      <Footer />
    </div>
  );
};
