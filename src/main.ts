import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query' //  gerenciar o estado de consultas (como requisições de API)

createApp(App).use(VueQueryPlugin).mount('#app')
