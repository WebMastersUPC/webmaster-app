<script setup>
import { ref } from 'vue'

const isEditingMain = ref(false)
const mainText = ref('Texto inicial')
const isEditingCategories = ref([false, false, false, false, false, false])
const categoryTexts = ref(['Texto inicial', 'Texto inicial', 'Texto inicial', 'Texto inicial', 'Texto inicial', 'Texto inicial'])
const categories = ref(['Categoría 1', 'Categoría 2', 'Categoría 3', 'Categoría 4', 'Categoría 4', 'Categoría 5', 'Categoría 6'])

const toggleEditingMain = () => {
  isEditingMain.value = !isEditingMain.value
}

const toggleEditingCategory = (index) => {
  isEditingCategories.value[index] = !isEditingCategories.value[index]
}

</script>

<template>
  <div id="main-container">
    <pv-card>
      <template #title>
        <pv-avatar image="https://pbs.twimg.com/media/EpNJ3CGXYAI68mZ.jpg" class="mr-2" size="xlarge" shape="circle" />
        <p>Messi Calvo jaja</p>
      </template>

      <template #content>
        <hr>
        <div class="subtitle">Resumen</div>
        <div class="editable-container">
          <span v-if="!isEditingMain" class="editable-text">{{ mainText }}</span>
          <pv-textarea v-else v-model="mainText" type="text" class="editable-input" autoResize/>
          <pv-button @click="toggleEditingMain" icon="pi pi-pencil" class="p-button-rounded p-button-text edit-button" v-if="!isEditingMain" />
          <pv-button @click="toggleEditingMain" icon="pi pi-check" class="p-button-rounded p-button-text edit-button" v-else />
        </div>

        <template v-for="(category, index) in categories" :key="index">
          <hr>
          <div class="editable-container secondary">
            <div class="subtitle">{{ category }}</div>
            <span v-if="!isEditingCategories[index]" class="editable-text">{{ categoryTexts[index] }}</span>
            <input v-else v-model="categoryTexts[index]" type="text" class="editable-input" />
            <pv-button @click="toggleEditingCategory(index)" icon="pi pi-pencil" class="p-button-rounded p-button-text edit-button" v-if="!isEditingCategories[index]" />
            <pv-button @click="toggleEditingCategory(index)" icon="pi pi-check" class="p-button-rounded p-button-text edit-button" v-else />
          </div>
        </template>

      </template>
    </pv-card>

    <pv-card>
      <template #title> <p  style="color: #3554BC">Proyectos</p></template>

      <template #content>
        <hr>
        <template class="project-list">
          <div class="project">
            <h4>Nombre Proyecto</h4>
            <p class="subtitle tipo-proyecto">Tipo de proyecto</p>
            <p class="postulantes">Postulantes: 10</p>
          </div>
          <div class="project">
            <h4>Nombre Proyecto</h4>
            <p class="subtitle tipo-proyecto">Tipo de proyecto</p>
            <p class="postulantes">Postulantes: 10</p>
          </div>


          <div class="project">
            <h4>Nombre Proyecto</h4>
            <p class="subtitle tipo-proyecto">Tipo de proyecto</p>
            <pv-progressbar :value="50"></pv-progressbar>
          </div>

          <div class="project">
            <h4>Nombre Proyecto</h4>
            <p class="subtitle tipo-proyecto">Tipo de proyecto</p>
            <pv-progressbar :value="15"></pv-progressbar>
          </div>

          <div class="project">
            <h4>Nombre Proyecto</h4>
            <p class="subtitle tipo-proyecto">Tipo de proyecto</p>
            <pv-progressbar :value="70"></pv-progressbar>
          </div>

          <div class="project">
            <h4>Nombre Proyecto</h4>
            <p class="subtitle tipo-proyecto">Tipo de proyecto</p>
            <pv-progressbar :value="100"></pv-progressbar>
          </div>
        </template>

      </template>
    </pv-card>
  </div>
</template>

<style>
#main-container{
  display:flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 6rem;
}

hr{
  opacity:0.3;
}

@media (max-width: 799px) {
  .p-card{
    margin-top:2rem;
  }
}

.p-card {
  width: 30rem;
  min-width: 20rem;
  box-shadow: 0 20px 40px rgb(57, 57, 57);
  margin-top: 4rem;
  max-height: 800px;
}
.p-card-title {
  display: flex;
  align-items: center;
  margin: 20px 20px 0 20px;
  justify-content: center;
}
.p-avatar {
  display: flex;
  justify-content: center;
}
img {
  min-width: 64px;
}

.p-card-content {
  margin: 0 20px;
}

.subtitle {
  color: #64748b;
}

.editable-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.editable-text{
  word-wrap: break-word;
}
.editable-text,
.editable-input {
  flex-grow: 1;
  border: none;
}

.editable-input{
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  font-family: inherit;
  resize: none;
  overflow: hidden;
  word-wrap: break-word;
  min-height: 1.2rem;
}

.p-inputtext {
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 0 0 rgba(18, 18, 23, 0.05) !important;
  padding: 0 !important;
  border-radius: 0px;

}

span{
  max-width: 90%;
}

.edit-button {
  padding: 6px;
  height: 100%;
}
.p-button.p-button-text {
  background-color: transparent;
  color: #B864F3;
  border-color: transparent;
}
.secondary{
  display:grid;
  grid-template-columns: 10fr 10fr 1fr;
}

.project-list{
  display:block;
  justify-content: center;
  overflow:auto;
  height: 96%;
}
.project{
  background-color:#D9D9D9;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgb(197, 197, 197);
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 10px;
  height: 80px;
  transition: transform 0.2s ease;
}
.project:hover{
  cursor:pointer;
  transform: scale(1.01, 1.01);
}

.tipo-proyecto{
  font-size: 0.8rem;
}

h4{
  margin: 1px
}
.postulantes{
  margin-top: 10px;
  color: #3554BC
}

.p-progressbar{
  width: 70%;
  align-self: center;
  height: 15px;
  margin-top: 5px;
}

.p-progressbar .p-progressbar-value{
  background: linear-gradient(to right, #3554BC, #B864F3);;
}
</style>