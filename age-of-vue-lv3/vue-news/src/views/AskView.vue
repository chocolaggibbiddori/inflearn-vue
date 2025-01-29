<template>
  <div>
    <div v-for="ask in askList" :key="ask.id">{{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '@/api';

export default {
  data() {
    return {
      askList: []
    };
  },
  created() {
    fetchAskList()
      .then(res => (this.askList = res.data))
      .catch(error => console.error(error));
  }
};
</script>

<style scoped></style>
