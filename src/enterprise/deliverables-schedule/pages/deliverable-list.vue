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
      projectId: 1,
      deliverableService: new DeliverableService(),
      newDeliverable: { title: '', description: '', deadline: '' },
      visible: false // para el modal
    };
  },
  methods: {
    async fetchDeliverables() {
      try {
        const deliverables = await this.deliverableService.getAllDeliverables(this.projectId);
        this.deliverables = deliverables.map(deliverableData => {
          return {
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
          };
        });
        console.log('Array of deliverables:', this.deliverables);
      } catch (error) {
        console.error('Error fetching deliverables:', error);
      }
    },
    openModal() {
      this.visible = true;
    },
    closeModal() {
      this.visible = false;
    },
    addDeliverable() {
      this.openModal();
    },
    async saveDeliverable() {
      try {
        // para pasarle el formato a la fecha
        if (this.newDeliverable.deadline) {
          this.newDeliverable.deadline = new Date(this.newDeliverable.deadline).toISOString();
        }

        await this.deliverableService.createDeliverable(this.projectId, this.newDeliverable);

        // reinicia el formulario
        this.newDeliverable = { title: '', description: '', deadline: '' };
        this.closeModal();

        // para que vuelva a buscar los entregables actualizados con la nueva entrega
        await this.fetchDeliverables();
      } catch (error) {
        console.error('Error creating deliverable:', error);
      }
    }
  },
  created() {
    this.fetchDeliverables();
  }
}
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

  <pv-modal v-model:visible="visible" modal :header="$t('deliverable-list-part3')" :breakpoints="{ '1199px': '50%', '575px': '90vw', '700px':'50%','1900px': '50%'}" aria-label="Add Deliverable Modal">
    <div class="flex flex-column align-content-center justify-content-center" aria-label="Modal Content">
      <div class="flex flex-row align-items-center justify-content-center flex-wrap" aria-label="Input Fields">
        <div class="flex flex-column w-10" aria-label="Deliverable Name and Description">
          <pv-textarea type="text" v-model="newDeliverable.title" :placeholder="$t('deliverable-list-part4')" class="mb-3 pr-5" maxlength="50" aria-label="Title Textarea"></pv-textarea>
          <pv-textarea v-model="newDeliverable.description" :placeholder="$t('deliverable-list-part5')" class="mb-3" aria-label="Description Textarea"></pv-textarea>
          <pv-textarea type="datetime-local" v-model="newDeliverable.deadline" :placeholder="$t('deliverable-list-part6')" class="mb-3" aria-label="Deadline Input"></pv-textarea>
        </div>
      </div>
      <div class="flex flex-column align-items-center justify-content-center" aria-label="Confirmation Button">
        <pv-button @click="saveDeliverable" class="bg-white text-black-alpha-90 border-black-alpha-90 border-round-3xl text-xl" aria-label="Confirm Button">{{ $t('deliverable-list-part8') }}</pv-button>
      </div>
    </div>
  </pv-modal>

  <div class="flex flex-column flex align-items-center mb-5">
    <span class="pi pi-plus-circle cursor-pointer" style="font-size: 3rem; color:white;" @click="addDeliverable"></span>
  </div>
</template>

<style scoped>
textarea {
  resize: none;
}
</style>
