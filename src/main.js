import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";

//Import styled mode for PrimeVue
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/aura-light-green/theme.css'


//Import PrimeVue Components
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Card from "primevue/card";
import Avatar from "primevue/avatar";
import Rating from "primevue/rating";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import FileUpload from "primevue/fileupload";
import Divider from 'primevue/divider';
import ScrollPanel from 'primevue/scrollpanel';
import Dialog from 'primevue/dialog';
import FloatLabel from 'primevue/floatlabel';




createApp(App)
    .use(PrimeVue)
    .component('pv-button', Button)
    .component('pv-toolbar', Toolbar)
    .component('pv-card', Card)
    .component('pv-avatar', Avatar)
    .component('pv-rating', Rating)
    .component('pv-inputtext', InputText)
    .component('pv-textarea', Textarea)
    .component('pv-fileupload', FileUpload)
    .component('pv-divider', Divider)
    .component('pv-scrollpanel', ScrollPanel)
    .component('pv-dialog', Dialog)
    .component('pv-floatlabel', FloatLabel)
    .mount('#app')