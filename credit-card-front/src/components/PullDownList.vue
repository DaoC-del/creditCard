<template>
  <div>
    <select
      ref="dropdown"
      v-model="selectedValue"
      @change="handleChange"
      @focus="startAnimation"
      @blur="resetAnimation"
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
        ref="dropdownItem"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { applyArtisticBackground } from '../animation/backgroundAnimation';
import { animateDropdownItemsEntry, animateItemSelection } from '../animation/itemAnimations';
import { startBorderAnimation, resetBorderAnimation } from '../animation/rotatingBorder';

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
});

const selectedValue = ref(props.modelValue);
const emit = defineEmits(['update:modelValue']);

const dropdown = ref<HTMLSelectElement | null>(null);
let dropdownItems: NodeListOf<HTMLElement> | null = null;
let isDropdownOpen = ref(false);

watch(() => props.modelValue, (newVal) => {
  selectedValue.value = newVal;
});

const handleChange = () => {
  emit('update:modelValue', selectedValue.value);
};

// 在组件挂载后，缓存选项项并应用背景动画
onMounted(() => {
  if (dropdown.value) {
    applyArtisticBackground(dropdown.value);
  }
});

// 在下拉框获取焦点时执行动画
const handleDropdownOpen = async () => {
  if (isDropdownOpen.value) return;
  isDropdownOpen.value = true;
  startAnimation();
};

// 在下拉框失去焦点时重置动画
const handleDropdownClose = () => {
  isDropdownOpen.value = false;
  resetAnimation();
};

// 动画效果函数
const startAnimation = () => {
  if (dropdown.value) {
    startBorderAnimation(dropdown.value);
  }
};

const resetAnimation = () => {
  if (dropdown.value) {
    resetBorderAnimation(dropdown.value);
  }
};
</script>

<style scoped>
.select {
  --gradient-angle: 0deg;
  border: 4px solid transparent;
  /* 初始状态为蓝色边框 */
  border-image: linear-gradient(var(--gradient-angle), cyan 0%, cyan 100%) 1;
  border-image-slice: 1;
}

.select:focus {
  /* 聚焦时渐变开始从蓝色到金色 */
  border-image: linear-gradient(var(--gradient-angle), cyan 0%, gold 100%) 1;
}
</style>
