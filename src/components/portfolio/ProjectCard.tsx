import { useMode } from '@/contexts/ModeContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Palette } from 'lucide-react';

interface Project {
  id: string;
  number: string;
  title: string;
  role: string;
  tags: string[];
  description: string;
  metrics: { label: string; value: string }[];
  icon: 'sparkles' | 'code' | 'palette';
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
          {/* 项目编号和图标 */}
          <div className="flex items-start justify-between mb-4">
            <span
              className={`text-sm font-medium text-muted-foreground ${
                mode === 'code' ? 'font-mono' : ''
              }`}
            >
              {project.number}
            </span>
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
        </CardContent>
      </Card>
    </motion.div>
  );
}
