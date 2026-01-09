import { useMode } from '@/contexts/ModeContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Palette, Award, ExternalLink, Github } from 'lucide-react';

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
  links?: { type: 'github' | 'demo' | 'article'; url: string; label: string }[];
  image?: string;
  award?: string;
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

  return (
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

        <CardContent className="relative p-8 xl:p-10">
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

            {/* 项目链接（如果有） - 优化按钮设计 */}
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
                {project.links.map((link) => (
                  <motion.a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      mode === 'code'
                        ? 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 font-mono'
                        : 'bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground shadow-md hover:shadow-lg'
                    }`}
                  >
                    {link.type === 'github' && <Github className="w-4 h-4" />}
                    {link.type !== 'github' && <ExternalLink className="w-4 h-4" />}
                    {link.label}
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
