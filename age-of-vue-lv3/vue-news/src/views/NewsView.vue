<template>
  <div>
    <div v-for="news in newsArr" :key="news.id">{{ news.title }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newsArr: []
    };
  },
  created() {
    axios
      .get('https://api.hnpwa.com/v0/news/1.json')
      .then(res => (this.newsArr = res.data));
  }
};
</script>

<style scoped></style>
