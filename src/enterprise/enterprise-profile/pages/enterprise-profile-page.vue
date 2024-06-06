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
      enterpriseProfile: null,
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
      this.enterpriseProfile = new CompanyEntity(
          response.data.enterprise_name,
          response.data.profile_img_url,
          response.data.description,
          response.data.country,
          response.data.RUC,
          response.data.phone,
          response.data.website,
          response.data.sector,
          response.data.User
      );
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
    <enterprise-profile-card :enterprise="enterpriseProfile"/>
    <!--<enterprise-project-card :projects="developerRepository"/>-->
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