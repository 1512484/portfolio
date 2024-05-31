import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'aos/dist/aos.css';
import './assets/main.css'
import "./assets/scss/_styles.scss";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
