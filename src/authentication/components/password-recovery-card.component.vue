<script>
export default {
  name:'password-recovery-card',
  data() {
    return {
      mail: '',
      mailSend: false
    };
  },
  methods: {
    activate() {
      this.mailSend = true;
    }
  }
};

</script>

<template>

  <div class="bg-white">
    <div class="mt-5 mx-3">
      <router-link aria-label="Go back to login" to="/login" class="text-purple-500 text-sm">
        <i class="pi pi-chevron-left" style="font-size: 2rem"></i>
      </router-link>

    </div>

    <div class="flex justify-content-center align-items-center text-center" style="height: 80vh;">
      <pv-card aria-label="Password Recovery Form" class=" flex border-card shadow-4 px-6 ">
        <template #title>
          <div>
            <img src="../../assets/logo.png" alt="Webmaster's logo" width="210" class="-m-2 ">
            <p>Cambiar contraseña</p>
          </div>

        </template>
        <template #content>
          <div >
            <div class="flex flex-column gap-4 align-items-center  ">
              <pv-inputText aria-label="Email input field" type="text" v-model="mail" placeholder="Ingresa tu correo electrónico" class="border-round-3xl"/>

              <div class="flex flex-row mr-1" v-if="mailSend">
                <span class="pi pi-check-circle"  style="color: #B864F3"></span>
                <span class="ml-2 color-confirm">Correo enviado con éxito</span>
              </div>
            </div>

            <pv-button aria-label="Send email" label="Enviar correo" @click="activate" class="border-round-xl w-10rem bg-blue-600 text-lg mt-5 mr-1 p-3"/>
          </div>

          <div class="color-auth font-bold">
            <p>
              <router-link aria-label="go to login" to="/login" class="text-purple-500 text-sm">Volver a iniciar sesión</router-link>
            </p>
          </div>
        </template>
      </pv-card>
    </div>
  </div>


</template>

<style scoped>
.p-button{
  border:0;
}
.color-auth{
  color:#38B397;
}
.color-confirm{
  color:#B864F3;
}

.border-card{
  border: 2px solid #333333;
  border-radius: 5rem;
}
</style>