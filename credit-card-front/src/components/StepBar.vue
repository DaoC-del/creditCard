<template>
    <div class="flex items-center justify-center w-full my-4">
      <div v-for="(step, index) in steps" :key="index" class="flex items-center">
        <!-- 圆点 -->
        <div
          :class="[
            'relative z-10 w-8 h-8 rounded-full flex items-center justify-center',
            index < currentStep ? 'bg-green-500' : 'bg-gray-400',
            index === currentStep ? 'ring-4 ring-green-500' : ''
          ]"
        >
          <span class="block w-4 h-4 rounded-full bg-white"></span>
        </div>
  
        <!-- 连接线（除了最后一个步骤） -->
        <div
          v-if="index < steps.length - 1"
          class="flex-grow h-1 mx-2"
        >
          <div class="h-1 bg-gray-400 relative">
            <div
              class="absolute inset-0 bg-green-500"
              :style="{ width: index < currentStep ? '100%' : '0%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  
  // 接收来自父组件的步骤数组和当前步骤的索引
  const props = defineProps({
    steps: {
      type: Array as () => string[],
      required: true,
    },
    currentStep: {
      type: Number,
      required: true,
    },
  })
  </script>
  
  <style scoped>
  /* 自定义样式可以根据需求进一步调整 */
  </style>
  