<template>
  <div>
    <p v-for="ask in askList" :key="ask.id">
      <a :href="ask.url">{{ ask.title }}</a>
      <small> - by {{ ask.user }}, {{ ask.time_ago }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      askList: 'getAskList'
    })
  },
  created() {
    this.$store.dispatch('fetchAskList');
  }
};
</script>

<style scoped></style>
