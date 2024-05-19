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
      console.log('a',this.developer);
      this.createUser()
    });

  },
  methods:{
    createUser(){
      return this.myDev = new DeveloperEntity(this.developer.id,
          this.developer.name,
          this.developer.profileImage,
          this.developer.rating,
          this.developer.description,
          this.developer.country,
          this.developer.cellphone,
          this.developer.email,
          this.developer.completedProjects,
          this.developer.skills,
          this.developer.projects
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