<template>
  <!-- 导航栏 -->
  <div>
    <Navbar />
  </div>
  
  <div class="hero bg-base-200 min-h-screen">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">鸡你太美</h1>
      <p class="py-6">
        全民制作人们大家好，我是练习时长两年半的个人练习生蔡徐坤，喜欢唱，跳，Rap，篮球。music~鸡你太美，baby ohhh~ 鸡你太美，baby ohhh~
        鸡你实在是太美，哈！baby ohhh~鸡你太美，baby ohhh~</p>
      <p class="py-6">迎面走来的你让我如此蠢蠢欲动，这种感觉我从未有Caush i got a crush on you who you，吔~</p>
      <p class="py-6">在今后的节目中我还准备了很多我自己作词作曲编舞的原创的作品，期待的话请多多为我投票吧！❤️mua~</p>
      <a href="Login"><button class="btn btn-primary">Chicken you are so beautiful</button></a>
    </div>
  </div>
</div>


<!-- 页脚 -->
<div>
<Footer />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue'
export default defineComponent({
  components:{
    Footer,
    Navbar,
  },
});
</script>
