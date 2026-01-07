import { useMode } from '@/contexts/ModeContext';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    id: '01',
    number: '01',
    title: '魔搭全栈开发 Copilot',
    role: '开源挑战赛三等奖 · 魔搭社区专家讲师',
    tags: ['Qwen-Max', 'LangChain', 'Agent', 'RAG', 'NLP'],
    description:
      '参与由开放原子开源基金会主办的魔搭社区智能答疑Agent开源挑战赛，荣获三等奖。本项目是一款基于 Qwen-Max + LangChain 的垂直领域智能问答 Agent，专为解决魔搭社区开发者的技术难题而设计。',
    metrics: [
      { label: '竞赛奖项', value: '三等奖' },
      { label: '社区角色', value: '专家讲师' },
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
