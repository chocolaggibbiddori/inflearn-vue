import ListView from '@/views/ListView.vue';
import bus from '@/utils/bus';

export default function createListView(type) {
  return {
    name: 'CreateListView',
    created() {
      bus.$emit('start:spinner');
      this.$store
        .dispatch('fetchItemList', type)
        .then(() => bus.$emit('end:spinner'))
        .catch(error => console.error(error));
    },
    render(createElement) {
      return createElement(ListView);
    }
  };
}
