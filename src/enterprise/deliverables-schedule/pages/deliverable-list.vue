<script>
import DeliverablesScheduleCard from "../components/deliverables-schedule-card.component.vue";
import { DeliverableService } from "../../../../public/services/deliverable.service.js";
import {DeliverableEntity} from "../../../shared/models/deliverable.model.js";

export default {
  name: "deliverables-list",
  components: {
    'deliverable-card': DeliverablesScheduleCard
  },
  data() {
    return {
      deliverables: [],
      projectId: this.$route.params.projectId,
      //projectId: 1,
      deliverableService: new DeliverableService(),
      visible: false,
      editableDeliverable: {
        title: '',
        description: '',
        deadlineDateValue: '',
        deadlineTime: ''
      },
      isEditing: false
    };
  },
  methods: {
    async fetchDeliverables() {
      try {
        const deliverables = await this.deliverableService.getAllDeliverables(this.projectId);
        this.deliverables = deliverables.map(deliverableData => {
          return new DeliverableEntity(
              deliverableData.deliverable_id,
              deliverableData.title,
              deliverableData.description,
              deliverableData.developerDescription,
              deliverableData.state,
              deliverableData.file,
              deliverableData.deadlineDateValue,
              deliverableData.deadlineTime,
              deliverableData.orderNumber,
              deliverableData.projectID,
              deliverableData.developer_id
          );
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
      this.isEditing = false;
      this.editableDeliverable = { title: '', description: '', deadline: '' };
      this.$router.push(`/Projects/${this.projectId}/Deliverables`);
    },
    addDeliverable() {
      this.openModal();
    },
    async saveDeliverable() {
      try {
        if (this.editableDeliverable.deadlineDateValue && this.editableDeliverable.deadlineTime) {
          this.editableDeliverable.deadline = `${this.editableDeliverable.deadlineDateValue}T${this.editableDeliverable.deadlineTime}`;
        }
        if (this.isEditing) {
          await this.updateDeliverable(this.editableDeliverable);
        } else {
          await this.deliverableService.createDeliverable(this.projectId, this.editableDeliverable);
        }
        this.closeModal();
        await this.fetchDeliverables();
      } catch (error) {
        console.error('Error creating/updating deliverable:', error);
      }
    },
    async updateDeliverable(updatedDeliverable) {
      try {
        const { deliverable_id, orderNumber } = updatedDeliverable;
        const response = await this.deliverableService.updateDeliverable(this.projectId, orderNumber, updatedDeliverable);
        const index = this.deliverables.findIndex(deliverable => deliverable.deliverable_id === deliverable_id);
        if (index !== -1) {
          this.$set(this.deliverables, index, { ...updatedDeliverable });
        }
      } catch (error) {
        console.error('Error updating deliverable:', error);
      }
    },
    editDeliverable(deliverable) {
      this.editableDeliverable = { ...deliverable };
      this.isEditing = true;
      this.openModal();
      this.$router.push(`/Projects/${this.projectId}/Deliverables/${deliverable.deliverable_id}`);
    }
  },
  created() {
    this.fetchDeliverables();
  }
};
</script>

<template>
  <div class="text-white-alpha-90 flex flex-column">
    <p class="text-4xl text-center font-bold">{{ $t('deliverable-list-part1') }}</p>
    <div class="grid col-fixed justify-content-center gap-5 mt-4 mb-4">
      <deliverable-card v-for="deliverable in deliverables"
                        :key="deliverable.deliverable_id"
                        :deliverable="deliverable"
                        @edit-deliverable="editDeliverable"/>
    </div>
  </div>

  <pv-modal v-model:visible="visible" modal :header="isEditing ? $t('deliverable-list-part7') : $t('deliverable-list-part3')" :breakpoints="{ '1199px': '50%', '500px': '50%', '700px':'50%','1900px': '50%'}" aria-label="Add/Edit Deliverable Modal">
    <div class="flex flex-column align-content-center justify-content-center" aria-label="Modal Content">
      <div class="flex flex-row align-items-center justify-content-center flex-wrap" aria-label="Input Fields">
        <div class="flex flex-column w-10" aria-label="Deliverable Name and Description">
          <pv-textarea type="text" v-model="editableDeliverable.title" :placeholder="$t('deliverable-list-part4')" class="mb-3 pr-5" maxlength="50" aria-label="Title Textarea"></pv-textarea>
          <pv-textarea v-model="editableDeliverable.description" :placeholder="$t('deliverable-list-part5')" class="mb-3" aria-label="Description Textarea"></pv-textarea>
          <pv-textarea type="date" v-model="editableDeliverable.deadlineDateValue" :placeholder="$t('deliverable-list-part9')" class="mb-3" aria-label="Deadline Date Input"></pv-textarea>
          <pv-textarea type="time" v-model="editableDeliverable.deadlineTime" :placeholder="$t('deliverable-list-part10')" class="mb-3" aria-label="Deadline Time Input"></pv-textarea>
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
