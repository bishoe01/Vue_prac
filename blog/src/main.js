import { createApp} from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router'
import 'bootstrap-vue/dist/bootstrap-vue.css'
createApp(App).use(router).mount('#app')