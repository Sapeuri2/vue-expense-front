<template>
        <div class="yoyo lg:w-[300px] h-30 lg:h-[620px] backdrop-blur-xl mt-5 lg:mt-0 rounded-lg ">
                <div class=" h-full w-full">
                        <div class="profil justify-center justify-items-center flex w-full lg:p-5 pt-2">
                                        <div
                                                class="cursor-pointer border rounded-2xl border-[#e7eaee] bg-[#f3f5f7] justify-between justify-items-center flex lg:p-5 lg:justify-between p-2 lg:h-[90px] h-[70px] lg:w-full">
                                                <div class="avatar flex items-center justify-center ">
                                                        <img src="../assets/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg"
                                                                alt="Avatar"
                                                                class=" lg:w-15 lg:h-15 w-14 h-14 rounded-full object-cover" />
                                                </div>
                                                <div class="text flex  justify-evenly items-center flex-col ml-4">
                                                        <div
                                                                class="text lg:text-[20px] text-[16px] font-bold text-center text-white w-full">
                                                                Sapeuri
                                                        </div>
                                                        <div
                                                                class="text text-nowrap  lg:text-[14px] text-[15px] font-bold text-center text-white w-full">
                                                                Your
                                                                Money</div>
                                                </div>
                                        </div>
                        </div>
                        <div class="hidden lg:h-[480px] lg:p-5 lg:w-full lg:flex lg:flex-col">
                                <RouterLink to="/dashboard">
                                        <div
                                                class="HoverPerso cursor-pointer lg:flex lg:flex-row lg:h-[70px] lg:w-full lg:items-center lg:justify-center">
                                                <div
                                                        class="lg:w-full lg:ml-2 lg:flex lg:items-center lg:justify-center">
                                                        <img src="../assets/dashboard icon black.png" class="lg:h-10">
                                                </div>
                                                <div
                                                        class="text lg:mr-8 lg:flex lg:justify-evenly lg:items-center lg:text-[15px] font-bold text-center text-white lg:w-full ">
                                                        Dashboard</div>
                                        </div>
                                </RouterLink>
                                <RouterLink to="/">
                                        <div
                                                class="HoverPerso cursor-pointer lg:flex lg:flex-row lg:h-[70px] lg:w-full lg:items-center lg:justify-center">
                                                <div
                                                        class="lg:w-full lg:ml-2 lg:flex lg:items-center lg:justify-center">
                                                        <img src="../assets/icon leder icon black.png" class="lg:h-10">
                                                </div>
                                                <div
                                                        class="text text-nowrap lg:mr-4 lg:flex lg:mb-1 lg:justify-evenly lg:items-center lg:text-[14px] font-bold text-center text-white lg:w-full ">
                                                        View Transactions</div>
                                        </div>
                                </RouterLink>
                                <RouterLink to="/income">
                                        <div
                                                class="HoverPerso cursor-pointer lg:flex lg:flex-row lg:h-[70px] lg:w-full lg:items-center lg:justify-center">
                                                <div
                                                        class="lg:w-full lg:ml-2 lg:mt-2 lg:flex lg:items-center lg:justify-center">
                                                        <img src="../assets/icom icon black.png" class="lg:h-10">
                                                </div>
                                                <div
                                                        class="text lg:mr-8 lg:flex lg:justify-evenly lg:items-center lg:text-[15px] font-bold text-center text-white lg:w-full  ">
                                                        Incomes</div>
                                        </div>
                                </RouterLink>
                                <RouterLink to="/expense">
                                        <div
                                                class="HoverPerso cursor-pointer lg:flex lg:flex-row lg:h-[70px] lg:w-full lg:items-center lg:justify-center">
                                                <div
                                                        class="lg:w-full lg:ml-2 lg:mb-2 lg:flex lg:items-center lg:justify-center">
                                                        <img src="../assets/expence icon black.png" class="lg:h-10">
                                                </div>
                                                <div
                                                        class="text lg:mr-8 flex lg:justify-evenly lg:items-center lg:text-[15px] font-bold text-center text-white lg:w-full ">
                                                        Expenses</div>
                                        </div>
                                </RouterLink>
                                <div class=" lg:flex lg:flex-1 lg:w-full lg:items-center lg:justify-center">
                                        <div class="HoverPerso cursor-pointer h-1/4 w-full flex">
                                                <div
                                                        class="lg:w-full lg:ml-11 lg:flex lg:items-center lg:justify-center">
                                                        <img src="../assets/logout icon Black.png" class="lg:h-6">
                                                </div>
                                                <div
                                                        class=" text lg:mr-16 lg:flex lg:justify-evenly lg:items-center lg:text-[15px] font-bold text-center text-white lg:w-full ">
                                                        LogOut</div>
                                        </div>
                                </div>
                        </div>
                        <div class="lg:hidden p-2 flex items-center justify-center w-full ">
                                <!-- <div class=" h-7 dropdown rounded-lg w-2/3 bg-white relative ">
                                        <button @click="isOpen = !isOpen"
                                                class="rounded-xl flex items-center justify-center w-full cursor-pointer  border border-[#d9e2ec]">
                                                <span class="text ml-4 font-bold text-center w-full">Menu</span>
                                                <svg class="w-7 h-7 mr-1 transition-transform duration-300 "
                                                        :class="{ 'rotate-180': isOpen }"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                        fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clip-rule="evenodd" />
                                                </svg>
                                        </button>

                                        <ul v-if="isOpen"
                                                class="lg:hidden left-0 top-full dropdown-menu absolute mt-2 w-full bg-white shadow-md rounded-md py-2">

                                                <RouterLink to="/dashboard">

                                                        <li
                                                                class="zzz flex justify-center justify-items-center items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                                <img src="../assets/dashboard icon black.png"
                                                                        class="w-5 h-5 " />
                                                                <span
                                                                        class="text font-bold text-[15px] ml-3">Dashboard</span>
                                                        </li>
                                                </RouterLink>
                                                <RouterLink to="/dashboard">
                                                        <li
                                                                class="zzz flex justify-center justify-items-center items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                                <img src="../assets/icon leder icon black.png"
                                                                        class="w-5 h-5" />
                                                                <span
                                                                        class="text font-bold text-[15px] ml-3">Transactions</span>
                                                        </li>
                                                </RouterLink>
                                                <RouterLink to="/income">
                                                        <li
                                                                class="zzz flex justify-center justify-items-center items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                                <img src="../assets/icom icon black.png"
                                                                        class="w-5 h-5" />
                                                                <span
                                                                        class="text font-bold text-[15px] ml-3 mb-1">Incomes</span>
                                                        </li>
                                                </RouterLink>
                                                <RouterLink to="/expense">
                                                        <li
                                                                class="zzz flex justify-center justify-items-center items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                                <img src="../assets/expence icon black.png"
                                                                        class="w-5 h-5" />
                                                                <span
                                                                        class="text font-bold text-[15px] ml-3 mt-1">Expenses</span>
                                                        </li>
                                                </RouterLink>
                                                <li
                                                        class="zzz flex justify-center justify-items-center items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                        <img src="../assets/logout icon Black.png" class="w-4 h-4" />
                                                        <span class="text font-bold text-[15px] ml-1">LogOut</span>
                                                </li>
                                        </ul>


                                </div> -->
                                <div class="cursor-pointer  w-2/3 h-7 relative inline-block">
                                        <select v-model="selectedRoute"
          @change="navigate"
          class="items-center justify-center leading-tight w-full h-full appearance-none rounded-lg bg-white focus:outline-none border border-[#d9e2ec] font-bold text-center">
    <option value="" hidden>Choose a page...</option>
    <option value="/home">Home</option>
    <option value="/dashboard">Dashboard</option>
    <!-- <option value="/dashboard">View Transactions</option>  -->
    <option value="/income">Add Incomes</option>
    <option value="/expense">Add Expense</option>
  </select>
                                </div>
                        </div>
                </div>
        </div>

</template>

<script setup lang="ts">
// import { ref } from "vue";
import { useRouter,RouterLink } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const selectedRoute = ref(""); // Stocke la route sélectionnée

const navigate = () => {
  if (selectedRoute.value) {
    router.push(selectedRoute.value);
  }
};

// const isOpen = ref(false);
</script>


<style scoped>
.text {
        font-family: "Winky Sans", sans-serif;
        /* cursor: pointer; */
        color: black;
        user-select: none;
}

img {
        cursor: pointer;
}

.HoverPerso {
        border-radius: 0.375rem;
        /* rounded en Tailwind */
        border: transparent;
        /* border-2 border-transparent en Tailwind */
        transition: all 300ms;
}

.HoverPerso:hover {
        background: #e8ebed;
        /* hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 */
}

.yoyo {
        background: white;
        border-radius: 15px;
        /* box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1); */
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

.RouterLink-active .HoverPerso {
        background-color: #f3f4f6;
        /* bleu par exemple */
}

.RouterLink-active .zzz {
        background-color: #e8ebed;
        /* bleu par exemple */
}

.custom-dropdown {
        position: relative;
        display: inline-block;
}
</style>