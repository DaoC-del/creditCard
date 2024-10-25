<template>
    <div class="p-8 max-w-4xl mx-auto">
      <!-- カードランク -->
      <div class="mb-8">
        <h2 class="text-lg font-bold mb-4">カードランク</h2>
        <RadioButton
          :options="cardRanks"
          name="cardRank"
          v-model="selectedCardRank"
          :columns="2"
        />
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
          <CardContainer v-for="(design, index) in cardDesigns" :key="index" :design="design" />
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
    </div>
  </template>
  
  <script setup lang="ts">
  import RadioButton from '@/components/RadioButton.vue'
  import CardContainer from '@/components/cardApplication/CardDesignContainer.vue'
  import { ref } from 'vue'
  
  // 卡片相关选项
  const cardRanks = ref([
    { value: 'rank1', label: 'ランク1' },
    { value: 'rank2', label: 'ランク2' }
  ])
  
  const cardBrands = ref([
    { value: 'mastercard', label: 'MasterCard' },
    { value: 'visa', label: 'VISA' }
  ])
  
  const cardDesigns = ref([
    { name: 'rank1-Master-Design1' },
    { name: 'rank1-Master-Design2' },
    { name: 'rank2-VISA-Design1' },
    { name: 'rank2-VISA-Design2' }
  ])
  
  const etcOptions = ref([
    { value: 'yes', label: 'する' },
    { value: 'no', label: 'しない' }
  ])
  
  const selectedCardRank = ref('')
  const selectedCardBrand = ref('')
  const selectedEtcApplication = ref('')
  </script>
  