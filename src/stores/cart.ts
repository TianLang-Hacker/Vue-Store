import { defineStore } from 'pinia'

interface Product {
  id: number
  name: string
}

interface CartState {
  items: Product[]
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: []
  }),
  actions: {
    addToCart(product: Product) {
      this.items.push(product)
    }
  }
})
