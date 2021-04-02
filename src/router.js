import { createRouter, createWebHistory } from 'vue-router'
import AppQuize from './components/AppQuize'
import AppLastPage from './components/AppLastPage'
import AppLanding from './components/AppLanding'

export default createRouter( {
    history: createWebHistory(),
    routes: [
        {path: '/quiz', component: AppQuize },
        {path: '/listen', component: AppLastPage },
        {path: '/home', component: AppLanding, alias: '/' }

    ]
})