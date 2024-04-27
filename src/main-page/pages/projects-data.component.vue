<script>
import { ProjectEntity } from '../models/project.model.js';
import {DeveloperEntity} from "../models/developer.model.js";
import ProjectsPanelComponent from "../components/projects-panel.component.vue";

export default {
  components: {
    ProjectsPanelComponent,
  },
  data() {
    return {
      myProjects:[]
    };
  },
  created(){
    this.myProjects= [
      new ProjectEntity("Project A", "Graphic Design", "Creating a website for a local business", 10, 50,true),
      new ProjectEntity("Project X", "Web Development", "Designing logos and branding materials for startups", 7, 0, false,
      [new DeveloperEntity('Joseph',
          'https://raw.githubusercontent.com/WebMastersUPC/FromZero-LandingPage/main/src/assets/images/Joseph.png',
          4,
          'esto es una descripcion',
          "Peru",
          99999999,
          "example@mail.com",
          3,
          "CSS, Javascript, HTML5, C++, Python, Vue, Angular, MOO, Binario"),
          new DeveloperEntity("Samira",
              "https://raw.githubusercontent.com/WebMastersUPC/FromZero-LandingPage/main/src/assets/images/Samira.png",
              4,
              "esto es otra descripción diferente",
              "Peru",
              123456789,
              "email@example.com",
              4,
              "Java, SQL, React, Node.js, MongoDB, HTML, CSS")

      ]
      ),
      new ProjectEntity("Project Alpha", "Machine Learning", "Implementing a recommendation system for an e-commerce platform", 15, 80, true)
      // Add more ProjectEntity instances as needed
    ]
  }
};
</script>

<template>
  <div>
    <ProjectsPanelComponent :projects="myProjects"/>
  </div>
</template>

<style scoped>

</style>