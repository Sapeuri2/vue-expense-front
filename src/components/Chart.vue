<template>
  <div class="flex flex-col items-center w-full">
    <!-- Conteneur du graphique Camembert avec légende ajustée -->
    <div class="relative flex justify-center items-center w-full">
      <div class="chart-container items-center justify-center flex">
        <canvas ref="chartCanvas"></canvas>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { useGlobalStore } from '../context/globalContext';
import { Chart } from 'chart.js/auto';

const chartCanvas = ref<HTMLCanvasElement | null>(null);
const store = useGlobalStore();
let chartInstance: Chart | null = null;

const incomeColors = ['#1E90FF', '#4682B4', '#5F9EA0', '#00BFFF', '#87CEEB', '#6495ED', '#4169E1', '#B0C4DE'];
const expenseColors = ['#FF4500', '#DC143C', '#B22222', '#FF6347', '#FF7F50', '#CD5C5C', '#A52A2A', '#8B0000'];
const noDataColor = '#444';

const incomeCategories = ['Salary', 'Freelancing', 'Investments', 'Stocks', 'Crypto', 'Bank_Transfer', 'Youtube', 'Other'];
const expenseCategories = ['Training', 'Feeding', 'Health', 'Subscriptions', 'Takeaways', 'Clothing', 'Travelling', 'Other'];

const processData = () => {
  const incomes = store.incomes;
  const expenses = store.expenses;

  const availableLabels: string[] = [];
  const availableData: number[] = [];
  const availableColors: string[] = [];

  incomeCategories.forEach((category, index) => {
    const total = incomes.filter(i => i.category === category).reduce((sum, i) => sum + i.amount, 0);
    if (total > 0) {
      availableLabels.push(category);
      availableData.push(total);
      availableColors.push(incomeColors[index]);
    }
  });

  expenseCategories.forEach((category, index) => {
    const total = expenses.filter(e => e.category === category).reduce((sum, e) => sum + e.amount, 0);
    if (total > 0) {
      availableLabels.push(category);
      availableData.push(total);
      availableColors.push(expenseColors[index]);
    }
  });

  return { labels: availableLabels, data: availableData, colors: availableColors };
};

const renderChart = () => {
  if (!chartCanvas.value) return;
  const ctx = chartCanvas.value.getContext('2d');
  if (!ctx) return;

  if (chartInstance) {
    chartInstance.destroy();
  }

  const { labels, data, colors } = processData();

  chartInstance = new Chart(ctx, {
    type: 'pie',
    data: {
      labels,
      datasets: [{
        data: data.length > 0 ? data : [1],
        backgroundColor: data.length > 0 ? colors : [noDataColor],
        hoverOffset: 4,
        borderWidth: 0,  // Supprime les bordures des segments
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true, // Maintenir le ratio du graphique
      plugins: {
        title: {
          display: true,
          text: 'Distribution of Income and Expenses',
          font: {
            size: 20,
            weight: 'bold'
          }
        },
        legend: {
          display: data.length > 0,
          position: 'right',
          align: 'center',
          labels: {
            padding: 10,
            boxWidth: 12,
          }
        },
        tooltip: {
          enabled: data.length > 0
        }
      }
    }
  });
};

onMounted(renderChart);
watch(() => [store.incomes, store.expenses], renderChart, { deep: true });
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  max-width: 300px; /* Limite la taille du graphique */
  max-height: 500px; /* Limite la taille du graphique */
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.text-white {
  color: white;
}

/* Styles Responsives */
@media (max-width: 768px) {
  .chart-container {
    max-width: 300px; /* Réduit la taille du graphique sur les petits écrans */
    max-height: 200px; /* Limite la hauteur du graphique */
  }
}

@media (max-width: 480px) {
  .chart-container {
    max-width: 90%; /* Réduit encore plus sur les très petits écrans */
    max-height: 200px; /* Limite la hauteur encore plus */
  }
}
</style>
