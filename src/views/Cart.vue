<template>
  <div>
    <h1>Your Shopping Cart</h1>
    <div v-if="cartItems.length > 0">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <p>{{ item.name }} - ${{ item.price }}</p>
        <button @click="removeFromCart(item.id)">Remove</button>
      </div>
      <div class="cart-summary">
        <h3>Total: ${{ totalPrice }}</h3>
        <button @click="checkout">Proceed to Checkout</button>
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useCartStore } from '../stores/cart'
import { defineStore } from 'pinia'

// 定义 Product 类型
interface Product {
  id: number;
  name: string;
  price: number;
}

// 定义 CartState
interface CartState {
  items: Product[];
}

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

export default defineComponent({
  setup() {
    const cartStore = useCartStore()

    // 计算购物车总价
    const totalPrice = computed(() => {
      return cartStore.items.reduce((total, item) => total + item.price, 0)
    })

    const removeFromCart = (id: number) => {
      cartStore.removeFromCart(id)
    }

    const checkout = () => {
      alert(`Proceeding to checkout. Total: $${totalPrice.value}`)
      // 在此处可以处理结算逻辑
    }

    return {
      cartItems: cartStore.items,
      totalPrice,
      removeFromCart,
      checkout
    }
  }
})
</script>

<style scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.cart-summary {
  margin-top: 20px;
}
</style>