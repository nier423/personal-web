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
        <motion.h1
          className={`text-xl font-bold tracking-tight ${
            mode === 'art' ? 'font-serif' : 'font-mono'
          }`}
          layout
        >
          JIANI FENG
        </motion.h1>
        <ModeToggle />
      </div>
    </motion.header>
  );
}
