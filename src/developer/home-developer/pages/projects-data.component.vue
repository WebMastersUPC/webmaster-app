<script>
import {DeveloperEntity} from "../../../shared/models/developer.model.js";
import ProjectsPanelComponent from "../components/projects-panel.component.vue";
import {AuthService} from "../../../../public/services/auth.service.js";

export default {
  components: {
    ProjectsPanelComponent,
  },
  data() {
    return {
      authService: new AuthService(),
      proyectsData:[],
      applicantsData:[],
      myProjects:[]
    };
  },
  created(){
    let id = localStorage.getItem('user id')
    this.authService.getEnterpriseInfoByID(id).then((response) => {
      this.proyectsData = response.data.projects;
      this.createProject()
    });

  },
  methods:{
    createProject(){
      this.myProjects = this.proyectsData
    }
  }
};
</script>

<template>
  <div v-if="myProjects">
    <ProjectsPanelComponent :projects="myProjects"/>
  </div>
</template>

<style scoped>

</style>