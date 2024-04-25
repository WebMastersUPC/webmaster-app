<script>

import {DeliverableEntity} from "../models/deliverable.model.js";

export default {
  name: "deliverable-card",
  components: {},
  props: {
    deliverable: {
      type: DeliverableEntity,
      required: true
    }
  },
  computed: {
    deliverableName() {
      return this.deliverable.name;
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
      <div>
        <p>{{ deliverableName }}</p>
      </div>
    </template>
    <template #content>
      <h3>Descripcion de entrega</h3>
      <p>{{deliverable.description}}</p>
      <h3>Fecha de entrega</h3>
      <p>{{deliverable.deliveryDate}}</p>
    </template>
    <hr>
    <template #footer>
      <h3>Archivos</h3>
      <li v-for="(file, index) in deliverable.files" :key="index">
        <a :href="file" target="_blank">Archivo {{ index + 1 }}</a>
      </li>
      <pv-button label="Aprobar Entrega"></pv-button>
    </template>

  </pv-card>

</template>

<style scoped>

</style>