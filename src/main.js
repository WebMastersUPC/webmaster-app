import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";


//Import styled mode for PrimeVue
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'

//Import PrimeVue Components
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Card from "primevue/card";
import Avatar from "primevue/avatar";
import Rating from "primevue/rating";
import InputText from 'primevue/inputtext';
import FloatLabel from "primevue/floatlabel";
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";
import Toast from "primevue/toast";
import FileUpload from "primevue/fileupload";
import ToastService from "primevue/toastservice";


createApp(App)
    .use(PrimeVue)
    .component('pv-button', Button)
    .component('pv-toolbar', Toolbar)
    .component('pv-card', Card)
    .component('pv-avatar', Avatar)
    .component('pv-rating', Rating)
    .component('pv-inputtext', InputText)
    .component('pv-floatlabel', FloatLabel)
    .component('pv-dropdown', Dropdown)
    .component('pv-textarea', Textarea)
    .use(ToastService)
    .component('pv-toast', Toast)
    .component('pv-fileupload', FileUpload)
    .mount('#app')
