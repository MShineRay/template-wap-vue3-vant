import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axiosPlugin from './plugins/axios.js'
import '@vant/touch-emulator'
const app=createApp(App)
app.use(router)
app.use(axiosPlugin)
app.mount('#app')
