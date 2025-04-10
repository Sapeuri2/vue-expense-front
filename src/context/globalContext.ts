// import { defineStore } from "pinia";
// import axios from "axios";
// import { ref, onMounted , computed } from "vue";

// interface Income {
//   _id: string;
//   title: string;
//   amount: number;
//   category: string;
//   description: string;
//   date: string;
// }

// const BASE_URL = "http://192.168.53.205:5000/api/v1";
// const incomes = ref<Income[]>([]);
// const loading = ref(false);
// const errorget = ref("");

// export const useGlobalStore = defineStore("global", () => {


//   const title = ref("");
//   const amount = ref("");
//   const date = ref("");
//   const category = ref("");
//   const descr = ref("");
//   const erroradd = ref<string | null>(null);


//   const addIncome = async () => {
//     try {
//       await axios.post(`${BASE_URL}/add-income`, {
//         title: title.value,
//         amount: amount.value,
//         date: date.value,
//         category: category.value,
//         description: descr.value,
//       });

//       await getIncomes();

//       resetForm();
//     } catch (err: any) {
//       erroradd.value = err.response?.data?.message || "Erreur inconnue";
//     }
//   };



//   const resetForm = () => {
//     title.value = "";
//     amount.value = "";
//     date.value = "";
//     category.value = "";
//     descr.value = "";
//   };


//   const getIncomes = async () => {
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

//   const deleteIncome = async (id: string) => {
//     if (!id) {
//       console.error("❌ L'ID est undefined !");
//       return;
//     }

//     try {
//       await axios.delete(`${BASE_URL}/delete-income/${id}`);
//       console.log(`✅ Income supprimé : ${id}`);

//       await getIncomes(); // 🔥 Met à jour la liste après suppression
//     } catch (err: any) {
//       console.error("❌ Erreur lors de la suppression :", err.response?.data || err.message);
//     }
//   };

//   const totalIncome = computed(() => {
//     return incomes.value.reduce((total, income) => total + income.amount, 0);
//   });

//   onMounted(() => {
//     getIncomes();
//   });




//   return {
//     title,
//     amount,
//     date,
//     category,
//     descr,
//     erroradd,
//     incomes,
//     loading,
//     errorget,
//     addIncome,
//     getIncomes,
//     deleteIncome,
//     totalIncome,
//     resetForm,
//   };
// });
import { defineStore } from "pinia";
import axios from "axios";
import { ref, onMounted , computed } from "vue";

interface Income {
  _id: string;
  title: string;
  amount: number;
  category: string;
  description: string;
  date: string;
}

const BASE_URL = `http://${window.location.hostname}:5000/api/v1`;
const incomes = ref<Income[]>([]);
const expenses = ref<Income[]>([]);
const loading = ref(false);
const errorget = ref("");

