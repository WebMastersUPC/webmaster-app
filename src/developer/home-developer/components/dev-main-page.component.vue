<script>
import {DeveloperEntity} from "../../../shared/models/developer.model.js";
import {HomeService} from "../../../../public/services/home.service.js";

export default {
  name: "developer-page",
  data() {
    return {
      isEditingMain: false,
      mainText: '',
      isEditingCategories: [false, false, false, false, false, false],
      categoryTexts: [],
      categories: ['categories.country', 'categories.phone', 'categories.email', 'categories.projectsFinished', 'categories.specialties'],
      value: 0,
      homeService: new HomeService(),
      displayDialog: false,
      newImgUrl: ''
    };
  },
  methods: {
    toggleEditingMain() {
      if(this.isEditingMain){
        console.log(this.developer.id)
        let updatedInfo ={
          description: this.mainText,
          country: this.categoryTexts[0],
          phone: this.categoryTexts[1],
          specialties: this.categoryTexts[4],
          profile_img_url: this.developer.profile_img_url
        }
        this.homeService.updateDevInfo(this.developer.id, updatedInfo)
      }
      this.isEditingMain = !this.isEditingMain;

    },

    toggleEditingCategory(index) {
      if(this.isEditingCategories[index]){
        console.log(this.developer.phone)
        let updatedInfo ={
          description: this.mainText,
          country: this.categoryTexts[0],
          phone: this.categoryTexts[1],
          specialties: this.categoryTexts[4]
        }
        this.homeService.updateDevInfo(this.developer.id, updatedInfo)
      }
      this.isEditingCategories[index] = !this.isEditingCategories[index];
    },
    updateImg(){
      if(this.newImgUrl === ''){
        return;
      }
      let img ={
        profile_img_url: this.newImgUrl
      }
      this.newImgUrl = '';
      this.homeService.updateDevProfileImg(this.developer.id, img)
          .then(() => {
            this.displayDialog = false;
            window.location.reload();
          });
    },
    openDialog(){
      this.displayDialog = true;
    },
    closeDialog(){
      this.displayDialog = false;
    }
  },
  components: {},
  props: {
    developer: {
      type: DeveloperEntity,
      required: true
    }
  },
  created() {
    console.log("hola", this.developer);
    this.categoryTexts = [
      this.developer.country,
      this.developer.phone,
      this.developer.user.mail,
      this.developer.completed_projects,
      this.developer.specialties
    ];
    //this.value = this.developer.rating
    this.mainText = this.developer.description
  }
}

</script>

<template>
  <pv-card aria-label="Developer Information">
    <template #title>
      <pv-avatar :image="developer.profile_img_url" class="mr-2" size="xlarge" shape="circle"
                 aria-label="Developer Avatar" @click="openDialog"/>
      <div aria-label="Developer Details">
        <p>{{ developer.name }}</p>
        <!--<pv-rating v-model="value" readonly :cancel="false" aria-label="Developer Rating"/>-->
      </div>
    </template>

    <template #content>
      <hr aria-label="Separator Line">
      <div class="subtitle" aria-label="Summary">{{ $t('dev-main-page-part1') }}</div>
      <div class="editable-container" aria-label="Main Text Container">
        <span v-if="!isEditingMain" class="editable-text" aria-label="Main Text">{{ mainText }}</span>
        <pv-textarea v-else v-model="mainText" type="text" class="editable-input" autoResize
                     aria-label="Main Text Input"/>
        <pv-button @click="toggleEditingMain" icon="pi pi-pencil" class="p-button-rounded p-button-text edit-button"
                   v-if="!isEditingMain" aria-label="Edit Main Text Button"/>
        <pv-button @click="toggleEditingMain" icon="pi pi-check" class="p-button-rounded p-button-text edit-button"
                   v-else aria-label="Confirm Main Text Button"/>
      </div>

      <template v-for="(category, index) in categories" :key="index">
        <hr aria-label="Separator Line" v-if="index !== 0">
        <div class="editable-container secondary" aria-label="Category Container">
          <div class="subtitle" aria-label="Category Title">{{ $t(category) }}</div>
          <span v-if="!isEditingCategories[index]" class="editable-text"
                aria-label="Category Text">{{ categoryTexts[index] }}</span>
          <input v-else v-model="categoryTexts[index]" type="text" class="editable-input"
                 aria-label="Category Text Input"/>
          <pv-button @click="toggleEditingCategory(index)" icon="pi pi-pencil"
                     class="p-button-rounded p-button-text edit-button" v-if="!isEditingCategories[index] && index !== 2 && index !== 3"
                     aria-label="Edit Category Button"/>
          <pv-button @click="toggleEditingCategory(index)" icon="pi pi-check"
                     class="p-button-rounded p-button-text edit-button" v-else-if="index !== 2 && index !== 3" aria-label="Confirm Category Button"/>
        </div>
      </template>

    </template>
  </pv-card>

  <pv-modal  v-model:visible="this.displayDialog" modal header="Update Image URL" >
    <p>Enter the new image URL:</p>
    <input type="text" v-model="newImgUrl" />
    <pv-button label="Accept" @click="updateImg" />
    <pv-button label="Cancel" @click="closeDialog" />
  </pv-modal>

</template>

<style scoped>

hr {
  opacity: 0.3;
}

@media (max-width: 799px) {
  .p-card {
    margin-top: 2rem;
  }
}

.p-card {
  width: 30rem;
  min-width: 20rem;
  box-shadow: 0 20px 40px rgb(57, 57, 57);
  margin-top: 4rem;
  max-height: 800px;
}

:deep(.p-card-title) {
  display: flex;
  align-items: center;
  margin: 20px 20px 0 20px;
  justify-content: center;
}

:deep(.p-avatar) {
  display: flex;
  justify-content: center;
}

img {
  min-width: 64px;
}

:deep(.p-card-content) {
  margin: 0 20px;
}

:deep(.p-rating .p-rating-item.p-rating-item-active .p-rating-icon) {
  color: gold;
}

.subtitle {
  color: #64748b;
}

.editable-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.editable-text {
  word-wrap: break-word;
}

.editable-text,
.editable-input {
  flex-grow: 1;
  border: none;
}

.editable-input {
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  font-family: inherit;
  resize: none;
  overflow: hidden;
  word-wrap: break-word;
  min-height: 1.2rem;
}

:deep(.p-inputtext) {
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 0 0 rgba(18, 18, 23, 0.05) !important;
  padding: 0 !important;
  border-radius: 0px;

}

span {
  max-width: 90%;
}

.edit-button {
  padding: 6px;
  height: 100%;
}

:deep(.p-button.p-button-text) {
  background-color: transparent;
  color: #B864F3;
  border-color: transparent;
}

.secondary {
  display: grid;
  grid-template-columns: 10fr 10fr 1fr;
}

</style>