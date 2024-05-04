<script>
import DeveloperProfileCard from "../components/developer-profile-card.vue";
import {AuthService} from "../../../public/services/auth.service.js";
import DeveloperRepositoryCard from "../components/developer-repository-card.vue";

export default {
  name: "developer-profile-page",
  components: {DeveloperRepositoryCard, DeveloperProfileCard},
  data() {
    return {
      developerProfile: null,
      developerRepository: null,
      authService: new AuthService(),
    }
  },
  created(){
    let id = localStorage.getItem('developer id');
    this.authService.getDevInfoByID(id).then((response)=> {
      this.developerProfile = response.data;
      this.developerRepository = response.data.repository;
    })
  },
  methods(){

  },
}
</script>

<template>
  <div class="flex justify-content-evenly flex-wrap mb-5" v-if="developerRepository ">
    <developer-profile-card :developer="developerProfile"/>
    <developer-repository-card :projects="developerRepository"/>
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