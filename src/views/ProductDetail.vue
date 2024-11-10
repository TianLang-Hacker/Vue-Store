<template>
    <div>
      <h1>{{ product.name }}</h1>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { useCartStore } from '../stores/cart'
  import axios from 'axios'
  
  interface Product {
    id: number
    name: string
  }
  
  export default defineComponent({
    data() {
      return {
        product: {} as Product
      }
    },
    async created() {
      const productId = this.$route.params.id
      const response = await axios.get<Product>(`/api/product/${productId}`)
      this.product = response.data
    },
    methods: {
      addToCart() {
        const cartStore = useCartStore()
        cartStore.addToCart(this.product)
      }
    }
  })
  </script>
  