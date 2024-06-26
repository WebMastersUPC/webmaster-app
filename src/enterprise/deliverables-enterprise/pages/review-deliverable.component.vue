<template>
  <pv-card class="shadow-8" aria-label="Confirmation Card">
    <template #title>
      <div class="flex flex-column justify-content-center align-items-center mt-3 mb-4 gap-4" aria-label="Confirmation Message">
        <div>¿Estás seguro de que quieres enviar el entregable?</div>
        <i class="pi pi-info text-5xl rotate-180" aria-label="Information Icon"></i>
      </div>
    </template>
    <template #content>
      <div class="flex flex-column ml-8 mr-8" aria-label="Confirmation Details">
        <div class="flex align-items-center justify-content-center mb-4">Una vez entregado, debes esperar a que el dueño del proyecto confirme el entregable para seguir con el siguiente.</div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-content-center align-items-center gap-8" aria-label="Confirmation Buttons">
        <pv-button label="Aceptar" outlined class="text-lg" @click="$emit('confirm')" aria-label="Accept Button"></pv-button>
        <pv-button label="Cancelar" outlined class="text-lg" @click="$emit('cancel')" aria-label="Cancel Button"></pv-button>
      </div>
    </template>
  </pv-card>
</template>

<script>
export default {
  name: "confirmation-create-deliverable"
}
</script>

<style scoped>
</style>
