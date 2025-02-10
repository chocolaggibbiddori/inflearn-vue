<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input id="title" v-model="title" type="text" />
        </div>
        <div>
          <label for="contents">Contents: </label>
          <textarea id="contents" v-model="content" rows="5" />
          <p v-if="!isContentValid" class="validation-text warning">
            Content must be less than 200 letters
          </p>
        </div>
        <button class="btn" type="submit">Create</button>
        <p class="log">
          {{ logMessage }}
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api/post';

export default {
  data() {
    return {
      title: '',
      content: '',
      logMessage: ''
    };
  },
  computed: {
    isContentValid() {
      return this.content.length <= 200;
    }
  },
  methods: {
    submitForm() {
      const post = {
        title: this.title,
        contents: this.content
      };

      createPost(post)
        .then(() => this.$router.push('/main'))
        .catch(error => (this.logMessage = error.response.data.message));
    }
  }
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}

.btn {
  color: white;
}
</style>
