<template>
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title">{{ design.name }}</h2>
        <p>カードデザインの説明をここに追加できます。</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    design: {
      type: Object as () => { name: string },
      required: true
    }
  })
  </script>
  