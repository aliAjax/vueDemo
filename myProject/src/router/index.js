import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/firstPage'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'FirstPage',
        component: FirstPage
    }]
})