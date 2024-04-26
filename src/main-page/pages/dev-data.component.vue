<script>
import DevMainPageComponent from "../components/dev-main-page.component.vue";
import {DeveloperEntity} from "../models/developer.model.js";

export default {
  name: "dev-data",
  components:{DevMainPageComponent},
  props: {
    projects: {
      type: Array,
      required: true,
    }
  },
  data(){
    return{
      myDev:null
    }
  },
  created(){
    this.myDev=new DeveloperEntity('Zado',
        4,
        'Hola esto es un texto por defecto, no hay ningun tipo de informacion relevante aca. Para que sigues leyendo, ya te dije que no hay nada. Para de leer, porfavor te lo estoy pidiendo amablemente. Felicidades pertiste tu tiempo leyendo este texto inutil',
        'Peru',
        99999999,
        'example@mail.com',
        3,
        'CSS, Javascript, HTML5, C++, Python, Vue, Angular, MOO, Binario',
        [
            this.projects
        ]);
    console.log(this.myDev.projects);
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