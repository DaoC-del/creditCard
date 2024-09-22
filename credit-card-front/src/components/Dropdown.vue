<template>
  <div class="relative">
    <select
      v-model="selectedValue"
      @change="emitChange"
      class="w-full p-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        class="text-gray-900 hover:bg-blue-100"
      >
        {{ option.label }}
      </option>
    </select>
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
})

const emit = defineEmits(['update:modelValue'])

const selectedValue = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  selectedValue.value = newVal
})

const emitChange = () => {
  emit('update:modelValue', selectedValue.value)
}
</script>

<style scoped>
/* 可根据需求进一步自定义样式 */
</style>
