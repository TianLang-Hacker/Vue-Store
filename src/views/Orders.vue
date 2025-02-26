<template>
    <div>
      <Navbar />
    </div>
    
      <div class="flex min-h-screen Sidebar-height">
        <!-- Sidebar -->
        <div class="w-64 bg-base-100 shadow-md h-full">
          <ul class="menu p-4 w-full text-base-content">
            <li><a href="Account">我的账号</a></li>
            <li><a href="#" class="active">我的订单</a></li>
            <!-- <li><a href="#">我的收藏</a></li> -->
          </ul>
        </div>
    
        <!-- Main Content -->
        <div class="flex-1 p-6 bg-base-200">
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
    