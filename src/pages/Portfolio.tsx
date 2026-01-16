import { useMode } from '@/contexts/ModeContext';
import { useEffect } from 'react';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import AboutSection from '@/components/portfolio/AboutSection';
import ProductSection from '@/components/portfolio/ProductSection';
import WorkSection from '@/components/portfolio/WorkSection';
import Footer from '@/components/portfolio/Footer';
import PageMeta from '@/components/common/PageMeta';

export default function Portfolio() {
  const { mode } = useMode();

  useEffect(() => {
    // 应用模式类到 body
    document.body.className = mode === 'code' ? 'code-mode' : 'art-mode';
  }, [mode]);

  useEffect(() => {
    // 启用平滑滚动
    document.documentElement.classList.add('smooth-scroll');
    return () => {
      document.documentElement.classList.remove('smooth-scroll');
    };
  }, []);

  return (
    <>
      <PageMeta
        title="Jiani Feng - AI Product Manager & Designer"
        description="融合环境设计与 AI 全栈开发的跨学科能力，致力于创造兼具美学价值与技术创新的产品体验。"
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <AboutSection />
          <WorkSection />
          <ProductSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
