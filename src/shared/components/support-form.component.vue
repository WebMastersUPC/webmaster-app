<template>
  <div class="support-details">
    <pv-floatlabel>
      <pv-inputText id="userId" v-model="userId" />
      <label for="userId">User ID</label>
    </pv-floatlabel>
    <div class="card flex" aria-label="Dropdown for Problem Type">
      <pv-dropDown v-model="selectedProblem" :options="problems" optionLabel="name" placeholder="Type of problem" class="w-full md:w-14rem" />
    </div>
    <pv-floatlabel>
      <pv-inputText id="title" v-model="title" />
      <label for="title">Title</label>
    </pv-floatlabel>

    <pv-floatlabel>
      <pv-textarea v-model="description" rows="5" />
      <label for="description">Description</label>
    </pv-floatlabel>

    <div class="card" id="upload">
      <label for="file-input" id="upload-button">
        <i class="pi pi-file-plus"></i>
        <span class="ml-2">Upload File</span>
        <input type="file" id="file-input" @change="handleFileChange" style="display: none;" />
      </label>
      <hr>
      <ul>
        <li v-for="(file, index) in files" :key="index">
          {{ file.name }} ({{ file.size }} bytes)
        </li>
      </ul>
    </div>
    <button @click="submitForm">Submit Request</button>
  </div>
</template>

<script>
import supportService from '../../../public/services/support.service';

export default {
  name: "support-form",
  data() {
    return {
      userId: '',
      selectedProblem: null,
      problems: [
        { name: 'Not Found', code: '404' },     
        { name: 'Unauthorized', code: '401' },        
        { name: 'Forbidden', code: '403' },           
        { name: 'Bad Request', code: '400' },        
        { name: 'Internal Server Error', code: '500' }, 
        { name: 'Service Unavailable', code: '503' }, 
        { name: 'Gateway Timeout', code: '504' },   
        { name: 'Conflict', code: '409' },            
        { name: 'Unsupported Media Type', code: '415' }, 
      ],
      title: '',
      description: '',
      status: 'open',
      files: []
    };
  },
  methods: {
    handleFileChange(event) {
      this.files = Array.from(event.target.files);
    },
    async submitForm() {
      try {
        const formData = new FormData();
        formData.append('userId', this.userId);
        formData.append('title', this.title);
        formData.append('description', this.description);
        formData.append('status', this.status);

        if (this.files.length > 0) {
          formData.append('attachment', this.files[0]);
        }

        const response = await supportService.createSupportRequest(formData);
        console.log('Support request created successfully:', response);

        // Reset form
        this.userId = '';
        this.title = '';
        this.description = '';
        this.status = 'open';
        this.files = [];

        alert('Support request submitted successfully!'); // Mensaje de éxito

      } catch (error) {
        console.error('Error creating support request:', error);
        console.log('Error response:', error.response);
        alert('Error submitting support request. Please try again.'); // Manejo básico de errores
      }
    }
  }
};
</script>

<style scoped>
.p-float-label {
  width: 100%;
  max-width: 800px;
}

.p-inputtext {
  width: 100%;
}

.support-details {
  padding-bottom: 11rem;
}

div.support-details {
  margin: 0 20%;
}

div, .p-float-label {
  margin-top: 1.4rem;
}

#upload {
  background-color: white;
  flex-direction: column;
  align-items: center;
}

#upload-button {
  transition: transform 0.3s ease;
}

#upload-button:hover {
  transform: scale(1.1);
}
</style>
