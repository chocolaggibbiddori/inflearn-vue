<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="email" v-model="username" />
    </div>
    <div>
      <label for="password">password: </label>
      <input id="password" type="password" v-model="password" />
    </div>
    <button type="submit" :disabled="!isFormValid">Login</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: ''
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
    isFormValid() {
      return this.isUsernameValid && this.password;
    }
  },
  methods: {
    submitForm() {
      const userData = {
        username: this.username,
        password: this.password
      };

      loginUser(userData)
        .then(({ data }) => {
          const username = data.user.username;

          this.$store.commit('common/setUsername', username);
          this.logMessage = `${username}님 환영합니다!`;
          this.resetForm();
          this.$router.push('/main');
        })
        .catch(({ response: { data } }) => (this.logMessage = data));
    },
    resetForm() {
      this.username = '';
      this.password = '';
    }
  }
};
</script>

<style scoped></style>
