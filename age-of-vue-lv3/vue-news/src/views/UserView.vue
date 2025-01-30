<template>
  <div>
    <p>name: {{ user.id }}</p>
    <p>karma: {{ user.karma }}</p>
    <p>created: {{ user.created }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    this.$store.dispatch('fetchUser', this.$route.params.id);
  }
};
</script>

<style scoped></style>
