<script >
export default {
  name:'LoginCard',
  data() {
    return {
      user: '',
      password: ''
    };
  }
};
</script>

<template>

  <div class="mt-5 mx-3">
    <i class="pi pi-chevron-left" style="font-size: 2rem"></i>
  </div>

  <div class="flex justify-content-center align-items-center text-center" style="height: 80vh;">
    <pv-card class=" flex border-card shadow-4 px-6 ">
      <template #title>
        <div>
          <img src="../../assets/logo.png" alt="Webmaster's logo" width="210" class="-m-2 ">
        </div>

      </template>
      <template #content>
        <div class=" flex flex-column gap-3 align-items-center">
          <div class="flex flex-column gap-4 ">
            <pv-inputText type="text" v-model="user" placeholder="Usuario" class="border-round-3xl"/>
            <pv-inputText type="text" v-model="password" placeholder="Contraseña" class="border-round-3xl"/>
          </div>

          <pv-button label="Iniciar sesion" class="border-round-xl w-10rem bg-blue-600 text-lg"/>
        </div>
        <div class="color-auth font-bold">
          <p>¿Olvidaste tu contraseña?</p>
          <p class="-mt-1">Crear cuenta</p>
        </div>
      </template>
    </pv-card>
  </div>

</template>

<style scoped>
.color-auth{
  color:#38B397;
}

.border-card{
  border: 2px solid #333333;
  border-radius: 5rem;
}
</style>