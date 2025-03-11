import { defineStore } from 'pinia'

// 定义 Product 类型
export interface Product {
  id: number;
  name: string;
  price: number;
}


// 定义 CartState
export interface CartState {
  items: Product[];
}

// 定义 Pinia 的 Store
export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: []
  }),
  actions: {
    addToCart(product: Product) {
      this.items.push(product)
    },
    removeFromCart(id: number) {
      this.items = this.items.filter(item => item.id !== id)
    }
  }
})
