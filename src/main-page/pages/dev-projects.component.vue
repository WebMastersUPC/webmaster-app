<script>
import DevData from './dev-data.component.vue
import { ProjectEntity } from '../models/project.model.js';

export default {
  components: {
    DevData,
  },
  data() {
    return {
      myProjects:[]
    };
  },
  created(){
    this.myProjects= [
      new ProjectEntity("Project A", "Web Development", "Creating a website for a local business", 10, 50),
      new ProjectEntity("Project X", "Graphic Design", "Designing logos and branding materials for startups", 7, 40),
      new ProjectEntity("Project Alpha", "Machine Learning", "Implementing a recommendation system for an e-commerce platform", 15, 80)
      // Add more ProjectEntity instances as needed
    ]
  }
};
</script>

<template>
  <div>
    <dev-data :projects="myProjects" />
  </div>
</template>

<style scoped>

</style>