<template>
  <div>
    <p>title: {{ item.title }}</p>
    <p v-html="item.content"></p>
    <p>points: {{ item.points }}</p>
    <p>
      user:
      <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
    </p>
    <p>time_ago: {{ item.time_ago }}</p>
    <p>type: {{ item.type }}</p>
    <p>comments_count: {{ item.comments_count }}</p>
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
