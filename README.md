# 欢迎使用你的秒哒应用代码包
秒哒应用链接
    URL:https://www.miaoda.cn/projects/app-8ripenn1fdoh

# Jiani Feng 个人作品集网站

一个高性能、交互丰富的个人作品集网站，展示环境设计与 AI 全栈开发领域的跨学科能力。

## ✨ 核心特性

### 🎨 双模式切换系统
- **Art Mode**: 白色背景、Playfair Display 优雅衬线字体、深色文字、柔和动画
- **Code Mode**: 深灰背景、JetBrains Mono 等宽字体、浅色代码色、机械感交互

通过顶部开关可在两种视觉模式间无缝切换，展现设计与技术融合的职业定位。

### 🚀 沉浸式交互体验
- 页面元素向上淡入入场动画，带有交错效果
- 项目卡片悬停时轻微上浮或背景高亮
- 平滑滚动体验
- 响应式设计，完美适配桌面和移动设备

### 📱 信息架构
- **Header**: 名字展示 + Art/Code 模式切换开关
- **Hero Section**: 主标题、副标题、个人简介
- **Work Section**: 3 个核心项目展示，包含项目编号、标题、角色、技术栈、描述、量化数据
- **Footer**: 版权信息、社交链接（Email、LinkedIn、GitHub、Twitter）

## 🛠️ 技术栈

- **框架**: React 18 + TypeScript
- **样式**: Tailwind CSS + shadcn/ui
- **动画**: Framer Motion
- **图标**: Lucide React
- **构建工具**: Vite
- **字体**: 
  - Art Mode: Playfair Display (标题) + Inter (正文)
  - Code Mode: JetBrains Mono (统一)

## 🎨 设计系统

### 调色板
基于 zinc 色系的优雅配色方案：
- **Art Mode**: 浅色背景 (zinc-50/white)、深色文字 (zinc-950)
- **Code Mode**: 深色背景 (zinc-950)、浅色文字 (zinc-50)
- **辅助色**: zinc-400/zinc-500

### 字体排印
- Art Mode 使用衬线字体营造优雅氛围
- Code Mode 使用等宽字体展现技术感
- 响应式字体大小，确保各设备可读性

## 📂 项目结构

```
src/
├── components/
│   ├── portfolio/
│   │   ├── Header.tsx          # 顶部导航栏
│   │   ├── Hero.tsx            # 英雄区域
│   │   ├── WorkSection.tsx     # 作品展示区域
│   │   ├── ProjectCard.tsx     # 项目卡片组件
│   │   ├── Footer.tsx          # 页脚
│   │   └── ModeToggle.tsx      # 模式切换开关
│   └── ui/                     # shadcn/ui 组件
├── contexts/
│   └── ModeContext.tsx         # 模式切换上下文
├── pages/
│   └── Portfolio.tsx           # 主页面
├── index.css                   # 全局样式和设计 tokens
└── App.tsx                     # 应用入口

```

## 🚀 开发说明

本项目使用特殊的开发流程：

```bash
# 代码检查和验证
npm run lint
```

注意：`npm run dev` 和 `npm run build` 命令已被禁用，仅使用 `lint` 进行验证。

## 📝 项目亮点

1. **创新的双模式设计**: 通过一个开关在艺术与代码两种风格间切换，完美体现跨学科能力
2. **流畅的动画效果**: 使用 Framer Motion 实现专业级入场动画和交互反馈
3. **响应式布局**: 完美适配桌面、平板、移动设备
4. **语义化设计系统**: 基于 CSS 变量的主题系统，易于维护和扩展
5. **性能优化**: 使用 Vite 构建，快速加载和热更新

## 📄 License

© 2026 Jiani Feng. All rights reserved.
