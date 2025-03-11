// 高性能数组随机排序
export const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }
  
  // 可选：缓存控制函数
  export const getDailyRecommendations = (products: any[], count = 12) => {
    // 基于日期生成随机种子
    const today = new Date().toISOString().slice(0, 10)
    const seed = today.split('-').join('')
    let current = parseInt(seed, 10)
    
    const shuffled = [...products]
    const random = () => {
      const x = Math.sin(current++) * 10000
      return x - Math.floor(x)
    }
  
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    
    return shuffled.slice(0, count)
  }
