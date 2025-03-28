// 创建或更新类型声明文件，

// TypeScript将.vue文件视为 Vue 组件。
declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }