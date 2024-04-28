import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";


//Import styled mode for PrimeVue
import 'primevue/resources/themes/aura-light-green/theme.css'
//Prime
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
//Import PrimeVue Components
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Card from "primevue/card";
import Avatar from "primevue/avatar";
import Rating from "primevue/rating";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';
createApp(App)
    .use(PrimeVue)
    .use(ConfirmationService)
    .use(ToastService)
    .component('pv-button', Button)
    .component('pv-toolbar', Toolbar)
    .component('pv-card', Card)
    .component('pv-avatar', Avatar)
    .component('pv-rating', Rating)
    .component('pv-splitter', Splitter)
    .component('pv-splitter-panel', SplitterPanel)
    .component('pv-confirm-dialog', ConfirmDialog, )
    .component('pv-toast', Toast)
    .mount('#app')
