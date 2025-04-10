<template>
    <div class="lg:flex lg:justify-between h-lvh lg:h-full ">
        <Navbar />
        <div
            class="FondC lg:h-[620px] pt-5 overflow-auto w-full rounded-lg mt-5 lg:mt-0 lg:ml-10 lg:p-5 pl-5 pr-5 ">
            <!-- <slot class="FondC"> -->
            <!-- <Dashboard /> -->
            <!-- </slot> -->
            <router-view></router-view>
        </div>
        <!-- <Container/> -->
        <!-- <Dashboard/> -->
        <!-- <Income/> -->
        <!-- <Expense/> -->
        <!-- <router-view/> -->

    </div>



</template>

<script setup lang="ts">

import Navbar from '../components/Navbar.vue';
// import Container from '../components/Container.vue';
// import Dashboard from '../components/Dashboard.vue'
// import Income from './components/Income.vue';
// import Expense from './components/Expense.vue';

</script>

<style scoped>
.FondC {
    background: white;
    box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        /* Ombre en bas */
        0 2px 4px -1px rgba(0, 0, 0, 0.06),
        /* Ombre douce en bas */
        0 -4px 4px -1px rgba(0, 0, 0, 0.02),
        /* Ombre en haut */
        0 -2px 4px -1px rgba(0, 0, 0, 0.06);
    /* Ombre douce en haut */
}
</style>
