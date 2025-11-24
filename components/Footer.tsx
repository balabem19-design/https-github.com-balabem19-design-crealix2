import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
         {/* Final CTA Box */}
         <div className="relative p-1 rounded-2xl bg-gradient-to-r from-[#3CEFFF] via-[#A16EFF] to-[#3CEFFF] mb-20 animate-bg-pan">
            <div className="bg-white rounded-xl p-12 md:p-20">
               <h2 className="text-3xl md:text-5xl font-bold text-black mb-8">
                 Vamos elevar sua marca para o próximo nível?
               </h2>
               <a 
                 href="https://wa.me/5548991849190"
                 className="inline-block px-10 py-5 bg-black text-white font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-xl"
               >
                 Falar com a Crealix
               </a>
            </div>
         </div>

         {/* Bottom Footer */}
         <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm border-t border-gray-100 pt-8">
            <p>© {new Date().getFullYear()} CREALIX. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <span className="hover:text-black cursor-pointer">Instagram</span>
               <span className="hover:text-black cursor-pointer">LinkedIn</span>
               <span className="hover:text-black cursor-pointer">WhatsApp</span>
            </div>
         </div>
      </div>
    </footer>
  );
};
