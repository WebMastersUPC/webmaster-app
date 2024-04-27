<script>
import DevMainPageComponent from "../components/dev-main-page.component.vue";
import {DeveloperEntity} from "../models/developer.model.js";

export default {
  name: "dev-data",
  components:{DevMainPageComponent},
  data(){
    return{
      myDev:null
    }
  },
  created(){
    this.myDev=new DeveloperEntity('Jair',
        'https://raw.githubusercontent.com/WebMastersUPC/FromZero-LandingPage/main/src/assets/images/Jair.png',
        4,
        'Hola esto es un texto por defecto, no hay ningun tipo de informacion relevante aca. Para que sigues leyendo, ya te dije que no hay nada. Para de leer, porfavor te lo estoy pidiendo amablemente. Felicidades pertiste tu tiempo leyendo este texto inutil',
        'Peru',
        99999999,
        'example@mail.com',
        3,
        'CSS, Javascript, HTML5, C++, Python, Vue, Angular, MOO, Binario'
    );
  }
}
</script>

<template>
  <div >
    <DevMainPageComponent :developer="myDev"></DevMainPageComponent>
  </div>
</template>

<style scoped>

</style>