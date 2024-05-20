<script>
import DeliverablesScheduleCard from "../components/deliverables-schedule-card.component.vue";
import {AuthService} from "../../../../public/services/auth.service.js";

export default {
  name: "deliverables-list",
  components:{
    'deliverable-card': DeliverablesScheduleCard
  },
  data() {
    return {
      deliverables: [],
      projects:[],
      company:[],
      authService: new AuthService(),
      projectName: '',
      companyName: '',
      newDeliverable: { name: '', description: '' }, // Nueva tarjeta
      visible: false // Estado del modal
    };
  },
  methods: {
    openModal() {
      this.visible = true;
    },
    closeModal() {
      this.visible = false;
    },
    addDeliverable() {
      this.openModal();
    },

    // Agregar nueva tarjeta al arreglo
    saveDeliverable() {
      this.deliverables.push({
        name: this.newDeliverable.name,
        description: this.newDeliverable.description
      });
      this.newDeliverable = { name: '', description: '' };
      this.closeModal();
    },

  },

  created(){

    let id = localStorage.getItem('user id');
    this.authService.getEnterpriseInfoByID(id).then((response) => {
      this.company = response.data;
      this.projects = response.data.projects;

      // Suponiendo que el primer proyecto es el deseado
      if (this.projects.length > 0) {
        this.projectName = this.projects[0].name;
      }

      // Asignar el nombre de la compañía
      this.companyName = this.company.username;

      this.deliverables = this.projects.flatMap(project => project.deliverables || []);
      console.log('Array of deliverables:', this.deliverables);
    }).catch(error => {
      console.error('Error fetching enterprise info:', error);
    });
  }
}

</script>

<template>
  <div class="text-white-alpha-90 flex flex-column align-items-center justify-content-center" >
    <p class="text-4xl text-center font-bold">{{$t('deliverable-list-part1')}}</p>
    <p class="text-3xl -mt-4 text-center">{{ projectName }}</p>
    <p class="text-2xl -mt-4 text-center">{{ companyName }}</p>
  </div>

  <div class="grid col-fixed justify-content-center gap-5 mt-4 mb-4">
    <deliverable-card v-for="deliverable in deliverables"
                      :key="deliverable.id"
                      :company="company"
                      :deliverable="deliverable"/>
  </div>


  <!--style="width: 70%;-->
  <pv-modal v-model:visible="visible" modal :header="$t('deliverable-list-part3')" :breakpoints="{ '1199px': '50%', '575px': '90vw', '700px':'50%','1900px': '50%'}" aria-label="Add Deliverable Modal">

    <div class="flex flex-column align-content-center justify-content-center" aria-label="Modal Content">

      <div class="flex flex-row align-items-center justify-content-center flex-wrap" aria-label="Input Fields">
        <div class="flex flex-column w-10" aria-label="Deliverable Name and Description">
          <pv-textarea type="text" v-model="newDeliverable.name" :placeholder="$t('deliverable-list-part4')" class="mb-3 pr-5" maxlength="50" aria-label="Name Textarea"></pv-textarea>
          <pv-textarea v-model="newDeliverable.description" :placeholder="$t('deliverable-list-part5')" class="mb-3" aria-label="Description Textarea"></pv-textarea>
        </div>

        <div class="flex flex-row align-content-center" aria-label="Additional Information">
          <div aria-label="Delivery Date Information">
            <div class="m-4">
              <div class="flex flex-column align-items-center relative-container">
                <span class="pi pi-stopwatch" style="font-size: 2rem"></span>
              </div>
              <div class="flex flex-column align-items-center">
                <p class="">{{$t('deliverable-list-part6')}}</p>
                <p class="-mt-3">{{$t('deliverable-list-part7')}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-column align-items-center justify-content-center" aria-label="Confirmation Button">
        <pv-button @click="saveDeliverable" class="bg-white text-black-alpha-90 border-black-alpha-90 border-round-3xl text-xl" aria-label="Confirm Button">{{$t('deliverable-list-part8')}}</pv-button>
      </div>

    </div>

  </pv-modal>




  <div class="flex flex-column flex align-items-center mb-5">
    <span class="pi pi-plus-circle cursor-pointer" style="font-size: 3rem; color:white;" @click="addDeliverable"></span>
  </div>



</template>

<style scoped>

textarea {
  resize: none;
}

</style>