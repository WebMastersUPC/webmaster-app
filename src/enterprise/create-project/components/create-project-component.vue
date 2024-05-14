<template>
  <div class="p-grid p-justify-center p-align-center flex-container m-2" >
    <pv-card aria-label="Create Project Form" class="card-flex form-container">

      <template #title>
        <div class="title-container">
          <img src="/Geekit.png"/>
          <h1 class="text-center" v-if="!isEditingTitle">{{ titleText }}</h1>
          <pv-inputText aria-label="Project Title" v-else v-model="titleText" type="text" class="editable-input" />
          <pv-button @click="toggleEditingTitle" icon="pi pi-pencil" class="p-button-rounded p-button-text edit-button" v-if="!isEditingTitle" />
          <pv-button @click="toggleEditingTitle" icon="pi pi-check" class="p-button-rounded p-button-text edit-button" v-else />
        </div>
      </template>
      <template #subtitle>
        Descripción
      </template>
      <template #content>
        <p class="m-0" v-if="!isEditingDescription">{{ descriptionText }}</p>
        <pv-textarea aria-label="Project Description" v-else v-model="descriptionText" type="text" class="editable-input" autoResize/>
        <pv-button @click="toggleEditingDescription" icon="pi pi-pencil" class="p-button-rounded p-button-text edit-button" v-if="!isEditingDescription" />
        <pv-button @click="toggleEditingDescription" icon="pi pi-check" class="p-button-rounded p-button-text edit-button" v-else />
        <hr>
        <div class="contenedor-secciones">
          <div class="seccion-izquierda">
            <h2 class="text-center">Tecnologías</h2>

            <div class="flex justify-content-center">
              <div class=" flex flex-wrap  w-11 justify-content-between" v-if="!isEditingTechnologies" >
                <div class="">
                  <h3 >Lenguajes</h3>
                  <ul>
                    <li v-for="(language, index) in languages" :key="index">{{ language }}</li>
                  </ul>
                </div>
                <div class="">
                  <h3>Frameworks</h3>
                  <ul>
                    <li v-for="(framework, index) in frameworks" :key="index">{{ framework }}</li>
                  </ul>
                </div>
              </div>

              <div v-else>
                <div class=" ml-3 flex flex-row flex-wrap justify-content-center w-10">
                  <div class="  w-10 "> <!--box1-->
                    <h3>Lenguajes</h3>
                    <div class="" v-for="(language, index) in languages" :key="index" >
                      <div class="flex justify-content-between flex-wrap align-items-center">
                        <div class="">
                          <pv-inputText class="w-7 mb-2 " v-if="editingLanguageIndex === index" v-model="languages[index]" />
                          <p v-else>{{ language }}</p>
                        </div>

                        <div class=" flex align-items-center justify-content-center">
                          <pv-button style="height:70%;" @click="startEditingLanguage(index)" label="Editar" v-if="editingLanguageIndex !== index" />
                          <pv-button style="width:100%;" @click="finishEditingLanguage" label="Guardar" v-else />
                        </div>
                      </div>
                    </div>

                    <div class=" flex flex-column gap-2 mt-2  justify-content-center ">
                      <pv-inputText v-model="newLanguage" placeholder="Añadir nuevo lenguaje" />
                      <pv-button @click="addLanguage" label="Añadir" />
                    </div>
                  </div>

                  <div class="w-10">
                    <h3>Frameworks</h3>
                    <div class=" " v-for="(framework, index) in frameworks" :key="index" >
                      <div class="flex justify-content-between flex-wrap align-items-center">
                        <pv-inputText class="w-7 box2 flex" v-if="editingFrameworkIndex === index" v-model="frameworks[index]" />
                        <span v-else>{{ framework }}</span>

                        <div class="  flex mb-2 align-items-center justify-content-center">
                          <pv-button style="height:70%;" @click="startEditingFramework(index)" label="Editar" v-if="editingFrameworkIndex !== index" />
                          <pv-button style="width:100%;" @click="finishEditingFramework" label="Guardar" v-else />
                        </div>

                      </div>


                    </div>

                    <div class=" flex flex-column gap-2 mt-2  justify-content-center">
                      <pv-inputText v-model="newFramework" placeholder="Añadir nuevo framework" />
                      <pv-button @click="addFramework" label="Añadir" />
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <pv-button @click="toggleEditingTechnologies" icon="pi pi-pencil" class="p-button-rounded p-button-text edit-button" v-if="!isEditingTechnologies" />
            <pv-button @click="toggleEditingTechnologies" icon="pi pi-check" class="p-button-rounded p-button-text edit-button" v-else />
            <hr>


            <div class="flex flex-column  text-overflow-clip">
              <div>
                <h2 class=" flex overflow-auto ">Recursos y Documentacion</h2>
              </div>



              <pv-scrollpanel ref="scrollPanel" class="pv-scrollpanel" style="width: 100%; height: 400px">
                <pv-file-upload class="large-fileupload" name="demo[]" url="/api/upload" @upload="onAdvancedUpload($event)" :multiple="true" :maxFileSize="1000000" accept=".pdf,.doc,.docx">
                  <template #empty>
                    <div v-for="(image, index) in uploadedImages" :key="index">
                      <p>{{ image.name }}</p>
                    </div>
                    <p>Drag and drop files to here to upload.</p>
                  </template>
                </pv-file-upload>
              </pv-scrollpanel>
            </div>
            </div>


          <div class="seccion-derecha">
            <h2  class="text-center">Presupuesto: $50,000</h2>
            <p v-if="!isEditingBudget">{{ budgetText }}</p>
            <pv-inputText aria-label="Project Budget" v-else v-model="budgetText" type="text" class="editable-input" />
            <pv-button @click="toggleEditingBudget" icon="pi pi-pencil" class="p-button-rounded p-button-text edit-button" v-if="!isEditingBudget" />
            <pv-button @click="toggleEditingBudget" icon="pi pi-check" class="p-button-rounded p-button-text edit-button" v-else />
            <hr>
            <h2 class="text-center">Procesos y Metodologías de Desarrollo</h2>
            <ol v-if="!isEditingMethodologies">
              <li v-for="(methodology, index) in methodologies" :key="index">{{ methodology }}</li>
            </ol>
            <div v-else>
              <div v-for="(methodology, index) in methodologies" :key="index">
                <pv-inputText v-model="methodologies[index]" type="text" class="editable-input" />
                <pv-button @click="removeMethodology(index)" label="Eliminar" />
              </div>
              <pv-inputText v-model="newMethodology" placeholder="Añadir una nueva metodología" />
              <pv-button @click="addMethodology" label="Añadir" />
            </div>
            <pv-button @click="toggleEditingMethodologies" icon="pi pi-pencil" class="p-button-rounded p-button-text edit-button" v-if="!isEditingMethodologies" />
            <pv-button @click="toggleEditingMethodologies" icon="pi pi-check" class="p-button-rounded p-button-text edit-button" v-else />
          </div>
        </div>
        <div style="margin-top: 50px;"></div>
        <pv-dialog v-model:visible="showDialog" :modal="true" :closable="false" class="custom-dialog">
          <template #header>
            <h2>¿Estas seguro de que quieres publicar el proyecto?</h2>
          </template>
          <p>Podrás editar el proyecto cuando quieras, hasta que hayas aceptado a un desarrollador para trabajar.</p>
          <template #footer class="text-center">
            <pv-button label="Aceptar" @click="publishProject" class="p-button-primary"/>
            <pv-button label="Cancelar" @click="showDialog = false" class="p-button-text"/>
          </template>
        </pv-dialog>

        <pv-button class="publish-button" @click="showDialog = true">Publicar Proyecto</pv-button>
      </template>

    </pv-card>
  </div>

