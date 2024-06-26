<script>
import { DeliverableEntity } from "../../../shared/models/deliverable.model.js";

export default {
  name: "deliverables-schedule-card",
  props: {
    deliverable: {
      type: DeliverableEntity,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    openEditModal() {
      this.$emit('edit-deliverable', this.deliverable);
    },
    goToReviewDeliverable() {
      const projectId = this.deliverable.projectID;
      const deliverableId = this.deliverable.deliverable_id;
      this.$router.push(`/Projects/${projectId}/Deliverables/${deliverableId}/Review`);
    }
  }
};
</script>

<template>
  <pv-card class="w-8 border-round-3xl shadow-4 card" aria-label="Deliverable Card">
    <template #header>
      <div class="flex flex-row justify-content-center mt-4 -mb-4 gap-5 mx-4 overflow-hidden" aria-label="Deliverable Header">
        <h2>{{ deliverable.title }}</h2>
        <pv-button @click="openEditModal" icon="pi pi-pencil" class="icons" aria-label="Edit Button"></pv-button>
        <pv-button @click="goToReviewDeliverable" icon="pi pi-eye" class="icons" aria-label="Review Button"></pv-button>
      </div>
    </template>

    <template #title>
      <p class="-mb-1" aria-label="Description Label">
        {{ $t('deliverables-schedule-card-part1') }}
      </p>
    </template>

    <template #content>
      <div class="flex flex-row justify-content-between" aria-label="Deliverable Content">
        <div class="text-container overflow-hidden flex flex-column w-10 h-5" aria-label="Description Content">
          <p>{{ deliverable.description }}</p>
        </div>

        <div class='flex flex-column ' aria-label="Additional Information">
          <div aria-label="Delivery Date Information">
            <div class="flex flex-column align-items-center relative-container ml-5">
              <span class="pi pi-stopwatch" style="font-size: 2rem"></span>
            </div>
            <div class="flex flex-column align-items-center -mt-3 ml-5">
              <p>{{ formatDate(deliverable.deadline) }}</p>
            </div>
          </div>

          <div aria-label="Status Information" class='flex flex-column'>
            <div class="flex flex-column align-items-center ml-5">
              <span class="pi pi-times-circle" style="font-size: 2rem"></span>
            </div>
            <div class="flex flex-column align-items-center -mt-3 ml-5">
              <p>{{ deliverable.state }}</p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.icons {
  color: rgba(184, 100, 243, 0.54);
  background-color: white;
  border: none;
}
textarea {
  resize: none;
}
</style>
