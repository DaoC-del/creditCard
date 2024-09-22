<template>
    <div class="min-h-screen w-full flex flex-col">
  

      <TestRadioButton v-model="selectedRadio" :options="radioOptions" name="radio-test" />

    </div>
    
  
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 导入组件
import RadioButton from '@/components/RadioButton.vue'
import Dropdown from '@/components/Dropdown.vue'
import TestRadioButton from '@/components/TestRadioButton.vue'

// 测试数据
const radioOptions = [
  { value: '1', label: '选项 1' },
  { value: '2', label: '选项 2' },
  { value: '3', label: '选项 3' },
  { value: '4', label: '选项 4' }
]

const dropdownOptions = [
  { value: 'value1', label: '下拉选项 1' },
  { value: 'value2', label: '下拉选项 2' },
  { value: 'value3', label: '下拉选项 3' }
]

// 双向绑定的选中值
const selectedRadio = ref('')
const selectedDropdown = ref('')
</script>

<style scoped>
/* 根据需要自定义样式 */
</style>
