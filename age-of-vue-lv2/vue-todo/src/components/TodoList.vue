<template>
  <div>
    <transition-group name="list" tag="ul">
      <li class="shadow" v-for="(todoItem, idx) in todoItems" v-bind:key="idx">
        <input type="checkbox" v-on:click="toggleComplete(idx)">
        <span v-bind:class="{ textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
        <button v-on:click="removeTodo(todoItem, idx)">remove</button>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  props: ['todoItems'],
  methods: {
    removeTodo(todoItem, idx) {
      this.$emit('removeTodoItem', todoItem, idx);
    },
    toggleComplete(idx) {
      this.$emit('toggleTodoItem', idx);
    }
  }
}
</script>

<style scoped>
.textCompleted {
  text-decoration: line-through;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
