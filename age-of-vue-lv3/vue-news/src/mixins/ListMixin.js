import { mapGetters } from 'vuex';
import ListItem from '@/components/ListItem.vue';
import bus from '@/utils/bus';

export default {
  components: {
    ListItem
  },
  computed: {
    ...mapGetters({
      itemList: 'getItemList'
    })
  },
  mounted() {
    bus.$emit('end:spinner');
  }
};
