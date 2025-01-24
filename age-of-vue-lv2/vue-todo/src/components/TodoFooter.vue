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
      localStorage.clear();
    }
  }
}
</script>

<style scoped>

</style>
