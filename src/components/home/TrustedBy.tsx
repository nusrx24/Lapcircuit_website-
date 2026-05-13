"use client";

import { motion } from "framer-motion";

export interface ClientLogo {
  id?: string;
  name: string;
  logo_url?: string | null;
  website_url?: string | null;
}

export default function TrustedBy({ clients }: { clients: ClientLogo[] }) {
  const displayClients = clients && clients.length > 0 ? clients : [
    { name: "PC and Network Solution" },
    { name: "B Class Lifestyle" },
    { name: "Nawaloka Group" },
    { name: "Litro Gas - Nawela Kandy" },
    { name: "Alumex - Thushara Group" },
    { name: "TVS X - Sachin TV" },
  ];

  // Duplicate the array to create the seamless loop
  const repeatedClients = [...displayClients, ...displayClients];

  return (
    <section className="-mt-12 md:-mt-16 pt-16 pb-12 bg-white border-b border-slate-200 overflow-hidden relative z-20 rounded-t-3xl md:rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      <div className="container-xl">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Trusted By Leading Businesses in Sri Lanka
          </p>
        </motion.div>

        {/* Desktop Infinite Scroll */}
        <div className="hidden md:flex relative w-full overflow-hidden group">
          {/* Edge gradients for fade effect */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex gap-8 items-center animate-marquee w-max"
          >
            {repeatedClients.map((client, i) => (
              <div 
                key={i} 
                className="relative group/card flex-shrink-0 w-56 h-20 rounded-xl p-[1.5px] overflow-hidden grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default bg-slate-200 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                {/* The spinning gradient layer (only visible on hover) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[300%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#60A5FA_50%,transparent_100%)] [animation:spin_2s_linear_infinite] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                
                {/* The actual content box */}
                <div className="relative w-full h-full bg-slate-50 rounded-[10.5px] flex flex-col items-center justify-center p-4 z-10 group-hover/card:bg-blue-50/30 transition-colors duration-300">
                  {client.logo_url ? (
                    <img src={client.logo_url} alt={client.name} className="max-w-full max-h-full object-contain" />
                  ) : (
                    <span className="font-bold text-slate-800 text-center text-[13px] leading-tight uppercase tracking-wide">
                      {client.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {displayClients.map((client, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative group/card w-full h-20 rounded-xl p-[1.5px] overflow-hidden grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-300 cursor-default bg-slate-200 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              {/* The spinning gradient layer (only visible on hover) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[300%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#60A5FA_50%,transparent_100%)] [animation:spin_2s_linear_infinite] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
              
              {/* The actual content box */}
              <div className="relative w-full h-full bg-slate-50 rounded-[10.5px] flex flex-col items-center justify-center p-3 z-10 group-hover/card:bg-blue-50/30 transition-colors duration-300">
                {client.logo_url ? (
                    <img src={client.logo_url} alt={client.name} className="max-w-full max-h-full object-contain" />
                  ) : (
                    <span className="font-bold text-slate-800 text-center text-[11px] leading-tight uppercase tracking-wide">
                      {client.name}
                    </span>
                  )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
