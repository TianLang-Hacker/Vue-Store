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
        <input type="text" placeholder="搜索" class="input input-bordered w-24 md:w-auto" />
      </div>

      <div class="dropdown">
        <div tabindex="0" role="button" class="btn m-1">
          Theme
          <svg width="12px" height="12px" class="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
          <li>
            <input type="radio" name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default"
              value="default" />
          </li>
          <li>
            <input type="radio" name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro" />
          </li>
          <li>
            <input type="radio" name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk"
              value="cyberpunk" />
          </li>
          <li>
            <input type="radio" name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine"
              value="valentine" />
          </li>
          <li>
            <input type="radio" name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua" />
          </li>
        </ul>
      </div>

      <div class="flex-none">
        <div class="dropdown dropdown-hover dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a href="Account" class="justify-between">个人中心 </a>
            </li>
            <li><a>退出登录</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, onMounted } from 'vue'

interface ThemeOption {
  label: string
  value: string
}

export default defineComponent({
  name: "Navbar",
  setup() {
    const themeOptions: ThemeOption[] = [
      { label: 'Default', value: 'default' },
      { label: 'Retro', value: 'retro' },
      { label: 'Cyberpunk', value: 'cyberpunk' },
      { label: 'Valentine', value: 'valentine' },
      { label: 'Aqua', value: 'aqua' }
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
      themeOptions
    }
  },
 
})
  
</script>

