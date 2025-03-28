<template>
  <div class="navbar bg-base-100">
    <div class="flex-1 flex items-center justify-between">
          <div class="flex-1">
            <a class="btn btn-ghost text-xl" href="/">首页</a>
          </div>

          <div class="dropdown dropdown-end ml-auto">
            <div tabindex="0" role="button" class="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                <path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4"
                  d="M18 6a6 6 0 0 0 12 0h5.455L42 15.818l-5.727 4.91V42H11.727V20.727L6 15.818L12.546 6z" />
              </svg>
              <span class="ml-2">主题</span>
            </div>
            <ul class="dropdown-content menu p-2 shadow-2xl bg-base-200 rounded-box w-48">
              <li>
                <button class="btn btn-ghost justify-start" :class="{ 'btn-active': theme === 'light' }"
                  @click="theme = 'light'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M12 8a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 10a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6a6 6 0 0 1-6 6m8-9.31V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20v-4.69L23.31 12z" />
                  </svg>
                  浅色模式
                </button>
              </li>

              <li>
                <button class="btn btn-ghost justify-start" :class="{ 'btn-active': theme === 'dark' }"
                  @click="theme = 'dark'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M9 2c-1.05 0-2.05.16-3 .46c4.06 1.27 7 5.04 7 9.54s-2.94 8.27-7 9.54c.95.3 1.95.46 3 .46a10 10 0 0 0 10-10A10 10 0 0 0 9 2" />
                  </svg>
                  深色模式
                </button>
              </li>

              <li>
                <button class="btn btn-ghost justify-start" :class="{ 'btn-active': theme === 'system' }"
                  @click="theme = 'system'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                    <path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4"
                      d="M18 6a6 6 0 0 0 12 0h5.455L42 15.818l-5.727 4.91V42H11.727V20.727L6 15.818L12.546 6z" />
                  </svg>
                  系统同步
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="min-h-screen flex items-center justify-center bg-base-200">
        <div class="card w-96 shadow-xl bg-base-100">
          <div class="card-body">
            <!-- 选项卡切换 -->
            <div class="tabs tabs-boxed mb-4">
              <a class="tab flex-1" :class="{ 'tab-active': activeTab === 'login' }" @click="activeTab = 'login'">登录</a>
              <a class="tab flex-1" :class="{ 'tab-active': activeTab === 'register' }"
                @click="activeTab = 'register'">注册</a>
            </div>

            <!-- 登录表单 -->
            <form v-if="activeTab === 'login'" @submit.prevent="handleLogin">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">邮箱</span>
                </label>
                <input type="email" class="input input-bordered" required v-model="loginForm.email">
              </div>

              <div class="form-control mt-4">
                <label class="label">
                  <span class="label-text">密码</span>
                </label>
                <input type="password" class="input input-bordered" required v-model="loginForm.password">
              </div>

              <button type="submit" class="btn btn-primary mt-6 w-full">登录</button>
            </form>

            <!-- 注册表单 -->
            <form v-if="activeTab === 'register'" @submit.prevent="handleRegister">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">用户名</span>
                </label>
                <input type="text" class="input input-bordered" required v-model="registerForm.username">
              </div>

              <div class="form-control mt-4">
                <label class="label">
                  <span class="label-text">邮箱</span>
                </label>
                <input type="email" class="input input-bordered" required v-model="registerForm.email">
              </div>

              <div class="form-control mt-4">
                <label class="label">
                  <span class="label-text">密码</span>
                </label>
                <input type="password" class="input input-bordered" required v-model="registerForm.password">
              </div>

              <button type="submit" class="btn btn-primary mt-6 w-full">注册</button>
            </form>
          </div>
        </div>
      </div>

      <div>
        
        <Footer />
      </div>
</template>
<script lang="ts">
import { defineComponent, ref, watchEffect, onMounted } from 'vue'
import Footer from '@/components/Footer.vue'

interface User {
  username: string
  email: string
  password: string
}

interface ThemeOption {
  label: string
  value: string
}

export default defineComponent({
  setup() {
    const themeOptions: ThemeOption[] = [
      { label: 'Default', value: 'default' },
    ]

    const savedTheme = localStorage.getItem('theme')
    const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const theme = ref(savedTheme || (systemIsDark ? 'dark' : 'light'))
    const applyTheme = (themeName: string) => {
      document.documentElement.setAttribute('data-theme', themeName)
      window.dispatchEvent(new CustomEvent('theme-change', { detail: themeName }))
    }
    watchEffect(() => {
      applyTheme(theme.value)
      localStorage.setItem('theme', theme.value)
    })
    onMounted(() => {
      applyTheme(theme.value)
    })

    return {
      theme,
      themeOptions,
    }
  },
  data() {
    return {
      activeTab: 'login',
      loginForm: { email: '', password: '' },
      registerForm: { username: '', email: '', password: '' },
      isLoggedIn: !!localStorage.getItem('currentUser')
    }
  },
  methods: {
    handleLogin() {
      const users: User[] = JSON.parse(localStorage.getItem('users') || '[]')
      const user = users.find(u =>
        u.email === this.loginForm.email &&
        u.password === this.loginForm.password
      )

      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.isLoggedIn = true
        window.location.href = '/'
      } else {
        alert('登录失败，请检查邮箱和密码')
      }
    },
    handleRegister() {
      const users: User[] = JSON.parse(localStorage.getItem('users') || '[]')
      if (users.some(u => u.email === this.registerForm.email)) {
        alert('该邮箱已被注册')
        return
      }

      users.push(this.registerForm)
      localStorage.setItem('users', JSON.stringify(users))
      alert('注册成功，请登录')
      this.activeTab = 'login'
      this.registerForm = { username: '', email: '', password: '' }
    },
    handleLogout() {
      localStorage.removeItem('currentUser')
      this.isLoggedIn = false
      window.location.href = '/'
    }
  }
})
</script>