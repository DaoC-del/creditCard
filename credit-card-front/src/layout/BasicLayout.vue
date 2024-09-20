<template>
  <div class="min-h-screen w-full flex flex-col">
    <!-- Header 部分 -->
    <HeaderComponent :initialTags="['首页', '标签2', '标签3']" :userAvatarUrl="userAvatarUrl" :onSearch="handleSearch" />

    <!-- 主内容区域 -->
    <main class="flex-grow bg-gray-100">
      <slot></slot>
    </main>

    <!-- 底部区域（可选） -->
    <footer class="p-4 bg-gray-800 text-white text-center">
      © 2024 Your Company Name
    </footer>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import { ref } from 'vue'

// 示例中的用户头像URL和搜索处理
const userAvatarUrl = ref('https://via.placeholder.com/150')

const handleSearch = (query: string) => {
  console.log('Searching for:', query)
}
</script>

<style scoped>
/* 可以根据需求自定义样式 */
</style>
