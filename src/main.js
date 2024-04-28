import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";


//Import styled mode for PrimeVue
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

//Import PrimeVue Components
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Card from "primevue/card";
import Avatar from "primevue/avatar";
import Rating from "primevue/rating";
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';

createApp(App)
    .use(PrimeVue)
    .component('pv-modal',Dialog)
    .component('pv-inputText',InputText)
    .component('pv-button', Button)
    .component('pv-toolbar', Toolbar)
    .component('pv-card', Card)
    .component('pv-textarea',Textarea)
    .component('pv-avatar', Avatar)
    .component('pv-rating', Rating)
    .mount('#app')
