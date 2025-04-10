<!-- <template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6 text-gray-800">
    <div class="max-w-5xl mx-auto space-y-8">


      <header class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">💸 Personal Expense Tracker 💼</h1>
        <p class="text-lg md:text-xl text-gray-700">Suivez vos revenus et dépenses facilement et efficacement ! 📊📈</p>
      </header>


      <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-2xl p-6 shadow-xl">
          <div class="text-4xl mb-2">📥</div>
          <h2 class="text-xl font-semibold mb-2">Ajoutez vos Revenus</h2>
          <p>Enregistrez rapidement tous vos revenus mensuels et suivez leur évolution.</p>
        </div>
        <div class="bg-white rounded-2xl p-6 shadow-xl">
          <div class="text-4xl mb-2">📤</div>
          <h2 class="text-xl font-semibold mb-2">Ajoutez vos Dépenses</h2>
          <p>Gardez une trace claire de vos dépenses quotidiennes et gérez votre budget.</p>
        </div>
        <div class="bg-white rounded-2xl p-6 shadow-xl">
          <div class="text-4xl mb-2">📊</div>
          <h2 class="text-xl font-semibold mb-2">Vue d'ensemble</h2>
          <p>Analysez vos finances via un tableau de bord visuel et compréhensible.</p>
        </div>
      </section>

      <section class="bg-white p-6 rounded-2xl shadow-xl">
        <h2 class="text-2xl font-bold mb-4">🔍 Aperçu du Dashboard</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-blue-100 p-4 rounded-xl">
            <div class="text-2xl">💰</div>
            <p class="font-semibold">Total Revenus</p>
            <p class="text-lg text-blue-700 font-bold">{{ store.totalIncome }} €</p>
          </div>
          <div class="bg-red-100 p-4 rounded-xl">
            <div class="text-2xl">💸</div>
            <p class="font-semibold">Total Dépenses</p>
            <p class="text-lg text-red-700 font-bold">{{ store.totalExpense }} €</p>
          </div>
          <div class="bg-green-100 p-4 rounded-xl">
            <div class="text-2xl">💼</div>
            <p class="font-semibold">Solde</p>
            <p class="text-lg text-green-700 font-bold">{{ store.totalBalance }} €</p>
          </div>
        </div>
      </section>


      <section class="text-center">
        <h2 class="text-2xl font-bold mb-4">Prêt à gérer vos finances ? 🚀</h2>
        <router-link to="/dashboard">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg shadow-xl">
            Accéder au Dashboard
          </button>
        </router-link>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../context/globalContext';
const store = useGlobalStore();
</script>

<style scoped>
</style> -->
<template>
  <div class="h-full rounded-2xl lg:h-full bg-gradient-to-br from-blue-100 to-purple-200 text-gray-800 p-4 lg:p-5">
    <div class="flex flex-col justify-between h-full">

      <!-- Top Content -->
      <div class="space-y-4">
        <!-- Header Section -->
        <header class="text-center">
          <h1 class="text-3xl font-bold mb-1">💸 Personal Expense Tracker 💼</h1>
          <p class="text-base text-gray-700">Track your income and expenses smartly! 📊📈</p>
        </header>

        <!-- Features Overview -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white rounded-xl p-4 shadow text-center">
            <div class="text-3xl mb-1">📥</div>
            <h2 class="text-lg font-semibold mb-1">Add Incomes</h2>
            <p class="text-sm">Log your monthly incomes easily.</p>
          </div>
          <div class="bg-white rounded-xl p-4 shadow text-center">
            <div class="text-3xl mb-1">📤</div>
            <h2 class="text-lg font-semibold mb-1">Add Expenses</h2>
            <p class="text-sm">Keep records of your spending habits.</p>
          </div>
          <div class="bg-white rounded-xl p-4 shadow text-center">
            <div class="text-3xl mb-1">📊</div>
            <h2 class="text-lg font-semibold mb-1">Overview</h2>
            <p class="text-sm">Visualize your financial summary.</p>
          </div>
        </section>

        <!-- Dashboard Preview -->
        <section class="bg-white p-4 rounded-xl shadow">
          <h2 class="text-xl font-bold mb-2">🔍 Dashboard Preview</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-blue-100 p-3 rounded text-center">
              <div class="text-xl">💰</div>
              <p class="font-medium">Total Income</p>
              <p class="text-blue-700 font-bold text-base">{{ store.totalIncome }} XAF</p>
            </div>
            <div class="bg-red-100 p-3 rounded text-center">
              <div class="text-xl">💸</div>
              <p class="font-medium">Total Expenses</p>
              <p class="text-red-700 font-bold text-base">{{ store.totalExpense }} XAF</p>
            </div>
            <div class="bg-green-100 p-3 rounded text-center">
              <div class="text-xl">💼</div>
              <p class="font-medium">Balance</p>
              <p class="text-green-700 font-bold text-base">{{ store.totalBalance }} XAF</p>
            </div>
          </div>
        </section>
      </div>

      <!-- Call to Action -->
      <section class="text-center mt-4">
        <h2 class="text-base font-bold mb-2">Ready to manage your finances? 🚀</h2>
        <router-link to="/dashboard">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-base shadow">
            Go to Dashboard
          </button>
        </router-link>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../context/globalContext';
const store = useGlobalStore();
</script>

<style scoped>
</style>
