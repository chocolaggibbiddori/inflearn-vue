<template>
  <div>
    <div v-for="job in this.$store.state.jobList" :key="job.id">
      {{ job.title }}
    </div>
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
