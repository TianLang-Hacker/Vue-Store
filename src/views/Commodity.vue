<template>
  <Navbar />
  
  <main v-if="product" class="container mx-auto px-4 py-8 min-h-screen">
    <!-- 商品展示结构保持你原来的设计 -->
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- 左侧图片区域 -->
      <div class="lg:w-1/2 relative">
        <!-- 商家信息 -->
        <div class="absolute -top-2 left-2 z-10 bg-base-100 rounded-full shadow-lg">
          <div class="flex items-center gap-3 p-2">
            <div class="avatar">
              <div class="w-12 rounded-full">
                <img :src="product.shop.avatar" />
              </div>
            </div>
            <div>
              <h3 class="font-bold">{{ product.shop.name }}</h3>
              <div v-if="product.shop.certification" 
                   class="badge badge-primary badge-sm">
                品牌认证
              </div>
            </div>
          </div>
        </div>

        <!-- 图片轮播 -->
        <div class="carousel w-full h-[600px]">
          <div v-for="(img, index) in product.images" 
               :key="index" 
               class="carousel-item w-full">
            <img :src="img" 
                 class="w-full object-cover" 
                 :alt="`商品图${index + 1}`" />
          </div>
        </div>
      </div>

      <!-- 右侧商品信息 -->
      <div class="lg:w-1/2 flex flex-col">
        <div class="card bg-base-100 shadow-xl h-full p-6">
          <h1 class="text-4xl font-bold mb-4">{{ product.title }}</h1>
          
          <!-- 动态绑定数据 -->
          <div class="flex items-center gap-4 mb-6">
            <span class="text-3xl text-primary font-bold">¥{{ product.price }}</span>
            <div class="rating rating-md">
              <input v-for="star in 5" 
                     :key="star" 
                     type="radio" 
                     :class="[
                       'mask mask-star-2',
                       star <= Math.round(product.rating) ? 'bg-orange-400' : 'bg-gray-300'
                     ]" 
                     :checked="star === Math.round(product.rating)"/>
            </div>
            <span class="text-sm text-gray-500">({{ product.reviewsCount }}条评价)</span>
          </div>

          <!-- 规格选择 -->
          <div class="mb-8">
            <h3 class="text-xl font-semibold mb-4">选择规格</h3>
            <div class="flex flex-wrap gap-3">
              <button v-for="spec in product.specs" 
                      :key="spec" 
                      class="btn btn-outline"
                      @click="selectedSpec = spec"
                      :class="{ 'btn-active': selectedSpec === spec }">
                {{ spec }}
              </button>
            </div>
          </div>

          <!-- 购买按钮 -->
          <div class="mt-auto">
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="btn btn-primary btn-lg flex-1" @click="handleBuy">
                立即购买
              </button>
              <button class="btn btn-outline btn-lg flex-1" @click="addToCart">
                加入购物车
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- 加载状态 -->
  <div v-else-if="loading" class="text-center py-20">
    <span class="loading loading-infinity loading-lg"></span>
    <p>正在加载商品信息...</p>
  </div>

  <!-- 404状态 -->
  <div v-else class="text-center py-20">
    <h1 class="text-4xl font-bold mb-4">404</h1>
    <p class="text-xl">找不到该商品</p>
    <router-link to="/" class="btn btn-primary mt-6">
      返回首页
    </router-link>
  </div>

  <Footer />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

interface Product {
  id: string
  title: string
  price: number
  description: string
  images: string[]
  shop: {
    name: string
    avatar: string
    certification: boolean
  }
  specs: string[]
  features: string[]
  rating: number
  reviewsCount: number
}

export default defineComponent({
  components: {
    Navbar,
    Footer
  },
  setup() {
    const route = useRoute()
    const product = ref<Product | null>(null)
    const loading = ref(true)
    const selectedSpec = ref<string>('')
    const error = ref<string | null>(null)

    const loadProduct = async () => {
      try {
        // 调试日志：显示当前请求ID
        const requestedId = route.params.id.toString().trim()
        console.log('[DEBUG] 正在加载商品，请求ID:', requestedId)

        // 发起请求获取商品数据
        const response = await fetch('/products.json')
        if (!response.ok) {
          throw new Error(`请求失败，状态码: ${response.status}`)
        }

        // 解析并转换数据
        const rawProducts: any[] = await response.json()
        console.log('[DEBUG] 原始商品数据:', rawProducts)

        // 数据清洗和类型转换
        const validProducts = rawProducts
          .map(p => ({
            ...p,
            id: p.id?.toString().trim() || 'invalid_id', // 强制转换为字符串
            specs: Array.isArray(p.specs) ? p.specs : []
          }))
          .filter(p => /^\d+$/.test(p.id)) // 过滤有效ID

        console.log('[DEBUG] 有效商品ID列表:', validProducts.map(p => p.id))

        // 查找匹配商品
        const foundProduct = validProducts.find(p => p.id === requestedId)
        console.log('[DEBUG] 匹配结果:', foundProduct)

        if (!foundProduct) {
          throw new Error(`未找到ID为 ${requestedId} 的商品`)
        }

        // 数据完整性检查
        if (!foundProduct.specs.length) {
          console.warn('商品缺少规格数据，使用默认值')
          foundProduct.specs = ['默认规格']
        }

        product.value = foundProduct
        selectedSpec.value = foundProduct.specs[0]
        error.value = null
      } catch (err) {
        console.error('[ERROR] 加载失败:', err)
        error.value = err instanceof Error ? err.message : '未知错误'
        product.value = null
      } finally {
        loading.value = false
      }
    }

    const handleBuy = () => {
      if (!product.value) return
      console.log('购买商品:', product.value.id, '规格:', selectedSpec.value)
      // 这里可以添加实际购买逻辑
    }

    const addToCart = () => {
      if (!product.value) return
      console.log('加入购物车:', product.value.id, '规格:', selectedSpec.value)
      // 这里可以添加购物车逻辑
    }

    onMounted(() => {
      loadProduct()
    })

    return {
      product,
      loading,
      selectedSpec,
      error,
      handleBuy,
      addToCart
    }
  }
})
</script>