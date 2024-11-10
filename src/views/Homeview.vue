<template>
  <div>
    <h1>Welcome to Our Shop</h1>
    <input v-model="searchQuery" placeholder="Search for products">
    <button @click="search">Search</button>
    <div v-for="category in categories" :key="category.id">
      <router-link :to="`/category/${category.id}`">{{ category.name }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Category {
  id: number
  name: string
}

export default defineComponent({
  data() {
    return {
      searchQuery: '' as string,
      categories: [
        { id: 1, name: 'Electronics' },
        { id: 2, name: 'Clothing' },
      ] as Category[]
    }
  },
  methods: {
    search() {
      // Implement search functionality
    }
  }
})
</script>
