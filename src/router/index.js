import { createRouter, createWebHistory } from "vue-router";

//Componentes de Login
import LoginCard from '../authentication/components/login-card.component.vue';
import PasswordRecoveryCard from '../authentication/components/password-recovery-card.component.vue';
import RegisterCard from '../authentication/components/register-card.component.vue';
import MainPage from "../main-page/pages/main-page.view.vue";
import SearchDeveloperList from "../search-developer/pages/search-developer-list.component.vue";
import ToolbarEnterpriseComponent from "../public/components/toolbar-enterprise.component.vue";
import FooterWebstormComponent from "../public/components/footer-webstorm.component.vue";
import HomePage from "../home-page/components/home-page.component.vue";
import MessagePage from "../components/message/message-page.component.vue";
import CreateProject from "../components/create/create-project-component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: LoginCard,
            name: 'login'
        },
        {
            path: '/password-recovery',
            component: PasswordRecoveryCard,
            name: 'password-recovery'
        },
        {
            path: '/register',
            component: RegisterCard,
            name: 'register'
        },
        {
            path: '/home',
            name: 'home',
            component:  MainPage ,
            children: [
                {
                  path: '/main',
                  component: HomePage,
                  name: 'main'
                },
                {
                    path: '/search-developer',
                    name: 'search-developer',
                    component: SearchDeveloperList
                },
                {
                    path: '/message-page',
                    name: 'message-page',
                    component: MessagePage
                },
                {
                    path: '/create-project',
                    name: 'create-project',
                    component: CreateProject
                }
            ]
        },
    ]
});

export default router;