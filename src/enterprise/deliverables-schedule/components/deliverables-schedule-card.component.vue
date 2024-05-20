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

  <pv-card class="w-8 border-round-3xl shadow-4" aria-label="Deliverable Card">
    <template #header>
      <div class="flex flex-row justify-content-center mt-4 -mb-4 gap-5 mx-4 overflow-hidden" aria-label="Deliverable Header">
        <h2 v-if="!isEditingTitle">{{ deliverable.title }}</h2>
        <pv-textarea style="width: 70%; height: 70%;" v-else v-model="deliverable.title" autoResize aria-label="Title Textarea"></pv-textarea>
        <pv-button @click="EditingTitle" icon="pi pi-pencil" class="icons" v-if="!isEditingTitle" aria-label="Edit Title Button"></pv-button>
        <pv-button @click="EditingTitle" icon="pi pi-check" class="icons" v-else aria-label="Save Title Button"></pv-button>
      </div>
    </template>

    <template #title>
      <p class="-mb-1" aria-label="Description Label">
        {{$t('deliverables-schedule-card-part1')}}
        <pv-button @click="EditingDescription" icon="pi pi-pencil" class="icons" v-if="!isEditingDescription" aria-label="Edit Description Button"></pv-button>
        <pv-button @click="EditingDescription" icon="pi pi-check" class="icons" v-else aria-label="Save Description Button"></pv-button>
      </p>
    </template>

    <template #content>
      <div class="flex flex-row justify-content-between" aria-label="Deliverable Content">
        <div class="text-container overflow-hidden flex flex-column w-10 h-5" aria-label="Description Content">
          <p v-if="!isEditingDescription">{{deliverable.description}}</p>
          <pv-textarea style="width: 100%; height: 100%;" v-else v-model="deliverable.description" aria-label="Description Textarea"></pv-textarea>
        </div>

        <div class='flex flex-column mr-5 -mt-6' aria-label="Additional Information">
          <div aria-label="Delivery Date Information">
            <div class="flex flex-column align-items-center relative-container ml-5">
              <span class="pi pi-stopwatch" style="font-size: 2rem"></span>
            </div>
            <div class="flex flex-column align-items-center -mt-3 ml-5 ">
              <p class="">{{ deliverable.deadLineDate }}</p>
              <p class="-mt-3">{{ deliverable.deadLineHour }}</p>
            </div>
          </div>

          <div aria-label="Status Information" class='flex flex-column'>
            <div class="flex flex-column align-items-center ml-5">
              <span class="pi pi-times-circle" style="font-size: 2rem"></span>
            </div>
            <div class="flex flex-column align-items-center -mt-3 ml-5">
              <p class="">{{$t('deliverables-schedule-card-part3')}}</p>
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
