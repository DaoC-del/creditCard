<template>
  <header class="flex items-center justify-between w-full p-4 bg-gray-800 text-white">
    <!-- 首页返回组件 -->
    <router-link to="/" class="flex items-center">
      <HomeIcon class="h-6 w-6 text-white mr-2" />
      <span>首页</span>
    </router-link>

    <!-- 标签组件 -->
    <nav class="flex space-x-4">
      <span
        v-for="(tag, index) in tags"
        :key="index"
        :class="['px-4 py-2 rounded cursor-pointer', tag === activeTag ? 'bg-blue-500' : 'bg-gray-700']"
        @click="setActiveTag(tag)"
      >
        {{ tag }}
      </span>
    </nav>

    <!-- 搜索栏 -->
    <div class="flex items-center">
      <input
        v-model="searchQuery"
        @keyup.enter="onSearch"
        type="text"
        placeholder="搜索..."
        class="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <!-- 用户组件 -->
    <Menu as="div" class="relative">
      <MenuButton class="flex items-center focus:outline-none">
        <img :src="userAvatar" alt="User Avatar" class="w-10 h-10 rounded-full object-cover" />
      </MenuButton>
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              :class="{'bg-gray-100': active}">
              个人信息
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              @click="logout"
              class="block px-4 py-2 text-sm text-gray-700"
              :class="{'bg-gray-100': active}">
              注销
            </a>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </header>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import type { PropType } from 'vue'
import { HomeIcon } from '@heroicons/vue/24/outline'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

// 定义 Props
const props = defineProps({
  initialTags: {
    type: Array as PropType<string[]>,
    default: () => ['标签1', '标签2', '标签3'],
  },
  onSearch: {
    type: Function as PropType<(query: string) => void>,
    default: () => (query: string) => console.log('Searching for:', query),
  },
  userAvatarUrl: {
    type: String,
    default: 'https://via.placeholder.com/150', // 默认头像
  },
})

const tags = ref<string[]>(props.initialTags)
const activeTag = ref<string>(tags.value[0])
const searchQuery = ref<string>('')
const userAvatar = ref<string>(props.userAvatarUrl)

// 函数类型声明
const setActiveTag = (tag: string): void => {
  activeTag.value = tag
}

// 搜索逻辑：用户按下 "Enter" 键时触发回调函数
const onSearch = (): void => {
  if (props.onSearch) {
    props.onSearch(searchQuery.value)
  }
}

// 模拟退出登录逻辑
const logout = (): void => {
  alert('已注销')
}
</script>

<style scoped>
/* 可以根据需求自定义样式 */
</style>
