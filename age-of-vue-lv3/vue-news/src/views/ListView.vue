<template>
  <ol>
    <li v-for="item in itemList">
      <list-item :item="item"></list-item>
    </li>
  </ol>
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
      itemList: 'getItemList'
    })
  }
};
</script>

<style scoped></style>
