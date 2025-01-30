<template>
  <ol>
    <li v-for="item in itemList">
      <list-item :item="item"></list-item>
    </li>
  </ol>
</template>

<script>
import ListMixin from '@/mixins/ListMixin';

export default {
  mixins: [ListMixin]
};
</script>

<style scoped></style>
