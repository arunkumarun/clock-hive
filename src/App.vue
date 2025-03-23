<template>
  <div class="wrapper">
    <ClockHive/>
  </div>
</template>

<script setup lang="ts">
import ClockHive from "./components/ClockHive.vue";
</script>

<style scoped>
.wrapper {
  display: grid;
  height: 100vh;
  width: 100%;
  place-items: center;
  place-content: center;
}
</style>
