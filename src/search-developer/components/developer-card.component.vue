<script>
import {DeveloperProfileEntity} from "../../developer-profile/models/developer-profile.js";

export default {
  name: "developer-card",
  components: {},
  props: {
    developer: {
      type: DeveloperProfileEntity,
      required: true
    }
  },
  methods: {
    redirectToProfile() {
      localStorage.setItem('developer id', this.developer.id)
      this.$router.push({name: 'developer-profile', params: {id: this.developer.id}})
    }
  }
}

</script>

<template>

    <pv-card class="w-8 border-round-3xl shadow-4">
      <template #header>
        <div class="flex flex-row justify-content-center mt-4 gap-5">
          <pv-avatar :image=developer.profileImage class="mr-2 mt-2" size="xlarge" shape="circle" />
          <h3 @click="redirectToProfile">
            {{developer.name}}
          </h3>
        </div>
      </template>
      <template #title>Descripcion</template>
      <template #content>
        <p class="m-0">
          {{developer.description}}
        </p>
      </template>
    </pv-card>

</template>

<style scoped>

</style>