<template>
  <Dialog v-model:visible="visible" header="エラー" modal :closable="false">
    <p>{{ message }}</p>
    <template #footer>
      <Button label="OK" @click="closeDialog" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { useErrorHandler } from '../errorHandler';

const { dialogVisible, dialogMessage } = useErrorHandler();
const visible = dialogVisible;
const message = dialogMessage;

const closeDialog = () => {
  visible.value = false;
};
</script>

