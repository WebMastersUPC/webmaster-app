<script>

import {DeliverableEntity} from "../models/deliverable.model.js";
import {formatDate} from "../../utils/formatDate.js";

export default {
  name: "deliverable-card",
  methods: {formatDate},
  components: {},
  props: {
    deliverable: {
      type: DeliverableEntity,
      required: true
    }
  },
  created() {
    console.log(this.deliverable);
  }
}

</script>

<template>

  <pv-card>
    <template #title>
      <div class="flex flex-column justify-content-center align-items-center mt-3 mb-4">
        <div>Entregable Nº{{deliverable.number}}</div>
      </div>
    </template>
    <template #content>
      <div class="flex flex-column ml-8 mr-8">
        <div class="flex align-items-center justify-content-start font-bold text-xl mb-3">Descripcion de entrega</div>
        <div class="flex align-items-center justify-content-center mb-3">{{deliverable.description}}</div>
        <div class="flex align-items-center justify-content-center text-lg mb-3">Fecha de entrega: {{formatDate(deliverable.deliveryDate)}}</div>
      </div>
      <hr>
    </template>
    <template #footer>
      <div class="flex flex-column justify-content-center align-items-center">
        <div class="font-bold text-xl mt-0 mb-2">Archivos</div>
        <div class="flex flex-column gap-2 mb-4">
          <li v-for="(file, index) in deliverable.files" :key="index">
            <a :href="file" target="_blank">Archivo {{ index + 1 }}</a>
          </li>
        </div>
        <pv-button label="Aprobar Entrega"></pv-button>
      </div>
    </template>

  </pv-card>

</template>

<style scoped>

</style>