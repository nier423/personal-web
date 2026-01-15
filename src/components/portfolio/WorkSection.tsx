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
    icon: 'sparkles' as const,
    backgroundImage: '/images/project-bg-1.png',
    links: [
      {
        type: 'demo' as const,
        url: 'https://modelscope.cn/studios/nier37/ModelScope-QA-Agent/summary',
        label: '查看项目',
      },
    ],
  },
  {
    id: '02',
    number: '02',
    title: 'AI私人衣橱智能导购小程序',
    role: 'VibeBuild Bootcamp 最佳Vibe Coding奖',
    tags: ['多模态大模型', 'Milvus', 'RAG', '混合检索', '微信小程序'],
    description:
      '参加创业磨坊VibeBuild Bootcamp获得最佳Vibe coding奖。采用多模态大模型与混合检索策略，基于Milvus向量数据库构建高精度RAG系统，为用户提供智能化的私人衣橱管理和导购服务。',
    icon: 'code' as const,
    backgroundImage: '/images/project-bg-2.png',
    qrcodeImage: '/images/wardrobe-miniprogram.jpg',
    links: [
      {
        type: 'qrcode' as const,
        url: '#',
        label: '查看项目',
      },
    ],
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
          className="mb-20 text-center"
        >
          {/* 装饰性小标题 */}

          {/* 主标题 */}
          <h2
            className={`text-5xl xl:text-6xl font-bold mb-6 ${
              mode === 'art' ? 'font-serif' : 'font-mono'
            }`}
          >
            AI Projects
          </h2>
          {/* 装饰性下划线 */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 max-w-24 mx-auto rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}