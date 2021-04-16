import VueRouter from 'vue-router'

import Home from '../pages/Home/Home';
import NotFound from "../pages/NotFound";


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/*',
            component: NotFound
        },
    ]
})