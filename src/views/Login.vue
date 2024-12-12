<template>
    <div class="navbar bg-base-100">
  <a href="/" class="btn btn-ghost text-xl">daisyUI</a>
</div>
    <div class="flex items-center justify-center min-h-screen bg-base-200">
      <div class="w-full max-w-md p-4 bg-base-100 shadow-xl rounded-lg">
        <h1 class="text-2xl font-bold text-center mb-4">草你吗的，这里不欢迎你，赶紧滚</h1>
  
        <!-- Tabs for switching between Login and Register -->
        <div class="tabs tabs-boxed justify-center mb-4">
          <a class="tab" :class="{ 'tab-active': activeTab === 'login' }" @click="activeTab = 'login'">登录</a>
          <a class="tab" :class="{ 'tab-active': activeTab === 'register' }" @click="activeTab = 'register'">注册</a>
        </div>
  
        <!-- Login Form -->
        <div v-if="activeTab === 'login'">
          <form @submit.prevent="handleLogin">
            <div class="form-control">
              <label class="label">
                <span class="label-text">电子邮件</span>
              </label>
              <input v-model="loginForm.email" type="email" placeholder="你滚，不许输电子邮件" class="input input-bordered" required>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">密码</span>
              </label>
              <input v-model="loginForm.password" type="password" placeholder="赶紧滚，不许输密码" class="input input-bordered" required>
            </div>  
            <div class="form-control mt-4">
              <button type="submit" class="btn btn-primary w-full">滚啊，不许登录</button>
            </div>
          </form>
        </div>
  
        <!-- Register Form -->
        <div v-if="activeTab === 'register'">
          <form @submit.prevent="handleRegister">
            <div class="form-control">
              <label class="label">
                <span class="label-text">用户名</span>
              </label>
              <input v-model="registerForm.username" type="text" placeholder="输入你的用户名" class="input input-bordered" required>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">电子邮件</span>
              </label>
              <input v-model="registerForm.email" type="email" placeholder="输入你的电子邮件" class="input input-bordered" required>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">密码</span>
              </label>
              <input v-model="registerForm.password" type="password" placeholder="输入密码" class="input input-bordered" required>
            </div>
            <div class="form-control mt-4">
              <button type="submit" class="btn btn-primary w-full">注册</button>
            </div>
          </form>
        </div>
      </div>
    </div>


    <footer class="footer bg-base-200 text-base-content p-10">
  <aside>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      class="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 class="footer-title">Services</h6>
    <a class="link link-hover">Branding</a>
    <a class="link link-hover">Design</a>
    <a class="link link-hover">Marketing</a>
    <a class="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 class="footer-title">Company</h6>
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact</a>
    <a class="link link-hover">Jobs</a>
    <a class="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 class="footer-title">Legal</h6>
    <a class="link link-hover">Terms of use</a>
    <a class="link link-hover">Privacy policy</a>
    <a class="link link-hover">Cookie policy</a>
  </nav>
</footer>
  </template>
  
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
      return {
        activeTab: 'login',
        loginForm: {
          email: '',
          password: ''
        },
        registerForm: {
          username: '',
          email: '',
          password: ''
        }
      };
    },
    methods: {
      handleLogin() {
        console.log('Login data:', this.loginForm);
        // Add your login logic here
      },
      handleRegister() {
        console.log('Register data:', this.registerForm);
        // Add your register logic here
      }
    }
})
</script>
