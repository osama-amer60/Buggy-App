import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'



import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@fortawesome/fontawesome-free/css/all.min.css"



const pinia = createPinia()



createApp(App)
.use(router)
.use(pinia)
.mount('#app')