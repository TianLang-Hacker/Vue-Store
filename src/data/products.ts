// 商品数据集合
export const products: Product[] = [
    {
      id: "1001",
      title: "2024新款智能运动鞋",
      price: 599,
      description: "专业运动跑鞋，轻盈透气",
      images: [
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        "/images/products/1001_2.webp",
        "/images/products/1001_3.webp"
      ],
      shop: {
        name: "官方旗舰店",
        avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
        certification: true
      },
      specs: ["39码", "40码", "41码", "42码"],
      features: [
        "智能计步与运动数据追踪",
        "透气网面设计，全天候舒适",
        "耐磨防滑橡胶大底",
        "无线充电，续航30天"
      ],
      rating: 4.5,
      reviewsCount: 1288
    },
    // 更多商品...
  ]