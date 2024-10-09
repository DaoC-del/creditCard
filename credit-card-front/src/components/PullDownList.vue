<template>
  <div>
    <select
      ref="dropdown"
      v-model="selectedValue"
      @change="emitChange"
      @focus="startBorderAnimation"
      @blur="resetBorderAnimation"
      :class="[
        'select select-bordered transition-all duration-300',
        props.width,
        props.height,
        props.borderRadius,
        'bg-gray-100 border-cyan-500',
        'focus:outline-none focus:border-transparent'
      ]"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  options: {
    type: Array as () => { value: string; label: string }[],
    required: true,
  },
  modelValue: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: 'w-64',
  },
  height: {
    type: String,
    default: 'h-10',
  },
  borderRadius: {
    type: String,
    default: 'rounded-lg',
  },
})

const selectedValue = ref(props.modelValue)
const emit = defineEmits(['update:modelValue'])

const dropdown = ref<HTMLSelectElement | null>(null)

watch(() => props.modelValue, (newVal) => {
  selectedValue.value = newVal
})

const emitChange = () => {
  emit('update:modelValue', selectedValue.value)
}

// 动画化渐变角度
const startBorderAnimation = () => {
  gsap.to(dropdown.value, {
    duration: 2.3,
    ease: 'linear',
    repeat: -1,
    css: {
      '--gradient-angle': '+=360deg',
    },
  })
}

const resetBorderAnimation = () => {
  if (dropdown.value) {
    gsap.killTweensOf(dropdown.value)
    dropdown.value.style.setProperty('--gradient-angle', '0deg')
  }
}
</script>

<style scoped>
.select {
  --gradient-angle: 0deg;
  border-image: linear-gradient(var(--gradient-angle), gold 0%, transparent 100%) 1;
  border-image-slice: 1;
}
</style>
