<script>
export default {
  name: 'toolbar-webmaster'
}
</script>

<template>
  <div class="flex flex-wrap justify-content-center">
    <pv-toolbar style="border-radius: 4rem; " class="bg-white my-5">
      <template #start>
        <pv-button label="Explorar Desarrolladores" text plain class="responsive-button justify-content-center"/>
        <pv-button label="Mensajes" text plain class="responsive-button justify-content-center"/>
        <pv-button label="" text plain class="responsive-button justify-content-center">
          <img src="https://imgur.com/yeuv7Nq.jpg" alt="">
        </pv-button>
        <pv-button label="Publicar proyecto" text plain class="responsive-button justify-content-center"/>
        <pv-button label="" text plain class="responsive-button justify-content-center">
          <i class="pi pi-sign-out" style="font-size: 1.8rem"> <br> salir</i>
        </pv-button>
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>
.responsive-button {
  font-size: 1rem;
  margin: 0.5rem;
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
</style>