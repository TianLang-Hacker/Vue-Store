<template>
  <div class="navbar bg-base-100">
    <div class="flex-1 flex items-center justify-between">
      <!-- 左侧内容 -->
      <div class="flex items-center gap-2">
        <div class="drawer">
          <input id="main-drawer" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content">
            <label for="main-drawer" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                class="inline-block h-5 w-5 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                </path>
              </svg>
            </label>
          </div>

          <!-- 侧边栏 -->
          <div class="drawer-side z-50">
            <label for="main-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-100 text-base-content 
                  w-80 min-h-full p-4 border-r">
              <!-- 侧边栏内容 -->
              <li class="menu-title">
                <span>功能菜单</span>
              </li>
              <li><a>首页</a></li>
              <li><a>商品分类</a></li>
              <li><a>购物车</a></li>
              <li><a>个人中心</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex-1">
        <a class="btn btn-ghost text-xl" href="/">首页</a>
      </div>

      <div class="form-control">
        <input 
          type="text" 
          v-model="searchKeyword"
          @keyup.enter="handleSearch"
          placeholder="搜索商品" 
          class="input input-bordered w-24 md:w-64 transition-all"
        />
      </div>

      <div class="dropdown dropdown-end ml-auto">
      <div tabindex="0" role="button" class="btn btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M18 6a6 6 0 0 0 12 0h5.455L42 15.818l-5.727 4.91V42H11.727V20.727L6 15.818L12.546 6z"/></svg>
        <span class="ml-2">主题</span>
      </div>
      <ul class="dropdown-content menu p-2 shadow-2xl bg-base-200 rounded-box w-48">
        <li>
          <button 
            class="btn btn-ghost justify-start"
            :class="{ 'btn-active': theme === 'light' }"
            @click="theme = 'light'"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 8a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 10a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6a6 6 0 0 1-6 6m8-9.31V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20v-4.69L23.31 12z"/></svg>
           浅色模式
          </button>
        </li>
        
        <li>
          <button 
            class="btn btn-ghost justify-start"
            :class="{ 'btn-active': theme === 'dark' }"
            @click="theme = 'dark'"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9 2c-1.05 0-2.05.16-3 .46c4.06 1.27 7 5.04 7 9.54s-2.94 8.27-7 9.54c.95.3 1.95.46 3 .46a10 10 0 0 0 10-10A10 10 0 0 0 9 2"/></svg>
          深色模式
          </button>
        </li>
        
        <li>
          <button 
            class="btn btn-ghost justify-start"
            :class="{ 'btn-active': theme === 'system' }"
            @click="theme = 'system'"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M18 6a6 6 0 0 0 12 0h5.455L42 15.818l-5.727 4.91V42H11.727V20.727L6 15.818L12.546 6z"/></svg>
          系统同步
          </button>
        </li>
      </ul>
    </div>

    <div class="flex-none">
        <div v-if="isLoggedIn" class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img alt="用户头像"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a href="/account" class="justify-between">个人中心</a></li>
            <li><a @click="handleLogout">退出登录</a></li>
          </ul>
        </div>
        
        <a v-else href="/login" class="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          登录/注册
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, onMounted } from 'vue'
import { useRouter } from 'vue-router'

interface ThemeOption {
  label: string
  value: string
}

export default defineComponent({
  name: "Navbar",
  setup() {
    const themeOptions: ThemeOption[] = [
      { label: 'Default', value: 'default' },
    ]

    const savedTheme = localStorage.getItem('theme')
    const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const theme = ref(savedTheme || (systemIsDark ? 'dark' : 'light'))
    
    const router = useRouter()
    const searchKeyword = ref('')
    const isLoggedIn = ref(false)

    const handleSearch = () => {
      if (searchKeyword.value.trim()) {
        // 新标签页打开
        const route = router.resolve({
          name: 'Search',
          params: { keyword: encodeURIComponent(searchKeyword.value.trim()) }
        })
        window.open(route.href, '_blank')
        searchKeyword.value = ''
      }
    }

    const applyTheme = (themeName: string) => {
      document.documentElement.setAttribute('data-theme', themeName)
      window.dispatchEvent(new CustomEvent('theme-change', { detail: themeName }))
    }

    const checkLoginStatus = () => {
      isLoggedIn.value = !!localStorage.getItem('currentUser')
    }

    const handleLogout = () => {
      localStorage.removeItem('currentUser')
      window.location.href = '/'
    }

    watchEffect(() => {
      applyTheme(theme.value)
      localStorage.setItem('theme', theme.value)
    })

    onMounted(() => {
      applyTheme(theme.value)
      checkLoginStatus()
      window.addEventListener('storage', checkLoginStatus)
    })

    return {
      theme,
      themeOptions,
      searchKeyword,
      handleSearch,
      isLoggedIn,
      handleLogout
    }
  },
})
  
</script>
