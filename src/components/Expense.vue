<template>
    <!-- <Navbar />
    <Container> -->
    <div class=" w-full lg:h-full flex flex-col">
        <div class="w-full h-[40px] justify-center text-center justify-items-center">
            <h2 class="winky text-[25px] font-bold">Expenses</h2>
        </div>
        <div
            class="flex font-bold w-full items-center justify-center text-center justify-items-center h-1/11 lg:h-1/8 mb-4">
            <span class="winky w-full text-[20px]">Total Expenses: {{ storage.totalExpense }}XAF</span>
        </div>
        <div class=" flex flex-col lg:flex-row w-full h-full lg:overflow-hidden flex-1">
            <div class="h-full  lg:w-1/3">
                <form action="" class="h-full flex flex-col items-center" @submit.prevent="storage.addExpense">
                    <div
                        class="input-control flex w-full items-center justify-center text-center justify-items-center h-1/12 mb-3">
                        <span :class="{
                            'text-black': formTitle === 'Please fill the fields below',
                            'text-red-500': formTitle === 'All fields are required',
                            'text-green-500': formTitle === 'Form submitted successfully'
                        }" class="form-title winky text-[15px] text-nowrap">{{
                            formTitle }}</span>
                    </div>
                    <input type="text" v-model="storage.title"
                    maxlength="15"
                        :class="{ 'border-red-500': isFieldInvalid(storage.title) }"
                        class="input-control winky  focus:outline-none focus:ring focus:ring-[#bed7e9] border-[#e8ebed] rounded-xl border bg-white  p-2 w-full mb-3 text-nowrap"
                        placeholder="Expense title">
                    <input type="number" v-model="storage.amount"
                    maxlength="9"
                        :class="{ 'border-red-500': isFieldInvalid(storage.amount) }"
                        class="input-control winky  focus:outline-none focus:ring focus:ring-[#bed7e9] appearance-none border-[#e8ebed] rounded-xl border bg-white p-2 w-full mb-3 text-nowrap"
                        placeholder="Expense Amount">
                    <div class="relative w-full input-control">
                        <!-- <input type="text" v-model="date" :class="{ 'border-red-500': isFieldInvalid(date) }"
                                class="border-[#e8ebed] winky  focus:outline-none focus:ring focus:ring-[#bed7e9] rounded-xl border bg-white p-2 w-full mb-3 text-nowrap block "
                                placeholder="Select a date" onfocus="(this.type='date')"
                                onblur="if(!this.value) this.type='text'"> -->
                        <VueDatePicker v-model="storage.date" placeholder="Select a date"
                            onfocus="(this.type='date')"
                            class=" border-[#e8ebed] winky  focus:outline-none focus:ring focus:ring-[#bed7e9] rounded-xl border bg-white w-full mb-3 text-nowrap block "
                            :class="{ 'border-red-500': isFieldInvalid(storage.date) }"
                            onblur="if(!this.value) this.type='text'" :enable-time-picker="false" :auto-apply="true"
                            :teleport="true" />
                    </div>
                    <select v-model="storage.category"
                        :class="{ 'border-red-500': isFieldInvalid(storage.category) }"
                        class="input-control border-[#e8ebed] winky  focus:outline-none focus:ring focus:ring-[#bed7e9] bg-white rounded-xl border p-2 w-full mb-3 ">
                        <option value="">Select Option</option>
                        <option value="Training">Training/School</option>
                        <option value="Feeding">Feeding</option>
                        <option value="Health">Health</option>
                        <option value="Subscriptions">Subscriptions</option>
                        <option value="Takeaways">Takeaways</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Traveliing">Traveliing</option>
                        <option value="Other">Other</option>
                    </select>
                    <textarea v-model="storage.descr"
                        :class="{ 'border-red-500': isFieldInvalid(storage.descr) }"
                        class="input-control border-[#e8ebed] winky  focus:outline-none focus:ring focus:ring-[#bed7e9] bg-white rounded-xl border h-2/8 p-2 w-full mb-3 break-all whitespace-normal"
                        placeholder="Add a reference"></textarea>
                    <div class="w-full flex-1 flex items-center justify-center"><button @click.prevent="submitForm"
                            class="cursor-pointer border p-2 w-[130px] h-[40px] flex flex-row items-center justify-center border-[#e8ebed] rounded-xl bg-white hover:bg-[#e8ebed]">
                            <img src="../assets/circle-gauge.svg" class="w-5 h-5" alt="">
                            <span class="ml-1 text-nowrap winky">Add Expense</span>
                        </button></div>

                </form>
            </div>
            <div class=" flex-1 flex-col lg:p-3 pt-3 lg:pt-0 max-w-full h-full whitespace-normal overflow-auto block">
                <div class="w-full h-[82px]  rounded-xl p-[10px] mb-1 border border-[#e8ebed] bg-white flex flex-row justify-between"
                    v-for="expense in storage.expenses" :key="expense._id">
                    <div class="felx-1 h-full flex flex-row">
                        <div class="h-full ">
                            <div class="rounded-2xl bg-[#f3f5f7] p-1 w-[70px] h-full flex justify-center items-center">
                                <img :src="getImageByCategory(expense.category)" class="w-5/6 h-5/6" alt="">
                            </div>
                        </div>
                        <div>
                            <div class="md:w-[210px]  h-full">
                                <div class="h-full flex-1 flex flex-col">
                                    <div class="w-full h-1/2 flex flex-row">
                                        <div class="h-full">
                                            <div class=" h-full flex justify-center items-center "><img
                                                    src="../assets/icons8-point-final-100 red.png" class="w-[30px]"
                                                    alt=""></div>
                                        </div>
                                        <div
                                            class="winky h-full flex-1 flex justify-start items-center text-center text-nowrap p-[1px]">
                                            <span class="text-nowrap">{{ expense.title }}</span>
                                        </div>
                                    </div>
                                    <div class="w-full flex-1 flex flex-row">
                                        <div class="flex w-[105px] flex-row">
                                            <div class="h-full flex justify-center w-1/10 items-center"></div>
                                            <div class="Quicksand h-full flex justify-center items-center">
                                                <span>{{ expense.amount }}XAF</span>
                                            </div>
                                        </div>
                                        <div class="hidden md:visible w-[115px] md:flex flex-row">
                                            <div class="h-full flex justify-center items-center "><img
                                                    src="../assets/icons8-calendrier-100.png" class="w-4" alt="">
                                            </div>
                                            <div class=" h-full flex justify-center items-center"><span
                                                    class="font-semibold">{{ formatDate(expense.date) }}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:visible h-full flex-1 md:flex justify-center items-center">
                        <div class="h-full w-full p-1 flex justify-center items-center"><span
                                class="winky max-w-full h-full break-all whitespace-normal overflow-auto block">{{
                                    expense.description }}</span></div>
                    </div>
                    <div class=" h-full flex items-center justify-end cursor-pointer">
                        <div class="flex items-center justify-center  rounded-full bg-black w-10 h-10 "
                            @click="storage.deleteExpense(expense._id)"><img src="../assets/trash-solid (1).svg"
                                class="object-contain text-white w-5 h-5" alt=""></div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- </Container> -->
