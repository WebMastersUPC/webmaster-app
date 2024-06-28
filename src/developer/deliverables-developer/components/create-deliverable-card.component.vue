<script>
import { DeliverableService } from "../../../../public/services/deliverable.service.js";

export default {
  name: 'CreateDeliverableCard',
  data() {
    return {
      developerDescription: '',
      file: '',
      deliverableService: new DeliverableService(),
      deliverable: {},
    };
  },
  methods: {
    triggerUpload() {
      this.$emit('approve-delivery');
    },
    async uploadFile() {
      const projectId = this.$route.params.projectId;
      const deliverableId = this.$route.params.deliverableId;

      const uploadData = {
        developerDescription: this.developerDescription,
        file: this.file
      };

      try {
        const response = await this.deliverableService.uploadDeliverableFile(projectId, deliverableId, uploadData);
        console.log('File uploaded successfully', response);
        this.$router.push(`/Projects/${projectId}/Deliverables/${deliverableId}/Upload`);
      } catch (error) {
        console.error('Error uploading file', error);
      }
    }
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="triggerUpload">
      <pv-card class="shadow-8 card" aria-label="Deliverable Card">
        <template #title>
          <div class="flex flex-column justify-content-center align-items-center mt-3 mb-4" aria-label="Deliverable Title">
            <div class="font-bold text-xl">{{ $t('delivery-card-part1') }} {{ deliverable.orderNumber }}</div>
          </div>
        </template>
        <template #content>
          <div class="flex flex-column " aria-label="Deliverable Content">
            <label class="flex align-items-center justify-content-start font-bold text-xl mb-3" for="description" aria-label="Description Label">{{ $t('upload-description') }}</label>
            <pv-textarea v-model="developerDescription" auto-resize rows="5" cols="30" class="flex align-items-center justify-content-center mb-3" aria-label="Description Textarea"></pv-textarea>
          </div>
          <hr aria-label="Divider">
        </template>
        <template #footer>
          <div class="flex flex-column justify-content-center align-items-center" aria-label="Deliverable Footer">
            <div class="font-bold text-xl mt-0 mb-2">{{ $t('delivery-card-part5') }}</div>
            <div class="flex flex-column justify-content-center align-items-center" id="upload" aria-label="File Upload Section">
            </div>
            <div class="flex flex-column" aria-label="Deliverable Content">
              <pv-textarea v-model="file" auto-resize rows="5" cols="30" class="flex align-items-center justify-content-center mb-3" aria-label="File Textarea"></pv-textarea>
            </div>
            <pv-button :label="$t('send-deliverable')" type="submit" aria-label="Submit Delivery Button" class=" text-black-alpha-90 border-black-alpha-90 border-round-3xl text-xl bg-white"></pv-button>
          </div>
        </template>
      </pv-card>
    </form>
  </div>
</template>

<style scoped>
.card {
  width: 70%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
