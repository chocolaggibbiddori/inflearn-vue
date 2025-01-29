<template>
  <div>
    <div v-for="news in newsList" :key="news.id">{{ news.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '@/api';

export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    fetchNewsList()
      .then(res => (this.newsList = res.data))
      .catch(error => console.error(error));
  }
};
</script>

<style scoped></style>
