<script>
  export default {
    name: "create-deliverable-card",
    methods: {
      handleFileChange(event) {
        this.files = [...this.files,...event.target.files];
        console.log(this.files)
      },
      approveDelivery() {
        this.$emit('approve-delivery');
      }
    },
    data() {
      return {
        files: [],
      }
    }
  }
</script>

<template>

  <pv-card class="shadow-8" aria-label="Deliverable Card">
    <template #title>
      <div class="flex flex-column justify-content-center align-items-center mt-3 mb-4" aria-label="Deliverable Title">
        <div class="font-bold text-xl">Entregable Nº1</div> <!-- {{deliverable.number}}-->
      </div>
    </template>
    <template #content>
      <div class="flex flex-column ml-8 mr-8" aria-label="Deliverable Content">
        <label class="flex align-items-center justify-content-start font-bold text-xl mb-3" for="description" aria-label="Description Label">Descripcion de entrega</label>
        <Textarea v-model="value" auto-resize rows="5" cols="30" class="flex align-items-center justify-content-center mb-3" aria-label="Description Textarea"></Textarea>
      </div>
      <hr aria-label="Divider">
    </template>
    <template #footer>
      <div class="flex flex-column justify-content-center align-items-center" aria-label="Deliverable Footer">
        <div class="font-bold text-xl mt-0 mb-2">Archivos</div>
        <div class="flex flex-column justify-content-center align-items-center" id="upload" aria-label="File Upload Section">
          <label for="file-input" class="flex align-items-center bg-purple-200 border-round-3xl p-2" id="upload-button" aria-label="Upload Button">
            <i class="pi pi-file-plus"></i>
            <span class="ml-2">Subir Archivo</span>
            <input type="file" id="file-input" multiple @change="handleFileChange" style="display: none;">
          </label>
          <hr class="bg-black-alpha-10 w-full" aria-label="Divider">
          <ul aria-label="Uploaded Files List">
            <li v-for="(file, index) in files" :key="index">
              {{ file.name }} ({{ file.size }} bytes)
            </li>
          </ul>
        </div>
        <pv-button label="Enviar entregable" @click="approveDelivery" aria-label="Submit Delivery Button"></pv-button>
      </div>
    </template>
  </pv-card>


</template>

<style scoped>

</style>