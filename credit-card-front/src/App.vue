<script setup lang="ts">
import BasicLayout from '@/layout/BasicLayout.vue'
import { RouterView } from 'vue-router'
import TestLayout  from '@/layout/TestLayout.vue'

// <BasicLayout>
//     <!-- 渲染路由内容 -->
//     <RouterView />
//   </BasicLayout>
</script>

<template>
  <div>
    <TestLayout/>
  </div>
  
</template>

<style scoped>
/* 无需定义额外的全局布局 */
</style>
