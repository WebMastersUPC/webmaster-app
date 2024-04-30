<script>
import CreateDeliverableCard from "../components/create-deliverable-card.component.vue";
import ConfirmationCreateDeliverable from "../components/confirmation-create-deliverable.component.vue";

export default {
  name: "create-deliverable",
  components: {
    ConfirmationCreateDeliverable,
    CreateDeliverableCard,
  },
  data() {
    return {
      showConfirmationDialog: false,
    }
  }
}
</script>

<template>

  <div :class="{ blur: showConfirmationDialog }">
    <create-deliverable-card @approve-delivery="showConfirmationDialog = true"></create-deliverable-card>
  </div>
  <div v-if="showConfirmationDialog" class="dialog-container">
    <confirmation-create-deliverable @cancel="showConfirmationDialog = false"></confirmation-create-deliverable>
  </div>

</template>

<style scoped>

.blur {
  filter: blur(2px);
}

.dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Optional: This adds a semi-transparent background */
}

</style>