<template>
  <ol>
    <li v-for="item in itemList">
      <list-item :item="item"></list-item>
    </li>
  </ol>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
import ListMixin from '@/mixins/ListMixin';

export default {
  components: {
    ListItem
  },
  mixins: [ListMixin]
};
</script>

<style scoped></style>
