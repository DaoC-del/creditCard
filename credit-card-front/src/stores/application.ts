// store/application.ts

import { defineStore } from 'pinia';

// 各个阶段的数据结构
interface CardSelectionState {
  cardId: number | null;
  cardRank: string | null;
  cardBrand: string | null;
}

interface BasicInfoState {
  name: string;
  birthday: string;
  phoneNumber: string;
}

interface IncomeAssetsInfoState {
  annualIncome: number | null;
  assets: number | null;
}

// 更多步骤可以按照类似方式定义
// 例如信用信息、地址信息、身份验证等

interface ApplicationState {
  currentStep: number; // 记录当前步骤（卡片选择、基本信息等）
  cardSelection: CardSelectionState;
  basicInfo: BasicInfoState;
  incomeAssetsInfo: IncomeAssetsInfoState;
}

export const useApplicationStore = defineStore('application', {
  state: (): ApplicationState => ({
    currentStep: 1, // 初始步骤为1（卡片选择）
    cardSelection: {
      cardId: null,
      cardRank: null,
      cardBrand: null,
    },
    basicInfo: {
      name: '',
      birthday: '',
      phoneNumber: '',
    },
    incomeAssetsInfo: {
      annualIncome: null,
      assets: null,
    },
    // 可以继续为更多步骤初始化状态
  }),

  actions: {
    // 设置卡片选择数据
    setCardSelection(cardId: number, cardRank: string, cardBrand: string) {
      this.cardSelection = { cardId, cardRank, cardBrand };
    },

    // 设置基本信息数据
    setBasicInfo(name: string, birthday: string, phoneNumber: string) {
      this.basicInfo = { name, birthday, phoneNumber };
    },

    // 设置收入与资产信息
    setIncomeAssetsInfo(annualIncome: number, assets: number) {
      this.incomeAssetsInfo = { annualIncome, assets };
    },

    // 前进到下一步
    nextStep() {
      if (this.currentStep < 7) {
        this.currentStep++;
      }
    },

    // 回退到上一步
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },

    // 重置申请状态
    resetApplication() {
      this.$reset();
    },
  },
});