</template>

<script setup lang="ts">
// import { useGlobalStoreExp } from '../context/globalContextExpense';
import { useGlobalStore } from '../context/globalContext';
import { ref, onMounted } from 'vue';

const storage = useGlobalStore();

const formTitle = ref("Please fill the fields below");
const formSubmitted = ref(false);

const isFieldInvalid = (field: string) => formSubmitted.value && !field;

const submitForm = () => {
    formSubmitted.value = true;

    if (
        !storage.title ||
        !storage.amount ||
        !storage.date ||
        !storage.category ||
        !storage.descr 
    ) {
        formTitle.value = "All fields are required";
    } else {
        formTitle.value = "Form submitted successfully";
        storage.addExpense();
        formSubmitted.value = false;
    }
};

onMounted(() =>{
    storage.getExpenses();
});

const formatDate = (date: string): string => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
};

const getImageByCategory = (category: string) => {
    switch (category) {
        case 'Training':
            return '/src/assets/Training.png';  // Replace with the actual path
        case 'Feeding':
            return '/src/assets/Feeding.png';  // Replace with the actual path
        case 'Health':
            return '/src/assets/Health.png';
        case 'Subscriptions':
            return '/src/assets/Subscriptions.png';
        case 'Takeaways':
            return '/src/assets/Takeaways.png';
        case 'Clothing':
            return '/src/assets/Clothing.png';
        case 'Traveliing':
            return '/src/assets/Traveliing.png';
        default:
            return '/src/assets/other expense.png';  // Default image in case no category matches
    }
};



</script>
<style scoped>
.winky {
    font-family: "Winky Sans", sans-serif;
    user-select: none;
}

.Quicksand {
    font-family: "Quicksand", sans-serif;
    font-weight: 600;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

</style>