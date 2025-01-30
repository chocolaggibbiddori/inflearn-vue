<template>
  <list-item :item-list="askList"></list-item>
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
      askList: 'getAskList'
    })
  },
  created() {
    this.$store.dispatch('fetchAskList');
  }
};
</script>

<style scoped></style>
