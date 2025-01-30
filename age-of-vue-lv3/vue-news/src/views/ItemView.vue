<template>
  <div>
    <h2>{{ item.title }}</h2>
    <small>{{ item.user }}, {{ item.time_ago }}</small>
    <p v-html="item.content"></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      item: 'getItem'
    })
  },
  created() {
    this.$store.dispatch('fetchItem', this.$route.query.id);
  }
};
</script>

<style scoped></style>
