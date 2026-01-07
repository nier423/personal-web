import { useMode } from '@/contexts/ModeContext';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    id: '01',
    number: '01',
    title: 'AI 驱动的空间设计平台',
    role: 'Product Manager & Lead Designer',
    tags: ['AI', 'UX Design', 'React', 'Python', 'Computer Vision'],
    description:
      '构建智能化室内设计工具，通过 AI 算法自动生成空间布局方案，结合用户偏好实现个性化设计推荐。融合环境设计专业知识与机器学习技术，提升设计效率与用户体验。',
    metrics: [
      { label: '用户增长', value: '300%' },
      { label: '设计效率提升', value: '5x' },
    ],
    icon: 'sparkles' as const,
  },
  {
    id: '02',
    number: '02',
    title: '全栈智能对话系统',
    role: 'Full-Stack AI Developer',
    tags: ['LLM', 'Node.js', 'TypeScript', 'Vector DB', 'RAG'],
    description:
      '开发企业级智能客服系统，集成大语言模型与检索增强生成技术。实现多轮对话管理、知识库检索、情感分析等功能，支持高并发场景下的稳定运行。',
    metrics: [
      { label: '响应时间', value: '<500ms' },
      { label: '准确率', value: '94%' },
    ],
    icon: 'code' as const,
  },
  {
    id: '03',
    number: '03',
    title: '沉浸式艺术展览体验',
    role: 'Experience Designer & Developer',
    tags: ['Three.js', 'WebGL', 'Interactive Design', 'Motion Design'],
    description:
      '设计并实现线上虚拟艺术展览空间，运用 3D 技术与交互设计打造沉浸式观展体验。结合环境设计理念，创造富有空间感与叙事性的数字艺术场景。',
    metrics: [
      { label: '访问量', value: '50K+' },
      { label: '平均停留时长', value: '8min' },
    ],
    icon: 'palette' as const,
  },
];

export default function WorkSection() {
  const { mode } = useMode();

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2
            className={`text-4xl xl:text-5xl font-bold mb-4 ${
              mode === 'art' ? 'font-serif' : 'font-mono'
            }`}
          >
            Selected Works
          </h2>
          <p className="text-muted-foreground text-lg">
            精选项目展示设计与技术的融合实践
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
