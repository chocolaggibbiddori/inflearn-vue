<template>
  <list-item :item-list="jobList"></list-item>
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
      jobList: 'getJobList'
    })
  },
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store
        .dispatch('fetchJobList')
        .then(() => bus.$emit('end:spinner'))
        .catch(error => console.error(error));
    }, 3000);
  }
};
</script>

<style scoped></style>
