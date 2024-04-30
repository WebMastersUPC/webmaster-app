<script >


import {DeliverableEntity} from "../models/deliverable.entity.js";

export default{
  name: "deliverables-schedule-card",
  components: {},
  data() {
    return {
      isEditingTitle: false,
      isEditingDescription:false
    };
  },
  methods: {

    EditingDescription() {
      this.isEditingDescription = !this.isEditingDescription;
    },

    EditingTitle() {
      this.isEditingTitle = !this.isEditingTitle;
    },
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

  <pv-card class="w-8 border-round-3xl shadow-4">
    <template #header>
      <div class=" flex flex-row justify-content-center mt-4 -mb-4 gap-5 mx-4  overflow-hidden">
        <h2 v-if="!isEditingTitle">{{ deliverable.name }}</h2>
        <pv-textarea style="width: 70%; height: 70%;" v-else v-model="deliverable.name" autoResize/>
        <pv-button @click="EditingTitle" icon="pi pi-pencil" class="icons" v-if="!isEditingTitle" />
        <pv-button @click="EditingTitle" icon="pi pi-check" class="icons" v-else />
      </div>

    </template>


    <template #title>
      <p class="-mb-1 ">
        Descripción
        <pv-button @click="EditingDescription" icon="pi pi-pencil" class="icons" v-if="!isEditingDescription" />
        <pv-button @click="EditingDescription" icon="pi pi-check" class="icons" v-else />
      </p>
    </template>

    <template #content>

      <div class=" flex flex-row justify-content-between">

        <div class=" text-container overflow-hidden flex flex-column w-10 h-5" >
          <p v-if="!isEditingDescription">{{deliverable.description}}</p>
          <pv-textarea  style="width: 100%; height: 100%;" v-else v-model="deliverable.description" />
        </div>

        <div class='flex flex-column mr-5 -mt-6 '>

          <div>
            <div class=" flex flex-column align-items-center relative-container ml-5">
              <span class="pi pi-stopwatch" style="font-size: 2rem"></span>
            </div>
            <div class=" flex flex-column align-items-center -mt-3 ml-5">
              <p class="">Fecha </p>
              <p class="-mt-3">límite </p>
            </div>

          </div>

          <div class=' flex flex-column'>
            <div class=" flex flex-column align-items-center ml-5">
              <span class="pi pi-times-circle" style="font-size: 2rem"></span>
            </div>
            <div class=" flex flex-column align-items-center -mt-3 ml-5">
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
