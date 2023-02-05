<script setup>
import { reactive } from "vue";
import TodoList from "./components/TodoList.vue";
import TodoForm from "./components/TodoForm.vue";
const todos = reactive({ items: [] });
fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
  response
    .json()
    .then(
      (items) =>
        (todos.items = items
          .map((e) => ({ id: e.id, text: e.title }))
          .slice(-10))
    );
});

const addItem = (item) => todos.items.push({id: new Date().valueOf(), text: item});
const removeItem = (item) =>
  (todos.items = todos.items.filter((e) => e !== item));
</script>

<template>
  <div class="app">
    <h1>TodoApp</h1>
    <TodoList :items="todos.items" @remove="removeItem" />
    <hr />
    <TodoForm @add="addItem" />
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  margin: 32px auto;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  border: 1px solid #aaa;
  padding: 32px;
  hr {
    margin: 20px 0;
  }
  h1 {
    font-size: 32px;
  }
}
</style>
