# Jiani Feng 个人作品集网站需求文档

## 1. 项目概述

### 1.1 背景

为 Jiani Feng 构建一个高性能、交互丰富的个人作品集网站，展示其在环境设计与 AI 全栈开发领域的跨学科能力。\n

### 1.2 核心理念

通过全局切换开关实现 Art Mode 和 Code Mode两种视觉模式无缝切换，展现设计与技术融合的职业定位。\n

## 2. 核心功能

### 2.1 双模式切换系统

用户可通过顶部开关切换模式：\n- **Art Mode**: 白色背景、Playfair Display 字体、深色文字、高清图片、优雅排版、柔和动画

- **Code Mode**: 深灰背景、JetBrains Mono 字体、浅色代码色、JSON 代码块、线框图、机械感交互动效

### 2.2 动态项目展示

展示 3 个核心项目，每个卡片包含：项目编号、标题、角色标签、技术栈标签、项目描述、量化数据、动态图标

### 2.3 沉浸式交互

- 页面元素向上淡入入场动画，带有交错效果
- 项目卡片悬停时轻微上浮或背景高亮
- 平滑滚动体验

## 3. 信息架构

### 3.1 Header

左侧：JIANI FENG 名字；右侧：Art/Code 切换开关

### 3.2 Hero Section

主标题：**An AI-native person**.；副标题：Hybrid AI Product Manager & Designer

### 3.3 Work Section

网格布局展示精选项目，支持点击查看详情

### 3.4 Footer

版权信息、社交链接（Email、LinkedIn、GitHub 等）\n

## 4. 设计规范

### 4.1 调色板

基于 zinc 色系：主浅色 zinc-50/white，主深色 zinc-950/black，辅助色 zinc-400/zinc-500

### 4.2 字体排印

- Art Mode：标题使用 Playfair Display（优雅衬线体），正文使用 Inter（易读无衬线体）\n- Code Mode：统一使用 JetBrains Mono 等宽字体

## 5. 技术说明

使用 React + Tailwind CSS + Shadcn 技术栈实现，动态样式切换通过 clsx 和 tailwind-merge 处理，动画效果使用 Framer Motion，图标来自 Lucide React 图标库
