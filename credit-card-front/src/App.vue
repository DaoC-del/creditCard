<script setup lang="ts">
import BasicLayout from '@/layout/BasicLayout.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <BasicLayout>
    <!-- 渲染路由内容 -->
    <RouterView />
  </BasicLayout>
</template>

<style scoped>
/* 无需定义额外的全局布局 */
</style>
