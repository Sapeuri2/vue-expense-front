import { createApp } from 'vue'
import './style.css'
import { createPinia } from "pinia";
import App from './App.vue'
import  router  from './routes/route'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'



// createApp(App).mount('#app')
const app = createApp(App)

app.component('VueDatePicker', VueDatePicker);

app.use(createPinia());
app.use(router)
app.mount('#app')