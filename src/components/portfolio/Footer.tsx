import { useMode } from '@/contexts/ModeContext';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:jiani.feng@example.com',
    label: 'jiani.feng@example.com',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/jianifeng',
    label: 'linkedin.com/in/jianifeng',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/jianifeng',
    label: 'github.com/jianifeng',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/jianifeng',
    label: '@jianifeng',
  },
];

export default function Footer() {
  const { mode } = useMode();

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8"
        >
          {/* 左侧：联系信息 */}
          <div>
            <h3
              className={`text-2xl font-bold mb-4 ${
                mode === 'art' ? 'font-serif' : 'font-mono'
              }`}
            >
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-6">
              欢迎交流设计、技术或任何有趣的想法
            </p>
          </div>

          {/* 右侧：社交链接 */}
          <div className="grid grid-cols-1 @md:grid-cols-2 gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent transition-colors group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium">{link.name}</div>
                    <div
                      className={`text-xs text-muted-foreground truncate ${
                        mode === 'code' ? 'font-mono' : ''
                      }`}
                    >
                      {link.label}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* 版权信息 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 border-t border-border text-center text-sm text-muted-foreground"
        >
          <p>© 2026 Jiani Feng. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
