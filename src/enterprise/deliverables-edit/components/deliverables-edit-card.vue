<script>
import {DeliverableService} from "../../../../public/services/deliverable.service.js";

export default {
  name: 'deliverable-edit-card',
  data() {
    return {
      deliverable: null,
      deliverableService: new DeliverableService(),
    };
  },
  async created() {
    const { projectId, deliverableId } = this.$route.params;
    await this.fetchDeliverable(projectId, deliverableId);
  },
  methods: {
    async fetchDeliverable(projectId, deliverableId) {
      try {
        const deliverable = await this.deliverableService.getDeliverableById(projectId, deliverableId);
        this.deliverable = deliverable;
      } catch (error) {
        console.error('Error fetching deliverable:', error);
      }
    },
    async updateDeliverable() {
      try {
        const { projectId } = this.$route.params;
        await this.deliverableService.updateDeliverable(projectId, this.deliverable.deliverable_id, this.deliverable);
        this.$router.push(`/Projects/${projectId}/Deliverables`);
      } catch (error) {
        console.error('Error updating deliverable:', error);
      }
    }
  }
};
</script>
<template>

  <div class="flex justify-content-center">
    <div class="card-style p-6 mt-6 mb-6">
      <h1 class="flex align-items-center justify-content-center">{{ $t('Edit deliverable') }}</h1>
      <div v-if="deliverable" class="flex flex-column">
        <pv-textarea v-model="deliverable.title" :placeholder="$t('deliverable-list-part4')" class="mb-3 pr-5" maxlength="50" aria-label="Title Textarea"></pv-textarea>
        <pv-textarea v-model="deliverable.description" :placeholder="$t('deliverable-list-part5')" class="mb-3" aria-label="Description Textarea"></pv-textarea>
        <pv-textarea type="datetime-local" v-model="deliverable.deadlineDateValue" :placeholder="$t('deliverable-list-part9')" class="mb-3" aria-label="Deadline Input"></pv-textarea>
        <pv-textarea type="datetime-local" v-model="deliverable.deadlineTime" :placeholder="$t('deliverable-list-part10')" class="mb-3" aria-label="Deadline Input"></pv-textarea>

        <div class="flex justify-content-center">
          <pv-button @click="updateDeliverable" class="bg-white text-black-alpha-90 border-black-alpha-90 border-round-3xl text-xl" aria-label="Save Button">{{ $t('Guardar') }}</pv-button>
        </div>

      </div>
    </div>
  </div>

</template>

<style scoped>

.card-style {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  width:60%;
}

textarea {
  resize: none;
}

</style>