<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">password: </label>
      <input id="password" type="password" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="submit">Sign Up</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: ''
    };
  },
  methods: {
    submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname
      };

      registerUser(userData)
        .then(({ data }) => {
          this.logMessage = `${data.username}님이 가입되었습니다.`;
          this.resetForm();
        })
        .catch(error => console.error(error));
    },
    resetForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    }
  }
};
</script>

<style scoped></style>
