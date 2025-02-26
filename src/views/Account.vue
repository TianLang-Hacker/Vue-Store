<template>
<div>
  <Navbar />
</div>

  <div class="flex min-h-screen Sidebar-height">
    <!-- Sidebar -->
    <div class="w-64 bg-base-100 shadow-md h-full">
      <ul class="menu p-4 w-full text-base-content">
        <li><a href="#" class="active">我的账号</a></li>
        <li><a href="Orders">我的订单</a></li>
        <!-- <li><a href="#">我的收藏</a></li> -->
      </ul>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-6 bg-base-200">


      <div class="max-w-2xl mx-auto p-8 rounded-lg">
        <h2 class="text-2xl font-bold mb-6">我的账号</h2>
        <form>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2" for="username">账号名称</label>
            <input class="input input-bordered w-full" type="text" id="username" placeholder="输入新的账号名称" />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2" for="email">邮箱</label>
            <input class="input input-bordered w-full" type="email" id="email" placeholder="输入新的邮箱" />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2" for="password">密码</label>
            <input class="input input-bordered w-full" type="password" id="password" placeholder="输入新的密码" />
          </div>
          <div class="flex justify-end">
            <button class="btn btn-primary" type="submit">保存更改</button>
          </div>
        </form>
      </div>
    </div>
  </div>













<div>
  <Footer />
</div>
</template>



<style>
.Sidebar-width{
    width: 15rem;
}

.Sidebar-height{
    height:100vh;
}
</style>

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
