declare interface Product {
    id: string
    title: string
    price: number
    description: string
    images: string[]
    shop: {
      name: string
      avatar: string
      certification: boolean
    }
    specs: string[]
    features: string[]
    rating: number
    reviewsCount: number
  }
  
  declare module '@/types/product' {
    export { Product }
  }