<template>
  <!-- 导航栏 -->
  <div>
    <Navbar />
  </div>

  <!-- 主内容区域 -->
  <main class="container mx-auto p-8">
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <!-- 商品卡片 -->
      <div 
        v-for="(product, index) in products" 
        :key="index"
        class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
      >
        <figure class="px-4 pt-4">
          <img 
            :src="product.image" 
            :alt="product.name"
            class="rounded-xl h-48 w-full object-cover"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ product.name }}</h2>
          <p class="text-gray-600">{{ product.description }}</p>
          <div class="mt-4 flex justify-between items-center">
            <span class="text-xl font-bold text-primary">¥{{ product.price }}</span>
            <button class="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              立即购买
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- 页脚 -->
  <div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue'

export default defineComponent({
  components: {
    Footer,
    Navbar,
  },
  setup() {
    // 模拟商品数据
    const products = [
      {
        name: '运动鞋',
        price: 599,
        image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        description: '专业运动跑鞋，轻盈透气'
      },
      {
        name: '无线耳机',
        price: 1299,
        image: 'https://images.unsplash.com/photo-1590658006821-04f4008d5717',
        description: '主动降噪，高保真音质'
      },
      {
        name: '智能手表',
        price: 899,
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
        description: '全天健康监测，运动助手'
      },
      {
        name: '数码相机',
        price: 4599,
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
        description: '4K视频拍摄，专业画质'
      },
      {
        name: '运动鞋',
        price: 599,
        image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        description: '专业运动跑鞋，轻盈透气'
      },
      {
        name: '无线耳机',
        price: 1299,
        image: 'https://images.unsplash.com/photo-1590658006821-04f4008d5717',
        description: '主动降噪，高保真音质'
      },
      {
        name: '智能手表',
        price: 899,
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
        description: '全天健康监测，运动助手'
      },
      {
        name: '数码相机',
        price: 4599,
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
        description: '4K视频拍摄，专业画质'
      },
    ]

    return {
      products
    }
  }
});
</script>