<script>
export default {
  name: 'toolbar-enterprise',
  data(){
    return{
      id: localStorage.getItem('user id'),
      type: localStorage.getItem('user type'),
    }
  }
}
</script>

<template>
  <div class="flex flex-wrap justify-content-center">
    <pv-toolbar style=" border-radius: 4rem; " class="bg-white my-4">
      <template #start>
        <router-link to="/search-developer">
          <pv-button label="Explorar Desarrolladores" text plain class="responsive-button justify-content-center"/>
        </router-link>
        <router-link to="/message-page">
          <pv-button label="Mensajes" text plain class="responsive-button justify-content-center"/>
        </router-link>
        <router-link :to="`/main/${type}/${id}`">
          <pv-button label="" text plain class="responsive-button justify-content-center">
            <img src="https://imgur.com/yeuv7Nq.jpg" alt="" class="imgsize">
          </pv-button>
        </router-link>
        <router-link to="/create-project">
          <pv-button label="Publicar proyecto" text plain class="responsive-button justify-content-center"/>
        </router-link>
        <router-link to="/login">
          <pv-button label="" text plain class="responsive-button justify-content-center">
            <i class="pi pi-sign-out" style="font-size: 1.4rem"> <br> salir</i>
          </pv-button>
        </router-link>
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