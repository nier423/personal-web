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
    title: 'AI私人衣橱智能导购小程序',
    role: 'VibeBuild Bootcamp 最佳Vibe Coding奖',
    tags: ['多模态大模型', 'Milvus', 'RAG', '混合检索', '微信小程序'],
    description:
      '参加创业磨坊VibeBuild Bootcamp获得最佳Vibe coding奖。采用多模态大模型与混合检索策略，基于Milvus向量数据库构建高精度RAG系统，为用户提供智能化的私人衣橱管理和导购服务。',
    metrics: [
      { label: '竞赛奖项', value: '最佳Vibe Coding' },
      { label: '检索精度', value: '高精度RAG' },
    ],
    icon: 'code' as const,
  },

];

export default function WorkSection() {
  const { mode } = useMode();

  return (
    <section className="min-h-screen py-20 px-6 bg-[#fbf7db52] bg-none">
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
