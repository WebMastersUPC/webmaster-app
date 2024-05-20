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

    };
  },
  methods: {


  },

  created(){
    let id = localStorage.getItem('user id');
    this.authService.getEnterpriseInfoByID(id).then((response) => {
      this.company = response.data;
      this.projects = response.data.projects;

      //para mostrar el primer proyecto
      if (this.projects.length > 0) {
        this.projectName = this.projects[0].name;
      }
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


</template>

<style scoped>

textarea {
  resize: none;
}

</style>