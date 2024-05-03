<script >
import LoginCard from "../components/login-card.component.vue";
import {AuthService} from "../../../public/services/auth.service.js";

export default {
  name: "login",
  components: {LoginCard},
  data(){
    return{
      authService: new AuthService(),
      users:[],
      loggedId:0,
      userType:''
    }
  },
  created() {
    this.authService.getUsers().then((response) => {
      this.users = response.data;
      console.log(this.users);
    });
  },
  methods:{
    handleLogin(userData) {
      // userData contendrá user y password enviados desde el componente LoginCard
      this.user = userData.user;
      this.password = userData.password;

      console.log('User:', this.user);
      console.log('Password:', this.password);

      // Iterar sobre los usuarios y comparar credenciales
      for (let i = 0; i < this.users.length; i++) {
        const currentUser = this.users[i];
        if (currentUser.username === this.user && currentUser.password === this.password) {
          console.log("Usuario encontrado");
          this.loggedId = currentUser.id
          this.userType = currentUser.accountType;
          console.log(this.loggedId, this.userType);
          this.navigateToHome();
          return; // Salir del bucle si se encuentra el usuario
        }
      }
      // Si el bucle termina y no se encuentra el usuario
      console.log("Usuario no encontrado");
    },
    navigateToHome() {
      //elimina datos del array pq ya no se van a usar
      this.users=[]
      if (this.userType === 0) {
        this.userType = 'enterprises'
      }else{
        this.userType = 'developers'
      }
      this.saveUserToLocalStorage(this.loggedId,this.userType);
      this.$router.push(`/main/${this.userType}/${this.loggedId}`);
    },
    saveUserToLocalStorage(id, type) {
      const idJSON = JSON.stringify(id);
      const typJSON =(type);

      localStorage.setItem('user id', idJSON);
      localStorage.setItem('user type', typJSON)
    }
  }
}
</script>

<template>

  <login-card @login="handleLogin"/>

</template>

<style scoped>

</style>