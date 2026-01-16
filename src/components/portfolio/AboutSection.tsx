import { useMode } from '@/contexts/ModeContext';
import { motion } from 'framer-motion';
import { Terminal, User, Code, Globe, Coffee, BookOpen, Cpu, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const { mode } = useMode();
  const isArt = mode === 'art';

  return (
    <section className="py-20 px-6 min-h-[80vh] flex items-center">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {isArt ? <ArtLayout /> : <CodeLayout />}
        </motion.div>
      </div>
    </section>
  );
}

function ArtLayout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
      {/* 左侧：视觉焦点 */}
      <div className="lg:col-span-5 relative">
        <div className="sticky top-32">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-8 group">
            <div className="absolute inset-0 bg-[#FBF7DB] mix-blend-multiply opacity-20 z-10" />
            <img 
              src="/images/avatar.png" 
              alt="Jiani Feng" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 border-[1px] border-stone-900/10 m-4 rounded-xl" />
          </div>
          
          <h2 className="text-6xl font-serif text-stone-900 leading-none mb-4">
            The <br/>
            <span className="italic text-stone-500">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-stone-900 mt-6" />
        </div>
      </div>

      {/* 右侧：叙事文本 */}
      <div className="lg:col-span-7 space-y-8 text-lg leading-relaxed text-stone-700 font-sans">
        <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-stone-900">
          一个环境设计出身的 INFJ，3 个月自学 AI 编程并拿到比赛奖项的跨界玩家。
          <span className="block mt-2 italic text-stone-500 text-base">“人生是场游戏，要玩得尽兴！”</span>
        </p>

        <div className="space-y-6">
          <p>
            23年6月我从一个普通的二本学校毕业，曾担任一年产品研发技术员。但我知道这里限制了我，靠时间熬资历不是我想要的，所以我离开了。
          </p>
          <p>
            随后我成为了一个“观察者”。在日本的大阪与东京，在中国的青岛、北京、大连... 我挤在人群中观察，和他们交流，世界观随着脚步一点点扩大。万里路的沉淀，让我准备好回家重新出发。
          </p>
          <p>
            闲暇时我大量阅读，借助 AI 拓展认知边界。虽然面临家中催促就业的压力，但我选择了一条不同的路——利用 AI 的能力和信息差。从最初尝试接单制作 AI 图像和视频，到后来主动出击、形成飞轮效应，我验证了自己的能力。
          </p>
          <p>
            但单打独斗无法复利，我开始将自己作为“AI 产品经理”培养。参加比赛、尽全力开发、获得奖项... 正向反馈让我停不下来。为了锻炼综合能力，我甚至短暂去做销售并拿下了销冠。
          </p>
          <p className="font-medium text-stone-900 pt-4 border-t border-stone-200">
            现在，我许愿能加入像马斯克那样的团队，与想改变世界、推动人类文明向前的人一起，创造出真正有意义的东西。
          </p>
          
          <div className="pt-8 flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-stone-400">
            <span>Optimist</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Idealist</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Builder</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeLayout() {
  const profile = {
    name: "Jiani Feng",
    type: "INFJ | Builder",
    status: "Ready to Commit",
    stats: {
      coding: "Self-taught (3 months)",
      design: "Environment Design Major",
      sales: "Top Performer (2 months)",
      location: "China"
    },
    stack: ["AI/LLM", "React", "Python", "Product Logic"],
    mission: "To join a team that pushes human civilization forward."
  };

  const logs = [
    { time: "2023.06", event: "Graduated_University", status: "Done" },
    { time: "2023-24", event: "R&D_Technician", note: "Learned fast, but felt limited" },
    { time: "2024.H2", event: "World_Observer", loc: ["Osaka", "Tokyo", "Beijing", "etc"] },
    { time: "2025.01", event: "AI_Freelancer", result: "Profitable_Loop_Achieved" },
    { time: "2025.03", event: "AI_Hackathon", reward: "Award_Winner" },
    { time: "Current", event: "Seeking_Team", target: "Musk-level_Visionaries" }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* 终端窗口外框 */}
      <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0c0c0c] shadow-2xl shadow-primary/10 backdrop-blur-sm">
        {/* 终端标题栏 */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="text-xs font-mono text-white/30 flex items-center gap-2">
            <Terminal className="w-3 h-3" />
            user_profile.json
          </div>
          <div className="w-10" />
        </div>

        {/* 终端内容区 */}
        <div className="p-6 md:p-10 font-mono text-sm md:text-base overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* 左侧：JSON 数据 */}
            <div className="space-y-1">
              <span className="text-blue-400">const</span> <span className="text-yellow-300">User</span> <span className="text-white">=</span> <span className="text-white">{`{`}</span>
              <div className="pl-6 space-y-1 text-green-300">
                <div>
                  <span className="text-cyan-300">"name"</span>: <span className="text-orange-300">"{profile.name}"</span>,
                </div>
                <div>
                  <span className="text-cyan-300">"class"</span>: <span className="text-orange-300">"{profile.type}"</span>,
                </div>
                <div>
                  <span className="text-cyan-300">"status"</span>: <span className="text-orange-300">"{profile.status}"</span>,
                </div>
                <div>
                  <span className="text-cyan-300">"mission"</span>: <span className="text-orange-300">"{profile.mission}"</span>,
                </div>
                <div>
                  <span className="text-cyan-300">"skills"</span>: <span className="text-white">[</span>
                  {profile.stack.map((s, i) => (
                    <span key={s}>
                      <span className="text-orange-300">"{s}"</span>
                      {i < profile.stack.length - 1 && <span className="text-white">, </span>}
                    </span>
                  ))}
                  <span className="text-white">]</span>
                </div>
              </div>
              <span className="text-white">{`};`}</span>

              <div className="mt-8 text-white/50">
                <span className="text-green-500">➜</span> <span className="text-blue-400">~</span> <span className="animate-pulse">_</span>
              </div>
            </div>

            {/* 右侧：系统日志 */}
            <div className="border-l border-white/10 pl-6 md:pl-10 space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> System Logs
              </h3>
              
              <div className="space-y-4 relative">
                {/* 连接线 */}
                <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-white/10" />
                
                {logs.map((log, i) => (
                  <div key={i} className="relative flex items-start gap-4 group">
                    <div className={`mt-1.5 w-3 h-3 rounded-full border-2 border-[#0c0c0c] relative z-10 flex-shrink-0 
                      ${i === logs.length - 1 ? 'bg-green-500 animate-pulse' : 'bg-white/20'}`} 
                    />
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs text-white/30">{log.time}</span>
                        <span className={`text-sm font-bold ${i === logs.length - 1 ? 'text-green-400' : 'text-white/80'}`}>
                          {log.event}
                        </span>
                      </div>
                      {(log.status || log.note || log.result || log.reward || log.target) && (
                        <div className="text-xs text-white/50 font-light">
                          {log.status || log.note || log.result || log.reward || log.target}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/5">
                <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
                  <Sparkles className="w-3 h-3 text-yellow-400" />
                  <span>Achievement Unlocked</span>
                </div>
                <div className="text-sm font-bold text-white">
                  "Optimistic Idealist"
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}