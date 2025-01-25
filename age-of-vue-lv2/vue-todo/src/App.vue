<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodo="addTodo"></todo-input>
    <todo-list v-on:removeTodoItem="removeTodoItem"
               v-on:toggleTodoItem="toggleComplete"></todo-list>
    <todo-footer v-on:clearAll="clearAll"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import TodoFooter from '@/components/TodoFooter.vue';

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    addTodo(todoItem) {
      const todo = {
        completed: false,
        item: todoItem
      };

      localStorage.setItem(todoItem, JSON.stringify(todo));
      this.todoItems.push(todo);
    },
    removeTodoItem(todoItem, idx) {
      this.todoItems.splice(idx, 1);
      localStorage.removeItem(todoItem.item);
    },
    toggleComplete(idx) {
      const todoItem = this.todoItems[idx];
      todoItem.completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAll() {
      this.todoItems = [];
      localStorage.clear();
    }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}
</style>
