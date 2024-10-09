<template>
    XXXXXXXXXXX
<PullDownList
  :options="[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]"
  v-model="selectedOption"
  width="w-48"
  height="h-12"
  borderRadius="rounded-md"
/>


</template>

<script setup lang="ts">
import { ref } from 'vue';
import PullDownList from '@/components/PullDownList.vue';

const selectedOption=ref('option1')
</script>