</template>

<script>
export default {
  name:"create-project",
  data() {
    return {
      uploadedImages: [],
      showDialog: false,
      isEditingTitle: false,
      titleText: 'Plataforma de Comercio Electrónico Geekit',
      isEditingDescription: false,
      descriptionText: 'La Plataforma de Comercio Electrónico Geekit es un proyecto destinado a crear una experiencia de compra en línea excepcional para nuestra marca de ropa y accesorios para jóvenes apasionados por la cultura geek. La plataforma debe ofrecer una navegación intuitiva, una interfaz atractiva y funcionalidades que mejoren la experiencia del usuario, desde la búsqueda de productos hasta el proceso de compra y seguimiento de pedidos.',
      isEditingBudget: false,
      budgetText: 'El presupuesto asignado para este proyecto es de $50,000 USD, incluyendo el costo de desarrollo, pruebas, implementación y mantenimiento inicial durante los primeros seis meses.',
      isEditingTechnologies: false,
      editingLanguageIndex: null,
      editingFrameworkIndex: null,
      languages: ['HTML5', 'CSS3', 'JavaScript'],
      newLanguage: '',
      frameworks: ['React.js (Frontend)', 'Node.js (Backend)', 'Express.js (Backend)'],
      newFramework: '',
      isEditingMethodologies: false,
      methodologies: [
        'Recolección de Requisitos: Definición de requisitos del proyecto en una reunión inicial.',
        'Desarrollo Iterativo: Metodología ágil con entregas incrementales para retroalimentación temprana.',
        'Diseño de UI/UX: Creación de prototipos de interfaz centrados en usabilidad y estética.',
        'Desarrollo Frontend y Backend: Implementación de frontend y backend con código limpio y modular.',
        'Pruebas y Control de Calidad: Evaluación exhaustiva en todas las etapas para garantizar calidad.',
        'Implementación y Despliegue: Lanzamiento en entorno de producción tras completar desarrollo y pruebas.',
        'Mantenimiento y Soporte: Ofrecimiento de soporte continuo, actualizaciones y monitoreo post-lanzamiento.'
      ],
      newMethodology: '',
    };
  },
  methods: {
    onAdvancedUpload(event) {
      this.$set(this.uploadedImages, this.uploadedImages.length, event.files[0]);
      this.$nextTick(() => {
        this.$refs.scrollPanel.refresh();
      });
    },
    publishProject() {
      console.log('Proyecto publicado');
      this.showDialog = false;
    },
    toggleEditingTitle() {
      this.isEditingTitle = !this.isEditingTitle;
    },
    toggleEditingDescription() {
      this.isEditingDescription = !this.isEditingDescription;
    },
    toggleEditingBudget() {
      this.isEditingBudget = !this.isEditingBudget;
    },
    toggleEditingTechnologies() {
      this.isEditingTechnologies = !this.isEditingTechnologies;
    },
    addLanguage() {
      if (this.newLanguage) {
        this.languages.push(this.newLanguage);
        this.newLanguage = '';
      }
    },
    addFramework() {
      if (this.newFramework) {
        this.frameworks.push(this.newFramework);
        this.newFramework = '';
      }
    },
    startEditingLanguage(index) {
      this.editingLanguageIndex = index;
    },
    finishEditingLanguage() {
      if (this.languages[this.editingLanguageIndex].trim() === '') {
        this.languages.splice(this.editingLanguageIndex, 1);
      }
      this.editingLanguageIndex = null;
    },
    startEditingFramework(index) {
      this.editingFrameworkIndex = index;
    },
    finishEditingFramework() {
      if (this.frameworks[this.editingFrameworkIndex].trim() === '') {
        this.frameworks.splice(this.editingFrameworkIndex, 1);
      }
      this.editingFrameworkIndex = null;
    },
    toggleEditingMethodologies() {
      this.isEditingMethodologies = !this.isEditingMethodologies;
    },
    addMethodology() {
      if (this.newMethodology) {
        this.methodologies.push(this.newMethodology);
        this.newMethodology = '';
      }
    },
    removeMethodology(index) {
      this.methodologies.splice(index, 1);
    },
  },

};
</script>

