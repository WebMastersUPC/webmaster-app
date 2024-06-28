<script>
import {DeveloperEntity} from "../../../shared/models/developer.model.js";
import ProjectsPanelComponent from "../components/projects-panel.component.vue";
import {AuthService} from "../../../../public/services/auth.service.js";
import {HomeService} from "../../../../public/services/home.service.js";
import {ProjectService} from "../../../../public/services/project.service.js";
import {ProjectEntity} from "../../../shared/models/project.model.js";

export default {
  components: {
    ProjectsPanelComponent,
  },
  data() {
    return {
      homeService: new HomeService(),
      projectService: new ProjectService,
      projectsData:[],
      applicantsData:[],
      myProjects:[]
    };
  },
  created(){
    let id = localStorage.getItem('developer id')
    this.projectService.getProjectByDeveloper(id).then((response) => {
      this.projectsData = response;
      this.createProject()
    });

  },
  methods:{
    createProject() {
      this.myProjects = this.projectsData.map(project => new ProjectEntity({
        project_ID: project.project_ID,
        nameProject: project.nameProject,
        projectProgressBar: project.projectProgressBar,
      }));
    }
  }
};
</script>

<template>
  <div v-if="myProjects">
    <ProjectsPanelComponent v-if="myProjects" :projects="myProjects"/>
  </div>
</template>

<style scoped>

</style>