<script>

export default {
  name: "confirmationDialog",
}

</script>

<template>
  <pv-card class="shadow-8">
    <template #title>
      <div class="flex flex-column justify-content-center align-items-center mt-3 mb-4 gap-4">
        <div>¿Estas seguro de que quieres postular al proyecto?</div>
        <i class="pi pi-info text-5xl rotate-180"></i>
      </div>
    </template>
    <template #content>
      <div class="flex flex-column ml-8 mr-8">
        <div class="flex align-items-center justify-content-center mb-4">Una vez postulado tendrás que esperar a que el contratador te acepte para empezar a trabajar, puede tomar un tiempo.</div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-content-center align-items-center gap-8">
        <pv-button label="Aceptar" outlined class="text-lg"></pv-button>
        <pv-button label="Cancelar" outlined class="text-lg"></pv-button>
      </div>
    </template>

  </pv-card>

</template>

<style scoped>

</style>