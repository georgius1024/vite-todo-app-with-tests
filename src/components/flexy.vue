<template>
  <div v-if="condition">
    Condition is true
  </div>
  <div v-else>
    Condition is NOT true
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(["remove"]);
defineProps({
  condition: {
    type: Boolean,
    required: true,
  },
});
</script>
