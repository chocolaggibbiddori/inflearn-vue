<template>
  <user-profile>
    <template #userId>
      <p>name: {{ user.id }}</p>
    </template>
    <template #karma>
      <p>karma: {{ user.karma }}</p>
    </template>
    <template #created>
      <p>created: {{ user.created }}</p>
    </template>
  </user-profile>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  created() {
    this.$store.dispatch('fetchUser', this.$route.params.id);
  }
};
</script>

<style scoped></style>
