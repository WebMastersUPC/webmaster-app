<script>
import DevMainPageComponent from "../components/dev-main-page.component.vue";
import {DeveloperEntity} from "../../../shared/models/developer.model.js";
import {AuthService} from "../../../../public/services/auth.service.js";

export default {
  name: "developer-data-component",
  components:{DevMainPageComponent},
  data(){
    return{
      authService : new AuthService(),
      myDev:null,
      developer:null
    }
  },
  created(){
    let id=localStorage.getItem('user id');
    this.authService.getDevInfoByID(id).then((response) => {
      this.developer = response.data;
      console.log('a2 ',this.developer);
      this.createUser()
    });

  },
  methods:{
    createUser(){
      return this.myDev = new DeveloperEntity(
          this.developer.id,
          this.developer.firstName,
          this.developer.lastName,
          this.developer.description,
          this.developer.country,
          this.developer.phone,
          this.developer.completed_projects,
          this.developer.specialties,
          this.developer.profile_img_url,
          this.developer.user
      );
    }
  }
}
</script>

<template>
  <div v-if="developer">
    <DevMainPageComponent :developer="myDev"></DevMainPageComponent>
  </div>
</template>

<style scoped>

</style>