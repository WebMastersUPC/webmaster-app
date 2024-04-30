<script>
import CompanyMainPageComponent from "../components/company-main-page.component.vue";
import {CompanyEntity} from "../models/company.model.js";

export default {
  name: "company-data",
  components:{CompanyMainPageComponent},
  data(){
    return{
      myCom:null
    }
  },
  created(){
    this.myCom=new CompanyEntity('André Corp.',
        'https://raw.githubusercontent.com/WebMastersUPC/FromZero-LandingPage/main/src/assets/images/Andre.png',
        'Hola esto es un texto por defecto, no hay ningun tipo de informacion relevante aca. Para que sigues leyendo, ya te dije que no hay nada. Para de leer, porfavor te lo estoy pidiendo amablemente. Felicidades pertiste tu tiempo leyendo este texto inutil',
        'Peru',
        12321321,
        99999999,
        'example@mail.com',
        'https://example.com',
        'clothes');
  }
}
</script>

<template>
  <div >
    <CompanyMainPageComponent :company="myCom"></CompanyMainPageComponent>
  </div>
</template>

<style scoped>

</style>