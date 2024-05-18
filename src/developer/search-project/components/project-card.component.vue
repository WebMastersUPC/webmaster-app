<script>
import {DeveloperProfileEntity} from "../../../developer/developer-profile/models/developer-profile.js";
import {CompanyEntity} from "../../../shared/models/company.model.js";

export default {
  name: "project-card",
  components: {},
  props: {
    projects: {
      type: DeveloperProfileEntity,
      required: true
    },
    company: {
      type: CompanyEntity,
      required: true
    }
  },
  methods: {
    redirectToProfile() {
      localStorage.setItem('developer id', this.projects.id)
      this.$router.push({name: 'enterprise-profile', params: {id: this.projects.id}})
    },

    redirectToPostulate(){
      localStorage.setItem('developer id', this.projects.id)
      this.$router.push({name: 'postulate-project', params: {id: this.projects.id}})
    }
  }
}

</script>

<template>

  <pv-card class="w-8 border-round-3xl shadow-4" aria-label="Developer Card" >
    <template #header>
      <div class="flex flex-row align-items-center  mt-4 " aria-label="Header Section">


        <div class=" flex align-items-center ml-3 flex-wrap  w-3">
          <pv-avatar :image="company.imageProfile" class="mr-2 mt-2" size="xlarge" shape="circle" aria-label="Developer Avatar" />
          <h3 @click="redirectToProfile" aria-label="Developer Name" >{{company.username}}</h3>
        </div>

        <div class=" flex justify-content-center align-items-center w-6 overflow-hidden titulo">
          <h3 @click="redirectToPostulate">{{projects.name}}</h3>
        </div>


      </div>
    </template>
    <template #title aria-label="Card Title">Descripcion</template>
    <template #content aria-label="Card Content" >
      <p class="m-0">{{projects.summary}}</p>
    </template>
  </pv-card>


</template>

<style scoped>

h3:hover{
  color: #b864f3;
}
.box{
  border:1px solid red;
}

.box1{
  border:1px solid blue;
}

.box2{
  border:1px solid green;
}

@media screen {
  .titulo{
    margin-left:2rem;
  }
}

</style>