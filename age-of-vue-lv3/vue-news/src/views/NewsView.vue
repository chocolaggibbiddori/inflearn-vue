<template>
  <list-item :item-list="newsList"></list-item>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
import bus from '@/utils/bus';
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
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store
        .dispatch('fetchNewsList')
        .then(() => bus.$emit('end:spinner'))
        .catch(error => console.error(error));
    }, 3000);
  }
};
</script>

<style scoped></style>
