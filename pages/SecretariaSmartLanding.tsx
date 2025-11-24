import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { generateImage } from '../services/geminiService';
import { ScrollReveal, TiltCard } from '../components/AnimationWrapper';
import { 
  MessageCircle, Calendar, Users, Clock, Zap, CheckCircle2, 
  XCircle, ChevronDown, ChevronUp, Stethoscope, Scale, Briefcase, Store,
  ArrowRight, ShieldCheck, Rocket, Settings, Search, MessageSquare
} from 'lucide-react';

export const SecretariaSmartLanding: React.FC = () => {
  const [heroAvatar, setHeroAvatar] = useState<string | null>(null);
  const [face1, setFace1] = useState<string | null>(null);
  const [face2, setFace2] = useState<string | null>(null);
  const [face3, setFace3] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const WA_LINK = "https://wa.me/5541993386087";

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadImages = async () => {
      const avatarPrompt = "Portrait of a futuristic female AI assistant, professional, holographic style, tech environment, glowing interface elements, soft neon lighting cyan and purple, 8k, photorealistic face, friendly expression, looking at camera, sleek white tech attire";
      const f1Prompt = "Portrait of a female dentist in a modern clinic, professional, smiling, high quality photography, headshot";
      const f2Prompt = "Portrait of a male lawyer in a suit, modern office background, professional, confident, high quality photography, headshot";
      const f3Prompt = "Portrait of a creative agency director, stylish, modern office, professional, friendly, high quality photography, headshot";

      const [avatar, f1, f2, f3] = await Promise.all([
        generateImage(avatarPrompt, "1:1"),
        generateImage(f1Prompt, "1:1"),
        generateImage(f2Prompt, "1:1"),
        generateImage(f3Prompt, "1:1")
      ]);

      if (avatar) setHeroAvatar(avatar);
      if (f1) setFace1(f1);
      if (f2) setFace2(f2);
      if (f3) setFace3(f3);
    };

    loadImages();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#000000] min-h-screen text-white font-sans selection:bg-[#A16EFF] selection:text-white overflow-x-hidden">
      <NavBar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C0C0D] via-[#1a0b2e] to-[#0C0C0D]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        {/* Neon Accents */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#A16EFF] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#3CEFFF] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="space-y-8 order-2 lg:order-1">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#3CEFFF]/30 bg-[#3CEFFF]/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#3CEFFF] animate-pulse"></span>
                <span className="text-[#3CEFFF] text-xs font-bold tracking-widest uppercase">Tecnologia Exclusiva Crealix</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Secretária Smart – <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A16EFF] to-[#3CEFFF]">
                  Sua nova assistente de IA,
                </span> <br/>
                atendendo 24h por dia.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-lg">
                Agendamentos, suporte, vendas e atendimento aos clientes, tudo automático, humanizado e inteligente – como uma secretária e um vendedor trabalhando juntos, sem férias nem folga.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-shine px-8 py-4 bg-[#A16EFF] text-white font-bold text-lg rounded-lg shadow-[0_0_20px_rgba(161,110,255,0.4)] hover:scale-105 transition-transform text-center flex items-center justify-center">
                  Quero saber valores
                </a>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="px-8 py-4 border border-[#3CEFFF] text-[#3CEFFF] font-bold text-lg rounded-lg hover:bg-[#3CEFFF]/10 transition-colors flex items-center justify-center gap-2 group">
                  <MessageCircle className="w-5 h-5" />
                  Falar com a equipe Crealix no WhatsApp
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500 italic border-l-2 border-[#3CEFFF] pl-3">
                Já pensou sua empresa atendendo bem até enquanto você dorme?
              </p>
            </ScrollReveal>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
             <TiltCard intensity={15} className="relative w-full max-w-[500px] aspect-square">
                {/* Holographic Glows */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3CEFFF]/20 to-[#A16EFF]/20 rounded-full blur-[60px] animate-pulse"></div>
                
                <div className="relative h-full w-full glass-panel-light rounded-3xl overflow-hidden border border-white/20 shadow-2xl p-2 bg-opacity-10 backdrop-blur-xl">
                   {heroAvatar ? (
                     <img src={heroAvatar} alt="Secretária Smart Avatar" className="w-full h-full object-cover rounded-2xl animate-breathe" />
                   ) : (
                     <div className="w-full h-full bg-gray-900 flex items-center justify-center rounded-2xl">
                       <div className="w-10 h-10 border-2 border-[#3CEFFF] border-t-transparent rounded-full animate-spin"></div>
                     </div>
                   )}
                   
                   {/* Floating UI Elements */}
                   <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-[#3CEFFF]/30 flex gap-3 items-center animate-float shadow-lg">
                      <div className="bg-[#3CEFFF] p-1.5 rounded-full">
                        <MessageSquare size={16} className="text-black" />
                      </div>
                      <div className="text-xs">
                        <div className="text-gray-400">Novo Lead</div>
                        <div className="text-[#3CEFFF] font-bold">Respondido (1s)</div>
                      </div>
                   </div>

                   <div className="absolute bottom-12 left-8 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-[#A16EFF]/30 flex gap-3 items-center animate-float shadow-lg" style={{ animationDelay: '2s' }}>
                      <div className="bg-[#A16EFF] p-1.5 rounded-full">
                        <Calendar size={16} className="text-white" />
                      </div>
                      <div className="text-xs">
                        <div className="text-gray-400">Agenda</div>
                        <div className="text-[#A16EFF] font-bold">Horário Confirmado</div>
                      </div>
                   </div>
                </div>
             </TiltCard>
          </div>

        </div>
      </section>

      {/* 2. TARGET AUDIENCE */}
      <section className="py-20 bg-[#0C0C0D] relative">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">Para quem é a <span className="text-[#3CEFFF] neon-text-cyan">Secretária Smart?</span></h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Stethoscope />, title: "Saúde", text: "Clínicas, consultórios e profissionais que perdem pacientes por demora no agendamento." },
              { icon: <Scale />, title: "Advocacia", text: "Escritórios que precisam filtrar casos e qualificar clientes automaticamente." },
              { icon: <Briefcase />, title: "Serviços", text: "Agências, consultores e infoprodutores com alto fluxo de dúvidas repetitivas." },
              { icon: <Store />, title: "PME's", text: "Pequenas e médias empresas que querem atendimento 24h sem aumentar a equipe." }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all border border-white/5 hover:border-[#3CEFFF]/50 group h-full hover:-translate-y-2 duration-300 shadow-lg hover:shadow-[#3CEFFF]/20">
                  <div className="w-14 h-14 bg-[#3CEFFF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(60,239,255,0.2)]">
                    {React.cloneElement(item.icon as React.ReactElement<any>, { className: "text-[#3CEFFF] w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PAIN POINTS (Contrast) */}
      <section className="py-24 bg-[#050505] relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A16EFF]/5 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight">
              Você está perdendo clientes por <br/>
              <span className="text-[#FF4D4D]">falta de resposta</span>, <span className="text-[#FF4D4D]">demora</span> ou <span className="text-[#FF4D4D]">desorganização?</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left items-center">
             <ScrollReveal delay={100}>
               <div className="bg-[#111] p-8 rounded-2xl border border-white/10 shadow-xl">
                 <ul className="space-y-6">
                   {[
                     "Mensagens que ficam sem resposta.",
                     "Clientes que somem porque não foram atendidos a tempo.",
                     "Agenda confusa, horários batendo.",
                     "Você ou sua equipe respondendo WhatsApp até tarde da noite.",
                     "Falta de histórico organizado dos atendimentos."
                   ].map((pain, i) => (
                     <li key={i} className="flex items-start gap-4 text-gray-300">
                       <XCircle className="text-[#FF4D4D] w-6 h-6 shrink-0 mt-0.5" />
                       <span className="text-lg">{pain}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             </ScrollReveal>
             
             <ScrollReveal delay={200}>
               <div className="flex flex-col justify-center h-full pl-0 md:pl-8">
                 <p className="text-2xl text-white font-light italic mb-8 leading-relaxed">
                   "Se você sente que <span className="font-bold text-[#A16EFF]">“não dá conta”</span> do volume de mensagens, a Secretária Smart foi criada exatamente para isso."
                 </p>
                 <div className="h-1 w-24 bg-gradient-to-r from-[#FF4D4D] to-[#A16EFF] rounded-full"></div>
               </div>
             </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. SOLUTION */}
      <section className="py-24 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3CEFFF] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#A16EFF] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 space-y-4">
             <ScrollReveal>
                <div className="inline-block p-4 rounded-full bg-gradient-to-br from-[#3CEFFF]/20 to-[#A16EFF]/20 mb-4 border border-[#3CEFFF]/30 shadow-[0_0_20px_rgba(60,239,255,0.2)]">
                  <Zap className="w-10 h-10 text-[#3CEFFF]" />
                </div>
             </ScrollReveal>
             <ScrollReveal delay={100}>
               <h2 className="text-4xl md:text-5xl font-bold">Ela atende, organiza, vende e agenda por você.</h2>
             </ScrollReveal>
             <ScrollReveal delay={200}>
               <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                 Uma agente de IA treinada para falar a língua da sua empresa e conduzir seus clientes com clareza e segurança.
               </p>
             </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: <Clock />, title: "Atendimento Imediato", desc: "Responde na hora, sem deixar seu cliente esperando." },
               { icon: <Calendar />, title: "Agendamentos Automáticos", desc: "Faz marcações de consultas, sessões e reuniões sozinha." },
               { icon: <Users />, title: "Pré-vendas e Qualificação", desc: "Faz perguntas inteligentes, entende o perfil do cliente e já encaminha os mais quentes para você." },
               { icon: <ShieldCheck />, title: "Suporte e Informações", desc: "Responde dúvidas comuns, envia links, documentos e orientações automaticamente." }
             ].map((feature, idx) => (
               <ScrollReveal key={idx} delay={idx * 150}>
                 <TiltCard className="h-full">
                   <div className="glass-panel p-8 rounded-2xl h-full border border-white/10 hover:border-[#3CEFFF]/50 transition-colors group">
                      <div className="mb-6 bg-gradient-to-br from-[#1a1a1a] to-[#000] w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-[#3CEFFF]/50 transition-colors shadow-lg">
                        {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 28, className: "text-[#3CEFFF] group-hover:scale-110 transition-transform" })}
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                   </div>
                 </TiltCard>
               </ScrollReveal>
             ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS (How it works) */}
      <section className="py-24 bg-[#0C0C0D] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-20">Como funciona na prática</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#3CEFFF] via-[#A16EFF] to-[#3CEFFF] opacity-30"></div>

             {[
               { icon: <Search />, title: "Passo 1 – Entendimento", desc: "A equipe Crealix entende seu serviço, seu público e sua forma de falar." },
               { icon: <Settings />, title: "Passo 2 – Configuração", desc: "A Secretária Smart é treinada com suas informações, ofertas, regras de agenda e objeções mais comuns." },
               { icon: <Rocket />, title: "Passo 3 – Ativação", desc: "Ela começa a atender no WhatsApp, Instagram, site e outros canais, como se fosse sua secretária real." }
             ].map((step, idx) => (
               <ScrollReveal key={idx} delay={idx * 200}>
                 <div className="text-center relative z-10 p-6 rounded-2xl bg-[#0C0C0D] border border-transparent hover:border-white/5 transition-colors">
                    <div className="w-24 h-24 mx-auto bg-[#151515] rounded-full border-2 border-[#3CEFFF] flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(60,239,255,0.15)] group">
                      {React.cloneElement(step.icon as React.ReactElement<any>, { className: "w-10 h-10 text-white" })}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">{step.desc}</p>
                 </div>
               </ScrollReveal>
             ))}
          </div>

          <div className="text-center mt-20">
            <ScrollReveal>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-shine inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-colors shadow-xl group">
                Quero ativar a Secretária Smart na minha empresa
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. BENEFITS */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0C0C0D] to-black">
        <div className="max-w-5xl mx-auto px-6">
           <ScrollReveal>
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Benefícios que você sente no <span className="text-[#A16EFF] neon-text-cyan">primeiro mês</span></h2>
           </ScrollReveal>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {[
                "Mais leads bem atendidos.",
                "Menos mensagens acumuladas.",
                "Agenda mais organizada.",
                "Menos estresse com atendimento.",
                "Mais tempo para focar no que realmente importa: gestão e crescimento.",
                "Sensação de que “o atendimento está nas mãos certas”."
              ].map((benefit, i) => (
                <ScrollReveal key={i} delay={i * 50}>
                   <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-[#A16EFF]/20">
                      <div className="w-8 h-8 rounded-full bg-[#A16EFF]/20 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(161,110,255,0.3)]">
                        <CheckCircle2 className="w-5 h-5 text-[#A16EFF]" />
                      </div>
                      <span className="text-lg text-gray-200 font-medium">{benefit}</span>
                   </div>
                </ScrollReveal>
              ))}
           </div>
        </div>
      </section>

      {/* 7. COMPARISON */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-bold mb-16">Comparativo: Antes x Depois</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <ScrollReveal>
              <div className="p-8 rounded-2xl bg-[#111] border border-red-500/20 relative overflow-hidden h-full">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400"></div>
                 <h3 className="text-2xl font-bold text-gray-300 mb-8 flex items-center gap-3">
                   <div className="p-2 bg-red-500/10 rounded-lg"><XCircle className="text-red-500" /></div>
                   Antes da Secretária Smart
                 </h3>
                 <ul className="space-y-5 text-gray-400">
                    <li className="flex gap-3"><span className="text-red-500 text-xl font-bold">•</span> Respostas demoradas</li>
                    <li className="flex gap-3"><span className="text-red-500 text-xl font-bold">•</span> Cliente sem retorno</li>
                    <li className="flex gap-3"><span className="text-red-500 text-xl font-bold">•</span> Perda de oportunidades</li>
                    <li className="flex gap-3"><span className="text-red-500 text-xl font-bold">•</span> Você respondendo até tarde</li>
                    <li className="flex gap-3"><span className="text-red-500 text-xl font-bold">•</span> Zero automação</li>
                 </ul>
              </div>
            </ScrollReveal>

            {/* After */}
            <ScrollReveal delay={100}>
              <div className="p-8 rounded-2xl bg-[#0F1C15] border border-[#3CEFFF]/30 relative overflow-hidden shadow-[0_0_40px_rgba(60,239,255,0.05)] h-full">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CEFFF] to-[#A16EFF]"></div>
                 <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                   <div className="p-2 bg-[#3CEFFF]/10 rounded-lg"><CheckCircle2 className="text-[#3CEFFF]" /></div>
                   Depois da Secretária Smart
                 </h3>
                 <ul className="space-y-5 text-white">
                    <li className="flex gap-3 items-center"><span className="text-[#3CEFFF] font-bold text-xl">✓</span> Atendimento imediato</li>
                    <li className="flex gap-3 items-center"><span className="text-[#3CEFFF] font-bold text-xl">✓</span> Agendamentos automáticos</li>
                    <li className="flex gap-3 items-center"><span className="text-[#3CEFFF] font-bold text-xl">✓</span> Leads filtrados e prontos para fechar</li>
                    <li className="flex gap-3 items-center"><span className="text-[#3CEFFF] font-bold text-xl">✓</span> Você com mais tempo</li>
                    <li className="flex gap-3 items-center"><span className="text-[#3CEFFF] font-bold text-xl">✓</span> Sistema operando 24h por dia</li>
                 </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 8. SOCIAL PROOF */}
      <section className="py-24 bg-gradient-to-b from-[#050505] to-black">
         <div className="max-w-6xl mx-auto px-6">
           <ScrollReveal>
             <h2 className="text-center text-3xl font-bold mb-16">O que dizem nossos clientes</h2>
           </ScrollReveal>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  image: face1, 
                  quote: "Depois da Secretária Smart, parei de perder consultas porque não respondi a tempo.", 
                  name: "Dra. Ana", 
                  role: "Clínica Odontológica" 
                },
                { 
                  image: face2, 
                  quote: "Automatizou toda a triagem inicial do escritório. Agora só falo com quem realmente tem potencial.", 
                  name: "Dr. Carlos", 
                  role: "Advocacia Empresarial" 
                },
                {
                  image: face3,
                  quote: "A melhor decisão que tomei este ano. Meus clientes adoram a rapidez no atendimento.",
                  name: "Mariana S.",
                  role: "Agência de Marketing"
                }
              ].map((testimonial, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                   <div className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center hover:border-[#A16EFF]/50 transition-colors h-full">
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-800 border-2 border-[#3CEFFF]/50 mb-6">
                         {testimonial.image && <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />}
                      </div>
                      <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                      <div className="mt-auto">
                           <div className="font-bold text-white text-lg">{testimonial.name}</div>
                           <div className="text-sm text-[#A16EFF] font-medium">{testimonial.role}</div>
                      </div>
                   </div>
                </ScrollReveal>
              ))}
           </div>
         </div>
      </section>

      {/* 9. PLANS */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-center text-4xl font-bold mb-16">Escolha seu Plano</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                name: "Plano Essencial",
                features: ["Secretária Smart básica", "1 canal principal (ex.: WhatsApp)", "Ideal para pequenos negócios"],
                highlight: false
              },
              {
                name: "Plano Profissional",
                features: ["Integração em múltiplos canais", "Fluxos de pré-venda", "Agendamentos + qualificação de leads"],
                highlight: true
              },
              {
                name: "Plano Premium",
                features: ["Personalização avançada", "Treinamento profundo com a linguagem da marca", "Suporte prioritário com a equipe Crealix"],
                highlight: false
              }
            ].map((plan, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className={`p-8 rounded-2xl border transition-all duration-300 relative h-full flex flex-col ${
                  plan.highlight 
                  ? 'bg-[#121212] border-[#3CEFFF] shadow-[0_0_40px_rgba(60,239,255,0.1)] transform md:-translate-y-4' 
                  : 'bg-transparent border-white/10 hover:border-white/30'
                }`}>
                   {plan.highlight && (
                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#3CEFFF] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                       Mais Escolhido
                     </div>
                   )}
                   <h3 className="text-2xl font-bold mb-8 text-white text-center">{plan.name}</h3>
                   
                   <div className="space-y-5 mb-10 flex-grow">
                     {plan.features.map((feat, fIdx) => (
                       <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300 list-none">
                         <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-[#3CEFFF]' : 'text-gray-600'}`} />
                         {feat}
                       </li>
                     ))}
                   </div>

                   <a 
                     href={WA_LINK} 
                     target="_blank" 
                     rel="noreferrer" 
                     className={`block w-full py-4 text-center rounded-lg font-bold transition-all ${
                       plan.highlight 
                         ? 'bg-white text-black hover:bg-[#3CEFFF] shadow-lg' 
                         : 'border border-white/20 hover:bg-white hover:text-black'
                     }`}
                   >
                     Quero receber uma proposta para a Secretária Smart
                   </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-24 bg-[#080808]">
         <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-center text-3xl font-bold mb-12">Perguntas Frequentes</h2>
            
            <div className="space-y-4">
              {[
                { q: "A Secretária Smart substitui uma secretária humana?", a: "Ela complementa. Ela assume as tarefas repetitivas e atendimento 24h, liberando sua equipe humana para tarefas mais complexas." },
                { q: "Em quanto tempo ela pode ser implementada?", a: "Geralmente entre 3 a 7 dias úteis, dependendo da complexidade do treinamento necessário." },
                { q: "Ela funciona apenas no WhatsApp?", a: "O plano Profissional inclui integração com outros canais como Instagram Direct e Site." },
                { q: "Ela consegue agendar em qual sistema?", a: "Integramos com Google Calendar e diversas ferramentas de agenda. Verificamos a compatibilidade na consultoria inicial." },
                { q: "E se o cliente quiser falar com um humano?", a: "A IA é configurada para transferir o atendimento para um humano sempre que detectar uma situação complexa ou solicitação específica." },
                { q: "Posso alterar as configurações depois?", a: "Sim, nossa equipe oferece suporte para ajustes de regras, preços e informações sempre que necessário." }
              ].map((item, idx) => (
                <div key={idx} className="border border-white/10 rounded-xl overflow-hidden bg-[#111]">
                   <button 
                     onClick={() => toggleFaq(idx)}
                     className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
                   >
                     <span className="font-bold text-gray-200">{item.q}</span>
                     {openFaq === idx ? <ChevronUp className="text-[#3CEFFF]" /> : <ChevronDown className="text-gray-500" />}
                   </button>
                   {openFaq === idx && (
                     <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 bg-[#0a0a0a]">
                       {item.a}
                     </div>
                   )}
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-32 relative bg-black overflow-hidden flex items-center justify-center text-center">
         <div className="absolute inset-0 bg-gradient-to-t from-[#A16EFF]/20 via-transparent to-transparent"></div>
         <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3CEFFF] via-[#A16EFF] to-[#3CEFFF]"></div>
         
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <ScrollReveal>
              {/* Using heroAvatar here again or another prompt if needed, sticking to avatar next to text concept */}
              <div className="flex flex-col items-center gap-8">
                {heroAvatar && (
                   <div className="w-24 h-24 rounded-full border-2 border-[#3CEFFF] p-1 animate-pulse">
                      <img src={heroAvatar} className="w-full h-full object-cover rounded-full" alt="AI" />
                   </div>
                )}
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
                  Pronto para ter uma secretária que nunca esquece, nunca se atrasa e <span className="text-[#3CEFFF] neon-text-cyan">nunca deixa seu cliente sem resposta?</span>
                </h2>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <a 
                href={WA_LINK} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-shine inline-block mt-8 px-12 py-5 bg-[#3CEFFF] text-black font-bold text-xl rounded-full shadow-[0_0_40px_rgba(60,239,255,0.4)] hover:scale-105 transition-transform"
              >
                Quero a Secretária Smart na minha empresa
              </a>
            </ScrollReveal>
            
            <p className="mt-6 text-gray-500 text-sm">
              A Crealix cuida da configuração, você colhe os resultados.
            </p>
         </div>
      </section>

      <Footer />
    </div>
  );
};