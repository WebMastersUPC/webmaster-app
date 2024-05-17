<script>
export default {
  name: "apply-project",
  data() {
    return {
      showButtons: false,
      showBlurEffect: false
    };
  },
  methods: {
    showTemplate() {
      this.showBlurEffect = true;
      this.$confirm.require({
        group: 'templating',
        header: 'Confirmation',
        message: '¿Estás seguro de que quieres postular al proyecto?',
        icon: 'pi pi-exclamation-circle',
        acceptIcon: 'pi pi-check',
        rejectIcon: 'pi pi-times',
        rejectClass: 'p-button-outlined p-button-sm',
        acceptClass: 'p-button-sm',
        rejectLabel: 'Rechazar',
        acceptLabel: 'Aceptar',
        accept: () => {
          this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
          this.showBlurEffect = false
          this.showButtons = true
        },
        reject: () => {
          this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
          this.showBlurEffect = false
        },
        onHide: () => {
          this.showBlurEffect = false
        }
      });
    }
  }
};
</script>

<template>
  <div class="bg-white w-8 " :class="{ 'blur-effect': this.showBlurEffect }" aria-label="Main Content">
    <pv-splitter style="height: auto" layout="vertical">
      <pv-splitter-panel class="flex align-items-center justify-content-center" style="flex-grow: 1" aria-label="Header Panel">
        <img src="https://imgur.com/23QQKri.jpg" alt="" class="mr-8" aria-hidden="true">
        <h2>Plataforma de Comercio Electrónico Geekit</h2>
        <pv-button label="" text plain class="p-d-none p-d-lg-flex p-jc-center p-ai-center ml-5 justify-content-center" v-if="showButtons" aria-label="Show Buttons">
          <img src="https://imgur.com/yclQG0L.jpg" alt="" aria-hidden="true">
        </pv-button>
        <pv-button severity="contrast" class="p-2 text-xl ml-3 p-text-truncate justify-content-center" outlined v-if="showButtons" aria-label="Entregable Button">
          {{$t('apply-project-part1')}}
        </pv-button>
      </pv-splitter-panel>
      <pv-splitter-panel class="p-d-flex p-flex-column p-align-center" style="flex-grow: 1" aria-label="Description Panel">
        <div class="description p-d-flex p-flex-column p-align-center" aria-label="Description">
          <h3 class="p-mb-0 pl-3">{{$t('apply-project-part2')}}</h3>
          <p class="p-text-center px-5">
            La Plataforma de Comercio Electrónico Geekit es un proyecto destinado a crear una experiencia de
            compra en línea excepcional para nuestra marca de ropa y accesorios para jóvenes apasionados por
            la cultura geek. La plataforma debe ofrecer una navegación intuitiva, una interfaz atractiva y
            funcionalidades que mejoren la experiencia del usuario, desde la búsqueda de productos
            hasta el proceso de compra y seguimiento de pedidos
          </p>
        </div>
      </pv-splitter-panel>
    </pv-splitter>

    <pv-splitter style="height: auto" layout="vertical" aria-label="Splitter for Technologies and Budget">
      <!-- Primer Panel Verticalmente -->
      <pv-splitter-panel style="flex-grow: 1" aria-label="Technologies Panel">
        <!-- Primer Splitter Horizontalmente -->
        <pv-splitter layout="horizontal" aria-label="Splitter for Technologies">
          <pv-splitter-panel style="flex-grow: 1" aria-label="Languages Panel">
            <h2 style="text-align: center;">{{$t('apply-project-part3')}}</h2>
            <div style="display: flex;">
              <div style="flex-grow: 1; display: flex; flex-direction: column; align-items: center;">
                <h3 class="text-center">{{$t('apply-project-part4')}}</h3>
                <ul class="p-d-flex p-flex-column p-p-0 p-mb-0">
                  <li class="p-mb-2">HTML5</li>
                  <li class="p-mb-2">CSS3</li>
                  <li class="p-mb-2">JavaScript</li>
                </ul>
              </div>
              <div style="flex-grow: 1; display: flex; flex-direction: column; align-items: center;">
                <h3 class="text-center">Frameworks</h3>
                <ul class="p-d-flex p-flex-column p-p-0" style="list-style-position: inside; padding-left: 0;">
                  <li class="p-mb-4">React.js (Frontend)</li>
                  <li class="p-mb-4">Node.js (Backend)</li>
                  <li class="p-mb-4">Express.js (Backend)</li>
                </ul>
              </div>
            </div>
          </pv-splitter-panel>
          <pv-splitter-panel style="flex-grow: 1" aria-label="Budget Panel">
            <h2 style="text-align: center;">{{$t('apply-project-part5')}}: $50,000</h2>
            <p class="px-5">
              El presupuesto asignado para este proyecto es de $50,000 USD, incluyendo el
              costo de desarrollo, pruebas, implementación y mantenimiento inicial durante los
              primeros seis meses.
            </p>
          </pv-splitter-panel>
        </pv-splitter>
      </pv-splitter-panel>

      <!-- Segundo Panel Verticalmente -->
      <pv-splitter-panel style="flex-grow: 1" aria-label="Resources and Processes Panel">
        <!-- Segundo Splitter Horizontalmente -->
        <pv-splitter layout="horizontal" aria-label="Splitter for Resources and Processes">
          <pv-splitter-panel style="display: flex; flex-direction: column;" aria-label="Resources Panel">
            <h2 class="text-center">{{$t('apply-project-part6')}}</h2>
            <div class="p-d-flex p-jc-center p-ai-center bg-bluegray-400" style="overflow-x: auto; max-height: 300px;">
              <div class="p-d-flex p-jc-start p-ai-center icon-container" style="white-space: nowrap; width: 100%; max-width: 25vw;">
                <i class="pi pi-file text-8xl text-black-alpha-90 pr-3" aria-label="Recurso 1">
                  <p class="m-0 text-center text-black-alpha-90 text-2xl">Recurso 1</p>
                </i>
                <i class="pi pi-file text-8xl text-black-alpha-90 pr-3" aria-label="Recurso 2">
                  <p class="m-0 text-center text-black-alpha-90 text-2xl">Recurso 2</p>
                </i>
                <!-- Agregar más elementos de recurso aquí -->
              </div>
            </div>
          </pv-splitter-panel>

          <pv-splitter-panel style="flex-grow: 1" aria-label="Processes Panel">
            <h2 class="text-center">{{$t('apply-project-part7')}}</h2>
            <ol aria-label="Development Processes List">
              <li>Recolección de Requisitos: Definición de requisitos del proyecto en una reunión inicial.</li>
              <li>Desarrollo Iterativo: Metodología ágil con entregas incrementales para retroalimentación temprana.</li>
              <!-- Agregar más elementos de proceso aquí -->
            </ol>
          </pv-splitter-panel>
        </pv-splitter>
      </pv-splitter-panel>
    </pv-splitter>

    <pv-confirm-dialog group="templating" class="custom-dialog" aria-label="Confirmation Dialog">
      <template #message="slotProps">
        <div class="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border">
          <i :class="slotProps.message.icon" class="text-5xl text-primary-500"></i>
          <p>{{ slotProps.message.message }}</p>
        </div>
      </template>
    </pv-confirm-dialog>

    <div class="d-flex justify-content-center mt-5" aria-label="Postulation Section">
      <div style="text-align: center;">
        <pv-toast></pv-toast>
        <pv-button @click="showTemplate()" :label="$t('apply-project-part8')" severity="contrast" class="text-3xl my-3" outlined aria-label="Postulation Button"></pv-button>
      </div>
    </div>
  </div>

</template>

<style>
.custom-dialog .text-5xl {
  font-size: 5.5rem !important;
}

.custom-dialog .text-primary-500 {
  color: #b864f3 !important;
}

.custom-dialog .p-dialog-footer .p-button {
  margin: 1rem;
  padding: 0.75rem 1.5rem; /* Ajusta el padding de los botones para hacerlos más grandes */
  font-size: 1.25rem;
}

.custom-dialog .p-dialog .p-dialog-footer {
  justify-content: center; /* Centra los botones horizontalmente */
}

.custom-dialog .blur-effect {
  filter: blur(2px);
}

.custom-dialog .p-button.p-button-outlined {
  border-color: #B864F3;
  background-color: transparent;
  color: #B864F3;
}

.custom-dialog .p-button{
  background: #b864f3;
  color: #ffffff;
  border-color: #b864f3;
}

</style>
