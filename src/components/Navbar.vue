<template>
<div class="navbar bg-base-100">
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          class="inline-block h-5 w-5 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">啊哈哈哈哈</a>
    </div>

    <div class="form-control">
      <input type="text" placeholder="搜索" class="input input-bordered w-24 md:w-auto" />
    </div>

    <div class="flex-none">
      <div class="dropdown dropdown-hover dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="badge badge-sm indicator-item"></span>
          </div>
        </div>
        <div tabindex="0" class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
          <div class="card-body">
            <span class="text-lg font-bold">0 个项目</span>
            <span class="text-info">合计：0 CNY</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">查看购物车</button>
            </div>
          </div>
        </div>
      </div>
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
          <li><a>设置</a></li>
          <li><a>退出登录</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
