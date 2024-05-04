<script>

export default {
  data() {
    return {
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
      this.files = [...this.files,...event.target.files];
      console.log(this.files)
    }
  }
};
</script>

<template>
  <div class="support-details" aria-label="Support Details">
    <pv-floatlabel aria-label="Floatlabel for Title">
      <pv-inputtext id="username" v-model="value" aria-label="Title of the problem" />
      <label for="username">Titulo del problema</label>
    </pv-floatlabel>
    <div class="card flex" aria-label="Dropdown for Problem Type">
      <pv-dropdown v-model="selectedProblem" :options="problems" optionLabel="name" placeholder="Tipo de problema" class="w-full md:w-14rem" />
    </div>
    <pv-floatlabel aria-label="Floatlabel for Description">
      <pv-textarea v-model="value" rows="5" cols="30" aria-label="Description of the problem" />
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
  </div>

</template>

<style>
body{
  background: #262626 !important;
}
.triangle {
  width: 0px;
  height: 0px;
  background: conic-gradient(from -13.54deg at 68.36% 69.69%, #B864F3 -42.53deg, #0072FF 62.28deg, #002149 124.67deg, #002149 237.72deg, #D599FF 310.56deg, #B864F3 317.47deg, #0072FF 422.28deg);
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  clip-path: polygon(100% 0, 100% 100%, 0 0);
}

.p-float-label{
  width: 100%;
  max-width: 800px;
}
.p-inputtext{
  width:100%;
}
div.support-details{
  margin:0 20%;
}

div, .p-float-label{
  margin-top:1.4rem;
}
#upload{
  background-color: white;
  flex-direction: column;
  align-items: center;
}

#upload-button{
  transition: transform 0.3s ease;
}
#upload-button:hover{
  transform: scale(1.1);
}
</style>