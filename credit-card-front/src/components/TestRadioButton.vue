<template>
    <div class="bg-black p-4 w-full h-full flex-grow">
      <!-- 使用动态网格布局 -->
      <div :class="`grid grid-cols-${props.columns} gap-4`">
        <!-- 为 label 设置 hover，确保背景和内部文字同步变化 -->
        <label
          v-for="(option, index) in options"
          :key="option.value"
          class="relative p-4 cursor-pointer border-b text-gray-400 border-gray-700 flex items-center hover:bg-gray-800 hover:text-white transition-colors w-full"
        >
          <input
            type="radio"
            :id="`radio-${option.value}`"
            :name="name"
            :value="option.value"
            v-model="selectedValue"
            class="absolute opacity-0"
            @change="emitChange(option.value)"
          />
          <!-- 外圈 -->
          <span
            class="check w-6 h-6 border-2 border-gray-400 rounded-full relative flex items-center justify-center"
          >
            <!-- 内圈，确保居中 -->
            <span class="w-3 h-3 bg-transparent rounded-full"></span>
          </span>
          <!-- 文字内容 -->
          <span class="ml-4 w-full block">
            {{ option.label }}
          </span>
        </label>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue'
  
  const props = defineProps({
    options: {
      type: Array as () => { value: string; label: string }[],
      required: true,
    },
    modelValue: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    columns: {
      type: Number,
      default: 2, // 默认每行显示2列
    },
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const selectedValue = ref(props.modelValue)
  
  watch(() => props.modelValue, (newVal) => {
    selectedValue.value = newVal
  })
  
  const emitChange = (value: string) => {
    selectedValue.value = value
    emit('update:modelValue', value)
  }
  </script>
  
  <style scoped>
  /* 选中时的外圈和内圈样式 */
  input[type="radio"]:checked ~ .check {
    border-color: #0DFF92; /* 选中时外圈变绿 */
  }
  
  input[type="radio"]:checked ~ .check span {
    background-color: #0DFF92; /* 选中时内圈变绿 */
  }
  
  input[type="radio"]:checked ~ label {
    color: #0DFF92; /* 选中时文字变绿 */
  }
  </style>
  