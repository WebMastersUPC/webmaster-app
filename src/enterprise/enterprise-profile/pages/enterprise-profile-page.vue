<script>
import {AuthService} from "../../../../public/services/auth.service.js";
import {CompanyEntity} from "../models/company.model.js";
import EnterpriseProjectCard from "../components/enterprise-project-card.component.vue";
import EnterpriseProfileCard from "../components/enterprise-profile-card.component.vue";

export default {
  name: "enterprise-profile-page",
  components: {EnterpriseProfileCard, EnterpriseProjectCard},
  data() {
    return {
      developerProfile: null,
      developerRepository: null,
      authService: new AuthService(),
    }
  },
  created(){
    let id = localStorage.getItem('enterprise id');

    if (!id) {
      id = '1';
      localStorage.setItem('enterprise id', id);
    }


    const url = `http://localhost:3000/enterprises/${id}`;
    console.log("URL", url);


    this.authService.getEnterpriseInfoByID(id).then((response)=> {
      this.developerProfile = new CompanyEntity(
          response.data.username,
          response.data.imageProfile,
          response.data.summary,
          response.data.country,
          response.data.socialRazon,
          response.data.cellphone,
          response.data.email,
          response.data.website,
          response.data.sector,
          response.data.projects
      );
      this.developerRepository = response.data.projects;
    }).catch((error) => {
      console.error("Error en la solicitud:", error);
    });
  },
  methods(){

  },
}
</script>

<template>
  <div class="flex justify-content-evenly flex-wrap mb-5" v-if="developerRepository ">
    <enterprise-profile-card :developer="developerProfile"/>
    <enterprise-project-card :projects="developerRepository"/>
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