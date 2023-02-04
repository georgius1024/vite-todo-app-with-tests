<template>
  <ul class="todo" data-testid="item-list">
    <li
      v-for="item in items"
      :data-testid="`item-${item.id}`"
      :key="item.id"
    >
      <span
        class="remove"
        :data-testid="`item-remove-${item.id}`"
        @click="removeItem(item)"
        >&times;</span
      >
      {{ item.text }}
    </li>
  </ul>
</template>
<script setup lang="ts">
const emit = defineEmits(["remove"]);
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
const removeItem = (item) => emit("remove", item);
</script>
<style lang="scss" scoped>
.todo {
  transition: 0.2s all ease;
  ul {
    list-style-type: none;
    text-align: left;
    margin-top: 12px;
  }
  ul > li {
    padding: 12px;
    border-top: 1px solid #666;
  }
  ul > li:last-child {
    border-bottom: 1px solid #666;
  }
  .remove {
    cursor: pointer;
    float: right;
  }
}
</style>
