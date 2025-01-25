<template>
  <div>
    <button v-on:click="clearAll">Clear All</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TodoHeader',
  methods: {
    ...mapMutations(['clearAll'])
  }
};
</script>

<style scoped></style>
