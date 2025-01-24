<template>
  <div>
    <ul>
      <li class="shadow" v-for="(todoItem, idx) in todoItems" v-bind:key="idx">
        <input type="checkbox" v-on:click="toggleComplete(todoItem)">
        <span v-bind:class="{ textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
        <button v-on:click="removeTodo(todoItem, idx)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      todoItems: []
    }
  },
  created() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = localStorage.getItem(key);
      this.todoItems.push(JSON.parse(item));
    }
  },
  methods: {
    removeTodo(todoItem, idx) {
      this.todoItems.splice(idx, 1);
      localStorage.removeItem(todoItem);
    },
    toggleComplete(todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  }
}
</script>

<style scoped>
.textCompleted {
  text-decoration: line-through;
}
</style>
