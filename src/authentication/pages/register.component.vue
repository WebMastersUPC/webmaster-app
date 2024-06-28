<script >

import RegisterCard from "../components/register-card.component.vue";
import {AuthService} from "../../../public/services/auth.service.js";

export default {
  name: "register",
  components: {RegisterCard},
  data(){
    return{
      authService: new AuthService(),

    }
  },
methods: {
  async createAccount(userData) {
    console.log("createAccount")
    console.log(userData)
    this.selectedRole = userData.selectedRole;

    if (this.selectedRole === 'empresa') {
      const enterpriseData = {
        Mail: userData.mail,
        Password: userData.password,
        user_type: "E",
        enterprise_name: userData.companyName
      };
      this.authService.registerDeveloper(enterpriseData).then((response) => {
        console.log(response)
        if (response.status === 201) {
          console.log("Desarrollador creado");
          // this.$router.push('/login')
        }
      });
    }
    if (this.selectedRole === 'desarrollador') {
      const developerData = {
        Mail: userData.mail,
        Password: userData.password,
        firstName: userData.firstName,
        user_type: "D",
        lastName: userData.lastName
      };
      this.authService.registerDeveloper(developerData).then((response) => {
        console.log(response)
        if (response.status === 201) {
          console.log("Desarrollador creado");
        }
      });
    }
  }
},
};
</script>

<template>

  <register-card @register="createAccount"></register-card>

</template>

<style scoped>

</style>