import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import Back from './components/back.vue'

const app = createApp(App)

app.component('Back', Back)

app.use(createPinia())
app.use(router)

app.mount('#app')
