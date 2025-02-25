<template>
    <!-- 导航栏 -->
    <div>
      <Navbar />
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
