import { useMode } from '@/contexts/ModeContext';
import { motion } from 'framer-motion';
import { ExternalLink, Loader2, Code2, Terminal, Cpu, Coffee, PenTool, Hash, Maximize2, Minus, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const products: Product[] = [
  {
    id: 'deepinterview',
    title: 'Deepinterview.ai',
    subtitle: 'AI-Powered Resume Architect',
    description: 'Leverage AI to deeply analyze your career, transforming daily tasks into result-oriented, data-driven professional narratives.',
    tags: ['JavaScript', 'CSS', 'HTML', 'LLM'],
    image: '/images/project1.png',
    link: 'https://deepinterview.aifnd.top/'
  }
];

// --- Art Mode Component: The Designer's Desk ---
const ArtWorkspace = ({ product }: { product: Product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: -2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, rotate: 0, transition: { type: "spring", stiffness: 300 } }}
      className="relative group cursor-pointer max-w-2xl mx-auto"
    >
      {/* Decorative elements behind */}
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-100/50 rounded-full blur-2xl z-0" />
      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-100/50 rounded-full blur-2xl z-0" />

      {/* Polaroid Card */}
      <div className="relative z-10 bg-white/40 backdrop-blur-md p-4 pb-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-sm transform transition-all duration-500 border border-white/60">
        {/* Tape effect */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/40 backdrop-blur-sm border-l border-r border-white/60 rotate-1 shadow-sm z-20" />
        
        {/* Image Container */}
        <div className="aspect-[16/10] overflow-hidden bg-stone-100/50 mb-6 relative grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Handwritten Info */}
        <div className="px-2">
          <div className="flex justify-between items-end mb-2">
            <h3 className="font-serif text-3xl text-stone-800 italic">{product.title}</h3>
            <span className="font-serif text-sm text-stone-400 italic">{product.subtitle}</span>
          </div>
          <p className="font-serif text-stone-500 leading-relaxed text-sm max-w-lg">
            {product.description}
          </p>
        </div>

        {/* Interactive "Post-it" Tags */}
        <div className="absolute -right-12 top-20 flex flex-col gap-3">
          {product.tags.map((tag, i) => (
            <motion.div 
              key={tag}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`
                px-3 py-2 text-xs font-serif italic shadow-md transform
                ${i % 2 === 0 ? 'rotate-3 bg-[#fef3c7] text-amber-800' : '-rotate-2 bg-[#dcfce7] text-emerald-800'}
              `}
            >
              #{tag}
            </motion.div>
          ))}
        </div>

        {/* Action Button (Hidden until hover) */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-stone-800 font-serif italic text-sm hover:underline"
          >
            Visit Project <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// --- Code Mode Component: The Developer's Terminal ---
const CodeWorkspace = ({ product }: { product: Product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative max-w-3xl mx-auto w-full font-mono"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

      {/* VS Code Window */}
      <div className="relative z-10 bg-[#1e1e1e] rounded-xl border border-[#333] overflow-hidden shadow-2xl">
        {/* Title Bar */}
        <div className="h-9 bg-[#252526] flex items-center px-4 border-b border-[#333] justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-[#858585] text-xs flex items-center gap-2">
            <Code2 className="w-3 h-3" />
            <span>{product.id}.tsx</span>
          </div>
          <div className="w-14" /> {/* Spacer for balance */}
        </div>

        {/* Editor Area */}
        <div className="flex">
          {/* Sidebar (Line Numbers) */}
          <div className="w-12 bg-[#1e1e1e] border-r border-[#333] text-[#858585] text-xs py-4 flex flex-col items-center select-none opacity-50">
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => <div key={n} className="leading-6">{n}</div>)}
          </div>

          {/* Code/Content */}
          <div className="flex-1 p-0 relative group">
            
            {/* Split View Simulation */}
            <div className="flex h-[340px]">
              {/* Left: Code Config */}
              <div className="w-1/2 p-4 border-r border-[#333] overflow-hidden hidden md:block">
                <div className="text-xs leading-6">
                  <span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">project</span> = <span className="text-[#dcdcaa]">{'{'}</span>
                  <div className="pl-4">
                    <span className="text-[#9cdcfe]">name</span>: <span className="text-[#ce9178]">"{product.title}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#9cdcfe]">type</span>: <span className="text-[#ce9178]">"{product.subtitle}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#9cdcfe]">techStack</span>: [
                    <div className="pl-4">
                      {product.tags.map(t => (
                        <div key={t}><span className="text-[#ce9178]">"{t}"</span>,</div>
                      ))}
                    </div>
                    ],
                  </div>
                  <div className="pl-4">
                     <span className="text-[#9cdcfe]">aiModel</span>: <span className="text-[#ce9178]">"LLM-v4"</span>
                  </div>
                  <span className="text-[#dcdcaa]">{'}'}</span>;
                </div>
                
                <div className="mt-6 text-xs text-[#6a9955]">
                  // {product.description}
                </div>
              </div>

              {/* Right: Live Preview */}
              <div className="w-full md:w-1/2 relative bg-[#0c0c0c]">
                <img 
                  src={product.image} 
                  alt="Preview" 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
                
                {/* Overlay Button */}
                <a 
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 hover:opacity-100 transition-opacity backdrop-blur-sm"
                >
                  <div className="px-4 py-2 bg-[#007acc] text-white text-xs rounded hover:bg-[#0062a3] transition-colors flex items-center gap-2">
                    <ExternalLink className="w-3 h-3" />
                    Open Live Deployment
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Status Bar */}
        <div className="h-6 bg-[#007acc] text-white text-[10px] px-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><Terminal className="w-3 h-3" /> MASTER</span>
            <span className="flex items-center gap-1"><Cpu className="w-3 h-3" /> AI_ENGINE_READY</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Ln 12, Col 45</span>
            <span>UTF-8</span>
            <span>TypeScript React</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProductSection() {
  const { mode } = useMode();
  const isArt = mode === 'art';

  return (
    <section className="py-32 px-6 overflow-hidden transition-colors duration-700 relative">
      {/* Background Textures */}
      {isArt ? (
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-multiply" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")` }} 
        />
      ) : (
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      )}

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-5xl md:text-6xl font-bold mb-6 ${isArt ? 'font-serif text-stone-900' : 'font-mono text-white tracking-tight'}`}
          >
            {isArt ? 'My Creations' : '<Products />'}
          </motion.h2>
          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className={`max-w-xl text-lg ${isArt ? 'font-serif text-stone-500 italic' : 'font-mono text-zinc-500'}`}
          >
            {isArt ? "Where imagination meets execution." : "Compiling ideas into reality."}
          </motion.p>
        </div>

        {/* Products Loop */}
        <div className="space-y-32">
          {products.map((product) => (
            <div key={product.id}>
              {isArt ? <ArtWorkspace product={product} /> : <CodeWorkspace product={product} />}
            </div>
          ))}
        </div>

        {/* More Brewing Placeholder */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-32 text-center"
        >
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border border-dashed
            ${isArt 
              ? 'border-stone-300 bg-white/50 text-stone-500 font-serif italic' 
              : 'border-zinc-800 bg-zinc-900/50 text-zinc-500 font-mono text-sm'
            }`}
          >
            {isArt ? <Coffee className="w-4 h-4" /> : <Loader2 className="w-4 h-4 animate-spin" />}
            <span>More projects brewing...</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}