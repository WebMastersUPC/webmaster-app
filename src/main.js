import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
import 'primeicons/primeicons.css'

//Import styled mode for PrimeVue
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

//PrimeServices
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

//Import PrimeVue Components
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Card from "primevue/card";
import Avatar from "primevue/avatar";
import Rating from "primevue/rating";
import ProgressBar from 'primevue/progressbar';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import Paginator from "primevue/paginator";
import FileUpload from "primevue/fileupload";
import Divider from 'primevue/divider';
import ScrollPanel from 'primevue/scrollpanel';
import FloatLabel from 'primevue/floatlabel';
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';

createApp(App)
    .use(PrimeVue)
    .use(ConfirmationService)
    .use(ToastService)
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
    .component('pv-progressbar', ProgressBar)
    .component('pv-dialog',Dialog)
    .component('pv-floatlabel', FloatLabel)
    .component('pv-divider', Divider)
    .component('pv-scrollpanel', ScrollPanel)
    .component('pv-splitter', Splitter)
    .component('pv-splitter-panel', SplitterPanel)
    .component('pv-confirm-dialog', ConfirmDialog, )
    .component('pv-toast', Toast)
    .mount('#app')