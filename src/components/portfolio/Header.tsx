import { useMode } from '@/contexts/ModeContext';
import ModeToggle from './ModeToggle';
import { motion } from 'framer-motion';

export default function Header() {
  const { mode } = useMode();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.img
            src="/images/avatar.png"
            alt="Jiani Feng"
            className="w-10 h-10 rounded-full object-cover border-2 border-border"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1
            className={`text-xl font-bold tracking-tight ${
              mode === 'art' ? 'font-serif' : 'font-mono'
            }`}
            layout
          >
            JIANI FENG
          </motion.h1>
        </div>
        <ModeToggle />
      </div>
    </motion.header>
  );
}
