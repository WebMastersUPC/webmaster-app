// confirmationDialog.vue

<script>
export default {
  name: "confirmationDialog",
  props: {
    action: {
      type: String,
      required: true
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    confirm() {
      this.$emit('confirm');
    }
  }
}
</script>

<template>
  <pv-card class="shadow-8" aria-label="Confirmation Card">
    <template #title>
      <div class="flex flex-column justify-content-center align-items-center mt-3 mb-4 gap-4" aria-label="Confirmation Message">
        <div>{{$t(action === 'approve' ? 'approve-dialog-part1' : 'reject-dialog-part1')}}</div>
        <i class="pi pi-info text-5xl rotate-180" aria-label="Information Icon"></i>
      </div>
    </template>
    <template #content>
      <div class="flex flex-column ml-8 mr-8" aria-label="Confirmation Details">
        <div class="flex align-items-center justify-content-center mb-4">{{$t(action === 'approve' ? 'approve-dialog-part2' : 'reject-dialog-part2')}}</div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-content-center align-items-center gap-8" aria-label="Confirmation Buttons">
        <pv-button :label="$t(action === 'approve' ? 'approve-button' : 'reject-button')" outlined class="text-lg" @click="confirm" aria-label="Approve Button"></pv-button>
        <pv-button :label="$t('cancel-button')" outlined class="text-lg" @click="cancel" aria-label="Cancel Button"></pv-button>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
</style>
