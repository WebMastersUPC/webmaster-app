<script>
import DevDataComponent from "../../../developer/home-developer/pages/home-page.component.vue";
import CompanyDataComponent from "./company-data.component.vue"
import ProjectsDataComponent from "./projects-data.component.vue";

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