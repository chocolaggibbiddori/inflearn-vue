<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <button v-on:click="addTodo">add</button>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo() {
      this.$emit('addTodo', this.newTodoItem);
      this.clearInput();
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>

</style>
