<script>
import { DeliverableEntity } from "../../../shared/models/deliverable.model.js";
import { formatDate } from "../../../utils/formatDate.js";

export default {
  name: "deliverable-card",
  methods: {
    formatDate,
    approveDeliverable() {
      this.$emit('approve-deliverable', 'approve');
    },
    rejectDeliverable() {
      this.$emit('reject-deliverable', 'reject');
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
  <pv-card class="shadow-8 mt-8 card" aria-label="Deliverable Card">
    <template #title>
      <div class="flex flex-column justify-content-center align-items-center mt-3 mb-4" aria-label="Deliverable Title">
        <div>{{ $t('delivery-card-part1') }} {{ deliverable.orderNumber }}</div>
      </div>
    </template>
    <template #content>
      <div class="flex flex-column ml-8 mr-8" aria-label="Deliverable Content">
        <div class="flex align-items-center justify-content-start font-bold text-xl mb-3"
             aria-label="Description Label">{{ $t('delivery-card-part2') }}
        </div>
        <div class="flex align-items-center justify-content-center mb-3" aria-label="Description">
          {{ deliverable.developerDescription }}
        </div>
      </div>
      <hr aria-label="Divider">
    </template>
    <template #footer>
      <div class="flex flex-column justify-content-center align-items-center" aria-label="Deliverable Footer">
        <div class="font-bold text-xl mt-0 mb-2">{{ $t('delivery-card-part4') }}</div>
        <div class="flex flex-column gap-2 mb-4" aria-label="File Links">
          <a :href="deliverable.file" target="_blank">{{ $t('delivery-card-part5') }}</a>
        </div>
        <div class="flex flex-row justify-content-center gap-4" aria-label="Action Buttons">
          <pv-button :label="$t('delivery-card-part7')" @click="rejectDeliverable" class=" text-black-alpha-90 border-black-alpha-90 border-round-3xl text-xl bg-red-400" aria-label="Reject deliverable button" ></pv-button>
          <pv-button :label="$t('delivery-card-part6')" @click="approveDeliverable" class="text-black-alpha-90 border-black-alpha-90 border-round-3xl text-xl bg-primary-400" aria-label="Approve deliverable button"></pv-button>
        </div>

      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.card{
  width: 75%;
  max-width: 800px;
  margin: 0 auto 9rem;
}
</style>
