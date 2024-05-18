<script>
export default {
  name: "toolbar-freelancer",
  data(){
    return{
      id: localStorage.getItem('user id'),
      type: localStorage.getItem('user type'),
      visibleRight: false,
      screenWidth: window.innerWidth,
      languages: ['en', 'es'],
      language: 'en'
    }
  },
  computed: {
    showSidebar() {
      return this.screenWidth <= 856;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth > 856) {
        this.visibleRight = false;
      }
    }
  }
}
</script>

<template>
  <!--Toolbar-->
  <div class="flex flex-wrap justify-content-center" v-if="!showSidebar">
    <pv-toolbar style=" border-radius: 4rem; " class="bg-white my-4">
      <template #start>
        <router-link to="">
          <pv-button :label="$t('toolbar-freelancer-option1')" text plain class="responsive-button justify-content-center"/>
        </router-link>
        <router-link to="">
          <pv-button :label="$t('toolbar-freelancer-option2')" text plain class="responsive-button justify-content-center"/>
        </router-link>
          <div  class="responsive-button flex flex-wrap justify-content-center">
            <img src="https://imgur.com/yeuv7Nq.jpg" alt="logo" class="imgsize">
          </div>
        <router-link to="">
          <pv-button :label="$t('toolbar-freelancer-option3')" text plain class="responsive-button justify-content-center"/>
        </router-link>
        <router-link to="">
          <pv-button label="" text plain class="responsive-button justify-content-center">
            <i class="pi pi-sign-out" style="font-size: 1.4rem"> <br> {{$t('toolbar-freelancer-option4')}}</i>
          </pv-button>
        </router-link>
      </template>
    </pv-toolbar>
    <pv-select-button v-model="$i18n.locale" :options="languages" class="uppercase my-6 ml-6"></pv-select-button>
  </div>
  <!--Toolbar con Sidebar-->
  <div v-else class="flex flex-wrap justify-content-center">
    <pv-toolbar class="bg-white my-4 w-full">
      <template #start>
        <img src="https://imgur.com/8o8Veec.jpg" alt="logo de la app">
      </template>
      <template #end>
        <div class="card">
          <div class="flex gap-2 justify-content-center pr-2">
            <pv-button  @click="visibleRight = true" class="bg-blue-600 ">
              <i class="pi-align-justify" style="font-size: 2rem"></i>
            </pv-button>
          </div>
          <pv-sidebar v-model:visible="visibleRight" header="Options" position="right" class="flex flex-column gap-5">
            <router-link to="" class="p-mb-2">
              <pv-button text plain class="w-full">
                <h3>{{$t('toolbar-freelancer-option1')}}</h3>
              </pv-button>
            </router-link>
            <router-link to="" class="p-mb-2">
              <pv-button text plain class="w-full">
                <h3>{{$t('toolbar-freelancer-option2')}}</h3>
              </pv-button>
            </router-link>
            <router-link to="" class="p-mb-2">
              <pv-button text plain class="w-full">
                <h3>{{$t('toolbar-freelancer-option3')}}</h3>
              </pv-button>
            </router-link>
            <router-link to="" class="p-mb-2">
              <pv-button text plain class="w-full">
                <h3>{{$t('toolbar-freelancer-option4')}}</h3>
              </pv-button>
            </router-link>
            <pv-select-button v-model="$i18n.locale" :options="languages" class="uppercase my-6 ml-6"></pv-select-button>
          </pv-sidebar>
        </div>
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>
.responsive-button {
  font-size: 1rem;
}

@media screen and (max-width: 768px) {
  .responsive-button {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 576px) {
  .responsive-button {
    font-size: 0.8rem;
  }
}
.p-toolbar{
  padding:0 ;
}
.imgsize{
  width: 75%;
}
</style>