export const useGlobalStore = defineStore("global", () => {


  const title = ref("");
  const amount = ref("");
  const date = ref("");
  const category = ref("");
  const descr = ref("");
  const erroradd = ref<string | null>(null);


  const addIncome = async () => {
    try {
      await axios.post(`${BASE_URL}/add-income`, {
        title: title.value,
        amount: amount.value,
        date: date.value,
        category: category.value,
        description: descr.value,
      });

      await getIncomes();

      resetForm();
    } catch (err: any) {
      erroradd.value = err.response?.data?.message || "Erreur inconnue";
    }
  };

  const addExpense = async () => {
    try {
      await axios.post(`${BASE_URL}/add-expense`, {
        title: title.value,
        amount: amount.value,
        date: date.value,
        category: category.value,
        description: descr.value,
      });

      await getExpenses();

      resetForm();
    } catch (err: any) {
      erroradd.value = err.response?.data?.message || "Erreur inconnue";
    }
  };



  const resetForm = () => {
    title.value = "";
    amount.value = "";
    date.value = "";
    category.value = "";
    descr.value = "";
  };


  const getIncomes = async () => {
    loading.value = true;
    errorget.value = "";

    try {
      // Récupère les données du backend
      const response = await axios.get(`${BASE_URL}/get-incomes`);

      // Mettez à jour le tableau des revenus réactif
      incomes.value = response.data;

      console.log("✅ Incomes récupérés :", incomes.value); // Debug
      console.log("✅ Données récupérées depuis l'API :", JSON.stringify(incomes.value, null, 2));

    } catch (err: any) {
      errorget.value = "Erreur lors de la récupération des données";
      console.error("❌ Erreur Axios :", err.response?.data || err.message);
    } finally {
      loading.value = false;
    }
  };

  const getExpenses = async () => {
    loading.value = true;
    errorget.value = "";

    try {
      // Récupère les données du backend
      const response = await axios.get(`${BASE_URL}/get-expenses`);

      // Mettez à jour le tableau des revenus réactif
      expenses.value = response.data;

      console.log("✅ Expenses récupérés :", expenses.value); // Debug
      console.log("✅ Données récupérées depuis l'API :", JSON.stringify(expenses.value, null, 2));

    } catch (err: any) {
      errorget.value = "Erreur lors de la récupération des données";
      console.error("❌ Erreur Axios :", err.response?.data || err.message);
    } finally {
      loading.value = false;
    }
  };

  const deleteIncome = async (id: string) => {
    if (!id) {
      console.error("❌ L'ID est undefined !");
      return;
    }

    try {
      await axios.delete(`${BASE_URL}/delete-income/${id}`);
      console.log(`✅ Income supprimé : ${id}`);

      await getIncomes(); // 🔥 Met à jour la liste après suppression
    } catch (err: any) {
      console.error("❌ Erreur lors de la suppression :", err.response?.data || err.message);
    }
  };

  const deleteExpense = async (id: string) => {
    if (!id) {
      console.error("❌ L'ID est undefined !");
      return;
    }

    try {
      await axios.delete(`${BASE_URL}/delete-expense/${id}`);
      console.log(`✅ Expense supprimé : ${id}`);

      await getExpenses(); // 🔥 Met à jour la liste après suppression
    } catch (err: any) {
      console.error("❌ Erreur lors de la suppression :", err.response?.data || err.message);
    }
  };

  const totalIncome = computed(() => {
    return incomes.value.reduce((total, income) => total + income.amount, 0);
  });

  const totalExpense = computed(() => {
      return expenses.value.reduce((total, expense) => total + expense.amount, 0);
    });
  
  const totalBalance = computed(() => totalIncome.value - totalExpense.value);

  const maxIncome = computed(() => {
    return incomes.value.length > 0
      ? Math.max(...incomes.value.map(i => i.amount))
      : 0;
  });
  
  const minIncome = computed(() => {
    return incomes.value.length > 0
      ? Math.min(...incomes.value.map(i => i.amount))
      : 0;
  });
  
  const maxExpense = computed(() => {
    return expenses.value.length > 0
      ? Math.max(...expenses.value.map(e => e.amount))
      : 0;
  });
  
  const minExpense = computed(() => {
    return expenses.value.length > 0
      ? Math.min(...expenses.value.map(e => e.amount))
      : 0;
  });

  const formatDate = (date: string): string => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Mois de 0 à 11, donc on ajoute 1
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // 🔄 Transactions triées et formatées (incomes + expenses)
  const sortedTransactions = computed(() => {
    const transactions = [...incomes.value, ...expenses.value];
    return transactions
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Tri décroissant
      .map((transaction) => ({
        ...transaction,
        formattedDate: formatDate(transaction.date), // Ajoute la date formatée
      }));
  });
  
  

  onMounted(() => {
    getIncomes();
    getExpenses();
  });



  return {
    title,
    amount,
    date,
    category,
    descr,
    erroradd,
    incomes,
    loading,
    errorget,
    addIncome,
    getIncomes,
    deleteIncome,
    totalIncome,
    expenses,
    addExpense,
    getExpenses,
    deleteExpense,
    totalExpense,
    totalBalance,
    resetForm,
    maxExpense,
    maxIncome,
    minExpense,
    minIncome,
    sortedTransactions,
  };
});




