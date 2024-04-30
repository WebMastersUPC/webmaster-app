<script >
export default {
  name:'register-card',
  data() {
    return {
      selectedRole: null,
      roleOptions: [
        { label: 'Empresa', value: 'empresa' },
        { label: 'Desarrollador', value: 'desarrollador' }
      ]
    };
  },

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
        <div >
          <div class="flex flex-column gap-4 align-items-center">
            <pv-inputText type="text" v-model="mail" placeholder="Correo electrónico" class="border-round-3xl"/>
            <pv-inputText type="text" v-model="user" placeholder="Usuario" class="border-round-3xl"/>
            <pv-inputText type="text" v-model="password" placeholder="Contraseña" class="border-round-3xl"/>
            <pv-dropDown v-model="selectedRole" :options="roleOptions" option-label="label" option-value="value" placeholder="Selecciona un rol" class="border-round-3xl w-12rem "></pv-dropDown>
          </div>

          <pv-button label="Crear cuenta" class="border-round-xl w-10rem bg-blue-600 text-lg mt-4 mr-1 p-3"/>
        </div>

      </template>
    </pv-card>
  </div>

</template>

<style scoped>
.p-button{
  border:0;
}
.border-card{
  border: 2px solid #333333;
  border-radius: 5rem;
}
</style>
