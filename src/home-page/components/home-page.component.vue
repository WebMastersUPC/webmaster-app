<script>
import DevDataComponent from "../pages/dev-data.component.vue";
import CompanyDataComponent from "../pages/company-data.component.vue"
import ProjectsDataComponent from "../pages/projects-data.component.vue";

export default {
  name: "home-page",
  components: { DevDataComponent, ProjectsDataComponent,CompanyDataComponent},
  data() {
    return {
    };
  },
  methods: {

  },
};
</script>

<template>
  <div class="main-container">
    <company-data-component/>
    <projects-data-component/>
  </div>
</template>

<style scoped>
.main-container{
  display:flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 6rem;
}
</style>