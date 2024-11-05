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
      <button class="btn btn-primary">次へ進み</button>
    </div>
    <Button label="Show" @click="visible = true" />

    <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
      <span class="text-surface-500 dark:text-surface-400 block mb-8"
        >Update your information.</span
      >
      <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <InputText id="username" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <InputText id="email" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex justify-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Save" @click="visible = false"></Button>
      </div>
    </Dialog>
  </div>

  <!-- 共通错误弹窗 -->
  <!-- <CommonDialog /> -->
</template>

<script setup lang="ts">
import RadioButton from '@/components/RadioButton.vue'
import CardContainer from '@/components/cardApplication/CardDesignContainer.vue'
import { useCardSelectionStore } from '@/stores/cardSelectionStore'
import { storeToRefs } from 'pinia'
import CommonDialog from '@/components/CommonDialog.vue'
import Dialog from 'primevue/dialog'
import { ref } from 'vue'
// 使用 Pinia Store
const visible = ref(false)
const store = useCardSelectionStore()
const {
  cardRanks,
  cardBrands,
  etcOptions,
  selectedCardRank,
  selectedCardBrand,
  selectedEtcApplication,
  filteredCardDesigns
} = storeToRefs(store)
</script>
