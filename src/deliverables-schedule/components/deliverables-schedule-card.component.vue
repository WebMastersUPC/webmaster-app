<script >


import {DeliverableEntity} from "../models/deliverable.entity.js";

export default{
  name: "deliverables-schedule-card",
  components: {},
  props: {
    deliverable: {
      type: DeliverableEntity,
      required: true
    }
  }

}

</script>

<template>

  <pv-card class="w-8 border-round-3xl shadow-4">
    <template #header>
      <div class="box flex flex-row justify-content-center mt-4 -mb-4 gap-5 mx-3 text-container overflow-hidden">
        <h2>{{deliverable.name}}</h2>
      </div>
    </template>


    <template #title>
      <p class="-mb-1 ">
        Descripción
      </p>
    </template>

    <template #content>

      <div class="box2 flex flex-row">

        <div class="box xl:mr-8 sm:mr-2 text-container overflow-hidden">
          {{deliverable.description}}
        </div>

        <div class='box3 flex flex-column mr-5 -mt-6'>

          <div>
            <div class=" flex flex-column align-items-center relative-container">
              <span class="pi pi-stopwatch" style="font-size: 2rem"></span>
            </div>
            <div class=" flex flex-column align-items-center -mt-3">
              <p class="">Fecha </p>
              <p class="-mt-3">límite </p>
            </div>

          </div>

          <div class=' flex flex-column'>
            <div class=" flex flex-column align-items-center ">
              <span class="pi pi-times-circle" style="font-size: 2rem"></span>
            </div>
            <div class=" flex flex-column align-items-center -mt-3">
              <p class="">Estado</p>
            </div>
          </div>


        </div>


      </div>
    </template>
  </pv-card>


</template>

<style scoped>
.box {
  overflow-wrap: break-word;
}

</style>
