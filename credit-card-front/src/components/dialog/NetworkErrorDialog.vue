<template>
  <Dialog
    v-model:visible="visible"
    header=""
    modal
    :closable="true"
    class="network-error-dialog w-3/4 max-w-lg border-2 border-gray-300 rounded-lg shadow-2xl bg-white"
  >
    <template #header>
      <div class="header bg-red-500 text-white p-4 rounded-t-lg flex items-center">
        <span class="header-title text-lg font-bold">Network Error</span>
      </div>
    </template>
    <div class="message-content flex flex-col items-center justify-center p-6">
      <p class="text-center text-base">{{ message }}</p>
    </div>
    <template #footer>
      <button class="btn btn-primary w-1/3 mt-4" @click="closeDialog">OK</button>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from 'primevue/dialog';
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  visible: Boolean,
  message: String,
});
const emits = defineEmits(['close']);

const visible = ref(props.visible);

const closeDialog = () => {
  visible.value = false;
  emits('close');
};
</script>

<style scoped>
.network-error-dialog {
  border-width: 2px;
  border-color: #e5e7eb;
  background-color: #ffffff;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
}
</style>