<style>


.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-flex {
  max-width: 1300px;
  width:100%;
  margin: 50px auto;
  font-family: 'Roboto', sans-serif;
  padding: 2rem;
  border-radius: 10px;
  height: auto;
  display: flex;
  flex-direction: column;
}

.contenedor-secciones {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

.seccion-izquierda,
.seccion-derecha {
  width: calc(50% - 10px);
}

.seccion-izquierda {
  margin-right: 10px;
  border-right: 1px solid #A9A9A9;
  padding-right: 30px;
}

.seccion-derecha {
  margin-left: 10px;
  padding-left: 10px;
}

.card-flex img {
  width: 100%;
}

hr {
  margin: 1rem 0;
}

.contenedor-secciones h3 {
  margin-bottom: 0.5rem;
}

.contenedor-secciones ul {
  padding-left: 1rem;
}

.contenedor-secciones li {
  margin-bottom: 0.5rem;
}


.card-flex img {
  width: 80px;
}

.p-grid.p-justify-center.p-align-center {
  justify-content: flex-start;
}
.title-container {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
}

.title-container img {
  justify-self: start;
}

.title-container h1 {
  justify-self: center;
}
.custom-dialog {

  justify-content: center;
  align-items: center;
}
.editable-input, .m-0 {
  width: 100%;
  min-height: 50px;
}
.p-grid.p-justify-center.p-align-center {
  margin-bottom: 50px;
}




</style>
