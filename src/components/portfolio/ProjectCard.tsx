import { useMode } from '@/contexts/ModeContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Code2, Palette, Award, ExternalLink, Github, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: string;
  number: string;
  title: string;
  role: string;
  tags: string[];
  description: string;
  metrics: { label: string; value: string }[];
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

const iconMap = {
  sparkles: Sparkles,
  code: Code2,
  palette: Palette,
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { mode } = useMode();
  const Icon = iconMap[project.icon];
  const [showQRCode, setShowQRCode] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

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
        className="group"
      >
      <Card
        className={`relative overflow-hidden transition-all duration-500 ${
          mode === 'code'
            ? 'bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-card/80'
            : 'bg-card/80 backdrop-blur-sm hover:shadow-2xl hover:scale-[1.02]'
        }`}
      >
        {/* 装饰性渐变背景 */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
            mode === 'code'
              ? 'bg-gradient-to-br from-primary/5 via-transparent to-transparent'
              : 'bg-gradient-to-br from-primary/3 via-transparent to-accent/5'
          }`}
        />

        {/* 装饰性边框光效 */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
            mode === 'code' ? 'border border-primary/20' : ''
          }`}
          style={{
            background:
              mode === 'code'
                ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)'
                : 'none',
          }}
        />

        <CardContent 
          className="relative p-8 xl:p-10"
          style={project.backgroundImage ? {
            backgroundImage: `url(${project.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          } : undefined}
        >
          {/* 顶部：项目编号、图标、获奖标识 */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              {/* 项目编号 - 大号装饰性数字 */}
              <span
                className={`text-6xl font-bold opacity-10 ${
                  mode === 'code' ? 'font-mono' : 'font-serif'
                }`}
              >
                {project.number}
              </span>
              {project.award && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 backdrop-blur-sm"
                >
                  <Award className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-semibold text-amber-700">
                    {project.award}
                  </span>
                </motion.div>
              )}
            </div>
            
            {/* 图标 - 增强动画效果 */}
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className={`p-3 rounded-xl ${
                mode === 'code'
                  ? 'bg-primary/10 border border-primary/20'
                  : 'bg-accent/50'
              }`}
            >
              <Icon
                className={`w-6 h-6 ${
                  mode === 'code' ? 'text-primary' : 'text-foreground'
                }`}
              />
            </motion.div>
          </div>

          {/* 项目标题 - 增强排版 */}
          <h3
            className={`text-3xl xl:text-4xl font-bold mb-4 leading-tight ${
              mode === 'art' ? 'font-serif' : 'font-mono'
            } ${
              mode === 'code'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70'
                : ''
            }`}
          >
            {project.title}
          </h3>

          {/* 角色标签 - 优化样式 */}
          <div className="mb-6">
            <Badge
              variant="secondary"
              className={`px-4 py-1.5 text-sm ${
                mode === 'code'
                  ? 'bg-muted/50 border border-border/50 font-mono'
                  : 'bg-secondary/80'
              }`}
            >
              {project.role}
            </Badge>
          </div>

          {/* 项目描述 - 优化行高和间距 */}
          <p className="text-muted-foreground mb-8 leading-relaxed text-base xl:text-lg">
            {project.description}
          </p>

          {/* 技术栈标签 - 优化布局 */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {project.tags.map((tag, idx) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Badge
                  variant="outline"
                  className={`px-3 py-1 transition-all duration-300 ${
                    mode === 'code'
                      ? 'font-mono text-xs border-primary/30 hover:border-primary hover:bg-primary/10'
                      : 'hover:bg-accent hover:border-accent-foreground/20'
                  }`}
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>

          {/* 项目展示图片（如果有） */}
          {project.image && (
            <div className="mb-8 rounded-xl overflow-hidden border border-border/50 shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}

          {/* 项目亮点（如果有） */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-8 p-6 rounded-xl bg-muted/30 border border-border/50">
              <h4 className="text-sm font-semibold mb-4 text-foreground flex items-center gap-2">
                <span className="text-lg">✨</span>
                项目亮点
              </h4>
              <ul className="space-y-3">
                {project.highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-sm text-muted-foreground flex items-start gap-3"
                  >
                    <span className="text-primary mt-1 font-bold">•</span>
                    <span className="flex-1">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* 底部：量化数据 + 项目链接 */}
          <div className="flex flex-col gap-6">
            {/* 量化数据 - 优化设计 */}
            {mode === 'code' ? (
              <div className="bg-muted/50 backdrop-blur-sm rounded-xl p-6 font-mono text-sm border border-border/50 shadow-inner">
                <div className="text-muted-foreground mb-2">{'{'}</div>
                {project.metrics.map((metric, idx) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="ml-6"
                  >
                    <span className="text-primary font-semibold">"{metric.label}"</span>:{' '}
                    <span className="text-foreground">"{metric.value}"</span>
                    {idx < project.metrics.length - 1 ? ',' : ''}
                  </motion.div>
                ))}
                <div className="text-muted-foreground">{'}'}</div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-6">
                {project.metrics.map((metric, idx) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 border border-border/50"
                  >
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* 底部操作栏：项目链接 + 工程手记 */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
              {project.links && project.links.map((link) => (
                <motion.button
                  key={link.url}
                  onClick={() => handleLinkClick(link)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    mode === 'code'
                      ? 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 font-mono'
                      : 'bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground shadow-md hover:shadow-lg'
                  }`}
                >
                  {link.type === 'github' && <Github className="w-4 h-4" />}
                  {link.type !== 'github' && <ExternalLink className="w-4 h-4" />}
                  {link.label}
                </motion.button>
              ))}

              <motion.button
                onClick={() => setShowNotes(!showNotes)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  mode === 'code'
                    ? 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 font-mono'
                    : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground shadow-md hover:shadow-lg'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Engineering Notes
                {showNotes ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </motion.button>
            </div>

            {/* 工程手记内容区域 */}
            <AnimatePresence>
              {showNotes && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className={`mt-4 p-6 rounded-xl border ${
                    mode === 'code' 
                      ? 'bg-black/40 border-primary/20 font-mono text-sm' 
                      : 'bg-muted/50 border-border/50'
                  }`}>
                    <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
                      <Code2 className="w-4 h-4" />
                      工程手记
                    </h4>
                    <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground whitespace-pre-wrap">
                      {project.notes || "暂无工程手记内容..."}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </motion.div>

    {/* 二维码弹窗 */}
    {project.qrcodeImage && (
      <Dialog open={showQRCode} onOpenChange={setShowQRCode}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">扫码体验小程序</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center p-6">
            <img
              src={project.qrcodeImage}
              alt="小程序码"
              className="w-64 h-64 object-contain"
            />
            <p className="text-sm text-muted-foreground mt-4 text-center">
              使用微信扫描二维码体验小程序
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )}
  </>
  );
}
