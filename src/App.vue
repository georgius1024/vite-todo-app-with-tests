<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import TodoList from "./components/TodoList.vue";
import TodoForm from "./components/TodoForm.vue";

const items = ref([]);

const addItem = (item) => items.value.push(item);
const removeItem = (item) =>
  (items.value = items.value.filter((e) => e !== item));

const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  items.value = response.data.slice(0, 10);
  loading.value = false;
});
</script>

<template>
  <div class="app">
    <h1>TodoApp</h1>
    <template v-if="!loading">
      <TodoList :items="items" @remove="removeItem" />
      <hr />
      <TodoForm @add="addItem" />
      <div>Click to add</div>
    </template>
    <template v-else> Loading... </template>
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
