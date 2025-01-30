import bus from '@/utils/bus';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      itemList: 'getItemList'
    })
  },
  created() {
    bus.$emit('start:spinner');
    this.$store
      .dispatch('fetchItemList', this.$route.name)
      .then(() => bus.$emit('end:spinner'))
      .catch(error => console.error(error));
  }
};
