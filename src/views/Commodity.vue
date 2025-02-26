<template>
    <!-- 导航栏 -->
    <div>
      <Navbar />
    </div>

     <!-- 商品详情主体 -->
     <main class="container mx-auto px-4 py-8 min-h-screen">
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- 左侧商品大图 -->
      <div class="lg:w-1/2 relative">
        <!-- 商品大图 -->
        <figure class="card bg-base-100 shadow-xl h-full">
          <img 
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="商品展示"
            class="object-cover w-full h-full rounded-xl"
          />
        </figure>
      </div>

      <!-- 右侧商品信息 -->
      <div class="lg:w-1/2 flex flex-col">
        <div class="card bg-base-100 shadow-xl h-full p-6">
          <!-- 商品标题 -->
          <h1 class="text-4xl font-bold mb-4">2024新款智能运动鞋</h1>
          
          <!-- 价格与评分 -->
          <div class="flex items-center gap-4 mb-6">
            <span class="text-3xl text-primary font-bold">¥599</span>
            <div class="rating rating-md">
              <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
            </div>
            <span class="text-sm text-gray-500">(1288条评价)</span>
          </div>

          <!-- 商品规格选择 -->
          <div class="mb-8">
            <h3 class="text-xl font-semibold mb-4">选择规格</h3>
            <div class="flex flex-wrap gap-3">
              <button class="btn btn-outline btn-active">39码</button>
              <button class="btn btn-outline">40码</button>
              <button class="btn btn-outline">41码</button>
              <button class="btn btn-outline">42码</button>
            </div>
          </div>

          <!-- 商品描述 -->
          <div class="prose mb-8">
            <h3 class="text-xl font-semibold mb-2">产品特点</h3>
            <ul class="list-disc pl-6">
              <li>智能计步与运动数据追踪</li>
              <li>透气网面设计，全天候舒适</li>
              <li>耐磨防滑橡胶大底</li>
              <li>无线充电，续航30天</li>
            </ul>
          </div>

          <!-- 购买操作 -->
          <div class="mt-auto">
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="btn btn-primary btn-lg flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                立即购买
              </button>
              <button class="btn btn-outline btn-lg flex-1">加入购物车</button>
            </div>
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
  components:{
    Footer,
    Navbar,
  },
});
</script>
