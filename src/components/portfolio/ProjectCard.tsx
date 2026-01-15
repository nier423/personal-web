import { useMode } from '@/contexts/ModeContext';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { Sparkles, Award, Github, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

// --- 保持你的接口定义不变 ---
interface Project {
  id: string;
  number: string;
  title: string;
  role: string;
  tags: string[];
  description: string;
  // metrics: { label: string; value: string }[]; // Removed as requested
  icon: 'sparkles' | 'code' | 'palette';
  highlights?: string[];
  links?: { type: 'github' | 'demo' | 'article' | 'qrcode'; url: string; label: string }[];
  image?: string;
  award?: string;
  backgroundImage?: string;
  qrcodeImage?: string;
  notes?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { mode } = useMode();
  const [showQRCode, setShowQRCode] = useState(false);
  const isArt = mode === 'art';

  const handleLinkClick = (link: { type: string; url: string; label: string }) => {
    if (link.type === 'qrcode' && project.qrcodeImage) {
      setShowQRCode(true);
    } else {
      window.open(link.url, '_blank');
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="group w-full"
      >
        {/* 核心容器 
          不再使用 Shadcn 的 <Card> 组件，而是手写容器样式以获得更强的布局控制力 
        */}
        <div className={`
          relative w-full overflow-hidden rounded-[2.5rem] border transition-all duration-700
          ${isArt 
            ? 'bg-[#FBF7DB] border-stone-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1' // Art Mode
            : 'bg-black/40 backdrop-blur-2xl border-white/10 hover:border-primary/40 hover:shadow-[0_0_50px_-10px_rgba(var(--primary),0.25)] hover:-translate-y-1' // Code Mode
          }
        `}>
        
          {/* 布局核心：Flexbox 
             手机端(默认)是竖排 (flex-col)，电脑端(md)是横排 (flex-row)
          */}
          <div className="flex flex-col md:flex-row items-stretch min-h-[500px]">
            
            {/* ================= 左侧：内容控制区 (55%) ================= */}
            <div className="relative z-10 flex w-full flex-col p-8 md:w-[55%] md:p-12 lg:p-14 justify-between">
              
              <div>
                {/* 1. 顶部 Header: 序号 + 角色 + 奖项 */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <span className={`text-7xl font-black opacity-15 leading-none ${isArt ? 'font-aloha text-stone-900' : 'font-mono text-white'}`}>
                      {project.number}
                    </span>
                    {project.award && (
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={`flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-sm ${
                          isArt 
                            ? 'bg-amber-100/50 border-amber-200 text-amber-900' 
                            : 'bg-primary/10 border-primary/30 text-primary'
                        }`}
                      >
                        <Award className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">
                          {project.award}
                        </span>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* 2. 标题区域 */}
                <h3 className={`text-4xl lg:text-5xl font-bold mb-6 leading-[1.1] tracking-tight ${
                    isArt ? 'font-serif text-stone-900' : 'font-mono text-white'
                  }`}>
                  {project.title}
                </h3>

                {/* 3. Tags & Role */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                   <Badge variant="secondary" className={`px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide ${
                     isArt 
                       ? 'bg-stone-900 text-[#FBF7DB] hover:bg-stone-800' 
                       : 'bg-primary text-primary-foreground hover:bg-primary/90'
                   }`}>
                      {project.role}
                   </Badge>
                   <div className={`h-1 w-1 rounded-full mx-1 ${isArt ? 'bg-stone-400' : 'bg-zinc-600'}`} />
                   {project.tags.map(tag => (
                     <span key={tag} className={`text-sm font-medium px-2 py-1 rounded-md ${
                       isArt 
                         ? 'text-stone-500 bg-stone-100/50' 
                         : 'text-zinc-400 bg-white/5 border border-white/5'
                     }`}>
                       {tag}
                     </span>
                   ))}
                </div>

                {/* 4. 描述 Description */}
                <p className={`mb-10 text-lg leading-relaxed max-w-xl ${isArt ? 'text-stone-600' : 'text-zinc-400'}`}>
                  {project.description}
                </p>

                {/* 5. 亮点 Highlights (如有) */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className={`mb-8 p-6 rounded-2xl border ${isArt ? 'bg-white/60 border-stone-100' : 'bg-white/5 border-white/10'}`}>
                     <h4 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-4 flex items-center gap-2">
                       <Sparkles className="w-3 h-3" /> Highlights
                     </h4>
                     <ul className="space-y-3">
                       {project.highlights.map((h, i) => (
                         <li key={i} className="flex gap-3 text-sm opacity-90">
                           <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isArt ? 'bg-stone-400' : 'bg-primary'}`} />
                           <span className="leading-relaxed">{h}</span>
                         </li>
                       ))}
                     </ul>
                  </div>
                )}
              </div>

              {/* 7. 底部按钮区 (Links & Notes) */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-dashed border-opacity-20 border-current">
                {project.links?.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link)}
                    className={`
                      group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300
                      ${isArt 
                        ? 'bg-stone-900 text-[#FBF7DB] hover:scale-105 hover:shadow-lg' 
                        : 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 hover:shadow-[0_0_20px_-5px_rgba(var(--primary),0.3)]'}
                    `}
                  >
                    {link.type === 'github' ? <Github className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
                    {link.label}
                  </button>
                ))}
              </div>

            </div>

            {/* ================= 右侧：视觉艺术区 (45%) ================= */}
            <div className="relative min-h-[300px] w-full md:min-h-full md:w-[45%] overflow-hidden">
              {/* 只有当提供了图片时才渲染 */}
              {project.backgroundImage && (
                <>
                  {/* 背景光晕装饰 (可选) */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] opacity-40
                     ${isArt ? 'bg-orange-200' : 'bg-primary/40'}
                  `} />

                  {/* 核心改动：使用 img 标签代替 background-image */}
                  <img
                    src={project.backgroundImage}
                    alt={project.title}
                    className="
                      absolute 
                      bottom-0 
                      right-0 
                      h-auto 
                      w-[85%]             /* 手机端尺寸 */
                      max-w-[500px] 
                      object-contain 
                      z-10
                      
                      /* 桌面端动效：破格溢出 */
                      md:w-[100%] 
                      md:max-w-none 
                      md:right-0
                      md:bottom-0
                      
                      transition-transform 
                      duration-700 
                      ease-out
                      group-hover:scale-105 
                      group-hover:-rotate-1
                    "
                  />
                  
                  {/* 渐变遮罩，让文字更易读（如果是手机端）或增加层次感 */}
                  <div className={`absolute inset-0 pointer-events-none z-20 md:bg-gradient-to-l ${
                    isArt 
                      ? 'from-transparent via-transparent to-[#FBF7DB]/80' 
                      : 'from-transparent via-transparent to-black/60'
                  }`} />
                </>
              )}
            </div>

          </div>
        </div>
      </motion.div>

      {/* 保持原有的二维码弹窗逻辑 */}
      {project.qrcodeImage && (
        <Dialog open={showQRCode} onOpenChange={setShowQRCode}>
          <DialogContent className="sm:max-w-md bg-white text-black">
            <DialogHeader>
              <DialogTitle className="text-center">扫码体验小程序</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center p-6">
              <img
                src={project.qrcodeImage}
                alt="小程序码"
                className="w-64 h-64 object-contain"
              />
              <p className="text-sm text-stone-500 mt-4 text-center">
                使用微信扫描二维码体验
              </p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}