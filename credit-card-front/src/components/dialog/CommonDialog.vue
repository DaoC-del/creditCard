<template>
  <Dialog 
    v-model:visible="visible" 
    header="" 
    modal 
    :closable="true"
    class="common-dialog w-3/4 max-w-lg border-2 border-gray-300 rounded-lg shadow-2xl bg-white"
  >
    <template #header>
      <div class="header bg-blue-500 text-white p-4 rounded-t-lg flex items-center">
        <span class="header-title text-lg font-bold">CommonError</span>
      </div>
    </template>
    <div class="message-content flex flex-col items-center justify-center p-6">
      <div class="text-4xl mb-4">*****</div>
      <p class="text-center text-base">{{ message }}</p>
    </div>
    <template #footer>
      <button class="btn btn-primary w-1/3 mt-4" @click="closeDialog">OK</button>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from 'primevue/dialog';
import { useErrorHandler } from '../errorHandler';

const { dialogVisible, dialogMessage } = useErrorHandler();
const visible = dialogVisible;
const message = dialogMessage;

const closeDialog = () => {
  visible.value = false;
  // You can add your additional logic here
};
</script>

<style scoped>
.common-dialog {
  border-width: 2px;
  border-color: #e5e7eb;
  background-color: #ffffff;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
}
</style>
