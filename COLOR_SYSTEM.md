# 颜色系统配置说明

## 双模式颜色方案

### Art Mode（艺术模式）
- **背景色**: `#FBF7DB` - 温暖的浅黄色调
- **前景色**: 深色文字 `hsl(240 10% 10%)`
- **字体**: Playfair Display（标题）+ Inter（正文）
- **风格**: 优雅、柔和、艺术感

### Code Mode（代码模式）
- **背景色**: `hsl(0 0% 0%)` - 纯黑色
- **前景色**: 浅色文字 `hsl(0 0% 85%)`
- **字体**: JetBrains Mono（等宽字体）
- **风格**: 技术感、代码风格、机械感

## 实现方式

### CSS 变量定义
```css
:root {
  /* Art Mode 颜色 */
  --art-background: 0 0% 98%;
  --art-foreground: 240 10% 10%;
  --art-card: 0 0% 100%;
  --art-muted: 240 5% 96%;
  --art-border: 240 6% 90%;
  
  /* Code Mode 颜色 */
  --code-background: 0 0% 0%;
  --code-foreground: 0 0% 85%;
  --code-card: 0 0% 8%;
  --code-muted: 0 0% 12%;
  --code-border: 0 0% 15%;
}
```

### 模式切换
```css
/* Art Mode 应用浅黄色背景 */
.art-mode {
  font-family: 'Inter', sans-serif;
  background-color: #FBF7DB !important;
}

/* Code Mode 使用 CSS 变量的深灰背景 */
.code-mode {
  font-family: 'JetBrains Mono', monospace;
  --background: var(--code-background);
  --foreground: var(--code-foreground);
}
```

## 关键特性

1. **独立背景色**: Art Mode 和 Code Mode 拥有完全独立的背景色
2. **平滑过渡**: 使用 CSS transition 实现 0.3s 的平滑切换动画
3. **语义化变量**: 使用 `--background`、`--foreground` 等语义化 CSS 变量
4. **全局一致性**: 所有组件自动继承当前模式的颜色方案

## 使用示例

### 在组件中使用
```tsx
// 组件会自动应用当前模式的颜色
<div className="bg-background text-foreground">
  内容会根据当前模式自动调整颜色
</div>

<Card className="bg-card text-card-foreground">
  卡片也会自动适配
</Card>
```

### 模式切换
```tsx
// 在 ModeContext 中切换
const { mode, setMode } = useMode();

// 切换到 Art Mode
setMode('art');

// 切换到 Code Mode
setMode('code');
```

## 颜色对比

| 元素 | Art Mode | Code Mode |
|------|----------|-----------|
| 背景 | #FBF7DB（浅黄） | hsl(0 0% 0%)（纯黑） |
| 文字 | 深色 | 浅色 |
| 卡片 | 白色 | 深灰 |
| 边框 | 浅灰 | 深灰 |
| 强调色 | 深色 | 浅色 |

## 注意事项

1. **不要覆盖**: 避免在组件中使用固定的背景色，应使用 `bg-background` 等语义化类名
2. **保持一致**: 所有新组件都应使用设计系统中定义的颜色变量
3. **测试两种模式**: 确保组件在两种模式下都有良好的视觉效果
4. **对比度**: 确保文字和背景有足够的对比度，满足可访问性要求

---

**最后更新**: 2026-01-07
