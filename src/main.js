import './assets/main.css'
import 'primeicons/primeicons.css'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast, { POSITION } from 'vue-toastification'

const app = createApp(App)
app.use(router)
app.use(Toast, {
    position: POSITION.TOP_RIGHT,
    timeout: 3000,
    pauseOnHover: true,
})
app.mount('#app')
