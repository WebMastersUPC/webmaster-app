import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
import 'primeicons/primeicons.css'

//Import styled mode for PrimeVue
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

//Import PrimeVue Components
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Card from "primevue/card";
import Avatar from "primevue/avatar";
import Rating from "primevue/rating";
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import Paginator from "primevue/paginator";
import FileUpload from "primevue/fileupload";

createApp(App)
    .use(PrimeVue)
    .component('pv-dropDown',Dropdown)
    .component('pv-modal',Dialog)
    .component('pv-inputText',InputText)
    .component('pv-button', Button)
    .component('pv-toolbar', Toolbar)
    .component('pv-card', Card)
    .component('pv-textarea',Textarea)
    .component('pv-avatar', Avatar)
    .component('pv-rating', Rating)
    .component('pv-paginator', Paginator)
    .component('pv-file-upload', FileUpload)
    .mount('#app')
