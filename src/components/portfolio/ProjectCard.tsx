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
    >
      <Card
        className={`group hover:shadow-lg transition-all duration-300 ${
          mode === 'code' ? 'hover:border-primary' : 'hover:shadow-xl'
        }`}
      >
        <CardContent className="p-6 xl:p-8">
          {/* 顶部：项目编号、图标、获奖标识 */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span
                className={`text-sm font-medium text-muted-foreground ${
                  mode === 'code' ? 'font-mono' : ''
                }`}
              >
                {project.number}
              </span>
              {project.award && (
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-xs font-medium text-amber-700">
                    {project.award}
                  </span>
                </div>
              )}
            </div>
            <Icon
              className={`w-6 h-6 text-muted-foreground transition-colors ${
                mode === 'code'
                  ? 'group-hover:text-primary'
                  : 'group-hover:text-foreground'
              }`}
            />
          </div>

          {/* 项目标题 */}
          <h3
            className={`text-2xl xl:text-3xl font-bold mb-3 ${
              mode === 'art' ? 'font-serif' : 'font-mono'
            }`}
          >
            {project.title}
          </h3>

          {/* 角色标签 */}
          <Badge variant="secondary" className="mb-4">
            {project.role}
          </Badge>

          {/* 项目描述 */}
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* 技术栈标签 */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className={mode === 'code' ? 'font-mono text-xs' : ''}
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* 项目展示图片（如果有） */}
          {project.image && (
            <div className="mb-6 rounded-lg overflow-hidden border border-border">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>
          )}

          {/* 项目亮点（如果有） */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3 text-foreground">
                ✨ 项目亮点
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 底部：量化数据 + 项目链接 */}
          <div className="flex flex-col gap-4">
            {/* 量化数据 */}
            {mode === 'code' ? (
              <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                <div className="text-muted-foreground mb-2">{'{'}</div>
                {project.metrics.map((metric, idx) => (
                  <div key={metric.label} className="ml-4">
                    <span className="text-primary">"{metric.label}"</span>:{' '}
                    <span className="text-foreground">"{metric.value}"</span>
                    {idx < project.metrics.length - 1 ? ',' : ''}
                  </div>
                ))}
                <div className="text-muted-foreground">{'}'}</div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="text-2xl font-bold text-foreground">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 项目链接（如果有） */}
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium bg-accent hover:bg-accent/80 text-accent-foreground transition-colors"
                  >
                    {link.type === 'github' && <Github className="w-3.5 h-3.5" />}
                    {link.type !== 'github' && <ExternalLink className="w-3.5 h-3.5" />}
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
