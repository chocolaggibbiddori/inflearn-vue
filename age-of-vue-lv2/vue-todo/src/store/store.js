import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const result = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = localStorage.getItem(key);
      result.push(JSON.parse(item));
    }

    return result;
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  mutations: {
    addTodo(state, payload) {
      const todo = {
        completed: false,
        item: payload,
      };

      localStorage.setItem(payload, JSON.stringify(todo));
      state.todoItems = storage.fetch();
    },
    removeTodoItem(state, payload) {
      state.todoItems.splice(payload.idx, 1);
      localStorage.removeItem(payload.todoItem.item);
    },
    toggleComplete(state, payload) {
      const todoItem = state.todoItems[payload];
      todoItem.completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAll(state) {
      state.todoItems = [];
      localStorage.clear();
    },
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    },
  },
});
