<template>
  <div>
    <p v-for="news in this.$store.state.newsList" :key="news.id">
      <a v-bind:href="news.url">{{ news.title }}</a>
      <small> - by {{ news.user }}, {{ news.time_ago }}</small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('fetchNewsList');
  }
};
</script>

<style scoped></style>
