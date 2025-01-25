const addTodo = (state, payload) => {
  const todo = {
    completed: false,
    item: payload
  };

  localStorage.setItem(payload, JSON.stringify(todo));
  state.todoItems.push(todo);
};

const removeTodoItem = (state, payload) => {
  state.todoItems.splice(payload.idx, 1);
  localStorage.removeItem(payload.todoItem.item);
};

const toggleComplete = (state, payload) => {
  const todoItem = state.todoItems[payload];
  todoItem.completed = !todoItem.completed;
  localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
};

const clearAll = state => {
  state.todoItems = [];
  localStorage.clear();
};

export { addTodo, removeTodoItem, toggleComplete, clearAll };
