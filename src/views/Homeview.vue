<template>
  <Navbar />

  <!-- 推荐商品区 -->
  <main class="container mx-auto p-8">
    <h2 class="text-3xl font-bold mb-8">今日推荐</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <!-- 商品卡片 -->
      <router-link 
        v-for="product in recommendedProducts" 
        :key="product.id"
        :to="`/commodity/${product.id}`"
        class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      >
        <figure class="px-4 pt-4">
          <img 
            :src="product.images[0]"
            :alt="product.title"
            class="rounded-xl h-48 w-full object-cover"
          />
        </figure>
        <div class="card-body">
          <h3 class="card-title">{{ product.title }}</h3>
          <div class="flex items-center justify-between mt-2">
            <span class="text-lg font-bold text-primary">¥{{ product.price }}</span>
            <div class="badge badge-secondary">新品</div>
          </div>
        </div>
      </router-link>
    </div>
  </main>

  <Footer />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { shuffleArray } from '@/utils/helpers'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

interface Product {
  id: string
  title: string
  price: number
  images: string[]
  // 其他需要的字段...
}

export default defineComponent({
  components: {
    Navbar,
    Footer
  },
  setup() {
    const recommendedProducts = ref<Product[]>([])
    const loading = ref(true)

    // 获取商品数据
    const loadProducts = async () => {
      try {
        const response = await fetch('/products.json')
        if (!response.ok) throw new Error('加载失败')
        
        const allProducts: Product[] = await response.json()
        const shuffled = shuffleArray(allProducts)
        
        // 随机选取12个商品，不足则全部显示
        recommendedProducts.value = shuffled.slice(0, 12)
      } catch (error) {
        console.error('加载推荐商品失败:', error)
      } finally {
        loading.value = false
      }
    }

    onMounted(loadProducts)

    return {
      recommendedProducts,
      loading
    }
  }
})
</script>