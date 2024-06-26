<script>
import DeliverablesScheduleCard from "../components/deliverables-schedule-card.component.vue";
import { DeliverableService } from "../../../../public/services/deliverable.service.js";

export default {
  name: "deliverables-list",
  components: {
    'deliverable-card': DeliverablesScheduleCard
  },
  data() {
    return {
      deliverables: [],
      //projectId: this.$route.params.projectId,
      projectId: 3,
      deliverableService: new DeliverableService(),

    };
  },
  methods: {
    async fetchDeliverables() {
      try {
        const deliverables = await this.deliverableService.getAllDeliverables(this.projectId);
        this.deliverables = deliverables.map(deliverableData => ({
          deliverable_id: deliverableData.deliverable_id,
          title: deliverableData.title,
          description: deliverableData.description,
          developerDescription: deliverableData.developerDescription,
          state: deliverableData.state,
          file: deliverableData.file,
          deadline: new Date(deliverableData.deadline),
          orderNumber: deliverableData.orderNumber,
          projectID: deliverableData.projectID,
          developer_id: deliverableData.developer_id
        }));
        console.log('Array of deliverables:', this.deliverables);
      } catch (error) {
        console.error('Error fetching deliverables:', error);
      }
    },
  },
  created() {
    this.fetchDeliverables();
  }
};
</script>

<template>
  <div class="text-white-alpha-90 flex flex-column align-items-center justify-content-center">
    <p class="text-4xl text-center font-bold">{{ $t('deliverable-list-part1') }}</p>
    <div class="grid col-fixed justify-content-center gap-5 mt-4 mb-4">
      <deliverable-card v-for="deliverable in deliverables"
                        :key="deliverable.deliverable_id"
                        :deliverable="deliverable"/>
    </div>
  </div>

</template>

<style scoped>
textarea {
  resize: none;
}
</style>
