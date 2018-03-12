import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard';
import Usuario from '@/views/Usuario';
import BloquearAcesso from '@/views/BloquearAcesso';

Vue.use(Router)

export default new Router({
    mode: 'hash',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
        path: '/',
        redirect: '/dashboard',
        name: 'Inicio',
        component: Full,
        children: [{
                path: 'dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: 'usuario',
                name: 'Usuário',
                component: Usuario
            },
            {
              path: 'bloquear-acesso',
              name: 'Bloquear Acesso',
              component: BloquearAcesso
            }
        ]
    }]
})
