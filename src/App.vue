
<template>
  <div class="app">
    <h1>TodoApp</h1>
    <TodoList :items="items" @remove="removeItem" />
    <hr />
    <TodoForm @add="addItem" />
    <div @click="nav" data-testid="nav">Click to add</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'
import TodoList from "./components/TodoList.vue";
import TodoForm from "./components/TodoForm.vue";

const router = useRouter()
const items = ref([
  "Setup tests",
  "Create unit tests for services",
  "Create components tests for components",
  "Create e2e tests for app",
  "(*) Add more tests",
]);

const addItem = (item) => items.value.push(item)
const removeItem = (item) => items.value = items.value.filter(e => e !== item)
const nav = () => router.push('/')

</script>

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
