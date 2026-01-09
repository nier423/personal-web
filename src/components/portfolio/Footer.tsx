import { useMode } from '@/contexts/ModeContext';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Github } from 'lucide-react';
import XLogo from '@/components/ui/x-logo';
import { useState } from 'react';

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:1207818556@qq.com',
    label: '1207818556@qq.com',
  },
  {
    name: 'WeChat',
    icon: MessageCircle,
    href: '#',
    label: 'nier1002432',
  },
  {
    name: 'AtomGit',
    icon: Github,
    href: 'https://openatom.tech/ai-research_and_embodied/0bd1f6d90a2effe910d9a4188d90d1ea',
    label: '@jiani',
  },
  {
    name: 'X',
    icon: XLogo,
    href: 'https://x.com/fengni180575',
    label: 'fengni180575',
  },
];

export default function Footer() {
  const { mode } = useMode();
  const [showQRCode, setShowQRCode] = useState(false);

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
              const isWeChat = link.name === 'WeChat';
              
              return (
                <div key={link.name} className="relative">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent transition-colors group"
                    onMouseEnter={() => isWeChat && setShowQRCode(true)}
                    onMouseLeave={() => isWeChat && setShowQRCode(false)}
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
                  
                  {/* 微信二维码弹出层 */}
                  {isWeChat && showQRCode && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50"
                    >
                      <div className="bg-card border-2 border-border rounded-lg p-3 shadow-lg">
                        <img
                          src="/images/wechat-qrcode.png"
                          alt="微信二维码"
                          className="w-48 h-48 object-contain"
                        />
                        <p className="text-xs text-center text-muted-foreground mt-2">
                          扫码添加微信
                        </p>
                      </div>
                      {/* 小三角箭头 */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px">
                        <div className="border-8 border-transparent border-t-border"></div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
                          <div className="border-[7px] border-transparent border-t-card"></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
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
