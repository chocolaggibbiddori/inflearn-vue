<template>
  <div>
    <div v-for="job in jobList" :key="job.id">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '@/api';

export default {
  data() {
    return {
      jobList: []
    };
  },
  created() {
    fetchJobsList()
      .then(res => (this.jobList = res.data))
      .catch(err => console.error(err));
  }
};
</script>

<style scoped></style>
