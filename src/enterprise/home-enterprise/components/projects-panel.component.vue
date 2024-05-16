<script>
import { useRouter } from 'vue-router';
import {AuthService} from "../../../../public/services/auth.service.js";

export default {
  name: "projects-panel.component",
  components: {},
  data() {
    return {
      authService: new AuthService(),
      position: 'center',
      visible: false,
      applicantsList: []
    };
  },
  methods: {
    async openPosition(position, started, candidates) {
      if (!started) {
        this.position = position;
        this.visible = true;
        //console.log(candidates)

        for(let candidate of candidates){
          this.authService.getDevInfoByID(candidate).then((response) => {
            this.applicantsList.push(response.data)
          });
        }
      }
      else{
        this.$router.push('/deliverables-list');
      }

    },

    chooseApplicant(applicant) {
      console.log(applicant);
    },

    goToDevProfile(applicant){
      console.log(`go to dev profile, id: ${applicant}`);
    },
    // navigateToDeliverablesList() {
    //   this.$router.push('/deliverables-list');
    // },
  },
  props:{
    projects:{
      type: Array,
      required: true
    },
    applicants:{
      type: Array,
      required: false
    }
  },
  created(){

  }
}
</script>

<template>
  <pv-card>
    <template #title> <p  style="color: #3554BC">Proyectos</p></template>
    <template #content>
      <hr>
      <template class="project-list" v-for="project in projects">
        <div class="project" @click="openPosition('center', project.started, project.candidates)">
          <h4>{{project.name}}</h4>
          <p class="subtitle tipo-proyecto">{{project.type}}</p>
          <p class="postulantes"  v-if="!project.started">Postulantes: {{project.candidates.length}}</p>
          <pv-progressbar v-else :value="project.progress"></pv-progressbar>
        </div>
      </template>
    </template>
  </pv-card>


  <div class="card">
    <pv-dialog v-model:visible="visible" header="Elegir postulante" :style="{ width: '25rem', height: '100vh', display: 'block', overflow:'auto' }" :position="position" :modal="true" :draggable="false">
      <template class="applicants-list" v-for="(applicant) in this.applicantsList">
        <div class="project applicant">
          <h4>{{applicant.name}}</h4>
          <div class="p-card-title">
          <pv-avatar :image="applicant.profileImage" class="mr-2" size="xlarge" shape="circle" @click="goToDevProfile(applicant.id)" />
          <pv-rating v-model="applicant.rating" readonly :cancel="false" />
          </div>
          <span>{{ applicant.description.length > 150 ? `${applicant.description.slice(0, 150)}...` : applicant.description }}</span>
          <pv-button class="choose-dev" @click="chooseApplicant(applicant.id)">Elegir Developer</pv-button>
        </div>
      </template>
    </pv-dialog>
  </div>
</template>

<style scoped>
hr{
  opacity:0.3;
}

@media (max-width: 799px) {
  .p-card{
    margin-top:2rem;
  }
}

.p-card{
  width: 30rem ;
  min-width: 20rem;
  box-shadow: 0 20px 40px rgb(57, 57, 57);
  margin-top: 4rem;
  max-height: 800px;
  min-height: 620px;
  display: flex;
  flex-direction: column;
}
:deep(.p-card-title) {
  display: flex;
  align-items: center;
  margin: 20px 20px 0 20px;
  justify-content: center;
}
:deep(.p-card-content) {
  margin: 0 20px;
  flex-grow: 1;
  overflow: hidden;
  max-height: 90%;
}

:deep(.p-card-content) {
  margin: 0 20px;
  height: 90%;
}

.subtitle {
  color: #64748b;
}

span{
  max-width: 90%;
}

.project-list {
  display: block;
  justify-content: center;
  overflow: auto;
  height: auto;
  max-height: 680px;
}
.project{
  background-color:#D9D9D9;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgb(197, 197, 197);
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 10px;
  height: 120px;
  transition: transform 0.2s ease;
}
.project:hover{
  cursor:pointer;
  transform: scale(1.04, 1.04);
}

.tipo-proyecto{
  font-size: 0.8rem;
}

h4{
  margin: 1px
}

.postulantes{
  margin-top: 10px;
  color: #3554BC
}

:deep(.p-progressbar){
  width: 70%;
  align-self: center;
  height: 30%;
  margin-top: 5px;
}

:deep(.p-progressbar .p-progressbar-value){
  background: linear-gradient(to right, #3554BC, #B864F3);
}

:deep(.p-dialog) {
  border-radius: 12px;
  background-color: #3554BC;
  display:block;
}

:deep(.p-rating .p-rating-item.p-rating-item-active .p-rating-icon) {
  color: gold;
}

:root(.p-dialog.p-component.p-ripple-disabled){
  display: block !important;
}

.project.applicant{
  height: 100%;
}
.applicants-list{
  height:100vh;
}
:root(.p-dialog-content){
  height: 100vh;
}

:deep(.p-button){
  background:#3554BC;
  border:none;
}


.choose-dev:hover{
  background: #B864F3;
}
</style>