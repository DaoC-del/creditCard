// stores/cardSelectionStore.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCardSelectionStore = defineStore('cardSelection', () => {
  // 卡片相关状态
  const cardRanks = ref([
    { value: 'rank1', label: 'ランク1' },
    { value: 'rank2', label: 'ランク2' },
  ]);

  const cardBrands = ref([
    { value: 'mastercard', label: 'MasterCard' },
    { value: 'visa', label: 'VISA' },
  ]);

  const cardDesigns = ref([
    { name: 'rank1-Master-Design1' },
    { name: 'rank1-Master-Design2' },
    { name: 'rank2-VISA-Design1' },
    { name: 'rank2-VISA-Design2' },
  ]);

  const etcOptions = ref([
    { value: 'yes', label: 'する' },
    { value: 'no', label: 'しない' },
  ]);

  // 用户选择状态
  const selectedCardRank = ref('');
  const selectedCardBrand = ref('');
  const selectedEtcApplication = ref('');

  // 计算属性用于获取基于当前选择的卡片设计
  const filteredCardDesigns = computed(() => {
    return cardDesigns.value.filter((design) => {
      return (
        (selectedCardRank.value === '' || design.name.includes(selectedCardRank.value)) &&
        (selectedCardBrand.value === '' || design.name.includes(selectedCardBrand.value))
      );
    });
  });

  // 用于加载数据的函数，模拟异步获取数据
  const loadCardData = async () => {
    try {
      // 模拟数据加载延迟
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // 加载完成后可以更新选项数据，例如从 API 获取的数据
      // cardRanks.value = await fetchCardRanks();
      // cardBrands.value = await fetchCardBrands();
    } catch (error) {
      console.error('Failed to load card data:', error);
    }
  };

  return {
    cardRanks,
    cardBrands,
    cardDesigns,
    etcOptions,
    selectedCardRank,
    selectedCardBrand,
    selectedEtcApplication,
    filteredCardDesigns,
    loadCardData,
  };
});