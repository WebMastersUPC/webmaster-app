import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";

import 'primeicons/primeicons.css'





//Import styled mode for PrimeVue
import 'primevue/resources/themes/aura-light-green/theme.css'

//Import PrimeVue Components
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Card from "primevue/card";
import Avatar from "primevue/avatar";
import Rating from "primevue/rating";
import Textarea from 'primevue/textarea';
import ProgressBar from 'primevue/progressbar';
import Dialog from "primevue/dialog";


createApp(App)
    .use(PrimeVue)
    .component('pv-button', Button)
    .component('pv-toolbar', Toolbar)
    .component('pv-card', Card)
    .component('pv-avatar', Avatar)
    .component('pv-rating', Rating)
    .component('pv-textarea', Textarea)
    .component('pv-progressbar', ProgressBar)
    .component('pv-dialog',Dialog)
    .mount('#app')
