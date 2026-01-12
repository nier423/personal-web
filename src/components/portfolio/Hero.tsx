import { useMode } from '@/contexts/ModeContext';
import { motion } from 'framer-motion';

export default function Hero() {
  const { mode } = useMode();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2
            className={`text-5xl xl:text-7xl font-bold mb-6 ${
              mode === 'art' ? 'font-serif' : 'font-mono'
            }`}
          >
            Architecting the Soul of AI Agents.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl xl:text-2xl text-muted-foreground mb-8">
            Product Engineer Bridging Human Intent & Silicon Execution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-base xl:text-lg text-muted-foreground leading-relaxed">Stay sensitive stay curious stay alive</p>
        </motion.div>
      </div>
    </section>
  );
}
