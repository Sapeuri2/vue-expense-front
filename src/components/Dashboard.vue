<template class="">
        <div class="yoyo rounded-2xl h-full w-full flex md:flex-row flex-col p-6 justify-between ">
                <div class=" h-full w-full flex flex-col">
                        <div
                                class="w-full md:h-9/12 h-[200px]   border-1 rounded-2xl border-white mb-5 bg-amber-400 shadow">
                                <Chart class="lg:m-2"/>
                        </div>

                        <div class="w-full md:flex-1 flex flex-col">
                                <div class="w-full flex md:h-1/2 h-1/2 mb-2 justify-evenly ">
                                        <div
                                                class="flex flex-col h-full w-5/12 rounded-2xl border border-[#7a7dff] p-2">
                                                <span
                                                        class="font-bold SpanGrd md:text-[15px] text-center w-full h-3/12 after:content-['Income'] md:after:content-['Total_Income']"></span>
                                                <div class="flex items-center w-full h-full"><span
                                                                class="SpanGrd md:text-[25px] text-center w-full">{{
                                                                globalStore.totalIncome }}XAF</span>
                                                </div>
                                        </div>
                                        <div
                                                class=" flex flex-col h-full w-5/12 rounded-2xl border border-[#7a7dff] p-2">
                                                <span
                                                        class="font-bold SpanGrd md:text-[15px] text-center w-full h-3/12 after:content-['Expenses'] md:after:content-['Total_Expenses']"></span>
                                                <div class="flex items-center w-full h-full"><span
                                                                class="SpanGrd md:text-[25px] text-center w-full">{{
                                                                globalStore.totalExpense }}XAF</span>
                                                </div>
                                        </div>
                                </div>
                                <div class="w-full md:flex-1 pb-6 md:mb-0  justify-center justify-items-center">
                                        <div
                                                class="flex flex-col h-full w-5/12 rounded-2xl border border-[#7a7dff] p-2">
                                                <span
                                                        class="font-bold SpanGrd md:text-[15px] text-center w-full h-3/12 after:content-['Balance'] md:after:content-['Total_Balance']"></span>
                                                <div class="flex items-center w-full h-full"><span
                                                                class="SpanGrd md:text-[25px] text-center w-full">{{
                                                                globalStore.totalBalance }}XAF</span>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
                <div class=" h-full md:w-2/3 md:ml-8">
                        <div class="h-full w-full flex flex-col">
                                <div class="w-full justify-center text-center justify-items-center mb-2">
                                        <h2 class=" text-[20px] font-bold ">Recent Transactions</h2>
                                </div>
                                <!-- <div
      v-for="transaction in globalStore.limitedTransactions"
      :key="transaction._id"
      class="w-full flex flex-row justify-between items-center h-1/12 mt-1 mb-1 rounded-2xl"
      :style="{
        borderColor: isIncome(transaction) ? '#7a7dff' : '#ff7a7a',
        borderWidth: '2px',
        borderStyle: 'solid'
      }"
    >
      <span class="SpanRed ml-3">{{ transaction.title }}</span>
      <span class="SpanRed ml-3">{{ transaction.amount }}</span>
      <span class="SpanRed ml-3">{{ formatDate(transaction.date) }}</span>
    </div> -->
    <div
      v-for="transaction in globalStore.sortedTransactions"
      :key="transaction._id"
      class="w-full flex flex-row justify-between items-center h-1/12 mt-1 mb-1 rounded-2xl"
      :style="{
        borderColor: isIncome(transaction) ? '#7a7dff' : '#ff7a7a',
        borderWidth: '2px',
        borderStyle: 'solid'
      }"
    >
      <span class="SpanRed p-2">{{ transaction.title }}</span>
      <span class="SpanRed p-2">{{ transaction.amount }}XAF</span>
      <span class="hidden md:block SpanRed ml-3 p-2">{{ transaction.formattedDate }}</span>
    </div>
                                <div class="w-full flex flex-row justify-between p-1 ">
                                        <h2 class="text-black text-[20px] font-bold ml-3">Min</h2>
                                        <h2 class="text-black text-[20px] font-bold ">Income</h2>
                                        <h2 class="text-black text-[20px] font-bold mr-3">Max</h2>
                                </div>
                                <div
                                        class="w-full flex items-center flex-row justify-between h-1/12 mb-3 rounded-2xl border border-[#7a7dff]">
                                        <span class="SpanRed ml-3">{{ globalStore.minIncome }}XAF</span>
                                        <span class="SpanRed mr-3">{{ globalStore.maxIncome }}XAF</span>
                                </div>
                                <div class="w-full flex flex-row justify-between p-1 ">
                                        <h2 class="text-black text-[20px] font-bold ml-3">Min</h2>
                                        <h2 class="text-black text-[20px] font-bold">Expense</h2>
                                        <h2 class="text-black text-[20px] font-bold mr-3">Max</h2>
                                </div>
                                <div
                                        class="w-full flex items-center flex-row justify-between h-1/12 mb-3 rounded-2xl border border-[#7a7dff]">
                                        <span class="SpanRed ml-3">{{ globalStore.minExpense }}XAF</span>
                                        <span class="SpanRed mr-3">{{ globalStore.maxExpense }}XAF</span>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script setup lang="ts">
