<script>
import { ProjectService } from "../../../../public/services/project.service.js";
import { ProjectEntity } from "../../../shared/models/project.model.js";

export default {
  name: "create-project",
  data() {
    return {
      uploadedImages: [],
      showDialog: false,
      isEditingTitle: false,
      titleText: 'Title Project',
      isEditingDescription: false,
      descriptionText: 'Description text',
      isEditingBudget: false,
      budgetAmount: 0, // new data property
      isEditingBudgetAmount: false, // new data property
      budgetText: 'Budget description.',
      isEditingTechnologies: false,
      editingLanguageIndex: null,
      editingFrameworkIndex: null,
      languages: ['languages'],
      newLanguage: '',
      frameworks: ['framework'],
      newFramework: '',
      isEditingMethodologies: false,
      methodologies: [
        'methodologies 1.'
      ],
      newMethodology: '',
      projectService: new ProjectService(),
      projectID: null,
      isEditingProject: false,
      initialProjectData: new ProjectEntity({}),

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
      let enterpriseId = localStorage.getItem('enterprise id')
      try {
        const projectData = new ProjectEntity({
          nameProject: this.titleText,
          descriptionProject: this.descriptionText,
          languages: this.languages,
          frameworks: this.frameworks,
          budget: this.budgetAmount,
          budgetDescription: this.budgetText,
          methodologies: this.methodologies,
          enterprise_id: enterpriseId
        });
        console.log(projectData)
        this.projectService.createProject(projectData)
            .then(response => {
              console.log('Proyecto publicado');
              this.projectID = response.project_ID;
              console.log('Project ID:', this.projectID);
              this.showDialog = false;
              this.isEditingProject = true;
              this.initialProjectData = new ProjectEntity(projectData);
            })
      } catch (error) {
        console.error('Error publicando el proyecto:', error);
      }
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
    toggleEditingBudgetAmount() {
      this.isEditingBudgetAmount = !this.isEditingBudgetAmount;
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
    removeLanguage(index) {
      this.languages.splice(index, 1);
    },
    removeFramework(index) {
      this.frameworks.splice(index, 1);
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
    startEditingProject() {
      this.isEditingProject = true;
    },
    confirmEditingProject() {
      try {
        const editedProjectData = new ProjectEntity({
          project_ID: this.projectID,
          nameProject: this.titleText || this.initialProjectData.nameProject,
          descriptionProject: this.descriptionText || this.initialProjectData.descriptionProject,
          languages: this.languages.length ? this.languages : this.initialProjectData.languages,
          frameworks: this.frameworks.length ? this.frameworks : this.initialProjectData.frameworks,
          budget: this.budgetAmount || this.initialProjectData.budget,
          budgetDescription: this.budgetText || this.initialProjectData.budgetDescription,
          methodologies: this.methodologies.length ? this.methodologies : this.initialProjectData.methodologies
        });
        console.log(editedProjectData)
        this.projectService.updateProject(this.projectID, editedProjectData)
            .then(response => {
              console.log('Proyecto editado');
              this.isEditingProject = false;
            })
      } catch (error) {
        console.error('Error editando el proyecto:', error);
      }
    },
    cancelEditingProject() {
      this.titleText = this.initialProjectData.nameProject;
      this.descriptionText = this.initialProjectData.descriptionProject;
      this.languages = [...this.initialProjectData.languages];
      this.frameworks = [...this.initialProjectData.frameworks];
      this.budgetAmount =[...this.initialProjectData.budget];
      this.budgetText = this.initialProjectData.budgetDescription;
      this.methodologies = [...this.initialProjectData.methodologies];
      this.isEditingProject = false;
    }
  }
};
</script>


<template>
  <div class="p-grid p-justify-center p-align-center flex-container m-2">
    <pv-card aria-label="Create Project Form" class="card-flex form-container">
      <template #title>
        <div class="title-container">
          <img src="/Geekit.png" />
          <h1 class="text-center" v-if="!isEditingTitle">{{ titleText }}</h1>
          <pv-inputText aria-label="Project Title" v-else v-model="titleText" type="text" class="editable-input" />
          <pv-button @click="toggleEditingTitle" icon="pi pi-pencil" class="p-button-rounded p-button-text edit-button" v-if="!isEditingTitle" />
          <pv-button @click="toggleEditingTitle" icon="pi pi-check" class="p-button-rounded p-button-text edit-button" v-else />
        </div>
      </template>
      <template #subtitle>
        {{$t('create-project-part1')}}
      </template>
      <template #content>
        <p class="m-0" v-if="!isEditingDescription">{{ descriptionText }}</p>
        <pv-textarea aria-label="Project Description" v-else v-model="descriptionText" type="text" class="editable-input" autoResize />
        <pv-button @click="toggleEditingDescription" icon="pi pi-pencil" class="p-button-rounded p-button-text edit-button" v-if="!isEditingDescription" />
        <pv-button @click="toggleEditingDescription" icon="pi pi-check" class="p-button-rounded p-button-text edit-button" v-else />
        <hr>
        <div class="contenedor-secciones">
          <div class="seccion-izquierda">
            <h2 class="text-center">{{$t('create-project-part2')}}</h2>
            <div class="flex justify-content-center">
              <div class="flex flex-wrap w-11 justify-content-between" v-if="!isEditingTechnologies">
                <div class="">
                  <h3>{{$t('create-project-part3')}}</h3>
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
                <div class="ml-3 flex flex-row flex-wrap justify-content-center w-10">
                  <div class="w-10">
                    <h3>{{$t('create-project-part3')}}</h3>
                    <div class="" v-for="(language, index) in languages" :key="index">
                      <div class="flex justify-content-between flex-wrap align-items-center">
                        <div class="">
                          <pv-inputText class="w-7 mb-2" v-if="editingLanguageIndex === index" v-model="languages[index]" />
                          <p v-else>{{ language }}</p>
                        </div>
                        <div class="flex align-items-center justify-content-center">
                          <pv-button style="height:70%;" @click="startEditingLanguage(index)" :label="$t('create-project-part4')" v-if="editingLanguageIndex !== index" />
                          <pv-button style="width:100%;" @click="finishEditingLanguage" :label="$t('create-project-part5')" v-else />
                          <pv-button style="height:70%;" @click="removeLanguage(index)" severity="danger" :label="$t('create-project-part13')" />
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-column gap-2 mt-2 justify-content-center">
                      <pv-inputText v-model="newLanguage" :placeholder="$t('create-project-part6')" />
                      <pv-button @click="addLanguage" :label="$t('create-project-part7')" />
                    </div>
                  </div>
                  <div class="w-10">
                    <h3>Frameworks</h3>
                    <div class="" v-for="(framework, index) in frameworks" :key="index">
                      <div class="flex justify-content-between flex-wrap align-items-center">
                        <pv-inputText class="w-7 mb-2" v-if="editingFrameworkIndex === index" v-model="frameworks[index]" />
                        <p v-else>{{ framework }}</p>
                        <pv-button style="height:70%;" @click="startEditingFramework(index)" :label="$t('create-project-part4')" v-if="editingFrameworkIndex !== index" />
                        <pv-button style="width:100%;" @click="finishEditingFramework" :label="$t('create-project-part5')" v-else />
                        <pv-button style="height:70%;" @click="removeFramework(index)" severity="danger" :label="$t('create-project-part13')" />
                      </div>
                    </div>
                    <div class="flex flex-column gap-2 mt-2 justify-content-center">
                      <pv-inputText v-model="newFramework" :placeholder="$t('create-project-part6')" />
                      <pv-button @click="addFramework" :label="$t('create-project-part7')" />
                    </div>
                  </div>
                </div>
              </div>
              <pv-button @click="toggleEditingTechnologies" icon="pi pi-pencil" class="p-button-rounded p-button-text edit-button" v-if="!isEditingTechnologies" />
              <pv-button @click="toggleEditingTechnologies" icon="pi pi-check" class="p-button-rounded p-button-text edit-button" v-else />
            </div>
            <hr>
            <div class="flex flex-column text-overflow-clip">
              <div>
                <h2 class="flex overflow-auto">{{$t('create-project-part9')}}</h2>
              </div>
              <pv-scrollpanel ref="scrollPanel" class="pv-scrollpanel" style="width: 100%; height: 400px">
                <pv-file-upload class="large-fileupload" name="demo[]" url="/api/upload" @upload="onAdvancedUpload($event)" :multiple="true" :maxFileSize="1000000" accept=".pdf,.doc,.docx">
                  <template #empty>
                    <div v-for="(image, index) in uploadedImages" :key="index">
                      <p>{{ image.name }}</p>
                    </div>
                    <p>{{$t('create-project-part10')}}</p>
                  </template>
                </pv-file-upload>
              </pv-scrollpanel>
            </div>
          </div>
          <div class="seccion-derecha">
            <h2 class="text-center">
              {{$t('create-project-part11')}}:
              <span v-if="!isEditingBudgetAmount">{{ budgetAmount }}</span>
              <input aria-label="Budget Amount" v-else v-model="budgetAmount" type="number" class="editable-input" />
            </h2>
            <p v-if="!isEditingBudget">{{ budgetText }}</p>
            <pv-inputText aria-label="Project Budget" v-else v-model="budgetText" type="text" class="editable-input" />
            <pv-button @click="toggleEditingBudget" icon="pi pi-pencil" class="p-button-rounded p-button-text edit-button" v-if="!isEditingBudget" />
            <pv-button @click="toggleEditingBudget" icon="pi pi-check" class="p-button-rounded p-button-text edit-button" v-else />
            <pv-button @click="toggleEditingBudgetAmount" icon="pi pi-pencil" class="p-button-rounded p-button-text edit-button" v-if="!isEditingBudgetAmount" />
            <pv-button @click="toggleEditingBudgetAmount" icon="pi pi-check" class="p-button-rounded p-button-text edit-button" v-else />
            <hr>
            <h2 class="text-center">{{$t('create-project-part12')}}</h2>
            <ol v-if="!isEditingMethodologies">
              <li v-for="(methodology, index) in methodologies" :key="index">{{ methodology }}</li>
            </ol>
            <div v-else>
              <div v-for="(methodology, index) in methodologies" :key="index">
                <pv-inputText v-model="methodologies[index]" type="text" class="editable-input" />
                <pv-button @click="removeMethodology(index)" severity="danger" :label="$t('create-project-part13')" />
              </div>
              <pv-inputText v-model="newMethodology" :placeholder="$t('create-project-part14')" />
              <pv-button @click="addMethodology" :label="$t('create-project-part7')" />
            </div>
            <pv-button @click="toggleEditingMethodologies" icon="pi pi-pencil" class="p-button-rounded p-button-text edit-button" v-if="!isEditingMethodologies" />
            <pv-button @click="toggleEditingMethodologies" icon="pi pi-check" class="p-button-rounded p-button-text edit-button" v-else />
          </div>
        </div>
        <div style="margin-top: 50px;"></div>
        <pv-dialog v-model:visible="showDialog" :modal="true" :closable="false" class="custom-dialog">
          <template #header>
            <h2>{{$t('create-project-part15')}}</h2>
          </template>
          <p>{{$t('create-project-part16')}}</p>
          <template #footer class="text-center">
            <pv-button :label="$t('create-project-part18')" @click="publishProject" class="p-button-primary" />
            <pv-button :label="$t('create-project-part19')" @click="showDialog = false" class="p-button-text" />
          </template>
        </pv-dialog>
        <pv-button v-if="!isEditingProject" class="publish-button" @click="showDialog = true">{{$t('create-project-part17')}}</pv-button>
        <div v-else>
          <div class="button-row">
            <pv-button class="edit-project-button" severity="info" @click="startEditingProject">{{$t('create-project-part21')}}</pv-button>
            <div class="confirm-cancel-buttons" v-if="isEditingProject">
              <pv-button class="confirm-button" @click="confirmEditingProject">{{$t('create-project-part20')}}</pv-button>
              <pv-button class="cancel-button" severity="danger" @click="cancelEditingProject">{{$t('create-project-part19')}}</pv-button>
            </div>
          </div>
        </div>
      </template>
    </pv-card>
  </div>
</template>



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
.button-row {
  display: flex;
  gap: 10px;
}

.confirm-cancel-buttons {
  display: flex;
  gap: 10px;
}
</style>
