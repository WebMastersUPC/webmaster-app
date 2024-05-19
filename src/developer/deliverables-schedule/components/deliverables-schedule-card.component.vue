<script >


import {DeliverableEntity} from "../models/deliverable.entity.js";

export default{
  name: "deliverables-schedule-card",
  components: {},
  data() {
    return {

    };
  },
  methods: {

  },
  props: {
    deliverable: {
      type: DeliverableEntity,
      required: true
    }
  }

}

</script>

<template>

  <pv-card class="w-8 border-round-3xl shadow-4" aria-label="Deliverable Card">
    <template #header>
      <div class="flex flex-row justify-content-center mt-4 -mb-4 gap-5 mx-4 overflow-hidden" aria-label="Deliverable Header">
        <h2>{{ deliverable.name }}</h2>
      </div>
    </template>

    <template #title>
      <p class="-mb-1" aria-label="Description Label">
        Descripción
      </p>
    </template>

    <template #content>
      <div class="flex flex-row justify-content-between" aria-label="Deliverable Content">
        <div class="text-container overflow-hidden flex flex-column w-10 h-5" aria-label="Description Content">
          <p >{{deliverable.description}}</p>
        </div>

        <div class='flex flex-column mr-5 -mt-6' aria-label="Additional Information">
          <div aria-label="Delivery Date Information">
            <div class="flex flex-column align-items-center relative-container ml-5">
              <span class="pi pi-stopwatch" style="font-size: 2rem"></span>
            </div>
            <div class="flex flex-column align-items-center -mt-3 ml-5">
              <p class="">Fecha límite</p>
            </div>
          </div>

          <div aria-label="Status Information" class='flex flex-column'>
            <div class="flex flex-column align-items-center ml-5">
              <span class="pi pi-times-circle" style="font-size: 2rem"></span>
            </div>
            <div class="flex flex-column align-items-center -mt-3 ml-5">
              <p class="">Estado</p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </pv-card>



</template>

<style scoped>

.icons{
  color: rgba(184, 100, 243, 0.54);
  background-color:white;
  border:none;
}
.box {
  overflow-wrap: break-word;
}

textarea {
  resize: none;
}

</style>
