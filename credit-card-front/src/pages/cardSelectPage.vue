<template>
    <div>
      <h1>カード選択</h1>
      <div v-for="card in cards" :key="card.id" @click="selectCard(card)">
        <p>{{ card.name }}</p>
        <p>{{ card.rank }}</p>
        <p>{{ card.brand }}</p>
      </div>
      <button @click="prevStep">上一步</button>
      <button @click="nextStep">次へ</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useApplicationStore } from '@/store/application';
  
  export default defineComponent({
    setup() {
      const store = useApplicationStore();
  
      // 模拟卡片列表
      const cards = [
        { id: 1, name: 'ゴールドカード', rank: 'GOLD', brand: 'VISA' },
        { id: 2, name: 'プラチナカード', rank: 'PLATINUM', brand: 'MasterCard' },
      ];
  
      const selectCard = (card) => {
        store.setCardSelection(card.id, card.rank, card.brand);
      };
  
      const nextStep = () => {
        store.nextStep();
      };
  
      const prevStep = () => {
        store.prevStep();
      };
  
      return {
        cards,
        selectCard,
        nextStep,
        prevStep,
      };
    },
  });
  </script>
  