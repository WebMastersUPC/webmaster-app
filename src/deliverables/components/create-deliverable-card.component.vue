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

  <pv-card class="shadow-8">
    <template #title>
      <div class="flex flex-column justify-content-center align-items-center mt-3 mb-4">
        <div class="font-bold text-xl">Entregable Nº1</div> <!-- {{deliverable.number}}-->
      </div>
    </template>
    <template #content>
      <div class="flex flex-column ml-8 mr-8">
        <label class="flex align-items-center justify-content-start font-bold text-xl mb-3" for="description">Descripcion de entrega</label>
        <Textarea v-model="value" auto-resize rows="5" cols="30" class="flex align-items-center justify-content-center mb-3"></Textarea>
      </div>
      <hr>
    </template>
    <template #footer>
      <div class="flex flex-column justify-content-center align-items-center">
        <div class="font-bold text-xl mt-0 mb-2">Archivos</div>
        <div class="flex flex-column justify-content-center align-items-center" id="upload">
          <label for="file-input" class="flex align-items-center bg-purple-200 border-round-3xl p-2" id="upload-button">
            <i class="pi pi-file-plus"></i>
            <span class="ml-2">Subir Archivo</span>
            <input type="file" id="file-input" multiple @change="handleFileChange" style="display: none;">
          </label>
          <hr class="bg-black-alpha-10 w-full">
          <ul>
            <li v-for="(file, index) in files" :key="index">
              {{ file.name }} ({{ file.size }} bytes)
            </li>
          </ul>
        </div>
        <pv-button label="Enviar entregable" @click="approveDelivery"></pv-button>
      </div>
    </template>

  </pv-card>

</template>

<style scoped>

</style>