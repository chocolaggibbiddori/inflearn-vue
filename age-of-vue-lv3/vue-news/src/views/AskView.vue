<template>
  <div>
    <div v-for="ask in askList" :key="ask.id">
      {{ ask.title }}
    </div>
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
