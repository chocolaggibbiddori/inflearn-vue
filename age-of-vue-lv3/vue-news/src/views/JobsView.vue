<template>
  <div>
    <p v-for="job in this.$store.state.jobList" :key="job.id">
      <a :href="job.url">{{ job.title }}</a>
      <small> - at {{ job.domain }}, {{ job.time_ago }}</small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('fetchJobList');
  }
};
</script>

<style scoped></style>
