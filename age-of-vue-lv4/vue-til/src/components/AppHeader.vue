<template>
  <header>
    <template v-if="isLogin">
      <span>{{ username }}</span>
      |
      <a href="javascript:" @click="logout">로그아웃</a>
    </template>
    <template v-else>
      <router-link to="/login">로그인</router-link>
      |
      <router-link to="/signup">회원가입</router-link>
    </template>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      username: 'common/getUsername',
      isLogin: 'common/isLogin'
    })
  },
  methods: {
    ...mapMutations({
      clearUsername: 'common/clearUsername'
    }),
    logout() {
      this.clearUsername();
      if (this.$route.name !== 'main') this.$router.push('/');
    }
  }
};
</script>

<style scoped></style>
