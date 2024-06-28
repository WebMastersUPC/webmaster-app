<script>

export default {
  name: "confirmationDialog",
  methods: {
    cancel() {
      this.$emit('cancel');
    }
  }
}

</script>

<template>

  <pv-card class="shadow-8" aria-label="Confirmation Card">
    <template #title>
      <div class="flex flex-column justify-content-center align-items-center mt-3 mb-4 gap-4" aria-label="Confirmation Message">
        <div>{{$t('confirmation-dialog-part1')}}</div>
        <i class="pi pi-info text-5xl rotate-180" aria-label="Information Icon"></i>
      </div>
    </template>
    <template #content>
      <div class="flex flex-column ml-8 mr-8" aria-label="Confirmation Details">
        <div class="flex align-items-center justify-content-center mb-4">{{$t('confirmation-dialog-part2')}}</div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-content-center align-items-center gap-8" aria-label="Confirmation Buttons">
        <pv-button :label="$t('confirmation-dialog-part3')" outlined class="text-lg" aria-label="Approve Button"></pv-button>
        <pv-button :label="$t('confirmation-dialog-part4')" outlined class="text-lg" @click="cancel" aria-label="Cancel Button"></pv-button>
      </div>
    </template>
  </pv-card>


</template>

<style scoped>

</style>