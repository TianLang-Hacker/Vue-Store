<template>
    <Navbar />
    
    <main class="container mx-auto p-8 min-h-screen">
      <h2 class="text-3xl font-bold mb-8">
        搜索结果："{{ keyword }}"
        <span class="text-lg text-gray-500 ml-2">找到 {{ filteredProducts.length }} 个商品</span>
      </h2>
  
      <!-- 加载状态 -->
      <div v-if="loading" class="text-center py-20">
        <span class="loading loading-infinity loading-lg"></span>
      </div>
  
      <!-- 商品列表 -->
      <div v-else-if="filteredProducts.length" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div 
          v-for="product in filteredProducts" 
          :key="product.id"
          class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <router-link :to="`/commodity/${product.id}`" class="contents">
            <figure class="px-4 pt-4">
              <img 
                :src="product.images[0]" 
                :alt="product.title"
                class="rounded-xl h-48 w-full object-cover"
                @error="handleImageError"
              />
            </figure>
            <div class="card-body">
              <h3 class="card-title">{{ product.title }}</h3>
              <div class="flex items-center justify-between mt-2">
                <span class="text-lg font-bold text-primary">¥{{ product.price }}</span>
                <div class="rating rating-sm">
                  <input 
                    v-for="n in 5" 
                    :key="n"
                    type="radio" 
                    :class="['mask mask-star-2', n <= Math.round(product.rating) ? 'bg-orange-400' : 'bg-gray-300']"
                  />
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
  
      <!-- 空状态 -->
      <div v-else class="text-center py-20">
        <div class="alert alert-info max-w-2xl mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>没有找到相关商品，尝试其他关键词</span>
        </div>
      </div>
    </main>
  
    <Footer />
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  export default defineComponent({
    name: 'SearchResults',
    props: {
      keyword: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const route = useRoute()
      const products = ref<any[]>([])
      const loading = ref(true)
  
      const decodedKeyword = decodeURIComponent(props.keyword).toLowerCase()
  
      const filteredProducts = computed(() => {
        return products.value.filter(p => 
          p.title.toLowerCase().includes(decodedKeyword) ||
          p.description.toLowerCase().includes(decodedKeyword) ||
          (p.specs || []).some((s: string) => s.toLowerCase().includes(decodedKeyword))
      )
      })
  
      const loadProducts = async () => {
        try {
          const response = await fetch('/products.json')
          if (!response.ok) throw new Error('加载失败')
          
          const data = await response.json()
          products.value = data.map((p: any) => ({
            ...p,
            id: p.id.toString().trim(),
            specs: Array.isArray(p.specs) ? p.specs : [],
            images: Array.isArray(p.images) ? p.images : []
          }))
        } catch (error) {
          console.error('加载失败:', error)
        } finally {
          loading.value = false
        }
      }
  
      const handleImageError = (e: Event) => {
        const img = e.target as HTMLImageElement
        img.src = '/img/default-product.jpg'
      }
  
      onMounted(loadProducts)
  
      return {
        loading,
        filteredProducts,
        keyword: decodedKeyword,
        handleImageError
      }
    }
  })
  </script>