<script>
import CompanyMainPageComponent from "../components/company-main-page.component.vue";
import {CompanyEntity} from "../../../shared/models/company.model.js";
import {AuthService} from "../../../../public/services/auth.service.js";


export default {
  name: "company-data",
  components:{CompanyMainPageComponent},
  data(){
    return{
      authService: new AuthService(),
      myCom:null,
      enterprise:null
    }
  },
  created(){
    let id = localStorage.getItem('user id')
     this.authService.getEnterpriseInfoByID(id).then((response) => {
     this.enterprise = response.data;
       //console.log('a',this.enterprise);
       this.createUser()
    });
  },
  methods:{
    createUser(){
      return this.myCom = new CompanyEntity(this.enterprise.username,
          this.enterprise.imageProfile,
          this.enterprise.summary,
          this.enterprise.country,
          this.enterprise.socialRazon,
          this.enterprise.cellphone,
          this.enterprise.email,
          this.enterprise.website,
          this.enterprise.sector);
    }
  }
}
</script>

<template>
  <div v-if="enterprise">
    <CompanyMainPageComponent :company="myCom"></CompanyMainPageComponent>
  </div>
</template>

<style scoped>

</style>