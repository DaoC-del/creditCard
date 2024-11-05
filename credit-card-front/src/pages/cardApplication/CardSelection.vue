<template>
  <div class="p-8 max-w-4xl mx-auto">
    <!-- カードランク -->
    <div class="mb-8">
      <h2 class="text-lg font-bold mb-4">カードランク</h2>
      <RadioButton :options="cardRanks" name="cardRank" v-model="selectedCardRank" :columns="2" />
    </div>

    <!-- カードブランド -->
    <div class="mb-8">
      <h2 class="text-lg font-bold mb-4">カードブランド</h2>
      <RadioButton
        :options="cardBrands"
        name="cardBrand"
        v-model="selectedCardBrand"
        :columns="2"
      />
    </div>

    <!-- カードデザイン -->
    <div class="mb-8">
      <h2 class="text-lg font-bold mb-4">カードデザイン</h2>
      <div class="grid grid-cols-2 gap-4">
        <CardContainer
          v-for="(design, index) in filteredCardDesigns"
          :key="index"
          :design="design"
        />
      </div>
    </div>

    <!-- ETC 申し込み -->
    <div class="mb-8">
      <h2 class="text-lg font-bold mb-4">ETC申し込み</h2>
      <RadioButton
        :options="etcOptions"
        name="etcApplication"
        v-model="selectedEtcApplication"
        :columns="2"
      />
    </div>

    <!-- 底部按钮 -->
    <div class="flex justify-center space-x-4 mt-8">
      <button class="btn btn-outline">戻る</button>
      <button class="btn btn-primary" @click="handleNextStep">次へ進み</button>
    </div>
    <CommonDialog />
  </div>

  <!-- 共通错误弹窗 -->
</template>

<script setup lang="ts">
import RadioButton from '@/components/RadioButton.vue'
import CardContainer from '@/components/cardApplication/CardDesignContainer.vue'
import { useCardSelectionStore } from '@/stores/cardSelectionStore'
import { storeToRefs } from 'pinia'
// import CommonDialog from '@/components/CommonDialog.vue'
import Dialog from 'primevue/dialog'
import { useErrorHandler } from '@/components/errorHandler';
import { onMounted, ref } from 'vue'
import CommonDialog from "@/components/dialog/CommonDialog.vue"
// 使用 Pinia Store
// const visible = ref(true)
const store = useCardSelectionStore()
// 使用错误处理
const errorHandler = useErrorHandler();
const {
  cardRanks,
  cardBrands,
  etcOptions,
  selectedCardRank,
  selectedCardBrand,
  selectedEtcApplication,
  filteredCardDesigns
} = storeToRefs(store)


// 页面加载时进行数据加载，并进行错误捕获
onMounted(async () => {
  try {
    await store.loadCardData();
  } catch (error) {
    errorHandler.showError('データの読み込み中にエラーが発生しました。');
  }
});

// 处理“次へ進み”按钮点击事件
const handleNextStep = () => {
  try {
    // 假设有一些逻辑需要验证用户的选择
    if (!selectedCardRank.value || !selectedCardBrand.value) {
      throw new Error('すべてのオプションを選択してください。');
    }
    // 执行下一步操作，例如导航到下一页
  } catch (error) {
    errorHandler.showError(error.message);
  }
};
</script>
