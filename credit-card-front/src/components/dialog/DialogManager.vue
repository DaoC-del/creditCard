<template>
    <div>
      <!-- Common Error Dialog -->
      <CommonDialog
        v-if="errorType === 'common'"
        :visible="visible"
        :message="message"
        @close="closeDialog"
      />
  
      <!-- Confirm Dialog -->
      <ConfirmDialog
        v-if="errorType === 'confirm'"
        :visible="visible"
        :message="message"
        @confirm="handleConfirm"
        @cancel="closeDialog"
      />
  
      <!-- Network Error Dialog -->
      <NetworkErrorDialog
        v-if="errorType === 'network'"
        :visible="visible"
        :message="message"
        @close="closeDialog"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { useErrorHandler } from '../errorHandler';
  import CommonDialog from './CommonDialog.vue';
  import ConfirmDialog from './ConfirmDialog.vue';
  import NetworkErrorDialog from './NetworkErrorDialog.vue';
  
  const { dialogVisible, dialogMessage, errorType } = useErrorHandler();
  const visible = dialogVisible;
  const message = dialogMessage;
  
  const closeDialog = () => {
    visible.value = false;
  };
  
  const handleConfirm = () => {
    console.log('Confirm action executed');
    closeDialog();
  };
  </script>
  