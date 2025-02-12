<template>
  <div id="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="email" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">password: </label>
          <input id="password" v-model="password" type="password" />
        </div>
        <button
          :class="!isFormValid ? 'disabled' : null"
          class="btn"
          type="submit"
        >
          Login
        </button>
        <p class="log">{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { loginUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';
import { mapActions } from 'vuex';

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
    ...mapActions({
      login: 'common/LOGIN'
    }),
    submitForm() {
      const userData = {
        username: this.username,
        password: this.password
      };

      loginUser(userData)
        .then(({ data }) => {
          this.login(data);
          this.logMessage = `${data.user.username}님 환영합니다!`;
        })
        .catch(err => (this.logMessage = err))
        .finally(() => {
          this.resetForm();
          this.$router.push('/main');
        });
    },
    resetForm() {
      this.username = '';
      this.password = '';
    }
  }
};
</script>

<style scoped>
.btn {
  color: white;
}
</style>
