<template>
  <list-item :item-list="jobList"></list-item>
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
      jobList: 'getJobList'
    })
  },
  created() {
    this.$store.dispatch('fetchJobList');
  }
};
</script>

<style scoped></style>
