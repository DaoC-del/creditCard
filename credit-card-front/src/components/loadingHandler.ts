// 新建 components/loadingHandler.ts，用于处理加载状态
import { ref } from 'vue';

export function useLoadingHandler() {
  const isLoading = ref(false);

  const startLoading = () => {
    isLoading.value = true;
    // 在此可以触发全局加载动画显示逻辑
  };

  const stopLoading = () => {
    isLoading.value = false;
    // 在此可以触发全局加载动画隐藏逻辑
  };

  return {
    isLoading,
    startLoading,
    stopLoading,
  };
}