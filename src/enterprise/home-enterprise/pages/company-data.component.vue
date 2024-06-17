<script>
import CompanyMainPageComponent from "../components/company-main-page.component.vue";
import {CompanyEntity} from "../../../shared/models/company.model.js";
import {AuthService} from "../../../../public/services/auth.service.js";
import {HomeService} from "../../../../public/services/home.service.js";


export default {
  name: "company-data",
  components:{CompanyMainPageComponent},
  data(){
    return{
      homeService: new HomeService(),
      myCom:null,
      enterprise:null
    }
  },
  created(){
    let id = localStorage.getItem('user id')
     this.homeService.getEnterpriseInfoByID(id).then((response) => {
     this.enterprise = response.data;
       console.log(this.enterprise);
       this.createUser()
       console.log(this.myCom)
    });
  },
  methods:{
    createUser(){
      return this.myCom = new CompanyEntity(
          this.enterprise.enterprise_name,
          this.enterprise.profile_img_url,
          this.enterprise.description,
          this.enterprise.country,
          this.enterprise.ruc,
          this.enterprise.phone,
          this.enterprise.website,
          this.enterprise.sector,
          this.enterprise.user
      )
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