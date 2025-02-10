<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="email" v-model="username" />
        </div>
        <div>
          <label for="password">password: </label>
          <input id="password" type="password" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button type="submit" :disabled="!isFormValid" class="btn">
          Sign Up
        </button>
        <p>{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: ''
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
    isFormValid() {
      return this.isUsernameValid && this.password && this.nickname.length >= 2;
    }
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
