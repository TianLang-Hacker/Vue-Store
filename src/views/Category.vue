<template>
  <div>
    <h2>Category: {{ categoryName }}</h2>
    <div v-for="product in products" :key="product.id">
      <router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

interface Product {
  id: number
  name: string
}

interface CategoryResponse {
  categoryName: string
  products: Product[]
}

export default defineComponent({
  data() {
    return {
      categoryName: '' as string,
      products: [] as Product[]
    }
  },
  async created() {
    const categoryId = this.$route.params.id
    const response = await axios.get<CategoryResponse>(`/api/category/${categoryId}`)
    this.categoryName = response.data.categoryName
    this.products = response.data.products
  }
})
</script>
