<template>
  <div class="form-container flex flex-column align-items-center justify-content-center">

    <div class="box2 flex flex-column w-10 gap-3">
      <div class="p-field pv-fluid">
        <pv-inputText class="p-inputtext" id="recipient" v-model="form.recipient" :placeholder="$t('message-part1')" aria-label="Recipient" />
      </div>
      <div class="p-field ">
        <pv-inputText class="p-inputtext" id="title" v-model="form.title" :placeholder="$t('message-part2')" aria-label="Message Title" />
      </div>
      <div class="p-field ">
        <pv-inputText class="p-inputtext" id="subject" v-model="form.subject" :placeholder="$t('message-part3')" aria-label="Subject" />
      </div>
      <div class="p-field ">
        <pv-textarea class="p-textarea" id="message" v-model="form.message" :placeholder="$t('message-part4')" aria-label="Message" />
      </div>
      <div>
        <div class="p-inputtext pt-3">
          <label for="file" aria-label="File Attachment Label">{{$t('message-part5')}}</label>
          <pv-scrollpanel ref="scrollPanel" class="pv-scrollpanel" style="width: 100%; height: 400px" aria-label="File Upload Scroll Panel">
            <pv-file-upload class="large-fileupload" name="demo[]" url="/api/upload" @upload="onAdvancedUpload($event)" :multiple="true" :maxFileSize="1000000" accept=".pdf,.doc,.docx" aria-label="File Upload">
              <template #empty>
                <div v-for="(image, index) in uploadedImages" :key="index">
                  <p>{{ image.name }}</p>
                </div>
                <p aria-label="File Upload Instructions">{{$t('message-part6')}}</p>
              </template>
            </pv-file-upload>
          </pv-scrollpanel>
        </div>
      </div>
      <div class="flex justify-content-center">
        <pv-button class="p-button" :label="$t('message-part7')" @click="submitForm" aria-label="Submit Form Button" style="width:30%"/>
      </div>
    </div>

  </div>
</template>


<script>
import { ref } from "vue";

export default {
  name: "message-form",
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

.p-inputtext,
.p-textarea,
.p-inputtext > label {
  width: 100%;
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