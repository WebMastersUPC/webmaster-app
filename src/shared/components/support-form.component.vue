<script>
import SupportService from "../../../public/services/support.service.js";
export default {
  name: "support-form",
  data() {
    return {
      title: '',
      description: '',
      selectedProblem: null,
      problems: [
        { name: 'Error type1', code: '404' },
        { name: 'Error type2', code: '404' },
        { name: 'Error type3', code: '404' },
        { name: 'Error type4', code: '404' },
        { name: 'Error type5', code: '404' },
      ],
      files: []
    };
  },
  methods: {
    handleFileChange(event) {
      this.files = [...this.files, ...event.target.files];
      console.log(this.files);
    },
    async submitSupportRequest() {
      const supportRequest = {
        title: this.title,
        description: this.description,
        problemType: this.selectedProblem ? this.selectedProblem.code : '',
        files: this.files
      };

      try {
        const response = await SupportService.createSupportRequest(supportRequest);
        console.log('Support request created successfully:', response);
      } catch (error) {
        console.error('Error creating support request:', error);
      }
    }
  }
};
</script>

<template>
  <div class="support-details" aria-label="Support Details">
    <pv-floatlabel aria-label="Floatlabel for Title">
      <pv-inputText id="title" v-model="title" aria-label="Title of the problem" />
      <label for="title">Título del problema</label>
    </pv-floatlabel>
    <div class="card flex" aria-label="Dropdown for Problem Type">
      <pv-dropDown v-model="selectedProblem" :options="problems" optionLabel="name" placeholder="Tipo de problema" class="w-full md:w-14rem" />
    </div>
    <pv-floatlabel aria-label="Floatlabel for Description">
      <pv-textarea v-model="description" rows="5" cols="30" aria-label="Description of the problem" />
      <label class="area-label">Descripción del problema</label>
    </pv-floatlabel>

    <div class="card flex justify-content-center" id="upload" aria-label="File Upload Section">
      <label for="file-input" class="flex align-items-center" id="upload-button" aria-label="Upload Button">
        <i class="pi pi-file-plus"></i>
        <span class="ml-2">Subir Archivo</span>
        <input type="file" id="file-input" multiple @change="handleFileChange" style="display: none;" aria-label="File Input" />
      </label>
      <hr style="background-color:black; width: 100%" aria-hidden="true">
      <ul aria-label="Uploaded Files List">
        <li v-for="(file, index) in files" :key="index">
          {{ file.name }} ({{ file.size }} bytes)
        </li>
      </ul>
    </div>
    <button @click="submitSupportRequest">Enviar Solicitud</button>
  </div>
</template>

<style scoped>
.p-float-label {
  width: 100%;
  max-width: 800px;
}
.p-inputtext {
  width: 100%;
}
.support-details {
  padding-bottom: 11rem;
}
div.support-details {
  margin: 0 20%;
}
div, .p-float-label {
  margin-top: 1.4rem;
}
#upload {
  background-color: white;
  flex-direction: column;
  align-items: center;
}
#upload-button {
  transition: transform 0.3s ease;
}
#upload-button:hover {
  transform: scale(1.1);
}
</style>