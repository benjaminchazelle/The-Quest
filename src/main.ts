import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import './assets/main.css'
import Challenge from "@/components/Challenge.vue";
import Rank from "@/components/Rank.vue";

createApp(App).mount('#app')


const routes = [
    { path: '/', component: Challenge },
    { path: '/ranks', component: Rank },
]


const router = createRouter({
   history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')