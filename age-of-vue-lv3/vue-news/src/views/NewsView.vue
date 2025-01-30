<template>
  <list-item :item-list="newsList"></list-item>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    ListItem
  },
  computed: {
    ...mapGetters({
      newsList: 'getNewsList'
    })
  },
  created() {
    this.$store.dispatch('fetchNewsList');
  }
};
</script>

<style scoped></style>
