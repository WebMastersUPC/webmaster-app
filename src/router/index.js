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
import DeliverableList from "../deliverables-schedule/pages/deliverable-list.vue";
import LoginComponent from "../authentication/pages/login.component.vue";
import DeveloperProfilePage from "../developer-profile/pages/developer-profile-page.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: LoginComponent,
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
                  path: '/main/:type/:id',
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
                },
                {
                    path: '/deliverables-list',
                    name: 'deliverable-list',
                    component: DeliverableList
                },
                {
                    path: '/developer-profile/:id',
                    name: 'developer-profile',
                    component: DeveloperProfilePage
                }
            ]
        },
    ]
});

export default router;