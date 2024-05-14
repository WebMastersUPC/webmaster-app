<script>

import {DeliverableEntity} from "../../../shared/models/deliverable.model.js";
import {formatDate} from "../../../utils/formatDate.js";

export default {
  name: "deliverable-card",
  methods: {
    formatDate,
    approveDelivery() {
      this.$emit('approve-delivery');
    }
  },
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

  <pv-card class="shadow-8" aria-label="Deliverable Card">
    <template #title>
      <div class="flex flex-column justify-content-center align-items-center mt-3 mb-4" aria-label="Deliverable Title">
        <div>Entregable Nº{{deliverable.number}}</div>
      </div>
    </template>
    <template #content>
      <div class="flex flex-column ml-8 mr-8" aria-label="Deliverable Content">
        <div class="flex align-items-center justify-content-start font-bold text-xl mb-3" aria-label="Description Label">Descripcion de entrega</div>
        <div class="flex align-items-center justify-content-center mb-3" aria-label="Description">{{deliverable.description}}</div>
        <div class="flex align-items-center justify-content-center text-lg mb-3" aria-label="Delivery Date">Fecha de entrega: {{formatDate(deliverable.deliveryDate)}}</div>
      </div>
      <hr aria-label="Divider">
    </template>
    <template #footer>
      <div class="flex flex-column justify-content-center align-items-center" aria-label="Deliverable Footer">
        <div class="font-bold text-xl mt-0 mb-2">Archivos</div>
        <div class="flex flex-column gap-2 mb-4" aria-label="File Links">
          <li v-for="(file, index) in deliverable.files" :key="index">
            <a :href="file" target="_blank">Archivo {{ index + 1 }}</a>
          </li>
        </div>
        <pv-button label="Aprobar Entrega" @click="approveDelivery" aria-label="Approve Delivery Button"></pv-button>
      </div>
    </template>
  </pv-card>


</template>

<style scoped>

</style>