<script>

import {DeliverableEntity} from "../models/deliverable.model.js";
import PvButton from "../../main.js";

export default {
  name: "review-deliverable.component",
  components: {PvButton},
  data(){
    return {
      deliverable: DeliverableEntity
    }
  },
}

</script>

<template>

  <pv-card>
    <template #title>
      {{ deliverable.deliverableName }}
    </template>
    <template #content>
      <h3>Descripcion de entrega</h3>
      <p>{{deliverable.deliverableDescription}}</p>
      <h3>Fecha de entrega</h3>
      <p>{{deliverable.deliverableDeliveryDate}}</p>
    </template>
    <hr>
    <template #footer>
      <h3>Archivos</h3>
      <li v-for="(file, index) in deliverable.deliverableFiles" :key="index">
        <a :href="file" target="_blank">Archivo {{ index + 1 }}</a>
      </li>
      <pv-button label=""></pv-button>
    </template>

  </pv-card>

</template>

<style scoped>

</style>