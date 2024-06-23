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
      projectService: new ProjectService(),
      projectsData:[],
      applicantsData:[],
      myProjects:[]
    };
  },
  created(){
    let id = localStorage.getItem('enterprise id')
    this.projectService.getProjectByEnterprise(id).then((response) => {
      this.projectsData = response;
      this.createProject()
    });

  },
  methods:{
    createProject(){
      this.myProjects = this.projectsData.map(project => new ProjectEntity(
          project.project_ID,
          project.nameProject,
          project.type,
          project.descriptionProject,
          project.languages,
          project.frameworks,
          project.budget,
          project.methodologies,
          project.enterprise_id,
          project.applicants_id,
          project.developer_id,
          project.progress,
          project.started
      ));
    },
    applicantHandler(data){
      let entity = { developer_id: data.numberApplicant };
      this.projectService.assignDeveloper(data.numberProjectId, entity)
      console.log(entity)
    }
  }
};
</script>

<template>
  <div v-if="myProjects">
    <ProjectsPanelComponent :projects="myProjects" @chooseDeveloper="applicantHandler"/>
  </div>
</template>

<style scoped>

</style>