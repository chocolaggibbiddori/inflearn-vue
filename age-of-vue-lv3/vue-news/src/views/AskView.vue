<template>
  <list-item :item-list="askList"></list-item>
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
      askList: 'getAskList'
    })
  },
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store
        .dispatch('fetchAskList')
        .then(() => bus.$emit('end:spinner'))
        .catch(error => console.error(error));
    }, 3000);
  }
};
</script>

<style scoped></style>
