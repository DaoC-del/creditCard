// errorHandler.ts
import { ref } from 'vue';

type ErrorType = 'common' | 'confirm' | 'network';

interface ErrorConfig {
  type: ErrorType;
  message: string;
}

const dialogVisible = ref(false);
const dialogMessage = ref<string>('');
const errorType = ref<ErrorType>('common');

const showError = (errorConfig: ErrorConfig) => {
  errorType.value = errorConfig.type;
  dialogMessage.value = errorConfig.message;
  dialogVisible.value = true;
};

export function useErrorHandler() {
  return {
    dialogVisible,
    dialogMessage,
    errorType,
    showError,
  };
}
