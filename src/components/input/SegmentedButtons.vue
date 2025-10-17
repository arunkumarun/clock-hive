<template>
  <div class="segmented-buttons">
    <button
        v-for="(item, index) in items"
        :key="index"
        :class="{
          'btn': true,
          'btn__active': model?.toString() === item.value?.toString(),
        }"
        @click="() => {updateModel(item.value)}"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<script setup lang="ts" generic="T">
defineProps<{
  items: Array<{
    name: string;
    value: T;
  }>;
}>();
const model = defineModel<T>();

function updateModel(val: T) {
  model.value = val;
}
</script>

<style scoped>
.segmented-buttons {
  display: flex;
  border: 1px solid black;
  border-radius: 8px;
  flex-grow: 1;
}

.btn {
  display: flex;
  place-items: center;
  place-content: center;
  width: 100%;
  border-radius: 8px;
  border: 0;
  height: 1.5rem;
  padding: 0 16px;
  min-width: fit-content;
}

.btn__active {
  background-color: rgb(33, 150, 243);
  color: white;
}
</style>