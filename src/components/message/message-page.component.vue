<template>
  <div class="form-container">
    <div class="p-field p-col-12 p-md-6 pv-fluid">
      <pv-inputText class="p-inputtext" id="recipient" v-model="form.recipient" placeholder="Destinatario" />
    </div>
    <div class="p-field p-col-12 p-md-6">
      <pv-inputText class="p-inputtext" id="title" v-model="form.title" placeholder="Título del mensaje" />
    </div>
    <div class="p-field p-col-12">
      <pv-inputText class="p-inputtext" id="subject" v-model="form.subject" placeholder="Asunto" />
    </div>
    <div class="p-field p-col-12">
      <pv-textarea class="p-textarea" id="message" v-model="form.message" placeholder="Mensaje" />
    </div>
    <div class="p-field p-col-12">
      <div class="p-inputtext">
        <label for="file">Adjuntar archivos</label>
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
    <div class="p-field p-col-12">
      <pv-button class="p-button" label="Enviar" @click="submitForm" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "message-page",
  setup() {
    const form = ref({
      username: '',
      title: '',
      subject: '',
      message: '',
      file: null
    });

    const submitForm = () => {
      console.log(form.value);
    };

    return { form, submitForm };
  }
};
</script>

<style scoped>


label {
  font-family: 'Lato', sans-serif;
}
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.p-field {
  margin-bottom: 1.5rem;
}

.p-inputtext,
.p-textarea,
.p-inputtext > label {
  width: 1100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.p-textarea {
  height: 300px;
}
.p-inputtext {
  overflow: hidden;

}

.p-button {
  width: 100%;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.p-button:hover {
  background-color: #0069d9;
}


</style>