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

      ]
    };
  },
  methods: {
    onUpload() {
      this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    }
  }
};
</script>

<template>
  <div class="support-details">
    <pv-floatlabel>
      <pv-inputtext id="username" v-model="value" />
      <label for="username">Titulo del problema</label>
    </pv-floatlabel>
    <div class="card flex">
      <pv-dropdown v-model="selectedProblem" :options="problems" optionLabel="name" placeholder="Tipo de problema" class="w-full md:w-14rem" />
    </div>
    <pv-floatlabel>
      <pv-textarea v-model="value" rows="5" cols="30" />
      <label class="area-label">Descripción del problema</label>
    </pv-floatlabel>
    <template>
      <div class="card flex justify-content-center">
        <pv-toast />
        <pv-fileupload mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />
      </div>
    </template>
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
</style>