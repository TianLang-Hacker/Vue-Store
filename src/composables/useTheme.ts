// src/composables/useTheme.ts
import { ref, onMounted } from 'vue'

export const useTheme = () => {
  const themes = ['light', 'dark', 'cupcake', 'retro', 'cyberpunk', 'valentine', 'aqua'] // 完整主题列表
  const currentTheme = ref('light')

  // 初始化主题
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const defaultTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    setTheme(defaultTheme)
  }

  // 设置主题
  const setTheme = (theme: string) => {
    if (!themes.includes(theme)) return
    
    document.documentElement.setAttribute('data-theme', theme)
    currentTheme.value = theme
    localStorage.setItem('theme', theme)
  }

  // 切换主题
  const toggleTheme = () => {
    const index = themes.indexOf(currentTheme.value)
    const newTheme = themes[(index + 1) % themes.length]
    setTheme(newTheme)
  }

  onMounted(initTheme)

  return {
    currentTheme,
    setTheme,
    toggleTheme,
    themes
  }
}