<template>
  <div>
    <button v-on:click="clearAll">Clear All</button>
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
  methods: {
    clearAll() {
      this.$store.commit('clearAll');
    }
  }
}
</script>

<style scoped>

</style>
