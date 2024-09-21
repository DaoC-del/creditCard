<template>
    <div class="p-4">
      <!-- 事业标签 -->
      <div class="flex space-x-4 mb-6">
        <span
          v-for="(project, index) in projects"
          :key="index"
          :class="['px-4 py-2 rounded cursor-pointer', project === activeProject ? 'bg-blue-500 text-white' : 'bg-gray-300']"
          @click="setActiveProject(project)"
        >
          {{ project.name }}
        </span>
      </div>
  
      <!-- 当前事业的业务手续 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(procedure, index) in activeProjectProcedures"
          :key="index"
          class="p-4 bg-white rounded shadow hover:bg-gray-100"
        >
          <h3 class="text-lg font-bold">{{ procedure.name }}</h3>
          <p class="text-gray-600">{{ procedure.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref,computed } from 'vue'
  
  // 事业标签及其对应的业务手续
  const projects = ref([
    {
      name: '携帯事業',
      procedures: [
        { name: '业务类A', description: '携帯事業的业务类A说明' },
        { name: '业务类B', description: '携帯事業的业务类B说明' },
        { name: '业务类C', description: '携帯事業的业务类C说明' },
      ],
    },
    {
      name: 'クレジットカード',
      procedures: [
        { name: '业务类A', description: 'クレジットカード的业务类A说明' },
        { name: '业务类B', description: 'クレジットカード的业务类B说明' },
        { name: '业务类C', description: 'クレジットカード的业务类C说明' },
      ],
    },
    {
      name: '光回線事業',
      procedures: [
        { name: '业务类A', description: '光回線事業的业务类A说明' },
        { name: '业务类B', description: '光回線事業的业务类B说明' },
        { name: '业务类C', description: '光回線事業的业务类C说明' },
      ],
    },
  ])
  
  // 当前选中的事业
  const activeProject = ref(projects.value[0])
  
  // 当前选中的事业的业务手续
  const activeProjectProcedures = computed(() => activeProject.value.procedures)
  
  // 切换事业标签
  const setActiveProject = (project: typeof activeProject.value) => {
    activeProject.value = project
  }
  </script>
  
  <style scoped>
  /* 添加适当的页面样式 */
  </style>
  