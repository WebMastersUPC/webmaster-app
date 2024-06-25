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

  <div class="flex justify-content-center m-8">
    <div class="card-style  p-6 ">
      <h1 class="flex align-items-center justify-content-center">{{ $t('Editar entregable') }}</h1>
      <div v-if="deliverable" class="flex flex-column">
        <pv-textarea v-model="deliverable.title" :placeholder="$t('deliverable-title-placeholder')" class="mb-3 pr-5" maxlength="50" aria-label="Title Textarea"></pv-textarea>
        <pv-textarea v-model="deliverable.description" :placeholder="$t('deliverable-description-placeholder')" class="mb-3" aria-label="Description Textarea"></pv-textarea>
        <pv-textarea type="datetime-local" v-model="deliverable.deadline" :placeholder="$t('deliverable-deadline-placeholder')" class="mb-3" aria-label="Deadline Input"></pv-textarea>

        <div class="flex justify-content-center">
          <pv-button @click="updateDeliverable" class="bg-white text-black-alpha-90 border-black-alpha-90 border-round-3xl text-xl" aria-label="Save Button">{{ $t('Guardar') }}</pv-button>
        </div>

      </div>
    </div>
  </div>

</template>

<style scoped>
.box{
  border:1px solid red;
}
.card-style {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  padding: 20px;
  width:70%;
}

textarea {
  resize: none;
}

</style>