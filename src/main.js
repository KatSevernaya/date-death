import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import KProgress from 'k-progress-v3'
//import loadingBar from './loading-bar'
import './theme.scss'


createApp(App)
    .component('k-progress', KProgress)
   // .use(loadingBar)
    .use(router)
    .mount('#app');
