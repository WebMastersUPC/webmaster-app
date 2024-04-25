<script>
import {DeliverableEntity} from "../models/deliverable.model.js";
import DeliverableCard from "../components/deliverable-card.component.vue";

export default {
  name: "review-deliverable",
  components:{DeliverableCard},
  data(){
    return {
      myDeliverable: null
    }
  },
  created(){
    this.myDeliverable = new DeliverableEntity(
        'Test Deliverable',
        'This is a test deliverable',
        new Date(),
        new Date(),
        'Pending',
        1,
        ['file1', 'file2']
    );
  }
}
</script>

<template>
  <div>
    <deliverableCard :deliverable="myDeliverable"></deliverableCard>
  </div>
</template>

<style scoped>

</style>