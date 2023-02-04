<template>
  <div class="form">
    <input v-model="item" placeholder="enter todo" data-testid="item-input" />
    <button @click="addItem" data-testid="item-submit">Add</button>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const emit = defineEmits(['add'])
const item = ref('')
const addItem = () => {
  emit('add', item.value)
  item.value = ''
}
</script>
<style lang="scss" scoped>
.form {
  input {
    padding: 12px;
  }
  button {
    padding: 12px;
  }
}
</style>
