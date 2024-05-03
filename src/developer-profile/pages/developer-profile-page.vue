<script>
import DeveloperProfileCard from "../components/developer-profile-card.vue";
import {AuthService} from "../../../public/services/auth.service.js";

export default {
  name: "developer-profile-page",
  components: {DeveloperProfileCard},
  data() {
    return {
      developerProfile: null,
      authService: new AuthService(),
    }
  },
  created(){

  }
}
</script>

<template>
  <div class="main-container">
    <developer-profile-card :developer="developerProfile"/>
  </div>
</template>

<style scoped>

</style>