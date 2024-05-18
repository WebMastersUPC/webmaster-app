<script>
import Paginator from "primevue/paginator";
import {AuthService} from "../../../../public/services/auth.service.js";
import ProjectCard from "../components/project-card.component.vue";

export default{
  name: "search-project-list",
  components: {
    ProjectCard,
    'project-card': ProjectCard,
    'pv-paginator': Paginator
  },
  data() {
    return {
      projects: [],
      company: [],
      first: 0,
      itemsPerPage: 5,
      authService: new AuthService()
    }
  },
  computed: {
    paginatedDevelopers() {
      return this.projects.slice(this.first, this.first + this.itemsPerPage);
    }
  },
  created(){
    let id = localStorage.getItem('user id')
    this.authService.getEnterpriseInfoByID(id).then((response) => {
      this.projects = response.data.projects;
      this.company = response.data;
      console.log('Array:',this.projects);
    });
  },
  methods: {
    onPageChange(event) {
      this.first = event.first;
      this.itemsPerPage = event.rows;

    }
  }
}
</script>

<template>
  <div class="grid col-fixed justify-content-center gap-5 mt-8 mb-4">
    <project-card v-for="projects in paginatedDevelopers"
                    :key="projects.name"
                    :projects="projects"
                    :company="company"></project-card>
  </div>
  <pv-paginator :first="first" :rows="itemsPerPage" :totalRecords="projects.length"
                :rowsPerPageOptions="[5,10,20]" @page="onPageChange"></pv-paginator>
</template>

<style scoped>
:deep(.p-paginator.p-component){
  background: transparent;
}
:deep(.p-paginator.p-component button){
  color: #ffffff;
}
:deep(.p-paginator-page.p-paginator-element.p-link.p-highlight){
  background: #bb0dbb;
}
:deep(.p-paginator-page.p-paginator-element.p-link:hover){
  background: rgba(187, 13, 187, 0.54);
}
</style>