// import { ref, onMounted } from 'vue'
import { useGlobalStore } from '../context/globalContext'
import Chart from './Chart.vue';
// import Home from './Home.vue';
// import { ref, onMounted } from "vue";
// import axios from "axios";
const globalStore = useGlobalStore()
const isIncome = (transaction: Income) => {
  return transaction.amount > 0; // ou selon ta logique
};


export interface Income {
  _id: string;
  title: string;
  amount: number;
  category: string;
  description: string;
  date: string;
}
// interface Income {
//   _id: string;
//   title: string;
//   amount: number;
//   category: string;
//   description: string;
//   date: string;
// }

// const BASE_URL = `http://${window.location.hostname}:5000/api/v1`;
// const incomes = ref<Income[]>([]);
// const expenses = ref<Income[]>([]);
// const loading = ref(false);
// const errorget = ref("");


// const getIncomes = async () => {
//     loading.value = true;
//     errorget.value = "";

//     try {
//       // Récupère les données du backend
//       const response = await axios.get(`${BASE_URL}/get-incomes`);

//       // Mettez à jour le tableau des revenus réactif
//       incomes.value = response.data;

//       console.log("✅ Incomes récupérés :", incomes.value); // Debug
//       console.log("✅ Données récupérées depuis l'API :", JSON.stringify(incomes.value, null, 2));

//     } catch (err: any) {
//       errorget.value = "Erreur lors de la récupération des données";
//       console.error("❌ Erreur Axios :", err.response?.data || err.message);
//     } finally {
//       loading.value = false;
//     }
//   };

//   const getExpenses = async () => {
//     loading.value = true;
//     errorget.value = "";

//     try {
//       // Récupère les données du backend
//       const response = await axios.get(`${BASE_URL}/get-expenses`);

//       // Mettez à jour le tableau des revenus réactif
//       expenses.value = response.data;

//       console.log("✅ Expenses récupérés :", expenses.value); // Debug
//       console.log("✅ Données récupérées depuis l'API :", JSON.stringify(expenses.value, null, 2));

//     } catch (err: any) {
//       errorget.value = "Erreur lors de la récupération des données";
//       console.error("❌ Erreur Axios :", err.response?.data || err.message);
//     } finally {
//       loading.value = false;
//     }
//   };

//   onMounted(() => {
//     getIncomes();
//     getExpenses();
//   });

// //   return {
// //     incomes,
// //     loading,
// //     errorget,
// //     getIncomes,
// //     expenses,
// //     getExpenses,
// //   };




</script>

<style scoped>
.yoyo {
        display: flex;
        justify-content: space-between;
        gap: 10px;
}
</style>