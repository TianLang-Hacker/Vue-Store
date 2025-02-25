<template>
  <!-- 导航栏 -->
  <div>
    <Navbar />
  </div>



    <!-- 页脚 -->
<div>
  <Footer />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import { useCartStore } from '../stores/cart'
import axios from 'axios'


interface Product {
  id: number
  name: string
  price: number // 添加了 price 属性
}

export default defineComponent({
  data() {
    return {
      product: {} as Product
    }
  },
  async created() {
    const productId = this.$route.params.id
    try {
      const response = await axios.get<Product>(`/api/product/${productId}`)
      this.product = response.data
    } catch (error) {
      console.error('Failed to fetch product:', error)
    }
  },
  methods: {
    addToCart() {
      const cartStore = useCartStore()
      if (!this.product.price) {
        console.error('Cannot add product to cart: price is missing.')
        return
      }
      cartStore.addToCart(this.product)
    }
  }
})
</script>
