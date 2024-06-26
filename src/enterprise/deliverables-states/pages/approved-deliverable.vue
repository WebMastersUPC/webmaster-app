<script>
import {DeliverableEntity} from "../../../shared/models/deliverable.model.js";

export default {
  name: "approved-deliverable",
  props: {
    deliverable: {
      type: DeliverableEntity,
      required: true
    }
  },
  methods: {
    goToDeliverableList() {
      const { projectId} = this.$route.params;
      this.$router.push(`/Projects/${projectId}/Deliverables`);
    }
  }
}
</script>

<template>
  <div class="flex flex-column align-items-center">
    <div class="bg-white p-4 border-round-xl m-8 w-8 flex justify-content-center">
      <p class="text-4xl">{{ $t('approved-deliverable') }} </p>
    </div>

    <div class="flex justify-content-center mb-8">
      <pv-button @click="goToDeliverableList" class="bg-white text-black-alpha-90 border-black-alpha-90 border-round-3xl text-xl mt-6 mb-8" aria-label="Back Button">{{ $t('back-button') }}</pv-button>
    </div>

  </div>
</template>

<style scoped>

</style>