<script setup>
import { ref, reactive, computed } from "vue";
import TodoList from "./components/TodoList.vue";
import TodoForm from "./components/TodoForm.vue";
import Todos from './services/todos.js'
const todos = reactive(Todos);
todos.load();
const addItem = (item) => todos.add({text: item})
const removeItem = (item) => todos.destroy(item.id)

</script>

<template>
  <div class="app">
    <h1>TodoApp</h1>
    <TodoList :items="todos.list" @remove="removeItem" />
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
