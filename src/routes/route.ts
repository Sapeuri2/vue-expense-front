import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout.vue'
import Dashboard from '../components/Dashboard.vue'
import Income from '../components/Income.vue'
import Expense from '../components/Expense.vue'
import Home from '../components/Home.vue'
import NotFound from '../components/NotFound.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '', component: Layout,
            children: [
                { path: '', redirect: '/home' },
                { path: '/dashboard', component: Dashboard},
                { path: '/income', component: Income},
                { path: '/home', component: Home},
                { path: '/expense', component: Expense}
            ],
        },
        { path: '/:catchAll(.*)', component: NotFound }
    ],
    scrollBehavior(to) {
        // Vérifie si le chemin a un hash (ex: #element), sinon, défiler tout en haut
        if (to.hash) {
            return { selector: to.hash }
        } else {
            return { top: 0, behavior: 'smooth' } // Scroller tout en haut de la page avec un effet smooth
        }
    }
})

export default router
