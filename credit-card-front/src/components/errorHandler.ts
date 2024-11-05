import { ref } from 'vue';

const dialogVisible = ref(true);
const dialogMessage = ref('');

export function useErrorHandler() {
  const showError = (message: string) => {
    dialogMessage.value = message;
    dialogVisible.value = true;
  };

  return {
    showError,
    dialogVisible,
    dialogMessage,
  };
}